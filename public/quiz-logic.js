(function(){

"use strict";

/* =========================================================
   1. SEASON DATA MODEL
   ========================================================= */
var SEASONS = {
  spring: {
    key:'spring', name:'Spring', tagline:'Warm & Fresh', emoji:'🌸',
    desc:'Warm, clear and golden undertones with light-to-medium depth. You shine in fresh, bright, slightly warm colors.',
    best:['#FFD166','#F6A94A','#F0C808','#8CC084','#5FA8D3','#F17300','#EF5B5B','#7BC4C4','#F9C74F','#90BE6D','#F8961E','#C9CBA3'],
    avoid:['#4B3F72','#2C2C54','#000000','#7A004F','#5A5A5A'],
    metals:'Gold and rose-gold jewelry brighten your complexion beautifully — save silver for accent pieces only.',
    makeup:'Warm, peachy or coral blush and lipstick tones; golden-based foundation rather than pink-based.',
    styling:'Lean into warm brights and ivory instead of stark white; camel and warm denim make great neutrals.',
    neutrals:'Ivory, camel, warm beige, light gold-grey.'
  },
  summer: {
    key:'summer', name:'Summer', tagline:'Cool & Soft', emoji:'💧',
    desc:'Cool, muted undertones with soft contrast. Powdery, dusty tones flatter you far more than bright saturated shades.',
    best:['#A7C6DA','#C9A9D9','#7F95D1','#9FB8AD','#D8A7B1','#8E9AAF','#B8B8D1','#6C8EA0','#CDB4DB','#A5A58D','#8FA3B0','#B392AC'],
    avoid:['#FF6B00','#FFD700','#8B0000','#7CFC00','#000000'],
    metals:'Silver, white gold and platinum sit best against your cool undertone; avoid heavy yellow gold.',
    makeup:'Rosy or berry blush, mauve or soft-pink lipstick; cool, pink-based foundation.',
    styling:'Soft, blended color combinations rather than high contrast; dusty pastels over neon brights.',
    neutrals:'Soft white, dove grey, taupe, cool navy.'
  },
  autumn: {
    key:'autumn', name:'Autumn', tagline:'Warm & Rich', emoji:'🍂',
    desc:'Warm, deep and earthy undertones with rich muted saturation. Spice tones and deep golds are your signature.',
    best:['#B85C38','#A44A3F','#C48A3C','#6B4226','#8A9A5B','#D9A441','#7A6C3E','#914F26','#4A5D23','#B5651D','#C97B4A','#5E4B3C'],
    avoid:['#FF69B4','#00FFFF','#C0C0C0','#0000FF','#FFFFFF'],
    metals:'Antique or yellow gold, bronze and copper tones are your best friends; steer clear of icy silver.',
    makeup:'Terracotta, brick or warm brown blush and lipstick; golden or olive-based foundation.',
    styling:'Rich, warm layering colors — rust, olive, mustard and chocolate — beat anything stark or icy.',
    neutrals:'Camel, chocolate brown, warm khaki, cream.'
  },
  winter: {
    key:'winter', name:'Winter', tagline:'Cool & Bold', emoji:'❄️',
    desc:'Cool, deep undertones with high contrast. Bold, clear, saturated colors and true white/black are made for you.',
    best:['#0B1F3A','#7A0C2E','#1B1B3A','#00727A','#4B0082','#C40233','#003366','#2E294E','#0D2818','#800020','#1C1C1C','#3A0CA3'],
    avoid:['#F5DEB3','#FFE4C4','#D2B48C','#F0E68C','#FFDAB9'],
    metals:'Platinum, white gold and silver create striking contrast; bright gold can overpower you.',
    makeup:'Blue-red or berry lipstick, cool plum blush; neutral to slightly cool foundation.',
    styling:'High-contrast outfits (true white + true black), jewel tones, and bold single-color statements.',
    neutrals:'True white, jet black, charcoal, icy grey.'
  }
};
var SEASON_ORDER = ['spring','summer','autumn','winter'];

/* =========================================================
   2. COLOR MATH HELPERS
   ========================================================= */
function clamp(v,a,b){ return Math.min(b,Math.max(a,v)); }

function rgbToHex(r,g,b){
  return '#' + [r,g,b].map(function(v){
    var h = clamp(Math.round(v),0,255).toString(16);
    return h.length===1 ? '0'+h : h;
  }).join('').toUpperCase();
}

function rgbToHsl(r,g,b){
  r/=255; g/=255; b/=255;
  var max=Math.max(r,g,b), min=Math.min(r,g,b);
  var h,s,l=(max+min)/2;
  if(max===min){ h=s=0; }
  else{
    var d=max-min;
    s = l>0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){
      case r: h=(g-b)/d+(g<b?6:0); break;
      case g: h=(b-r)/d+2; break;
      default: h=(r-g)/d+4;
    }
    h/=6;
  }
  return { h: Math.round(h*360), s: Math.round(s*100), l: Math.round(l*100) };
}

function rgbToCmyk(r,g,b){
  if(r===0 && g===0 && b===0){ return {c:0,m:0,y:0,k:100}; }
  var rr=r/255, gg=g/255, bb=b/255;
  var k = 1-Math.max(rr,gg,bb);
  var c = (1-rr-k)/(1-k);
  var m = (1-gg-k)/(1-k);
  var y = (1-bb-k)/(1-k);
  return { c:Math.round(c*100), m:Math.round(m*100), y:Math.round(y*100), k:Math.round(k*100) };
}

function hslToRgb(h,s,l){
  h = ((h%360)+360)%360 / 360; s/=100; l/=100;
  var r,g,b;
  if(s===0){ r=g=b=l; }
  else{
    var hue2rgb = function(p,q,t){
      if(t<0) t+=1;
      if(t>1) t-=1;
      if(t<1/6) return p+(q-p)*6*t;
      if(t<1/2) return q;
      if(t<2/3) return p+(q-p)*(2/3-t)*6;
      return p;
    };
    var q = l<0.5 ? l*(1+s) : l+s-l*s;
    var p = 2*l-q;
    r = hue2rgb(p,q,h+1/3);
    g = hue2rgb(p,q,h);
    b = hue2rgb(p,q,h-1/3);
  }
  return [Math.round(r*255), Math.round(g*255), Math.round(b*255)];
}

/** Rotate a hex color's hue by `degrees` (color-wheel math), keeping S/L. */
function rotateHue(hex, degrees){
  var rgb = hexToRgb(hex);
  var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
  var newRgb = hslToRgb(hsl.h + degrees, hsl.s, hsl.l);
  return rgbToHex(newRgb[0], newRgb[1], newRgb[2]);
}

/** Generate standard color-wheel harmony schemes from a base hex color. */
function generateHarmony(hex){
  return {
    base: hex,
    complementary: [rotateHue(hex, 180)],
    analogous: [rotateHue(hex, -30), rotateHue(hex, 30)],
    triadic: [rotateHue(hex, 120), rotateHue(hex, 240)],
    splitComplementary: [rotateHue(hex, 150), rotateHue(hex, 210)]
  };
}

function weightedAverage(values, weights){
  var sum = 0, wsum = 0;
  for(var i=0;i<values.length;i++){ sum += values[i]*weights[i]; wsum += weights[i]; }
  return wsum ? sum/wsum : 0;
}

/**
 * Classify a sampled skin/eye/hair RGB combo into one of the 4 seasons
 * using a simple, transparent color-theory heuristic (NOT a medical/
 * professional grading tool):
 *  - warmth   = (R + G) - 2*B of the SKIN sample → positive = warm/golden undertone, negative = cool/pink-blue undertone
 *  - depth    = weighted-average HSL lightness across skin (and hair/eyes if sampled) → how light vs deep you read overall
 *  - contrast = spread between your lightest and darkest sampled feature → separates soft (Summer/Spring) from bold (Winter/Autumn-deep)
 * hairRgb / eyesRgb are optional — pass null to fall back to a skin-only estimate.
 */
function classifySeasonFull(skinRgb, hairRgb, eyesRgb){
  var skinHsl = rgbToHsl(skinRgb[0], skinRgb[1], skinRgb[2]);
  var warmth = (skinRgb[0] + skinRgb[1]) - (2*skinRgb[2]);
  var isWarm = warmth >= 0;

  var lightnessValues = [skinHsl.l];
  var weights = [1];
  var hairHsl = null, eyesHsl = null;

  if(hairRgb){
    hairHsl = rgbToHsl(hairRgb[0], hairRgb[1], hairRgb[2]);
    lightnessValues.push(hairHsl.l);
    weights.push(0.85);
  }
  if(eyesRgb){
    eyesHsl = rgbToHsl(eyesRgb[0], eyesRgb[1], eyesRgb[2]);
    lightnessValues.push(eyesHsl.l);
    weights.push(0.5);
  }

  var depth = weightedAverage(lightnessValues, weights);
  var contrast;
  if(lightnessValues.length > 1){
    contrast = Math.max.apply(null, lightnessValues) - Math.min.apply(null, lightnessValues);
  } else {
    // no hair/eye sample — fall back to a saturation-based proxy for contrast
    contrast = skinHsl.s < 22 ? 15 : 45;
  }

  var season;
  if(isWarm){
    season = depth >= 55 ? 'spring' : 'autumn';
  } else {
    season = contrast >= 32 ? 'winter' : 'summer';
  }

  var contrastLabel = contrast >= 32 ? 'High Contrast' : (contrast >= 16 ? 'Medium Contrast' : 'Low Contrast');

  return {
    season: season,
    undertone: isWarm ? 'Warm' : 'Cool',
    depth: depth,
    contrast: contrast,
    contrastLabel: contrastLabel,
    warmth: warmth,
    skinHsl: skinHsl,
    hairHsl: hairHsl,
    eyesHsl: eyesHsl
  };
}

/* =========================================================
   3. SAMPLE "PHOTO" GENERATOR (canvas-drawn portrait silhouettes
      with different skin tones, so the demo works with zero
      external images / network calls)
   ========================================================= */
var SAMPLE_TONES = [
  {label:'Fair Warm', skin:[247,214,182], hair:'#caa46b', coat:'#3b5998'},
  {label:'Light Cool', skin:[215,185,205], hair:'#6b5a52', coat:'#6b2d5c'},
  {label:'Medium Warm', skin:[209,157,116], hair:'#3b2a1a', coat:'#2f5233'},
  {label:'Deep Cool', skin:[118,85,108], hair:'#1a1a1a', coat:'#4a4e69'}
];

function drawPortrait(canvas, skinRgb, hairColor, coatColor){
  var ctx = canvas.getContext('2d');
  var w = canvas.width, h = canvas.height;
  var skin = 'rgb('+skinRgb.join(',')+')';
  coatColor = coatColor || hairColor;
  // background
  var grad = ctx.createLinearGradient(0,0,0,h);
  grad.addColorStop(0,'#efe4fb'); grad.addColorStop(1,'#fbe9f3');
  ctx.fillStyle = grad; ctx.fillRect(0,0,w,h);
  // shoulders / coat
  ctx.fillStyle = coatColor;
  ctx.beginPath();
  ctx.ellipse(w/2, h*1.05, w*0.42, h*0.32, 0, Math.PI, 2*Math.PI);
  ctx.fill();
  // neck
  ctx.fillStyle = skin;
  ctx.fillRect(w*0.42, h*0.62, w*0.16, h*0.22);
  // face
  ctx.beginPath();
  ctx.ellipse(w/2, h*0.46, w*0.26, h*0.30, 0, 0, Math.PI*2);
  ctx.fill();
  // hair
  ctx.fillStyle = hairColor;
  ctx.beginPath();
  ctx.ellipse(w/2, h*0.30, w*0.30, h*0.22, 0, Math.PI, 2*Math.PI);
  ctx.fill();
  ctx.fillRect(w*0.24, h*0.28, w*0.06, h*0.20);
  ctx.fillRect(w*0.70, h*0.28, w*0.06, h*0.20);
  // simple eyes
  ctx.fillStyle = '#2b2b2b';
  ctx.beginPath(); ctx.ellipse(w*0.42,h*0.46,w*0.025,h*0.018,0,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(w*0.58,h*0.46,w*0.025,h*0.018,0,0,Math.PI*2); ctx.fill();
  // mouth
  ctx.strokeStyle = 'rgba(120,60,60,.6)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(w*0.5,h*0.56,w*0.06,0.15*Math.PI,0.85*Math.PI); ctx.stroke();
}

function buildSamplePhotos(){
  var wrap = document.getElementById('samplePhotos');
  SAMPLE_TONES.forEach(function(tone,i){
    var btn = document.createElement('button');
    btn.type='button';
    btn.className='sample-photo';
    btn.setAttribute('aria-label','Use sample photo: '+tone.label);
    btn.dataset.index = i;
    var c = document.createElement('canvas');
    c.width = 128; c.height = 128;
    drawPortrait(c, tone.skin, tone.hair, tone.coat);
    btn.appendChild(c);
    btn.addEventListener('click', function(){
      selectSamplePhoto(i, btn);
    });
    wrap.appendChild(btn);
  });
}

function selectSamplePhoto(i, btnEl){
  document.querySelectorAll('.sample-photo').forEach(function(b){ b.classList.remove('selected'); });
  if(btnEl) btnEl.classList.add('selected');
  var tone = SAMPLE_TONES[i];
  var full = document.createElement('canvas');
  full.width = 600; full.height = 600;
  drawPortrait(full, tone.skin, tone.hair, tone.coat);
  full.toBlob(function(blob){
    var file = new File([blob], 'sample-'+tone.label.replace(/\s+/g,'-').toLowerCase()+'.png', {type:'image/png'});
    handleIncomingFile(file);
  }, 'image/png');
}

/* =========================================================
   4. STATE
   ========================================================= */
var SAMPLE_TARGETS = ['skin','eyes','hair'];
var DEFAULT_SAMPLE_POINTS = {
  skin: {x:0.5, y:0.42},
  eyes: {x:0.42, y:0.46},
  hair: {x:0.5, y:0.18}
};

var state = {
  currentStage: 1,
  imageEl: null,
  currentTarget: 'skin',
  samples: { skin: null, eyes: null, hair: null }, // each: {x,y,rgb}
  sampledRgb: [217,195,234], // kept for backwards-compatible download-card code paths
  lastResult: null,
  activeSeasonTab: 'spring',
  drapeColor: null,
  recolorMode: 'clothing', // 'clothing' (coat/shirt) or 'background' — which region we detect + recolor
  clothingSample: null,   // {x, y, rgb} — the currently detected region's color we search for and replace
  originalPhotoImg: null  // cached pristine Image of the sampled photo, so re-recoloring never drifts
};

/* =========================================================
   5. DOM READY WIRING
   ========================================================= */
function initColorQuizApp(){
  buildSamplePhotos();
  buildSeasonExplorer();
  renderFavorites();
  wireUpload();
  wireSampling();
  wireResultActions();
  wireNewsletter();
  wireCopyButtons();
  wireHarmony();
  wireDrape();
  wireAddColor();
  wireRecolorMode();
  wireCropModal();
}


/* ---------- Toasts ---------- */
function showToast(msg){
  var region = document.getElementById('toastRegion');
  var t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  region.appendChild(t);
  requestAnimationFrame(function(){ t.classList.add('show'); });
  setTimeout(function(){
    t.classList.remove('show');
    setTimeout(function(){ t.remove(); }, 250);
  }, 2200);
}

/* ---------- Nav ---------- */

/* ---------- Stage management ---------- */
function goToStage(n){
  state.currentStage = n;
  document.querySelectorAll('.quiz-stage').forEach(function(s){
    s.classList.toggle('active', Number(s.dataset.stage) === n);
  });
  document.querySelectorAll('.step-pill').forEach(function(p){
    var idx = Number(p.dataset.stepIndicator);
    p.classList.toggle('active', idx === n);
    p.classList.toggle('done', idx < n);
  });
  var panel = document.querySelector('.quiz-panel');
  if(panel) panel.scrollIntoView({behavior:'smooth', block:'start'});
}

/* ---------- Upload (stage 1) ---------- */
function wireUpload(){
  var dz = document.getElementById('dropzone');
  var input = document.getElementById('fileInput');
  var browseBtn = document.getElementById('browseBtn');

  function openPicker(){ input.click(); }
  browseBtn.addEventListener('click', function(e){ e.stopPropagation(); openPicker(); });
  dz.addEventListener('click', openPicker);
  dz.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openPicker(); }
  });

  input.addEventListener('change', function(){
    if(input.files && input.files[0]) handleIncomingFile(input.files[0]);
  });

  ['dragenter','dragover'].forEach(function(evt){
    dz.addEventListener(evt, function(e){
      e.preventDefault(); e.stopPropagation();
      dz.classList.add('dragover');
    });
  });
  ['dragleave','drop'].forEach(function(evt){
    dz.addEventListener(evt, function(e){
      e.preventDefault(); e.stopPropagation();
      dz.classList.remove('dragover');
    });
  });
  dz.addEventListener('drop', function(e){
    var files = e.dataTransfer && e.dataTransfer.files;
    if(files && files[0]) handleIncomingFile(files[0]);
  });
}

