import HeaderPublic from '@/components/HeaderPublic'
import HeaderStatic from '@/components/HeaderStatic'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <HeaderPublic />
        <HeaderStatic />
      </main>
    </div>
  )
}
