// Raw HTML extracted from the original index.html (see project notes).
// Rendered via dangerouslySetInnerHTML in app/page.js so the exact original
// markup (ids the quiz-logic.js script depends on) is preserved byte-for-byte.

export const QUIZ_SECTIONS_HTML = `
<!-- HERO now lives in components/HeroSection.jsx -->

  <!-- QUIZ -->
  <section id="quiz" class="alt-bg" aria-labelledby="quizHeading">
    <div class="container">
      <div class="section-head">
        <h2 id="quizHeading">Take the Color Analysis Quiz with a Photo</h2>
      </div>

      <div class="stepper" id="stepper" role="list" aria-label="Quiz progress">
        <div class="step-pill active" data-step-indicator="1" role="listitem"><span class="num">1</span> Add Photo</div>
        <div class="step-pill" data-step-indicator="2" role="listitem"><span class="num">2</span> Sample Tone</div>
        <div class="step-pill" data-step-indicator="3" role="listitem"><span class="num">3</span> Analyzing</div>
        <div class="step-pill" data-step-indicator="4" role="listitem"><span class="num">4</span> Your Results</div>
      </div>

      <div class="quiz-panel">

        <!-- STAGE 1: UPLOAD OR CAMERA -->
        <div class="quiz-stage active" data-stage="1" aria-labelledby="stage1-heading">
          <h3 id="stage1-heading" class="visually-hidden">Add your photo</h3>
          <div class="method-grid">
            <div class="method-card dropzone" id="dropzone" tabindex="0" role="button" aria-describedby="dzHint" aria-label="Upload photo: click to browse or drag and drop an image">
              <span class="method-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="none"><path d="M12 15V4m0 0L7.5 8.5M12 4l4.5 4.5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg></span>
              <h3>Upload Photo</h3>
              <p class="method-desc">Choose a photo or drag it here</p>
              <button type="button" class="btn btn-primary method-btn" id="browseBtn">Choose File</button>
              <input type="file" id="fileInput" accept="image/jpeg,image/png,image/webp" class="visually-hidden" aria-hidden="true" tabindex="-1">
              <p class="file-hint" id="dzHint">JPG, PNG or WEBP (max 10MB)</p>
              <p class="field-error" id="uploadError" role="alert"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 8v5M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span></span></p>
            </div>

            <div class="method-card method-camera">
              <span class="method-icon" aria-hidden="true"><svg class="icon" viewBox="0 0 24 24" fill="none"><path d="M4 8.5A2.5 2.5 0 016.5 6h1.6l1.2-1.8A1.5 1.5 0 0110.55 3.5h2.9a1.5 1.5 0 011.25.7L15.9 6h1.6A2.5 2.5 0 0120 8.5v8a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 16.5v-8z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.2" stroke="currentColor" stroke-width="1.8"/></svg></span>
              <h3>Use Camera</h3>
              <p class="method-desc">Take a selfie with your camera</p>
              <button type="button" class="btn btn-camera method-btn" id="cameraBtn" data-quiz-camera>Open Camera</button>
              <p class="file-hint">Front or rear camera</p>
            </div>
          </div>

          <p class="method-tips">Best results: daylight, no filters, facing the camera.</p>

          <div class="sample-row">
            <p>Or try a sample:</p>
            <div class="sample-photos" id="samplePhotos"></div>
          </div>
          <p class="method-alt"><a href="#undertone-test">No photo? Take the quick check</a></p>
        </div>

        <!-- STAGE 2: SAMPLE -->
        <div class="quiz-stage" data-stage="2" aria-labelledby="stage2-heading">
          <div class="sampling-grid">
            <div>
              <div class="sample-canvas-wrap" id="sampleCanvasWrap">
                <canvas id="sampleCanvas"></canvas>
                <div class="sample-marker marker-skin current" id="markerSkin" hidden><span>S</span></div>
                <div class="sample-marker marker-eyes" id="markerEyes" hidden><span>E</span></div>
                <div class="sample-marker marker-hair" id="markerHair" hidden><span>H</span></div>
              </div>
            </div>
            <div class="sample-info">
              <h3 id="stage2-heading">Fine-tune your sample points</h3>
              <p>We auto-picked spots for skin, eyes and hair. Pick a tab, then click on the photo to correct that point — sampling all three gives a noticeably more accurate season match.</p>
              <div class="sample-target-tabs" role="tablist" aria-label="Choose what to sample">
                <button type="button" class="target-tab active" data-target="skin" role="tab" aria-selected="true"><span class="dot" aria-hidden="true"></span> Skin <span class="status">(required)</span></button>
                <button type="button" class="target-tab" data-target="eyes" role="tab" aria-selected="false"><span class="dot" aria-hidden="true"></span> Eyes <span class="status">(optional)</span></button>
                <button type="button" class="target-tab" data-target="hair" role="tab" aria-selected="false"><span class="dot" aria-hidden="true"></span> Hair <span class="status">(optional)</span></button>
              </div>
              <div class="swatch-live-group">
                <div class="mini-swatch" id="miniSkin"><span class="chip" style="background:#d9c3ea"></span><b>Skin</b><span class="hex">#D9C3EA</span></div>
                <div class="mini-swatch" id="miniEyes"><span class="chip" style="background:#2b2b2b"></span><b>Eyes</b><span class="hex">—</span></div>
                <div class="mini-swatch" id="miniHair"><span class="chip" style="background:#5b4636"></span><b>Hair</b><span class="hex">—</span></div>
              </div>
              <ul class="sampling-tips">
                <li>Natural daylight gives the most accurate reading</li>
                <li>For skin, avoid heavy makeup, shadows or filters</li>
                <li>Click anywhere on the photo to re-sample the active tab</li>
              </ul>
              <div class="stage-actions">
                <button class="btn btn-outline btn-sm" id="backToUpload">← Change Photo</button>
                <button class="btn btn-primary" id="confirmSample">Analyze My Colors →</button>
              </div>
            </div>
          </div>
        </div>

        <!-- STAGE 3: ANALYZING -->
        <div class="quiz-stage" data-stage="3" aria-labelledby="stage3-heading">
          <div class="analyzing-wrap">
            <div class="spinner" role="status" aria-live="polite"><span class="visually-hidden">Analyzing your photo</span></div>
            <h3 id="stage3-heading">Analyzing your color profile…</h3>
            <p id="analyzingText">Reading undertone…</p>
            <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
          </div>
        </div>

        <!-- STAGE 4: RESULTS -->
        <div class="quiz-stage" data-stage="4" aria-labelledby="stage4-heading">
          <h3 id="stage4-heading" class="visually-hidden">Your color analysis results</h3>

          <div class="result-header">
            <div class="who">
              <img id="resultPhoto" class="result-photo" alt="Sampled area from your uploaded photo" src="">
              <div>
                <h3>Your Season Is</h3>
                <p id="resultSeasonName" class="result-season" aria-live="polite">Spring</p>
                <p class="tagline" id="resultTagline">Warm &amp; Fresh</p>
              </div>
            </div>
            <div class="result-actions">
              <button class="btn btn-outline btn-sm" id="favoriteBtn">♡ Add to Favorites</button>
              <button class="btn btn-outline btn-sm" id="downloadBtn">⭳ Download Result Card</button>
              <button class="btn btn-primary btn-sm" id="retakeBtn">↻ Retake Quiz</button>
            </div>
          </div>

          <p class="detail-grid-caption">🎨 Live color currently applied to your photo — changes the instant you click any swatch below:</p>
          <div class="detail-grid">
            <div class="detail-card"><label>Applied HEX</label><div class="val" id="detHex">#D9C3EA</div><button class="btn btn-ghost btn-sm copy-btn" data-copy-target="detHex">Copy</button></div>
            <div class="detail-card"><label>Applied RGB</label><div class="val" id="detRgb">217, 195, 234</div><button class="btn btn-ghost btn-sm copy-btn" data-copy-target="detRgb">Copy</button></div>
            <div class="detail-card"><label>Applied HSL</label><div class="val" id="detHsl">270°, 45%, 84%</div><button class="btn btn-ghost btn-sm copy-btn" data-copy-target="detHsl">Copy</button></div>
            <div class="detail-card"><label>Undertone</label><div class="val" id="detUndertone">Warm</div><div class="sub-val" id="detContrast" style="font-size:11px;color:var(--ink-soft);margin-top:4px;"></div></div>
          </div>

          <div class="palette-block">
            <div class="palette-head-row">
              <h3>🎨 Your Best Colors</h3>
              <div class="add-color-row">
                <label for="addColorPicker" class="visually-hidden">Pick a custom color</label>
                <input type="color" id="addColorPicker" value="#7b2ff7">
                <label for="addColorHexInput" class="visually-hidden">Custom color hex code</label>
                <input type="text" id="addColorHexInput" placeholder="#RRGGBB" maxlength="7">
                <button type="button" class="btn btn-outline btn-sm" id="addColorBtn">+ Add Color</button>
              </div>
            </div>
            <p class="add-color-hint">Made your own shade? Add it here and it'll join your best colors below — ready to click, copy or apply.</p>
            <div class="palette-row" id="bestPalette"></div>

            <h3>🚫 Colors To Avoid</h3>
            <div class="palette-row avoid-row" id="avoidPalette"></div>

            <div class="tips-grid">
              <div class="tip-card"><h4>💍 Best Metals</h4><p id="tipMetals"></p></div>
              <div class="tip-card"><h4>💄 Makeup Tone</h4><p id="tipMakeup"></p></div>
              <div class="tip-card"><h4>👗 Styling Tip</h4><p id="tipStyling"></p></div>
              <div class="tip-card"><h4>⚪ Best Neutrals</h4><p id="tipNeutrals"></p></div>
            </div>

            <div class="drape-block">
              <h3 id="recolorHeading">🧣 Change the Color of Your Shirt or Background</h3>
              <p id="recolorDesc">This finds the actual garment in your photo by its color and recolors just that region — not a flat overlay. Click any swatch below (or enter a hex code); it applies straight to your photo above with no extra save step, and downloads exactly as shown.</p>
              <div class="drape-grid">
                <div>
                  <div class="recolor-mode-toggle" role="group" aria-label="What should we recolor?">
                    <button type="button" class="mode-btn active" data-mode="clothing" aria-pressed="true">👕 Clothing Color</button>
                    <button type="button" class="mode-btn" data-mode="background" aria-pressed="false">🖼️ Background Color</button>
                  </div>
                  <div class="drape-canvas-wrap">
                    <canvas id="drapeCanvas" width="340" height="400"></canvas>
                  </div>
                  <p class="drape-caption" id="drapeCaption">Upload a real photo to personalize this preview.</p>
                  <p class="drape-hint" id="drapeClickHint">👆 Click your coat/shirt in the photo above to tell us exactly what to recolor.</p>
                  <div class="garment-detect" id="garmentDetect" hidden>
                    <span class="chip" id="garmentDetectChip"></span>
                    <span>We're recoloring this detected color: <b id="garmentDetectHex">—</b> — click a different spot above if that's wrong. (See the live HEX/RGB/HSL of your applied color up in the detail cards above.)</span>
                  </div>
                  <div class="drape-btn-row">
                    <button type="button" class="btn btn-outline btn-sm" id="viewFullDrapeBtn">⛶ View Full Size / Crop</button>
                    <button type="button" class="btn btn-primary btn-sm" id="downloadDrapeBtn">⭳ Download This Photo</button>
                  </div>
                </div>
                <div>
                  <p class="drape-label">Quick try — your best colors:</p>
                  <div class="palette-row" id="drapeBestSwatches" style="margin-bottom:18px;"></div>
                  <p class="drape-label">Quick try — a color to avoid:</p>
                  <div class="palette-row avoid-row" id="drapeAvoidSwatches" style="margin-bottom:6px;"></div>
                  <div class="drape-custom-row">
                    <label for="drapeHexInput" class="visually-hidden">Custom hex color to apply</label>
                    <input type="text" id="drapeHexInput" placeholder="#RRGGBB" maxlength="7">
                    <button class="btn btn-outline btn-sm" id="drapeCustomBtn">Apply This Color</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

`;

