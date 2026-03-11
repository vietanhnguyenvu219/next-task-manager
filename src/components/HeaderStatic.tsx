import Image from 'next/image'
import { STATIC_IMAGES } from '@/lib/images'

export default function HeaderStatic() {
  return (
    <header className="flex items-center gap-3">
      {/* Using static import: Next can read metadata so width/height is optional */}
      <Image src={STATIC_IMAGES.logo} alt="Logo (static)" />
      <h1 className="text-xl font-semibold">App (Static)</h1>
    </header>
  )
}
