import React from 'react'
import ThemeToggle from '../../components/ThemeToggle'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-slate-900 p-4 text-white">
        <div className="flex items-center justify-between">
          <h2 className="m-0 text-lg">Dashboard</h2>
          <div>
            <ThemeToggle />
          </div>
        </div>
        <nav className="mt-3">
          <a href="/dashboard" className="my-2 block text-white">
            Home
          </a>
          <a href="/dashboard/settings" className="my-2 block text-white">
            Settings
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
