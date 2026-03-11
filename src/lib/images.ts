// Centralized image registry
// - `IMAGES` holds public paths (strings) for assets in `public/`.
// - `STATIC_IMAGES` re-exports static imports so Next can read metadata at build time.

// Public paths (place your files under `public/images/`)
export const IMAGES = {
  logo: '/images/logo.svg',
  avatar: '/images/avatar.svg'
}

// Static imports (place source images under `assets/`)
// Static imports allow Next to read width/height metadata for `next/image`.
import logoStatic from '../assets/logo.svg'
export const STATIC_IMAGES = {
  logo: logoStatic
}

export default IMAGES