// Season palette explorer. Split from the quiz block so the homepage content
// sections can sit between them (see app/page.js for the order).
export const QUIZ_SEASONS_HTML = `
  <!-- SEASON EXPLORER -->
  <section id="seasons" class="alt-bg hs-seasons-explorer" aria-labelledby="seasonsHeading">
    <div class="container">
      <h2 id="seasonsHeading" class="visually-hidden">Season palette explorer</h2>
      <div class="season-tabs" id="seasonTabs" role="tablist" aria-label="Choose a season to preview"></div>
      <div id="seasonCardMount"></div>
    </div>
  </section>

`;

// Color harmony generator — one of the "More free color tools".
export const QUIZ_HARMONY_HTML = `
  <!-- COLOR HARMONY GENERATOR -->
  <section id="harmony" aria-labelledby="harmonyHeading">
    <div class="container">
      <div class="section-head">
        <h2 id="harmonyHeading">Color Harmony Generator</h2>
        <p>Pick any shade with the color picker and see which colors go together on the color wheel. Then try them on your photo as a new shirt or background color.</p>
      </div>
      <div class="harmony-panel">
        <div class="harmony-grid">
          <div class="harmony-controls">
            <div class="harmony-input-row">
              <label for="harmonyColorPicker" class="visually-hidden">Pick a base color</label>
              <input type="color" id="harmonyColorPicker" value="#7b2ff7">
              <label for="harmonyHexInput" class="visually-hidden">Hex value</label>
              <input type="text" id="harmonyHexInput" value="#7B2FF7" maxlength="7" aria-label="Hex color code" placeholder="#7B2FF7">
              <button type="button" class="btn btn-primary btn-sm" id="harmonyGenerateBtn">Generate Harmony →</button>
            </div>
            <p class="harmony-hint">Enter a hex code or use the picker.</p>
            <div class="harmony-quickpicks">
              <span>Quick picks:</span>
              <div class="harmony-quick-row" id="harmonyQuickRow"></div>
            </div>
            <div id="harmonyResults"></div>
          </div>
          <div class="harmony-photo-col">
            <div class="recolor-mode-toggle" role="group" aria-label="What should we recolor?">
              <button type="button" class="mode-btn active" data-mode="clothing" aria-pressed="true">👕 Clothing Color</button>
              <button type="button" class="mode-btn" data-mode="background" aria-pressed="false">🖼️ Background Color</button>
            </div>
            <div class="drape-canvas-wrap">
              <canvas id="harmonyCanvas" width="680" height="800"></canvas>
            </div>
            <p class="drape-caption" id="harmonyCaption">Take the quiz above to personalize this preview with your own photo.</p>
            <p class="drape-hint" id="harmonyClickHint" hidden>👆 Click your coat/shirt in the photo above to tell us exactly what to recolor.</p>
            <div class="drape-btn-row">
              <button type="button" class="btn btn-outline btn-sm" id="viewFullHarmonyBtn">⛶ View Full Size / Crop</button>
              <button type="button" class="btn btn-primary btn-sm" id="downloadHarmonyBtn">⭳ Download Full-Size Photo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

`;