function showUploadError(msg){
  var dz = document.getElementById('dropzone');
  var err = document.getElementById('uploadError');
  dz.classList.add('has-error');
  err.classList.add('show');
  err.querySelector('span').textContent = msg;
}
function clearUploadError(){
  var dz = document.getElementById('dropzone');
  var err = document.getElementById('uploadError');
  dz.classList.remove('has-error');
  err.classList.remove('show');
}

var ACCEPTED_TYPES = ['image/jpeg','image/png','image/webp'];
var MAX_BYTES = 10 * 1024 * 1024;

function handleIncomingFile(file){
  clearUploadError();
  if(!file){ return; }
  if(ACCEPTED_TYPES.indexOf(file.type) === -1){
    showUploadError('Please upload a JPG, PNG or WEBP image.');
    return;
  }
  if(file.size > MAX_BYTES){
    showUploadError('That file is too large — please upload something under 10MB.');
    return;
  }
  var reader = new FileReader();
  reader.onerror = function(){
    showUploadError('We could not read that file. Please try a different photo.');
  };
  reader.onload = function(){
    var img = new Image();
    img.onload = function(){
      state.imageEl = img;
      state.samples = { skin: null, eyes: null, hair: null };
      setCurrentTarget('skin');
      loadSamplingStage(img);
      goToStage(2);
    };
    img.onerror = function(){
      showUploadError('That does not look like a valid image. Please try another file.');
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

/* ---------- Sampling (stage 2): Skin / Eyes / Hair 3-point sampling ---------- */
var TARGET_MARKER_IDS = { skin:'markerSkin', eyes:'markerEyes', hair:'markerHair' };
var TARGET_MINI_IDS = { skin:'miniSkin', eyes:'miniEyes', hair:'miniHair' };

function loadSamplingStage(img){
  var canvas = document.getElementById('sampleCanvas');
  var maxW = 640;
  var scale = Math.min(1, maxW / img.naturalWidth);
  canvas.width = Math.round(img.naturalWidth * scale);
  canvas.height = Math.round(img.naturalHeight * scale);
  var ctx = canvas.getContext('2d', {willReadFrequently:true});
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // auto-preset all three sample points using typical front-facing portrait proportions
  SAMPLE_TARGETS.forEach(function(target){
    var p = DEFAULT_SAMPLE_POINTS[target];
    sampleAtRelative(target, p.x, p.y);
  });
  setCurrentTarget('skin');
}

function sampleAtRelative(target, rx, ry){
  var canvas = document.getElementById('sampleCanvas');
  var ctx = canvas.getContext('2d', {willReadFrequently:true});
  var x = clamp(Math.round(rx * canvas.width), 0, canvas.width-1);
  var y = clamp(Math.round(ry * canvas.height), 0, canvas.height-1);

  // average a small neighborhood for stability
  var radius = Math.max(3, Math.round(canvas.width * 0.02));
  var x0 = clamp(x-radius,0,canvas.width-1), x1 = clamp(x+radius,0,canvas.width-1);
  var y0 = clamp(y-radius,0,canvas.height-1), y1 = clamp(y+radius,0,canvas.height-1);
  var w = x1-x0+1, h = y1-y0+1;
  var data;
  try{
    data = ctx.getImageData(x0,y0,w,h).data;
  }catch(e){
    // canvas got tainted (shouldn't happen with data URLs) — fall back gracefully
    data = ctx.getImageData(0,0,1,1).data;
  }
  var r=0,g=0,b=0,count=0;
  for(var i=0;i<data.length;i+=4){
    r+=data[i]; g+=data[i+1]; b+=data[i+2]; count++;
  }
  r=Math.round(r/count); g=Math.round(g/count); b=Math.round(b/count);

  state.samples[target] = { x: rx, y: ry, rgb: [r,g,b] };
  if(target === 'skin') state.sampledRgb = [r,g,b];

  var hex = rgbToHex(r,g,b);
  var marker = document.getElementById(TARGET_MARKER_IDS[target]);
  marker.hidden = false;
  marker.classList.add('has-sample');
  marker.style.left = (rx*100)+'%';
  marker.style.top = (ry*100)+'%';

  var mini = document.getElementById(TARGET_MINI_IDS[target]);
  mini.querySelector('.chip').style.background = hex;
  mini.querySelector('.hex').textContent = hex;
}

function setCurrentTarget(target){
  state.currentTarget = target;
  document.querySelectorAll('.target-tab').forEach(function(t){
    var active = t.dataset.target === target;
    t.classList.toggle('active', active);
    t.setAttribute('aria-selected', active ? 'true':'false');
  });
  Object.keys(TARGET_MARKER_IDS).forEach(function(key){
    document.getElementById(TARGET_MARKER_IDS[key]).classList.toggle('current', key === target);
  });
}

function wireSampling(){
  var wrap = document.getElementById('sampleCanvasWrap');
  wrap.addEventListener('click', function(e){
    var rect = wrap.getBoundingClientRect();
    var rx = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    var ry = clamp((e.clientY - rect.top) / rect.height, 0, 1);
    sampleAtRelative(state.currentTarget, rx, ry);
  });
  document.querySelectorAll('.target-tab').forEach(function(tab){
    tab.addEventListener('click', function(){
      setCurrentTarget(tab.dataset.target);
    });
  });
  document.getElementById('backToUpload').addEventListener('click', function(){
    goToStage(1);
  });
  document.getElementById('confirmSample').addEventListener('click', function(){
    runAnalysis();
  });
}

/* ---------- Analyzing (stage 3) ---------- */
function runAnalysis(){
  goToStage(3);
  var fill = document.getElementById('progressFill');
  var txt = document.getElementById('analyzingText');
  fill.style.width = '0%';
  var messages = ['Reading undertone…','Measuring depth & contrast…','Matching your season…','Building your palette…'];
  var step = 0;
  var timer = setInterval(function(){
    step++;
    fill.style.width = Math.min(100, step*25) + '%';
    if(messages[step]) txt.textContent = messages[step];
    if(step >= 4){
      clearInterval(timer);
      setTimeout(function(){
        var skin = state.samples.skin ? state.samples.skin.rgb : state.sampledRgb;
        var hair = state.samples.hair ? state.samples.hair.rgb : null;
        var eyes = state.samples.eyes ? state.samples.eyes.rgb : null;
        var classification = classifySeasonFull(skin, hair, eyes);
        state.lastResult = {
          rgb: skin,
          hex: rgbToHex(skin[0],skin[1],skin[2]),
          hsl: rgbToHsl(skin[0],skin[1],skin[2]),
          cmyk: rgbToCmyk(skin[0],skin[1],skin[2]),
          hairRgb: hair,
          eyesRgb: eyes,
          classification: classification,
          season: classification.season,
          photoDataUrl: getCroppedSamplePhoto()
        };
        renderResults(state.lastResult);
        goToStage(4);
      }, 350);
    }
  }, 420);
}

function getCroppedSamplePhoto(){
  var canvas = document.getElementById('sampleCanvas');
  try{
    return canvas.toDataURL('image/png');
  }catch(e){
    return '';
  }
}

/* ---------- Custom ("Add New Color") palette, per season, saved locally ---------- */
var CUSTOM_COLORS_KEY = 'colorAnalysisCustomColors';
function loadCustomColorsMap(){
  try{
    var raw = JSON.parse(localStorage.getItem(CUSTOM_COLORS_KEY));
    return raw && typeof raw === 'object' ? raw : {};
  }catch(e){ return {}; }
}
function saveCustomColorsMap(map){
  try{ localStorage.setItem(CUSTOM_COLORS_KEY, JSON.stringify(map)); }catch(e){ /* ignore */ }
}
function getCustomColorsFor(seasonKey){
  var map = loadCustomColorsMap();
  var list = Array.isArray(map[seasonKey]) ? map[seasonKey] : [];
  var season = SEASONS[seasonKey];
  if(season && list.length){
    // Self-heal: drop any saved "custom" color that duplicates one of that
    // season's built-in best colors (e.g. from before this check existed).
    var cleaned = list.filter(function(h){ return season.best.indexOf(h) === -1; });
    if(cleaned.length !== list.length){
      map[seasonKey] = cleaned;
      saveCustomColorsMap(map);
    }
    return cleaned;
  }
  return list;
}
/** Saves `hex` as a custom color for that season. Returns false (and adds
 * nothing) when it's already one of that season's built-in best colors, or
 * already been added before — so callers never end up with the same swatch
 * listed twice. Returns true when it was actually newly added. */
function addCustomColorFor(seasonKey, hex){
  var season = SEASONS[seasonKey];
  if(season && season.best.indexOf(hex) !== -1) return false;
  var map = loadCustomColorsMap();
  if(!Array.isArray(map[seasonKey])) map[seasonKey] = [];
  if(map[seasonKey].indexOf(hex) !== -1) return false;
  map[seasonKey].push(hex);
  saveCustomColorsMap(map);
  return true;
}
function removeCustomColorFor(seasonKey, hex){
  var map = loadCustomColorsMap();
  if(Array.isArray(map[seasonKey])) map[seasonKey] = map[seasonKey].filter(function(h){ return h !== hex; });
  saveCustomColorsMap(map);
}

/** Re-renders just the "Your Best Colors" swatch rows (main + quick-try),
 * including any custom colors the user has added — without touching the
 * photo/canvas, so this never disturbs whatever's currently applied. */
function refreshPaletteRows(){
  if(!state.lastResult) return;
  var seasonKey = state.lastResult.season;
  var season = SEASONS[seasonKey];
  var customColors = getCustomColorsFor(seasonKey);
  function handleRemove(hex){
    removeCustomColorFor(seasonKey, hex);
    showToast('Removed ' + hex + ' from Your Best Colors');
    refreshPaletteRows();
  }
  fillPaletteRow('bestPalette', season.best.concat(customColors), false, applyColorToPhoto, customColors, handleRemove);
  fillPaletteRow('drapeBestSwatches', season.best.slice(0,6).concat(customColors), false, applyColorToPhoto, customColors, handleRemove);
  syncSeasonExplorerIfShowing(seasonKey);
}

/** The quiz results and the Season Explorer both display the same
 * per-season custom-color list, but each renders its own DOM independently
 * — so whichever side changes it needs to poke the other one to re-render
 * too, or an add/remove on one wouldn't be reflected on the other until an
 * unrelated re-render happened to occur. Only re-renders when that season's
 * tab is the one currently open, so it's cheap to call after every change. */
function syncSeasonExplorerIfShowing(seasonKey){
  if(state.activeSeasonTab === seasonKey && document.getElementById('seasonCardMount').innerHTML){
    renderSeasonCard(seasonKey);
  }
}

/* ---------- Results (stage 4) ---------- */
function renderResults(result){
  var season = SEASONS[result.season];
  document.getElementById('resultPhoto').src = result.photoDataUrl;
  document.getElementById('resultSeasonName').textContent = season.emoji + ' ' + season.name;
  document.getElementById('resultTagline').textContent = season.tagline + ' — ' + season.desc;

  // HEX/RGB/HSL cards show whichever color is currently applied to the photo
  // (kept in sync live by updateAppliedColorInfo — see applyColorToPhoto),
  // not the original skin sample; Undertone/Contrast stay about the person.
  document.getElementById('detUndertone').textContent = result.classification.undertone;
  document.getElementById('detContrast').textContent = result.classification.contrastLabel || '';

  refreshPaletteRows();
  fillPaletteRow('avoidPalette', season.avoid, true, applyColorToPhoto);
  fillPaletteRow('drapeAvoidSwatches', season.avoid.slice(0,5), true, applyColorToPhoto);

  document.getElementById('tipMetals').textContent = season.metals;
  document.getElementById('tipMakeup').textContent = season.makeup;
  document.getElementById('tipStyling').textContent = season.styling;
  document.getElementById('tipNeutrals').textContent = season.neutrals;

  document.getElementById('favoriteBtn').textContent = isFavorited(result) ? '♥ Saved to Favorites' : '♡ Add to Favorites';

  document.getElementById('resultPhoto').style.display = '';

  // fresh result / fresh photo — never reuse a garment/background sample
  // from a previous photo (applyColorToPhoto below also refreshes all the
  // caption/hint copy for both the results-page tool and the Harmony one)
  state.clothingSample = null;
  state.originalPhotoImg = null;
  applyColorToPhoto(season.best[0]);

  renderHarmonyQuickpicks();
}

function fillPaletteRow(mountId, colors, isAvoid, onSelect, customHexes, onRemove){
  var mount = document.getElementById(mountId);
  if(!mount) return;
  mount.innerHTML = '';
  colors.forEach(function(hex){
    var isCustom = customHexes && customHexes.indexOf(hex) !== -1;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'swatch' + (isCustom ? ' is-custom' : '');
    btn.setAttribute('aria-label', (isAvoid?'Avoid ':'') + hex + (isCustom ? ' — your added color' : '') + ' — click to copy and apply');
    btn.innerHTML = '<div class="sw-color" style="background:'+hex+'"></div><div class="sw-label">'+hex+(isCustom?' ★':'')+'</div><div class="copied-badge">Copied!</div>';
    btn.addEventListener('click', function(){
      copyToClipboard(hex);
      btn.classList.add('copied');
      setTimeout(function(){ btn.classList.remove('copied'); }, 1000);
      if(typeof onSelect === 'function') onSelect(hex);
    });
    if(isCustom && typeof onRemove === 'function'){
      var rm = document.createElement('button');
      rm.type = 'button';
      rm.className = 'swatch-remove';
      rm.setAttribute('aria-label', 'Remove your added color ' + hex);
      rm.textContent = '×';
      rm.addEventListener('click', function(e){
        e.stopPropagation();
        onRemove(hex);
      });
      btn.appendChild(rm);
    }
    mount.appendChild(btn);
  });
}

function wireResultActions(){
  document.getElementById('retakeBtn').addEventListener('click', function(){
    resetQuiz();
  });
  document.getElementById('favoriteBtn').addEventListener('click', function(){
    toggleFavorite(state.lastResult);
  });
  document.getElementById('downloadBtn').addEventListener('click', function(){
    downloadResultCard(state.lastResult);
  });
}

function resetQuiz(){
  document.getElementById('fileInput').value = '';
  clearUploadError();
  document.querySelectorAll('.sample-photo').forEach(function(b){ b.classList.remove('selected'); });
  state.samples = { skin: null, eyes: null, hair: null };
  state.clothingSample = null;
  state.originalPhotoImg = null;
  hideGarmentDetect();
  Object.keys(TARGET_MARKER_IDS).forEach(function(key){
    var marker = document.getElementById(TARGET_MARKER_IDS[key]);
    marker.hidden = true;
    marker.classList.remove('has-sample');
  });
  goToStage(1);
}

/* ---------- Clipboard ---------- */
function copyToClipboard(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){
      showToast('Copied ' + text + ' to clipboard');
    }).catch(function(){ legacyCopy(text); });
  } else {
    legacyCopy(text);
  }
}
function legacyCopy(text){
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try{ document.execCommand('copy'); showToast('Copied ' + text + ' to clipboard'); }
  catch(e){ showToast('Could not copy — please copy manually: ' + text); }
  document.body.removeChild(ta);
}
/** Copies to clipboard without its own toast — used where the caller wants
 * to show one combined message instead (e.g. "Added + copied"). */
