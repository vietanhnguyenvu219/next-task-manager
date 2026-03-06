import React from 'react'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 240, background: '#111827', color: '#fff', padding: 16 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Dashboard</h2>
        <nav style={{ marginTop: 12 }}>
          <a href="/dashboard" style={{ color: '#fff', display: 'block', margin: '8px 0' }}>
            Home
          </a>
          <a
            href="/dashboard/settings"
            style={{ color: '#fff', display: 'block', margin: '8px 0' }}
          >
            Settings
          </a>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 24 }}>{children}</main>
    </div>
  )
}
