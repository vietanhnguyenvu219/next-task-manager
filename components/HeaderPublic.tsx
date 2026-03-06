import Image from 'next/image'
import { IMAGES } from '../app/lib/images'

export default function HeaderPublic() {
  return (
    <header style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {/* Using public path: must provide width/height (or use fill) */}
      <Image src={IMAGES.logo} alt="Logo (public)" width={48} height={48} />
      <h1>App (Public)</h1>
    </header>
  )
}