function silentCopyToClipboard(text){
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).catch(function(){
      try{
        var ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }catch(e){ /* ignore */ }
    });
  }
}

function wireCopyButtons(){
  document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var targetId = btn.dataset.copyTarget;
      var val = document.getElementById(targetId).textContent;
      copyToClipboard(val);
      var original = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(function(){ btn.textContent = original; }, 1200);
    });
  });
}

/* ---------- Download result card ---------- */
function downloadResultCard(result){
  if(!result){ return; }
  var season = SEASONS[result.season];
  var W = 900, H = 1150;
  var canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  var ctx = canvas.getContext('2d');

  var grad = ctx.createLinearGradient(0,0,W,H);
  grad.addColorStop(0,'#f3e8ff'); grad.addColorStop(1,'#fce7f3');
  ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);

  ctx.fillStyle = '#241536';
  ctx.font = '700 30px Arial';
  ctx.fillText('Color Analysis Result', 50, 70);

  function drawPhoto(){
    ctx.font = '800 46px Arial';
    ctx.fillStyle = '#7b2ff7';
    ctx.fillText(season.emoji + '  ' + season.name, 50, 260);
    ctx.font = '600 22px Arial';
    ctx.fillStyle = '#5b4a72';
    ctx.fillText(season.tagline, 50, 300);

    ctx.font = '400 18px Arial';
    ctx.fillStyle = '#241536';
    wrapText(ctx, season.desc, 50, 340, W-100, 26);

    ctx.font = '700 20px Arial';
    ctx.fillText('Your Best Colors', 50, 470);
    var sw = 90, gap=14, cols=8;
    season.best.forEach(function(hex,i){
      var x = 50 + (i%cols)*(sw+gap);
      var y = 490 + Math.floor(i/cols)*(sw+gap);
      ctx.fillStyle = hex;
      roundRect(ctx, x, y, sw, sw, 10, true);
    });

    var avoidY = 490 + Math.ceil(season.best.length/cols)*(sw+gap) + 40;
    ctx.font = '700 20px Arial';
    ctx.fillStyle = '#241536';
    ctx.fillText('Colors To Avoid', 50, avoidY);
    season.avoid.forEach(function(hex,i){
      var x = 50 + (i%cols)*(sw+gap);
      var y = avoidY + 20 + Math.floor(i/cols)*(sw+gap);
      ctx.fillStyle = hex;
      roundRect(ctx, x, y, sw, sw, 10, true);
    });

    ctx.font = 'italic 15px Arial';
    ctx.fillStyle = '#8b7aa3';
    ctx.fillText('Generated with Color Analysis · colors run entirely in your browser', 50, H-40);

    var link = document.createElement('a');
    link.download = 'color-analysis-'+season.key+'-result.png';
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Result card downloaded!');
  }

  // Use the photo WITH whatever color you've applied in "Try A Color On Your
  // Photo" (below), so the downloaded card always matches what's on screen.
  var appliedPhotoUrl = result.photoDataUrl;
  var drapeCanvasEl = document.getElementById('drapeCanvas');
  if(result.photoDataUrl && drapeCanvasEl){
    try{ appliedPhotoUrl = drapeCanvasEl.toDataURL('image/png'); }
    catch(e){ appliedPhotoUrl = result.photoDataUrl; }
  }

  if(appliedPhotoUrl){
    var img = new Image();
    img.onload = function(){
      ctx.save();
      roundRectPath(ctx, W-260, 40, 200, 200, 20);
      ctx.clip();
      drawImageCover(ctx, img, W-260, 40, 200, 200);
      ctx.restore();
      drawPhoto();
    };
    img.onerror = drawPhoto;
    img.src = appliedPhotoUrl;
  } else {
    drawPhoto();
  }
}

/** Draw `img` into the destination box using object-fit:cover-style cropping. */
function drawImageCover(ctx, img, dx, dy, dw, dh){
  var ir = img.width / img.height, tr = dw / dh;
  var sx, sy, sw, sh;
  if(ir > tr){ sh = img.height; sw = sh * tr; sx = (img.width - sw) / 2; sy = 0; }
  else { sw = img.width; sh = sw / tr; sx = 0; sy = (img.height - sh) / 2; }
  ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
}

