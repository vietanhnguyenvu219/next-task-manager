import Image from 'next/image'
import { STATIC_IMAGES } from '../app/lib/images'

export default function HeaderStatic() {
  return (
    <header style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {/* Using static import: Next can read metadata so width/height is optional */}
      <Image src={STATIC_IMAGES.logo} alt="Logo (static)" />
      <h1>App (Static)</h1>
    </header>
  )
}
