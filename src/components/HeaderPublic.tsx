import Image from 'next/image'
import { IMAGES } from '../app/lib/images'

export default function HeaderPublic() {
  return (
    <header className="flex items-center gap-3">
      {/* Using public path: must provide width/height (or use fill) */}
      <Image src={IMAGES.logo} alt="Logo (public)" width={48} height={48} />
      <h1 className="text-xl font-semibold">App (Public)</h1>
    </header>
  )
}