function roundRectPath(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}
function roundRect(ctx,x,y,w,h,r,fill){
  roundRectPath(ctx,x,y,w,h,r);
  if(fill) ctx.fill();
}
function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  var words = text.split(' ');
  var line = '';
  for(var n=0;n<words.length;n++){
    var testLine = line + words[n] + ' ';
    if(ctx.measureText(testLine).width > maxWidth && n > 0){
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}

/* =========================================================
   6. FAVORITES (localStorage)
   ========================================================= */
var FAV_KEY = 'colorAnalysisFavorites';

function loadFavorites(){
  try{
    var raw = window.localStorage.getItem(FAV_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveFavorites(list){
  try{ window.localStorage.setItem(FAV_KEY, JSON.stringify(list)); }
  catch(e){ /* private browsing or storage disabled — fail silently */ }
}
function isFavorited(result){
  if(!result) return false;
  return loadFavorites().some(function(f){ return f.hex === result.hex; });
}
function toggleFavorite(result){
  if(!result) return;
  var list = loadFavorites();
  var idx = list.findIndex(function(f){ return f.hex === result.hex; });
  if(idx > -1){
    list.splice(idx,1);
    showToast('Removed from favorites');
  } else {
    list.unshift({
      hex: result.hex,
      season: result.season,
      savedAt: new Date().toISOString()
    });
    list = list.slice(0,12);
    showToast('Saved to favorites');
  }
  saveFavorites(list);
  document.getElementById('favoriteBtn').textContent = isFavorited(result) ? '♥ Saved to Favorites' : '♡ Add to Favorites';
  renderFavorites();
}
function removeFavorite(hex){
  var list = loadFavorites().filter(function(f){ return f.hex !== hex; });
  saveFavorites(list);
  renderFavorites();
  if(state.lastResult && state.lastResult.hex === hex){
    document.getElementById('favoriteBtn').textContent = '♡ Add to Favorites';
  }
}
function renderFavorites(){
  var mount = document.getElementById('favoritesMount');
  var list = loadFavorites();
  // Only show the Favorites section once something has been saved.
  var favSection = document.getElementById('favorites');
  if(favSection) favSection.hidden = !list.length;
  if(!list.length){
    mount.innerHTML = '';
    return;
  }
  var grid = document.createElement('div');
  grid.className = 'fav-grid';
  list.forEach(function(f){
    var season = SEASONS[f.season];
    var card = document.createElement('div');
    card.className = 'fav-card';
    var swatchesHtml = season.best.slice(0,6).map(function(c){ return '<span style="background:'+c+'"></span>'; }).join('');
    card.innerHTML =
      '<div class="fav-top"><strong>'+season.emoji+' '+season.name+'</strong><button class="fav-remove" data-hex="'+f.hex+'">Remove</button></div>'+
      '<div class="fav-swatches">'+swatchesHtml+'</div>'+
      '<div style="font-family:ui-monospace,monospace;font-size:12.5px;color:#5b4a72;">'+f.hex+'</div>';
    grid.appendChild(card);
  });
  mount.innerHTML = '';
  mount.appendChild(grid);
  grid.querySelectorAll('.fav-remove').forEach(function(btn){
    btn.addEventListener('click', function(){ removeFavorite(btn.dataset.hex); });
  });
}

/* =========================================================
   7. SEASON EXPLORER (tabs)
   ========================================================= */
function buildSeasonExplorer(){
  var tabsWrap = document.getElementById('seasonTabs');
  SEASON_ORDER.forEach(function(key, i){
    var s = SEASONS[key];
    var tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'season-tab';
    tab.id = 'tab-'+key;
    tab.setAttribute('role','tab');
    tab.setAttribute('aria-selected', key === state.activeSeasonTab ? 'true':'false');
    tab.setAttribute('aria-controls','season-panel');
    tab.textContent = s.emoji + ' ' + s.name;
    tab.addEventListener('click', function(){ setActiveSeasonTab(key); });
    tabsWrap.appendChild(tab);
  });
  renderSeasonCard(state.activeSeasonTab);
}
function setActiveSeasonTab(key){
  state.activeSeasonTab = key;
  document.querySelectorAll('.season-tab').forEach(function(t){
    t.setAttribute('aria-selected', t.id === 'tab-'+key ? 'true':'false');
  });
  renderSeasonCard(key);
}
function renderSeasonCard(key){
  var s = SEASONS[key];
  var mount = document.getElementById('seasonCardMount');
  var customColors = getCustomColorsFor(key);
  var bestSw = s.best.concat(customColors).map(function(c){
    var isCustom = customColors.indexOf(c) !== -1;
    return '<div class="swatch'+(isCustom?' is-custom':'')+'" tabindex="0" role="button" aria-label="'+c+(isCustom?' — your added color':'')+' — click to add to Your Best Colors and copy">'+
      '<div class="sw-color" style="background:'+c+'"></div><div class="sw-label">'+c+(isCustom?' ★':'')+'</div>'+
      '<div class="copied-badge">Added!</div>'+
      (isCustom ? '<button type="button" class="swatch-remove" aria-label="Remove your added color '+c+'" data-hex="'+c+'">×</button>' : '')+
    '</div>';
  }).join('');
  var avoidSw = s.avoid.map(function(c){ return '<div class="swatch" tabindex="0" role="button" aria-label="Avoid '+c+' — click to copy"><div class="sw-color" style="background:'+c+'"></div><div class="sw-label">'+c+'</div><div class="copied-badge">Copied!</div></div>'; }).join('');
  mount.innerHTML =
    '<div class="season-card" id="season-panel" role="tabpanel">'+
      '<div class="season-card-top">'+
        '<div><h3>'+s.emoji+' '+s.name+'</h3><p class="season-sub">'+s.tagline+' — '+s.desc+'</p></div>'+
        '<button class="btn btn-primary btn-sm" id="thisIsMySeason" data-key="'+key+'">This Is My Season →</button>'+
      '</div>'+
      '<div class="palette-block">'+
        '<h3>🎨 Best Colors</h3><p class="add-color-hint">Click any color you like — it copies to your clipboard and joins "Your Best Colors" in your results.</p><div class="palette-row" id="seasonBestRow">'+bestSw+'</div>'+
        '<h3>🚫 Colors To Avoid</h3><div class="palette-row avoid-row">'+avoidSw+'</div>'+
        '<div class="tips-grid">'+
          '<div class="tip-card"><h4>💍 Best Metals</h4><p>'+s.metals+'</p></div>'+
          '<div class="tip-card"><h4>💄 Makeup Tone</h4><p>'+s.makeup+'</p></div>'+
          '<div class="tip-card"><h4>👗 Styling Tip</h4><p>'+s.styling+'</p></div>'+
          '<div class="tip-card"><h4>⚪ Best Neutrals</h4><p>'+s.neutrals+'</p></div>'+
        '</div>'+
      '</div>'+
    '</div>';

  // Best-color swatches: clicking one both copies it AND saves it into this
  // season's personal palette (localStorage), so it shows up as a real,
  // removable swatch in "Your Best Colors" the next time that season's
  // results are viewed — exactly like the quiz results' own Add Color tool.
  document.getElementById('seasonBestRow').querySelectorAll('.swatch').forEach(function(sw){
    sw.addEventListener('click', function(e){
      if(e.target.classList.contains('swatch-remove')) return;
      var hex = sw.querySelector('.sw-label').textContent.replace(' ★','').trim();
      silentCopyToClipboard(hex);
      var added = addCustomColorFor(key, hex);
      if(added){
        showToast('Added ' + hex + ' to ' + s.name + '’s Best Colors (and copied it too)!');
      } else if(s.best.indexOf(hex) !== -1){
        showToast('Copied ' + hex + ' — already one of ' + s.name + '’s best colors!');
      } else {
        showToast('Copied ' + hex + ' to clipboard');
      }
      sw.classList.add('copied');
      setTimeout(function(){ sw.classList.remove('copied'); }, 1000);
      renderSeasonCard(key);
      if(state.lastResult && state.lastResult.season === key) refreshPaletteRows();
    });
    sw.addEventListener('keydown', function(e){
      if(e.key==='Enter' || e.key===' '){ e.preventDefault(); sw.click(); }
    });
  });

  mount.querySelectorAll('#seasonBestRow .swatch-remove').forEach(function(rm){
    rm.addEventListener('click', function(e){
      e.stopPropagation();
      var hex = rm.dataset.hex;
      removeCustomColorFor(key, hex);
      showToast('Removed ' + hex + ' from ' + s.name + '’s Best Colors');
      renderSeasonCard(key);
      if(state.lastResult && state.lastResult.season === key) refreshPaletteRows();
    });
  });

  mount.querySelectorAll('.avoid-row .swatch').forEach(function(sw){
    sw.addEventListener('click', function(){
      var hex = sw.querySelector('.sw-label').textContent;
      copyToClipboard(hex);
      sw.classList.add('copied');
      setTimeout(function(){ sw.classList.remove('copied'); }, 1000);
    });
    sw.addEventListener('keydown', function(e){
      if(e.key==='Enter' || e.key===' '){ e.preventDefault(); sw.click(); }
    });
  });

  document.getElementById('thisIsMySeason').addEventListener('click', function(){
    var seasonKey = this.dataset.key;
    var s2 = SEASONS[seasonKey];
    var fakeRgb = hexToRgb(s2.best[0]);
    var fakeResult = {
      rgb: fakeRgb,
      hex: rgbToHex(fakeRgb[0],fakeRgb[1],fakeRgb[2]),
      hsl: rgbToHsl(fakeRgb[0],fakeRgb[1],fakeRgb[2]),
      cmyk: rgbToCmyk(fakeRgb[0],fakeRgb[1],fakeRgb[2]),
      classification:{undertone: (seasonKey==='spring'||seasonKey==='autumn') ? 'Warm':'Cool'},
      season: seasonKey,
      photoDataUrl: ''
    };
    state.lastResult = fakeResult;
    renderResults(fakeResult);
    document.getElementById('resultPhoto').style.display = 'none';
    document.getElementById('quiz').scrollIntoView({behavior:'smooth'});
    goToStage(4);
    showToast('Loaded the '+s2.name+' palette');
  });
}
function hexToRgb(hex){
  hex = hex.replace('#','');
  return [parseInt(hex.substring(0,2),16), parseInt(hex.substring(2,4),16), parseInt(hex.substring(4,6),16)];
}


/* =========================================================
   9. NEWSLETTER (client-side validation only — no real backend)
   ========================================================= */
function wireNewsletter(){
  var form = document.getElementById('newsletterForm');
  var input = document.getElementById('newsletterEmail');
  var msg = document.getElementById('newsletterMsg');
  if(!form || !input || !msg) return; // newsletter removed from the homepage
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var val = input.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(val)){
      msg.style.color = '#ffffff';
      msg.textContent = '⚠ Please enter a valid email address.';
      input.setAttribute('aria-invalid','true');
      return;
    }
    input.setAttribute('aria-invalid','false');
    msg.style.color = '#ffffff';
    msg.textContent = '✓ Thanks for subscribing! (Demo only — connect a real email service to go live.)';
    // NOTE: For production, replace this with a real API call, e.g.:
    // fetch('/api/subscribe', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email: val})});
    form.reset();
  });
}

/* =========================================================
   10. COLOR HARMONY GENERATOR
   ========================================================= */
function isValidHex(v){ return /^#[0-9A-F]{6}$/i.test(v); }
function normalizeHex(v){
  v = (v || '').trim();
  if(v && v[0] !== '#') v = '#' + v;
  return v.toUpperCase();
}

function wireHarmony(){
  var picker = document.getElementById('harmonyColorPicker');
  var hexInput = document.getElementById('harmonyHexInput');
  var genBtn = document.getElementById('harmonyGenerateBtn');
  if(!picker) return;

  function applyFromHexInput(){
    var v = normalizeHex(hexInput.value);
    if(isValidHex(v)){
      hexInput.value = v;
      picker.value = v;
      renderHarmony(v);
      applyColorToPhoto(v);
    } else {
      showToast('Please enter a valid 6-digit hex color, e.g. #7B2FF7');
      hexInput.value = picker.value.toUpperCase();
    }
  }

  picker.addEventListener('input', function(){
    hexInput.value = picker.value.toUpperCase();
    renderHarmony(picker.value);
  });
  hexInput.addEventListener('change', applyFromHexInput);
  hexInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ e.preventDefault(); applyFromHexInput(); }
  });
  genBtn.addEventListener('click', applyFromHexInput);

  renderHarmony(picker.value.toUpperCase());
  renderHarmonyQuickpicks();
  applyColorToPhoto(picker.value.toUpperCase());
}