// Rendered right after the Undertone Check (see app/page.js).
export const QUIZ_FAVORITES_HTML = `
  <!-- FAVORITES — hidden until the visitor has saved at least one result
       (quiz-logic.js renderFavorites() toggles the hidden attribute). -->
  <section id="favorites" class="fav-section" hidden aria-labelledby="favoritesHeading">
    <div class="container">
      <div class="section-head">
        <h2 id="favoritesHeading">Your Favorite Palettes</h2>
        <p>Results you've saved stay right here in your browser.</p>
      </div>
      <div id="favoritesMount"></div>
    </div>
  </section>
`;

export const QUIZ_TAIL_HTML = `
<div class="toast-region" id="toastRegion" aria-live="polite"></div>

<!-- VIEW FULL SIZE / CROP MODAL -->
<div class="crop-modal" id="cropModal" hidden role="dialog" aria-modal="true" aria-labelledby="cropModalTitle">
  <div class="crop-modal-inner">
    <button type="button" class="crop-close" id="cropCloseBtn" aria-label="Close">✕</button>
    <h3 id="cropModalTitle">View Full-Size Photo</h3>
    <p class="crop-hint" id="cropModalHint">Drag the corner handles to crop. "Apply Crop" keeps it as your working photo so you can still try other colors before downloading — or just download this crop right away.</p>
    <div class="crop-stage" id="cropStage">
      <canvas id="cropCanvas"></canvas>
      <div class="crop-box" id="cropBox">
        <div class="crop-handle" data-corner="nw"></div>
        <div class="crop-handle" data-corner="ne"></div>
        <div class="crop-handle" data-corner="sw"></div>
        <div class="crop-handle" data-corner="se"></div>
      </div>
    </div>
    <div class="crop-actions">
      <button type="button" class="btn btn-outline btn-sm" id="cropResetBtn">Reset Crop</button>
      <button type="button" class="btn btn-outline btn-sm" id="cropApplyBtn">✓ Apply Crop</button>
      <button type="button" class="btn btn-primary btn-sm" id="cropDownloadBtn">⭳ Download</button>
    </div>
  </div>
</div>
`;
