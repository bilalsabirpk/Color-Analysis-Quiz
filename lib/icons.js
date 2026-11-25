// One set of flat, outline-style icons for the whole site. No sparkle /
// "magic" style icons: they read as AI, and this site makes no AI claims. (Material Design
// Icons by Pictogrammers, Apache-2.0, via @mdi/js). Use <Icon name="..."> in
// React, or iconSvg(name) where markup is built as an HTML string.
// public/quiz-logic.js keeps its own small copy of the few paths it needs,
// because it is a plain script and cannot import this module.
import {
  mdiAlertOutline, mdiArmFlex, mdiBottleTonicOutline, mdiBrushVariant, mdiBullhornOutline,
  mdiBullseyeArrow, mdiCameraOutline, mdiCancel, mdiCellphone, mdiChartBar, mdiChartLine,
  mdiChatOutline, mdiCheck, mdiCheckCircleOutline, mdiCircleHalfFull, mdiCircleOutline,
  mdiClockOutline, mdiClose, mdiCodeTags, mdiCookieOutline, mdiDiceMultipleOutline, mdiEarth,
  mdiEmailOutline, mdiEyeOutline, mdiFaceWomanOutline, mdiHumanFemale, mdiEyedropper, mdiCircleMedium,
  mdiFileDocumentOutline, mdiFlowerOutline, mdiFlowerTulipOutline, mdiFullscreen, mdiGestureTap,
  mdiGiftOutline, mdiHairDryerOutline, mdiHandWaveOutline, mdiHandshakeOutline, mdiHanger,
  mdiHeart, mdiHeartOutline, mdiImageOutline, mdiLeafMaple, mdiLightbulbOutline, mdiLipstick,
  mdiLockOutline, mdiMagnify, mdiMapOutline, mdiNoteTextOutline, mdiPalette,
  mdiPaletteSwatchOutline, mdiRing, mdiShieldCheckOutline, mdiSnowflake, mdiStar,
  mdiStarOutline, mdiThermometer, mdiToolboxOutline, mdiTrendingUp,
  mdiTshirtCrewOutline, mdiWaves, mdiWeb,
} from '@mdi/js';

export const ICON_PATHS = {
  alert: mdiAlertOutline,
  autumn: mdiLeafMaple,
  blog: mdiNoteTextOutline,
  blush: mdiFlowerTulipOutline,
  brush: mdiBrushVariant,
  camera: mdiCameraOutline,
  cancel: mdiCancel,
  chart: mdiChartBar,
  chat: mdiChatOutline,
  check: mdiCheck,
  'check-circle': mdiCheckCircleOutline,
  clock: mdiClockOutline,
  close: mdiClose,
  code: mdiCodeTags,
  contrast: mdiCircleHalfFull,
  cookie: mdiCookieOutline,
  dice: mdiDiceMultipleOutline,
  document: mdiFileDocumentOutline,
  dress: mdiHanger,
  earth: mdiEarth,
  email: mdiEmailOutline,
  eye: mdiEyeOutline,
  face: mdiFaceWomanOutline,
  person: mdiHumanFemale,
  eyedropper: mdiEyedropper,
  dot: mdiCircleMedium,
  flower: mdiFlowerOutline,
  foundation: mdiBottleTonicOutline,
  fullscreen: mdiFullscreen,
  gift: mdiGiftOutline,
  hair: mdiHairDryerOutline,
  handshake: mdiHandshakeOutline,
  heart: mdiHeart,
  'heart-outline': mdiHeartOutline,
  idea: mdiLightbulbOutline,
  image: mdiImageOutline,
  lipstick: mdiLipstick,
  lock: mdiLockOutline,
  map: mdiMapOutline,
  megaphone: mdiBullhornOutline,
  neutral: mdiCircleOutline,
  palette: mdiPalette,
  palettes: mdiPaletteSwatchOutline,
  phone: mdiCellphone,
  ring: mdiRing,
  search: mdiMagnify,
  shield: mdiShieldCheckOutline,
  spring: mdiFlowerTulipOutline,
  star: mdiStar,
  'star-outline': mdiStarOutline,
  strength: mdiArmFlex,
  summer: mdiWaves,
  tap: mdiGestureTap,
  target: mdiBullseyeArrow,
  thermometer: mdiThermometer,
  toolbox: mdiToolboxOutline,
  trend: mdiChartLine,
  improve: mdiTrendingUp,
  tshirt: mdiTshirtCrewOutline,
  wave: mdiHandWaveOutline,
  web: mdiWeb,
  winter: mdiSnowflake,
};

// Season key ('spring' | 'summer' | 'autumn' | 'winter') -> icon name.
export const SEASON_ICON = { spring: 'spring', summer: 'summer', autumn: 'autumn', winter: 'winter' };

export function iconSvg(name, size = 18, className = 'icon') {
  const d = ICON_PATHS[name];
  if (!d) return '';
  return `<svg class="${className}" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" focusable="false"><path fill="currentColor" d="${d}"/></svg>`;
}