function renderHarmonyQuickpicks(){
  var row = document.getElementById('harmonyQuickRow');
  if(!row) return;
  var colors = state.lastResult
    ? SEASONS[state.lastResult.season].best.slice(0, 8)
    : SEASON_ORDER.map(function(k){ return SEASONS[k].best[0]; });
  row.innerHTML = '';
  colors.forEach(function(hex){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'harmony-quick-swatch';
    b.style.background = hex;
    b.title = hex;
    b.setAttribute('aria-label', 'Use ' + hex + ' as the base color');
    b.addEventListener('click', function(){
      document.getElementById('harmonyColorPicker').value = hex;
      document.getElementById('harmonyHexInput').value = hex;
      renderHarmony(hex);
      applyColorToPhoto(hex);
    });
    row.appendChild(b);
  });
}

function renderHarmony(hex){
  hex = normalizeHex(hex);
  if(!isValidHex(hex)) return;
  var scheme = generateHarmony(hex);
  var mount = document.getElementById('harmonyResults');
  if(!mount) return;

  function renderGroup(label, colors){
    var items = [hex].concat(colors);
    var html = items.map(function(c, i){
      var isBase = i === 0;
      return '<button type="button" class="swatch harmony-swatch" data-hex="'+c+'" aria-label="'+c+(isBase?' (base color)':'')+' — click to copy and try on your photo">'+
        '<div class="sw-color" style="background:'+c+'"></div>'+
        '<div class="sw-label">'+c+(isBase?' · base':'')+'</div>'+
        '<div class="copied-badge">Applied!</div>'+
      '</button>';
    }).join('');
    return '<div class="harmony-group"><h4>'+label+'</h4><div class="palette-row">'+html+'</div></div>';
  }

  mount.innerHTML =
    renderGroup('Complementary', scheme.complementary) +
    renderGroup('Analogous', scheme.analogous) +
    renderGroup('Triadic', scheme.triadic) +
    renderGroup('Split-Complementary', scheme.splitComplementary);

  mount.querySelectorAll('.harmony-swatch').forEach(function(btn){
    btn.addEventListener('click', function(){
      copyToClipboard(btn.dataset.hex);
      applyColorToPhoto(btn.dataset.hex);
      btn.classList.add('copied');
      setTimeout(function(){ btn.classList.remove('copied'); }, 1000);
    });
  });
}

/* =========================================================
   11. GARMENT RECOLOR TOOL
   Finds the pixels that match a sampled "garment" color (your coat/shirt)
   and replaces just that color — keeping the original shading, folds and
   highlights intact — instead of drawing a flat shape over the photo.
   This is a pixel-color heuristic (hue + saturation matching in HSL
   space), not real garment/segmentation detection, so it works best on a
   single solid-colored garment that's visually distinct from the skin,
   hair and background behind it.
   ========================================================= */
var RECOLOR_HUE_TOLERANCE = 32;   // degrees on the color wheel
var RECOLOR_SAT_TOLERANCE = 38;   // percentage points
var RECOLOR_NEUTRAL_SAT_MAX = 15; // below this, treat the sampled color as "neutral" (white/grey/black garment)
var RECOLOR_LUM_TOLERANCE = 36;   // for neutral-garment matching

/** Draw the flat illustrative "drape" shape used only when there's no real photo to recolor. */
function drawIllustrativeDrape(ctx, W, H, hex){
  var topY = H * 0.62;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, H);
  ctx.lineTo(0, topY + 22);
  ctx.quadraticCurveTo(W * 0.5, topY - 20, W, topY + 22);
  ctx.lineTo(W, H);
  ctx.closePath();
  ctx.fillStyle = hex;
  ctx.globalAlpha = 0.94;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.moveTo(W*0.5 - 20, topY);
  ctx.lineTo(W*0.5, topY + 18);
  ctx.lineTo(W*0.5 + 20, topY);
  ctx.strokeStyle = 'rgba(0,0,0,.16)';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

function drawGenericBust(ctx, W, H, hex){
  var grad = ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'#f3e8ff'); grad.addColorStop(1,'#fce7f3');
  ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
  ctx.fillStyle = '#e8d3b8';
  ctx.beginPath();
  ctx.ellipse(W/2, H*0.32, W*0.20, H*0.22, 0, 0, Math.PI*2);
  ctx.fill();
  drawIllustrativeDrape(ctx, W, H, hex);
}

/** Sample the average color at a relative (0-1, 0-1) point on a canvas. */
function samplePixelFromCanvas(canvas, rx, ry){
  var ctx = canvas.getContext('2d', {willReadFrequently:true});
  var x = clamp(Math.round(rx*canvas.width), 0, canvas.width-1);
  var y = clamp(Math.round(ry*canvas.height), 0, canvas.height-1);
  var radius = Math.max(2, Math.round(canvas.width*0.025));
  var x0=clamp(x-radius,0,canvas.width-1), x1=clamp(x+radius,0,canvas.width-1);
  var y0=clamp(y-radius,0,canvas.height-1), y1=clamp(y+radius,0,canvas.height-1);
  var w=x1-x0+1, h=y1-y0+1;
  var data = ctx.getImageData(x0,y0,w,h).data;
  var r=0,g=0,b=0,count=0;
  for(var i=0;i<data.length;i+=4){ r+=data[i]; g+=data[i+1]; b+=data[i+2]; count++; }
  return [Math.round(r/count), Math.round(g/count), Math.round(b/count)];
}

/** Load (and cache) the pristine, un-recolored version of the current result's photo. */
function loadOriginalPhoto(callback){
  if(!state.lastResult || !state.lastResult.photoDataUrl){ callback(null); return; }
  if(state.originalPhotoImg){ callback(state.originalPhotoImg); return; }
  var img = new Image();
  img.onload = function(){ state.originalPhotoImg = img; callback(img); };
  img.onerror = function(){ callback(null); };
  img.src = state.lastResult.photoDataUrl;
}

/** Two HSL colors are "the same cluster" if hue+saturation AND lightness are
 * close (or both count as neutral / low-saturation greys). The lightness
 * check matters even for hue-matching colors: skin and a garment can share
 * a hue family (e.g. both pinkish) while being very different tones, and
 * without gating on lightness too they'd wrongly merge into one "region". */
function colorsCluster(aHsl, bHsl){
  var aNeutral = aHsl.s < RECOLOR_NEUTRAL_SAT_MAX, bNeutral = bHsl.s < RECOLOR_NEUTRAL_SAT_MAX;
  if(aNeutral && bNeutral) return Math.abs(aHsl.l - bHsl.l) < 22;
  if(aNeutral !== bNeutral) return false;
  var hueDiff = Math.abs(aHsl.h - bHsl.h);
  if(hueDiff > 180) hueDiff = 360 - hueDiff;
  return hueDiff < 30 && Math.abs(aHsl.s - bHsl.s) < 35 && Math.abs(aHsl.l - bHsl.l) < 32;
}

/** A much STRICTER version of colorsCluster, used only for growing the
 * background flood fill from one grid cell into its immediate neighbor.
 * colorsCluster's looser tolerance is meant for judging "are these two
 * ALREADY-SAMPLED points the same region", a one-shot comparison — but
 * chaining that same loose tolerance step-by-step across a fine grid
 * lets the fill "leak": a smooth lighting gradient (or shadow/fold on a
 * garment) can drift a little at a time, cell to cell, until the region
 * has wandered from a light background all the way into a completely
 * different, much darker garment color a few steps later. Requiring each
 * individual step to be a close match keeps the fill inside one visually
 * flat region and stops it at real edges, while still tolerating the
 * ordinary pixel-to-pixel noise a flat studio background has. */
function regionAdjacent(aHsl, bHsl){
  var aNeutral = aHsl.s < RECOLOR_NEUTRAL_SAT_MAX, bNeutral = bHsl.s < RECOLOR_NEUTRAL_SAT_MAX;
  if(aNeutral && bNeutral) return Math.abs(aHsl.l - bHsl.l) < 9;
  if(aNeutral !== bNeutral) return false;
  var hueDiff = Math.abs(aHsl.h - bHsl.h);
  if(hueDiff > 180) hueDiff = 360 - hueDiff;
  return hueDiff < 12 && Math.abs(aHsl.s - bHsl.s) < 14 && Math.abs(aHsl.l - bHsl.l) < 11;
}

/** The HSL of the skin/hair colors already sampled in Stage 2, so garment
 * and background detection can both avoid mistaking a face for "the region". */
function knownSkinHairHsl(){
  var knownHsl = [];
  if(state.samples){
    if(state.samples.skin) knownHsl.push(rgbToHsl(state.samples.skin.rgb[0], state.samples.skin.rgb[1], state.samples.skin.rgb[2]));
    if(state.samples.hair) knownHsl.push(rgbToHsl(state.samples.hair.rgb[0], state.samples.hair.rgb[1], state.samples.hair.rgb[2]));
  }
  return knownHsl;
}

/** Shared by initClothingSample/initBackgroundSample: throws out any
 * candidate point that clearly matches a known skin/hair tone, clusters
 * what's left by color, and returns the biggest cluster's average position
 * + color — a solid region usually covers more of the grid than any one
 * stray patch does. */
function pickBiggestClusterSample(candidates, knownHsl){
  var filtered = knownHsl.length ? candidates.filter(function(c){
    return !knownHsl.some(function(k){ return colorsCluster(c.hsl, k); });
  }) : candidates;
  var pool = filtered.length >= 3 ? filtered : candidates;

  // Compare each new point to a cluster's RUNNING AVERAGE color, not to
  // whichever point happened to be added to it first. A real garment
  // has natural shading across it (a lit lapel vs. a shadowed fold), and
  // comparing everything back to one fixed first sample fragments that
  // single physical region into several small clusters the moment the
  // shading drifts past the tolerance from that one point — letting a
  // smaller but more uniform patch (a shirt sliver, say) outnumber the
  // garment purely on a clustering technicality. Letting the reference
  // drift with the cluster's own average absorbs gradual shading while
  // still keeping genuinely different colors (a white shirt, a grey tie)
  // in their own clusters.
  var clusters = [];
  pool.forEach(function(c){
    var best = null, bestScore = Infinity;
    clusters.forEach(function(cl){
      if(!colorsCluster(c.hsl, cl.avgHsl)) return;
      var score = Math.abs(c.hsl.h - cl.avgHsl.h) + Math.abs(c.hsl.s - cl.avgHsl.s) + Math.abs(c.hsl.l - cl.avgHsl.l);
      if(score < bestScore){ bestScore = score; best = cl; }
    });
    if(best){
      best.members.push(c);
      best.sum[0] += c.rgb[0]; best.sum[1] += c.rgb[1]; best.sum[2] += c.rgb[2];
      var n = best.members.length;
      best.avgHsl = rgbToHsl(best.sum[0]/n, best.sum[1]/n, best.sum[2]/n);
    } else {
      clusters.push({ members:[c], sum:[c.rgb[0], c.rgb[1], c.rgb[2]], avgHsl: c.hsl });
    }
  });
  clusters.sort(function(a,b){ return b.members.length - a.members.length; });

  var winners = clusters[0].members;
  var sum = [0,0,0], sx=0, sy=0;
  winners.forEach(function(m){ sum[0]+=m.rgb[0]; sum[1]+=m.rgb[1]; sum[2]+=m.rgb[2]; sx+=m.x; sy+=m.y; });
  var n2 = winners.length;
  return {
    x: sx/n2, y: sy/n2,
    rgb: [Math.round(sum[0]/n2), Math.round(sum[1]/n2), Math.round(sum[2]/n2)]
  };
}

