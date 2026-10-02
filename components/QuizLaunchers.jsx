'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Wires every "start the quiz" control on the homepage via event delegation,
// so the buttons themselves can live in server components or in the raw quiz
// markup (lib/quiz-markup.js):
//
//   [data-quiz-upload]           opens the quiz's own file picker (#fileInput)
//   [data-quiz-camera]           opens a live camera modal, captures a frame and
//                                feeds it into #fileInput exactly like an upload
//   [data-season-tab="spring"]   selects that tab in the season explorer
//
// The photo never leaves the browser: the captured frame is turned into a
// File and handed to quiz-logic.js through the same `change` event the
// regular upload uses, so validation and the rest of the flow are identical.

const ERRORS = {
  NotAllowedError:
    'Camera access was blocked. Allow the camera in your browser’s site settings, or upload a photo instead.',
  SecurityError:
    'Camera access was blocked. Allow the camera in your browser’s site settings, or upload a photo instead.',
  NotFoundError: 'No camera was found on this device. You can upload a photo instead.',
  OverconstrainedError: 'This camera isn’t available. Try switching cameras or upload a photo instead.',
  NotReadableError: 'Your camera is being used by another app. Close it and try again, or upload a photo instead.',
};

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function scrollToQuiz() {
  document
    .getElementById('quiz')
    ?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
}

// Hand a File to quiz-logic.js through the real upload input.
function deliverFile(file) {
  const input = document.getElementById('fileInput');
  if (!input || !file) return false;
  try {
    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
    input.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  } catch {
    return false;
  }
}

export default function QuizLaunchers() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | starting | live | error
  const [error, setError] = useState('');
  const [facing, setFacing] = useState('user');
  const [canSwitch, setCanSwitch] = useState(false);

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const dialogRef = useRef(null);
  const captureRef = useRef(null);
  const returnFocusRef = useRef(null);
  const fallbackRef = useRef(null);

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const close = useCallback(() => {
    stopStream();
    setOpen(false);
    setStatus('idle');
    setError('');
    returnFocusRef.current?.focus?.();
  }, [stopStream]);

  const openCamera = useCallback((trigger) => {
    returnFocusRef.current = trigger || null;
    const supported =
      typeof navigator !== 'undefined' &&
      navigator.mediaDevices?.getUserMedia &&
      window.isSecureContext;
    if (!supported) {
      // Older browsers / insecure origins: the native camera picker.
      fallbackRef.current?.click();
      return;
    }
    setError('');
    setStatus('starting');
    setOpen(true);
  }, []);

  // Delegated click handling for all launch buttons on the page.
  useEffect(() => {
    function onClick(e) {
      const up = e.target.closest?.('[data-quiz-upload]');
      if (up) {
        e.preventDefault();
        const input = document.getElementById('fileInput');
        scrollToQuiz();
        // Must run synchronously inside the click to be allowed.
        if (input) input.click();
        else window.location.hash = 'quiz';
        return;
      }
      const cam = e.target.closest?.('[data-quiz-camera]');
      if (cam) {
        e.preventDefault();
        e.stopPropagation();
        openCamera(cam);
        return;
      }
      const tab = e.target.closest?.('[data-season-tab]');
      if (tab) {
        const key = tab.getAttribute('data-season-tab');
        const target = document.getElementById(`tab-${key}`);
        if (target) {
          e.preventDefault();
          target.click();
          document
            .getElementById('seasons')
            ?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
        }
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [openCamera]);

  // Start / restart the stream whenever the modal opens or the camera flips.
  useEffect(() => {
    if (!open) return undefined;
    let cancelled = false;
    stopStream();
    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: facing, width: { ideal: 1280 }, height: { ideal: 1280 } },
        audio: false,
      })
      .then(async (stream) => {
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        const v = videoRef.current;
        if (v) {
          v.srcObject = stream;
          await v.play().catch(() => {});
        }
        setStatus('live');
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          setCanSwitch(devices.filter((d) => d.kind === 'videoinput').length > 1);
        } catch {
          setCanSwitch(false);
        }
        captureRef.current?.focus();
      })
      .catch((err) => {
        if (cancelled) return;
        setStatus('error');
        setError(ERRORS[err?.name] || 'We couldn’t start your camera. You can upload a photo instead.');
      });
    return () => {
      cancelled = true;
    };
  }, [open, facing, stopStream]);

  // Stop the camera if the page unmounts.
  useEffect(() => stopStream, [stopStream]);

  // Escape to close + a simple focus trap while the dialog is open.
  useEffect(() => {
    if (!open) return undefined;
    dialogRef.current?.focus();
    function onKey(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const f = [...dialogRef.current.querySelectorAll('button:not([disabled])')];
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  function capture() {
    const v = videoRef.current;
    if (!v || !v.videoWidth) return;
    const canvas = document.createElement('canvas');
    canvas.width = v.videoWidth;
    canvas.height = v.videoHeight;
    canvas.getContext('2d').drawImage(v, 0, 0);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const file = new File([blob], `camera-${Date.now()}.jpg`, { type: 'image/jpeg' });
        stopStream();
        setOpen(false);
        setStatus('idle');
        scrollToQuiz();
        if (!deliverFile(file)) {
          // Very old browsers can't set input.files; fall back to upload.
          document.getElementById('fileInput')?.click();
        }
      },
      'image/jpeg',
      0.92
    );
  }

  function onFallbackChange(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    scrollToQuiz();
    deliverFile(file);
  }

  function uploadInstead() {
    close();
    scrollToQuiz();
    document.getElementById('fileInput')?.click();
  }

  return (
    <>
      <input
        ref={fallbackRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        capture="user"
        className="visually-hidden"
        tabIndex={-1}
        aria-hidden="true"
        onChange={onFallbackChange}
      />

      {open && (
        <div className="cam-modal" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div
            className="cam-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="camTitle"
            aria-describedby="camHint"
            tabIndex={-1}
            ref={dialogRef}
          >
            <div className="cam-head">
              <h2 id="camTitle">Take a photo</h2>
              <button type="button" className="cam-close" onClick={close} aria-label="Close camera">
                ✕
              </button>
            </div>

            <div className={`cam-stage${facing === 'user' ? ' mirrored' : ''}`}>
              <video ref={videoRef} playsInline muted aria-label="Live camera preview" />
              {status === 'live' && (
                <svg className="cam-guide" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <ellipse cx="50" cy="58" rx="27" ry="36" />
                </svg>
              )}
              {status === 'starting' && (
                <div className="cam-overlay" role="status">
                  <span className="spinner" aria-hidden="true" />
                  Starting camera…
                </div>
              )}
              {status === 'error' && (
                <div className="cam-overlay cam-error" role="alert">
                  <strong>Camera unavailable</strong>
                  <span>{error}</span>
                </div>
              )}
            </div>

            <p className="cam-hint" id="camHint">
              Center your face in the oval, face a window for daylight, and pull hair off
              your face. The photo stays on your device.
            </p>

            <div className="cam-actions">
              {status === 'error' ? (
                <button type="button" className="btn btn-primary" onClick={uploadInstead}>
                  Upload a photo instead
                </button>
              ) : (
                <>
                  {canSwitch && (
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => {
                        setStatus('starting');
                        setFacing((f) => (f === 'user' ? 'environment' : 'user'));
                      }}
                    >
                      ⟲ Switch camera
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={capture}
                    disabled={status !== 'live'}
                    ref={captureRef}
                  >
                    Capture photo
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