/**
 * Builds a fine grid of averaged colors across the whole photo, then
 * flood-fills "background" inward from the TOP of the frame (and the
 * upper portion of the left/right edges) using local color similarity
 * between neighboring cells — not a fixed set of guessed coordinates.
 *
 * Why the top (and not all four edges): in a headshot/portrait crop the
 * bottom of the frame is almost always the subject's chest/coat, not
 * background, so seeding from the bottom would flood-fill the ENTIRE
 * garment as "background" the moment it's a single solid color. The top
 * of the frame (above the head) and the upper sides are reliably
 * background in virtually any portrait framing, so growing outward from
 * there — following actual color continuity rather than an assumed
 * shape — finds the real background region regardless of how the photo
 * is cropped, zoomed or off-center. Everything the flood fill can't
 * reach from up there is "foreground" (face, hair, coat, shirt, tie);
 * excluding the already-known skin/hair tones from that leaves the
 * garment. This is still a color heuristic, not real segmentation, but
 * it adapts to the photo's actual layout instead of assuming one.
 */
function buildRegionMap(img, W, H){
  var off = document.createElement('canvas');
  off.width = W; off.height = H;
  drawImageCover(off.getContext('2d'), img, 0, 0, W, H);
  var ctx = off.getContext('2d', {willReadFrequently:true});
  var data = ctx.getImageData(0, 0, W, H).data;

  var cols = 46, rows = 56;
  var cellW = W / cols, cellH = H / rows;
  var cells = new Array(cols * rows);
  for(var r=0; r<rows; r++){
    for(var c=0; c<cols; c++){
      var cx = (c + 0.5) * cellW, cy = (r + 0.5) * cellH;
      var x0 = clamp(Math.round(cx - cellW*0.4), 0, W-1), x1 = clamp(Math.round(cx + cellW*0.4), 0, W-1);
      var y0 = clamp(Math.round(cy - cellH*0.4), 0, H-1), y1 = clamp(Math.round(cy + cellH*0.4), 0, H-1);
      var sr=0, sg=0, sb=0, n=0;
      for(var yy=y0; yy<=y1; yy++){
        for(var xx=x0; xx<=x1; xx++){
          var idx = (yy*W + xx) * 4;
          sr += data[idx]; sg += data[idx+1]; sb += data[idx+2]; n++;
        }
      }
      var rgb = [Math.round(sr/n), Math.round(sg/n), Math.round(sb/n)];
      cells[r*cols+c] = { x:(c+0.5)/cols, y:(r+0.5)/rows, rgb:rgb, hsl: rgbToHsl(rgb[0], rgb[1], rgb[2]) };
    }
  }

  // Pure color-continuity flood fill — deliberately NOT gated on the
  // Stage-2 skin/hair sample here. A warm/beige studio background can
  // land very close to a warm skin tone in hue+lightness, differing
  // mainly in saturation; gating the fill on "does this look like skin"
  // was throwing out real background cells near the corners whenever
  // that happened, leaving unfilled beige "islands" that then got
  // mistaken for foreground. Hair/skin still won't falsely join the
  // background region on their own merits: they're reliably darker or
  // higher-saturation than the connected background around them, so the
  // color-similarity check alone keeps the fill out of the face and hair.
  var isBg = new Array(cols*rows).fill(false);
  var queue = [];
  var bgSumR = 0, bgSumG = 0, bgSumB = 0, bgCount = 0;
  function seed(i){
    if(isBg[i]) return;
    isBg[i] = true;
    queue.push(i);
    bgSumR += cells[i].rgb[0]; bgSumG += cells[i].rgb[1]; bgSumB += cells[i].rgb[2]; bgCount++;
  }
  for(var c0=0; c0<cols; c0++){ seed(c0); seed(cols + c0); } // top 2 rows
  var sideRows = Math.round(rows * 0.45); // upper ~45% of the side edges
  for(var r0=0; r0<sideRows; r0++){
    seed(r0*cols); seed(r0*cols + 1);
    seed(r0*cols + cols-1); seed(r0*cols + cols-2);
  }

  var qi = 0;
  while(qi < queue.length){
    var i = queue[qi++];
    var r2 = Math.floor(i / cols), c2 = i % cols;
    var here = cells[i];
    // Also compare each candidate to the background region's running
    // average color (not just its one immediate neighbor). A gradual
    // vignette still passes this since the average drifts slowly with
    // it, but a garment reached only through a chain of small
    // step-by-step nudges won't — it'll have wandered far from the
    // region's overall average long before it's actually reached.
    var avgHsl = rgbToHsl(bgSumR/bgCount, bgSumG/bgCount, bgSumB/bgCount);
    var neighbors = [[r2-1,c2], [r2+1,c2], [r2,c2-1], [r2,c2+1]];
    for(var k=0; k<neighbors.length; k++){
      var nr = neighbors[k][0], nc = neighbors[k][1];
      if(nr<0 || nr>=rows || nc<0 || nc>=cols) continue;
      var ni = nr*cols + nc;
      if(isBg[ni]) continue;
      if(regionAdjacent(here.hsl, cells[ni].hsl) && regionAdjacent(avgHsl, cells[ni].hsl)) seed(ni);
    }
  }

  return { cells:cells, isBg:isBg, cols:cols, rows:rows };
}

/** Finds roughly where the shoulders start: the topmost row where BOTH
 * the far-left and far-right columns are foreground (not background) for
 * several rows in a row. A head is narrower than the frame, so its rows
 * still show background at the outer edges; shoulders/a coat are wide
 * enough to reach edge-to-edge. This sidesteps color entirely — no
 * amount of a garment happening to share a hair-like or skin-like tone
 * can fool a purely geometric "how wide is the foreground here" check,
 * which is what a color-only hair/skin exclusion was vulnerable to
 * (dark hair and a dark coat are often nearly the same color). Falls
 * back to an approximate midpoint if the frame never clearly widens
 * (e.g. a very loose/wide crop where background remains beside the
 * shoulders too). */
function findShoulderLine(map){
  var cols = map.cols, rows = map.rows;
  var widths = new Array(rows);
  for(var r=0; r<rows; r++){
    var w = 0;
    for(var c=0; c<cols; c++){ if(!map.isBg[r*cols+c]) w++; }
    widths[r] = w;
  }
  // The neck/chin is the narrowest point of the silhouette; shoulders
  // flare out wider than it. Find that narrowest width in the plausible
  // neck/chin band, then walk down from there to the first point the
  // foreground has clearly started widening past it — that's the top of
  // the shoulder slope, not the row where it finally reaches edge-to-edge
  // (which can be well below the actual shoulder line on a tighter crop).
  var bandStart = Math.round(rows * 0.25), bandEnd = Math.round(rows * 0.65);
  var neckWidth = null;
  for(var r2=bandStart; r2<bandEnd; r2++){
    if(widths[r2] > 0 && (neckWidth === null || widths[r2] < neckWidth)) neckWidth = widths[r2];
  }
  if(!neckWidth) return 0.55;
  var threshold = neckWidth * 1.3, needed = 2, streak = 0;
  for(var r3=bandStart; r3<rows; r3++){
    if(widths[r3] >= threshold){
      streak++;
      if(streak >= needed) return Math.max(0, r3 - needed + 1) / rows;
    } else {
      streak = 0;
    }
  }
  return 0.55;
}

/** The region NOT reachable from the top/upper-sides background flood
 * fill is the subject — face, hair, coat/shirt/tie. Restricting to cells
 * at/below the shoulder line (see findShoulderLine) keeps this to the
 * garment even when the coat happens to share a similar dark tone with
 * the hair; excluding the already-sampled skin tone on top of that
 * catches any bit of neck/chest visible through an open collar. A solid
 * coat/blazer usually covers more of what's left than a tie or
 * shirt-collar sliver does, so the biggest cluster is the garment. */
function initClothingSample(img, W, H){
  var map = buildRegionMap(img, W, H);
  var shoulderY = findShoulderLine(map);
  var fgCandidates = [];
  for(var i=0; i<map.cells.length; i++){
    if(!map.isBg[i] && map.cells[i].y >= shoulderY) fgCandidates.push(map.cells[i]);
  }
  if(fgCandidates.length < 3){
    fgCandidates = [];
    for(var j=0; j<map.cells.length; j++){ if(!map.isBg[j]) fgCandidates.push(map.cells[j]); }
  }
  // Deliberately NOT excluding the Stage-2 "known skin" tone here: the
  // shoulder line above already keeps this to the torso, and the
  // Stage-2 skin sample is just one point that itself won't always be
  // accurate — if it happens to land close to the garment's own color
  // (a dark coat and a mis-sampled "skin" reading can coincide), using
  // it to exclude candidates would wrongly throw out the actual coat.
  // A stray bit of neck skin below the shoulder line is a small minority
  // of the area compared to the garment, so the biggest-cluster pick
  // below naturally favors the coat anyway.
  state.clothingSample = pickBiggestClusterSample(fgCandidates.length ? fgCandidates : map.cells, []);
}

/** The region the flood fill in buildRegionMap reaches from the top/upper
 * sides of the frame IS the background — grown from actual color
 * continuity instead of guessed coordinates, so it adapts to however the
 * photo happens to be framed. Used when recolorMode is 'background'.
 * (No skin/hair filtering here: the connectivity mask has already
 * isolated the real background, and filtering it further by "does this
 * resemble skin" is exactly what let a warm-toned background get
 * mistaken for skin in some photos — see buildRegionMap above.) */
function initBackgroundSample(img, W, H){
  var map = buildRegionMap(img, W, H);
  var bgCandidates = [];
  for(var i=0; i<map.cells.length; i++){ if(map.isBg[i]) bgCandidates.push(map.cells[i]); }
  state.clothingSample = pickBiggestClusterSample(bgCandidates.length ? bgCandidates : map.cells, []);
}

/** Detects the region to recolor using whichever strategy matches the
 * current mode: the clothing/torso grid, or the background border ring. */
function initRecolorSample(img, W, H){
  if(state.recolorMode === 'background') initBackgroundSample(img, W, H);
  else initClothingSample(img, W, H);
}

/** Recolor every pixel in `canvas` whose color is close to `seedRgb`,
 * replacing its hue/saturation with `targetHex` while keeping each
 * pixel's own lightness so shading, folds and highlights are preserved.
 * Returns the fraction (0-1) of pixels that were meaningfully changed,
 * so the caller can warn the user when almost nothing matched. */
function recolorRegion(canvas, seedRgb, targetHex){
  var W = canvas.width, H = canvas.height;
  var ctx = canvas.getContext('2d', {willReadFrequently:true});
  var imgData = ctx.getImageData(0, 0, W, H);
  var data = imgData.data;

  var seedHsl = rgbToHsl(seedRgb[0], seedRgb[1], seedRgb[2]);
  var targetRgb = hexToRgb(targetHex);
  var targetHsl = rgbToHsl(targetRgb[0], targetRgb[1], targetRgb[2]);
  var seedIsNeutral = seedHsl.s < RECOLOR_NEUTRAL_SAT_MAX;
  var matchedPixels = 0, totalPixels = data.length / 4;

  for(var i=0; i<data.length; i+=4){
    var r=data[i], g=data[i+1], b=data[i+2];
    var hsl = rgbToHsl(r,g,b);
    var matchScore;

    if(seedIsNeutral){
      // white/grey/black garments: hue is meaningless, match on lightness + low saturation instead
      matchScore = hsl.s > 28 ? 0 : clamp(1 - Math.abs(hsl.l - seedHsl.l)/RECOLOR_LUM_TOLERANCE, 0, 1);
    } else {
      var hueDiff = Math.abs(hsl.h - seedHsl.h);
      if(hueDiff > 180) hueDiff = 360 - hueDiff;
      var hueScore = clamp(1 - hueDiff/RECOLOR_HUE_TOLERANCE, 0, 1);
      var satScore = clamp(1 - Math.abs(hsl.s - seedHsl.s)/RECOLOR_SAT_TOLERANCE, 0, 1);
      // Soft falloff (not a hard cutoff) near deep-shadow/blown-highlight folds,
      // so the darkest/brightest parts of the garment still pick up the color
      // instead of being left as untouched patches.
      var extremesPenalty = 1;
      if(hsl.l < 8) extremesPenalty = clamp(hsl.l / 8, 0.2, 1);
      else if(hsl.l > 94) extremesPenalty = clamp((100 - hsl.l) / 6, 0.2, 1);
      matchScore = hueScore * satScore * extremesPenalty;
    }

    if(matchScore > 0.02){
      matchedPixels++;
      var newL = clamp(hsl.l * 0.75 + targetHsl.l * 0.25, 4, 96); // mostly keep original shading
      var newRgb = hslToRgb(targetHsl.h, targetHsl.s, newL);
      data[i]   = Math.round(r + (newRgb[0]-r) * matchScore);
      data[i+1] = Math.round(g + (newRgb[1]-g) * matchScore);
      data[i+2] = Math.round(b + (newRgb[2]-b) * matchScore);
    }
  }
  ctx.putImageData(imgData, 0, 0);
  return matchedPixels / totalPixels;
}

function drawClothingMarker(ctx, W, H){
  if(!state.clothingSample) return;
  var x = state.clothingSample.x * W, y = state.clothingSample.y * H;
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 8, 0, Math.PI*2);
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#7b2ff7';
  ctx.stroke();
  ctx.restore();
}

/**
 * Apply `hex` to the user's photo by recoloring the sampled garment region
 * (see recolorRegion) and — this is the "auto-save" — immediately pushes
 * the result into the header photo thumbnail too, so it's applied
 * everywhere on screen the instant you click a swatch, no save step
 * needed. Download buttons then just export this live canvas.
 */
function applyColorToPhoto(hex){
  if(!isValidHex(normalizeHex(hex))) return;
  hex = normalizeHex(hex);
  state.drapeColor = hex;

  // The small Recolor-tool canvas (results page) and the Color Harmony
  // section's full-size canvas show the SAME photo/crop — every color
  // application updates both together, so they never fall out of sync.
  var canvases = [document.getElementById('drapeCanvas'), document.getElementById('harmonyCanvas')].filter(Boolean);
  if(!canvases.length) return;

  loadOriginalPhoto(function(img){
    if(!img){
      state.cleanRecolorCanvases = null;
      canvases.forEach(function(canvas){
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height);
        drawGenericBust(ctx, canvas.width, canvas.height, hex);
      });
      updateAppliedColorInfo(hex);
      hideGarmentDetect();
      updateRecolorCopy(false);
      return;
    }
    if(!state.clothingSample) initRecolorSample(img, canvases[0].width, canvases[0].height);

    var primaryFraction = null;
    canvases.forEach(function(canvas){
      var ctx = canvas.getContext('2d');
      var W = canvas.width, H = canvas.height;
      // Always recolor a FRESH copy of the original photo (never a previous
      // recolor result), so repeated color changes never drift or compound.
      var work = document.createElement('canvas');
      work.width = W; work.height = H;
      drawImageCover(work.getContext('2d'), img, 0, 0, W, H);
      var matchedFraction = recolorRegion(work, state.clothingSample.rgb, hex);
      if(primaryFraction === null) primaryFraction = matchedFraction;

      // Keep this clean (no marker-dot) version around so downloads and
      // the full-size/crop view can use it — the little purple marker dot
      // is an on-screen "here's what we're detecting" indicator only, it
      // should never end up baked into an exported photo.
      state.cleanRecolorCanvases = state.cleanRecolorCanvases || {};
      state.cleanRecolorCanvases[canvas.id] = work;

      ctx.clearRect(0,0,W,H);
      ctx.drawImage(work, 0, 0);
      drawClothingMarker(ctx, W, H);
    });

    syncResultPhotoFromDrape();
    updateAppliedColorInfo(hex);
    updateGarmentDetect(state.clothingSample.rgb);
    updateRecolorCopy(true);

    if(primaryFraction < 0.02){
      var spot = state.recolorMode === 'background' ? 'the background' : 'your coat/shirt';
      showToast("That color barely matched anything — click directly on " + spot + " in the photo above, then try the color again.");
    }
  });
}

/** Keeps every bit of "what are we recoloring" copy — in both the
 * results-page Recolor tool and the Color Harmony section's photo column —
 * in sync with the current mode (clothing vs background) and with whether
 * a real photo is available yet. Also keeps the mode-toggle buttons (there
 * are two independent copies, one per section) showing the same selection. */
function updateRecolorCopy(hasPhoto){
  var isBg = state.recolorMode === 'background';
  var heading = document.getElementById('recolorHeading');
  var desc = document.getElementById('recolorDesc');
  var clickText = isBg
    ? '👆 Click the background in the photo above to tell us exactly what to recolor.'
    : '👆 Click your coat/shirt in the photo above to tell us exactly what to recolor.';
  var noPhotoCaption = 'Take the quiz above to try this on your own photo.';
  var hasPhotoCaption = isBg
    ? 'Applied instantly — your background color updates everywhere on this page.'
    : 'Applied instantly — this updates your photo everywhere on this page.';

  if(heading) heading.textContent = isBg ? '🖼️ Recolor The Background' : '🧣 Recolor Your Coat / Shirt';
  if(desc) desc.textContent = isBg
    ? 'This finds your photo’s actual background by its color and recolors just that region — not a flat overlay. Click any swatch below (or enter a hex code); it applies straight to your photo above with no extra save step, and downloads exactly as shown.'
    : 'This finds the actual garment in your photo by its color and recolors just that region — not a flat overlay. Click any swatch below (or enter a hex code); it applies straight to your photo above with no extra save step, and downloads exactly as shown.';

  ['drape', 'harmony'].forEach(function(prefix){
    var caption = document.getElementById(prefix + 'Caption');
    var hint = document.getElementById(prefix + 'ClickHint');
    if(caption) caption.textContent = hasPhoto ? hasPhotoCaption : noPhotoCaption;
    if(hint){ hint.textContent = clickText; hint.hidden = !hasPhoto; }
  });

  document.querySelectorAll('.drape-canvas-wrap').forEach(function(wrap){
    wrap.classList.toggle('no-photo', !hasPhoto);
  });

  document.querySelectorAll('.recolor-mode-toggle .mode-btn').forEach(function(btn){
    var isActive = btn.dataset.mode === state.recolorMode;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

/** Wires the "👕 Clothing Color / 🖼️ Background Color" toggle — there are
 * two copies of it (results page + Harmony section) but they always act as
 * one shared switch: clicking either one changes what BOTH photos detect
 * and recolor, forces a fresh detection pass (the old sample point belonged
 * to the other mode), and re-applies whatever color is currently active. */
function wireRecolorMode(){
  document.querySelectorAll('.recolor-mode-toggle .mode-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var mode = btn.dataset.mode;
      if(mode === state.recolorMode) return;
      state.recolorMode = mode;
      state.clothingSample = null; // force re-detection under the new mode
      updateRecolorCopy(!!(state.lastResult && state.lastResult.photoDataUrl));
      var currentColor = state.drapeColor || (state.lastResult ? SEASONS[state.lastResult.season].best[0] : '#7B2FF7');
      applyColorToPhoto(currentColor);
      showToast(mode === 'background' ? 'Now recoloring the background.' : 'Now recoloring your clothing.');
    });
  });
}

/** Keeps the HEX/RGB/HSL detail cards (right under your photo) in sync with
 * whatever color was just applied — updates live on every click, so those
 * codes always match exactly what's now showing on the picture. */
function updateAppliedColorInfo(hex){
  var rgb = hexToRgb(hex);
  var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
  var elHex = document.getElementById('detHex');
  var elRgb = document.getElementById('detRgb');
  var elHsl = document.getElementById('detHsl');
  if(elHex) elHex.textContent = hex;
  if(elRgb) elRgb.textContent = rgb.join(', ');
  if(elHsl) elHsl.textContent = hsl.h + '°, ' + hsl.s + '%, ' + hsl.l + '%';
}

/** Shows a small live swatch of whatever color was auto-detected (or
 * manually clicked) as "the garment", so it's obvious what's about to get
 * recolored and easy to spot when it picked the wrong spot. */
function updateGarmentDetect(rgb){
  var wrap = document.getElementById('garmentDetect');
  var chip = document.getElementById('garmentDetectChip');
  var hexEl = document.getElementById('garmentDetectHex');
  if(!wrap || !chip || !hexEl) return;
  var hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
  chip.style.background = hex;
  hexEl.textContent = hex;
  wrap.hidden = false;
}
function hideGarmentDetect(){
  var wrap = document.getElementById('garmentDetect');
  if(wrap) wrap.hidden = true;
}

/** Re-sample what to treat as "the garment" from a click point on the
 * (undistorted) original photo, then re-apply the current color. */
function resampleClothingAt(rx, ry){
  loadOriginalPhoto(function(img){
    if(!img) return;
    var canvas = document.getElementById('drapeCanvas');
    var W = canvas.width, H = canvas.height;
    var off = document.createElement('canvas');
    off.width = W; off.height = H;
    drawImageCover(off.getContext('2d'), img, 0, 0, W, H);
    state.clothingSample = { x: rx, y: ry, rgb: samplePixelFromCanvas(off, rx, ry) };
    applyColorToPhoto(state.drapeColor || (state.lastResult ? SEASONS[state.lastResult.season].best[0] : '#7B2FF7'));
    showToast('Got it — now recoloring that area.');
  });
}

/** Push the current drape-canvas pixels (photo with color applied) into the
 * header result-photo thumbnail, so the "picture" itself visibly updates. */
function syncResultPhotoFromDrape(){
  var canvas = document.getElementById('drapeCanvas');
  var photoImg = document.getElementById('resultPhoto');
  if(!canvas || !photoImg || photoImg.style.display === 'none') return;
  try{
    photoImg.src = canvas.toDataURL('image/png');
    photoImg.alt = 'Your photo with ' + state.drapeColor + ' applied to your coat/shirt';
  }catch(e){ /* ignore */ }
}

function wireDrape(){
  var customBtn = document.getElementById('drapeCustomBtn');
  var customInput = document.getElementById('drapeHexInput');
  if(!customBtn) return;
  function applyCustom(){
    var v = normalizeHex(customInput.value);
    if(isValidHex(v)){
      applyColorToPhoto(v);
    } else {
      showToast('Please enter a valid 6-digit hex color, e.g. #7B2FF7');
    }
  }
  customBtn.addEventListener('click', applyCustom);
  customInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ e.preventDefault(); applyCustom(); }
  });

  // Both the results-page canvas AND the Color Harmony section's canvas
  // (same photo, same crop) get click-to-resample the same way — whichever
  // one you click on, it re-detects the garment from that spot and
  // re-applies the current color to both.
  document.querySelectorAll('.drape-canvas-wrap').forEach(function(canvasWrap){
    canvasWrap.addEventListener('click', function(e){
      if(!state.lastResult || !state.lastResult.photoDataUrl){
        showToast('Upload a real photo above to use the recolor tool.');
        return;
      }
      var rect = canvasWrap.getBoundingClientRect();
      var rx = clamp((e.clientX - rect.left) / rect.width, 0, 1);
      var ry = clamp((e.clientY - rect.top) / rect.height, 0, 1);
      resampleClothingAt(rx, ry);
    });
  });

  wireDownloadButton('downloadDrapeBtn', 'drapeCanvas', 'recolored');
  wireDownloadButton('downloadHarmonyBtn', 'harmonyCanvas', 'harmony-fullsize');
}

/** Wires a "download this canvas as PNG" button. Shared by the results-page
 * Recolor tool and the Color Harmony section's full-size photo download —
 * both just export whatever canvas they're paired with. */
function wireDownloadButton(btnId, canvasId, suffix){
  var downloadBtn = document.getElementById(btnId);
  if(!downloadBtn) return;
  downloadBtn.addEventListener('click', function(){
    var canvas = document.getElementById(canvasId);
    if(!canvas) return;
    // Export the clean (no purple marker-dot) version when one's been kept
    // for this canvas — the dot is only an on-screen "here's what we're
    // detecting" indicator and should never appear in a downloaded photo.
    var sourceCanvas = (state.cleanRecolorCanvases && state.cleanRecolorCanvases[canvasId]) || canvas;
    var season = state.lastResult ? SEASONS[state.lastResult.season] : null;
    var namePart = season ? season.key : 'photo';
    var modePart = state.recolorMode === 'background' ? 'background' : 'clothing';
    try{
      var link = document.createElement('a');
      link.download = 'color-analysis-' + namePart + '-' + modePart + '-' + suffix + '.png';
      link.href = sourceCanvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(state.recolorMode === 'background' ? 'Photo downloaded with your recolored background!' : 'Photo downloaded with your recolored garment!');
    }catch(e){
      showToast('Could not download this image — try a different photo.');
    }
  });
}

/* =========================================================
   VIEW FULL SIZE / CROP MODAL
   Lets someone see their recolored photo bigger, optionally drag a crop
   box down to just the part they want, then download either the full
   photo or just that crop. Reuses whichever clean (no marker-dot)
   recolored canvas applyColorToPhoto already produced — the Harmony
   section's 680×800 one when available, since that's already the
   highest-resolution version on the page — so this always matches
   exactly what's shown/downloaded elsewhere, with no re-detection risk.
   ========================================================= */
function getFullSizeCleanCanvas(){
  var m = state.cleanRecolorCanvases;
  if(!m) return null;
  return m.harmonyCanvas || m.drapeCanvas || null;
}

function openCropModal(){
  var canvas = getFullSizeCleanCanvas();
  if(!canvas){
    showToast('Upload a real photo above to use this.');
    return;
  }
  var displayCanvas = document.getElementById('cropCanvas');
  displayCanvas.width = canvas.width;
  displayCanvas.height = canvas.height;
  displayCanvas.getContext('2d').drawImage(canvas, 0, 0);
  document.getElementById('cropModal').hidden = false;
  requestAnimationFrame(resetCropBox);
}

function closeCropModal(){
  document.getElementById('cropModal').hidden = true;
}

/** Snaps the crop box back to cover the entire displayed photo. */
function resetCropBox(){
  var displayCanvas = document.getElementById('cropCanvas');
  var stage = document.getElementById('cropStage');
  var box = document.getElementById('cropBox');
  var cRect = displayCanvas.getBoundingClientRect();
  var stageRect = stage.getBoundingClientRect();
  box.style.left = (cRect.left - stageRect.left) + 'px';
  box.style.top = (cRect.top - stageRect.top) + 'px';
  box.style.width = cRect.width + 'px';
  box.style.height = cRect.height + 'px';
}

/** Crops the displayed canvas to whatever the crop box currently covers
 * (converting from its on-screen CSS pixels to the canvas's own native
 * pixel resolution, so the exported file is always full quality — never
 * just a screenshot of the shrunk-down preview) and downloads it. If the
 * box hasn't been moved from covering the whole photo, this is simply a
 * full-size download. */
/** Reads the crop box's current on-screen position/size, converts it from
 * CSS pixels to the displayed canvas's own native pixel resolution (so a
 * crop is always full quality, never just a screenshot of the shrunk-down
 * preview), and cuts out that region into a brand-new canvas. Shared by
 * the "Download" and "Apply Crop" buttons so they always agree on exactly
 * what "the current crop" means. */
function getCroppedCanvas(){
  var displayCanvas = document.getElementById('cropCanvas');
  var stage = document.getElementById('cropStage');
  var box = document.getElementById('cropBox');
  var cRect = displayCanvas.getBoundingClientRect();
  var stageRect = stage.getBoundingClientRect();
  var canvasOffsetLeft = cRect.left - stageRect.left, canvasOffsetTop = cRect.top - stageRect.top;

  var boxLeft = parseFloat(box.style.left) || 0, boxTop = parseFloat(box.style.top) || 0;
  var boxW = parseFloat(box.style.width) || cRect.width, boxH = parseFloat(box.style.height) || cRect.height;
  var cssX = boxLeft - canvasOffsetLeft, cssY = boxTop - canvasOffsetTop;

  var scaleX = displayCanvas.width / cRect.width, scaleY = displayCanvas.height / cRect.height;
  var sx = clamp(Math.round(cssX * scaleX), 0, displayCanvas.width - 1);
  var sy = clamp(Math.round(cssY * scaleY), 0, displayCanvas.height - 1);
  var sw = clamp(Math.round(boxW * scaleX), 1, displayCanvas.width - sx);
  var sh = clamp(Math.round(boxH * scaleY), 1, displayCanvas.height - sy);

  var out = document.createElement('canvas');
  out.width = sw; out.height = sh;
  out.getContext('2d').drawImage(displayCanvas, sx, sy, sw, sh, 0, 0, sw, sh);
  return { canvas: out, isFullCrop: sw >= displayCanvas.width - 2 && sh >= displayCanvas.height - 2 };
}

function downloadCrop(){
  var result = getCroppedCanvas();
  var season = state.lastResult ? SEASONS[state.lastResult.season] : null;
  var namePart = season ? season.key : 'photo';
  var modePart = state.recolorMode === 'background' ? 'background' : 'clothing';
  try{
    var link = document.createElement('a');
    link.download = 'color-analysis-' + namePart + '-' + modePart + (result.isFullCrop ? '-fullsize' : '-cropped') + '.png';
    link.href = result.canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(result.isFullCrop ? 'Full-size photo downloaded!' : 'Cropped photo downloaded!');
  }catch(e){
    showToast('Could not download this image — try again.');
  }
}

/** Makes the current crop selection the new "working photo": every color
 * swatch, the mode toggle, and both the Recolor-tool and Harmony-section
 * canvases from here on use THIS cropped image, exactly like a freshly
 * uploaded photo would. Clears the old garment/background detection (it
 * belonged to the old, uncropped framing) so the next color click
 * re-detects correctly on the new crop, then re-applies whatever color
 * was already active so the person sees the result immediately and can
 * keep trying other colors before downloading. */
function applyCropAsPhoto(){
  var result = getCroppedCanvas();
  if(result.isFullCrop){
    showToast('That crop is the same as the full photo — drag the corner handles in to crop it first.');
    return;
  }
  var newDataUrl = result.canvas.toDataURL('image/png');
  if(state.lastResult) state.lastResult.photoDataUrl = newDataUrl;
  state.originalPhotoImg = null;       // force loadOriginalPhoto to reload from the new dataURL
  state.clothingSample = null;         // old sample belonged to the old framing
  state.cleanRecolorCanvases = null;

  closeCropModal();
  var currentColor = state.drapeColor || (state.lastResult ? SEASONS[state.lastResult.season].best[0] : '#7B2FF7');
  applyColorToPhoto(currentColor);
  showToast('Crop applied — try other colors any time, then download whenever you’re ready.');
}

/** Drag-to-move and drag-corner-handles-to-resize for the crop box, kept
 * within the bounds of the displayed photo at all times. Uses Pointer
 * Events so the same code handles mouse and touch. */
function wireCropBoxInteractions(){
  var box = document.getElementById('cropBox');
  var stage = document.getElementById('cropStage');
  var dragMode = null;
  var startPointer = {x:0, y:0};
  var startBox = {left:0, top:0, width:0, height:0};
  var MIN_SIZE = 30;

  function clampBox(l, t, w, h){
    var cRect = document.getElementById('cropCanvas').getBoundingClientRect();
    var stageRect = stage.getBoundingClientRect();
    var minX = cRect.left - stageRect.left, minY = cRect.top - stageRect.top;
    var maxX = minX + cRect.width, maxY = minY + cRect.height;
    w = Math.min(w, maxX - minX); h = Math.min(h, maxY - minY);
    l = clamp(l, minX, maxX - Math.max(w, MIN_SIZE));
    t = clamp(t, minY, maxY - Math.max(h, MIN_SIZE));
    w = clamp(w, MIN_SIZE, maxX - l);
    h = clamp(h, MIN_SIZE, maxY - t);
    return {left:l, top:t, width:w, height:h};
  }

  box.addEventListener('pointerdown', function(e){
    dragMode = (e.target.classList && e.target.classList.contains('crop-handle')) ? e.target.dataset.corner : 'move';
    startPointer = {x:e.clientX, y:e.clientY};
    startBox = {
      left: parseFloat(box.style.left) || 0, top: parseFloat(box.style.top) || 0,
      width: parseFloat(box.style.width) || 0, height: parseFloat(box.style.height) || 0
    };
    try{ box.setPointerCapture(e.pointerId); }catch(err){ /* ignore */ }
    e.preventDefault();
  });

  box.addEventListener('pointermove', function(e){
    if(!dragMode) return;
    var dx = e.clientX - startPointer.x, dy = e.clientY - startPointer.y;
    var l = startBox.left, t = startBox.top, w = startBox.width, h = startBox.height;
    if(dragMode === 'move'){ l += dx; t += dy; }
    else if(dragMode === 'nw'){ l += dx; t += dy; w -= dx; h -= dy; }
    else if(dragMode === 'ne'){ t += dy; w += dx; h -= dy; }
    else if(dragMode === 'sw'){ l += dx; w -= dx; h += dy; }
    else if(dragMode === 'se'){ w += dx; h += dy; }
    var next = clampBox(l, t, w, h);
    box.style.left = next.left + 'px'; box.style.top = next.top + 'px';
    box.style.width = next.width + 'px'; box.style.height = next.height + 'px';
  });

  function endDrag(e){
    dragMode = null;
    try{ box.releasePointerCapture(e.pointerId); }catch(err){ /* ignore */ }
  }
  box.addEventListener('pointerup', endDrag);
  box.addEventListener('pointercancel', endDrag);
}

function wireCropModal(){
  var modal = document.getElementById('cropModal');
  if(!modal) return;

  function openIfPhoto(){
    if(!state.lastResult || !state.lastResult.photoDataUrl){
      showToast('Upload a real photo above to use this.');
      return;
    }
    openCropModal();
  }
  var viewDrapeBtn = document.getElementById('viewFullDrapeBtn');
  var viewHarmonyBtn = document.getElementById('viewFullHarmonyBtn');
  if(viewDrapeBtn) viewDrapeBtn.addEventListener('click', openIfPhoto);
  if(viewHarmonyBtn) viewHarmonyBtn.addEventListener('click', openIfPhoto);

  document.getElementById('cropCloseBtn').addEventListener('click', closeCropModal);
  modal.addEventListener('click', function(e){ if(e.target === modal) closeCropModal(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && !modal.hidden) closeCropModal(); });
  document.getElementById('cropResetBtn').addEventListener('click', resetCropBox);
  document.getElementById('cropApplyBtn').addEventListener('click', applyCropAsPhoto);
  document.getElementById('cropDownloadBtn').addEventListener('click', downloadCrop);

  wireCropBoxInteractions();
}

/** Wires the "+ Add Color" control next to "Your Best Colors": lets someone
 * pick or type any hex, saves it to that season's palette (localStorage,
 * so it survives a reload), re-renders the palette rows so it shows up
 * as a real clickable/copyable swatch, and applies it to the photo right
 * away — consistent with every other swatch's auto-apply behavior. */
function wireAddColor(){
  var picker = document.getElementById('addColorPicker');
  var hexInput = document.getElementById('addColorHexInput');
  var btn = document.getElementById('addColorBtn');
  if(!btn || !picker || !hexInput) return;

  picker.addEventListener('input', function(){
    hexInput.value = picker.value.toUpperCase();
  });
  hexInput.addEventListener('input', function(){
    var v = normalizeHex(hexInput.value);
    if(isValidHex(v)) picker.value = v;
  });

  function doAdd(){
    if(!state.lastResult){
      showToast('Take the quiz first so we know which season to add this to.');
      return;
    }
    var v = normalizeHex(hexInput.value) || normalizeHex(picker.value);
    if(!isValidHex(v)){
      showToast('Please enter a valid 6-digit hex color, e.g. #7B2FF7');
      return;
    }
    var added = addCustomColorFor(state.lastResult.season, v);
    refreshPaletteRows();
    applyColorToPhoto(v);
    showToast(added ? ('Added ' + v + ' to Your Best Colors!') : (v + ' is already in Your Best Colors — applied it to your photo.'));
    hexInput.value = '';
  }

  btn.addEventListener('click', doAdd);
  hexInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ e.preventDefault(); doAdd(); }
  });
}

// Exposed globally instead of self-invoking: Next.js's <Script> component
// only fetches/executes this file's *source* once per app lifetime, but the
// homepage (with its fresh dropzone/buttons/etc.) can mount again later —
// e.g. the user navigates Blog -> Home via client-side routing. The
// QuizScriptLoader component (components/QuizScriptLoader.jsx) calls this
// via Script's onReady, which fires both on first load AND on every later
// remount, so event listeners always get (re)attached to the DOM that is
// actually on screen.
window.initColorQuizApp = initColorQuizApp;
})();
