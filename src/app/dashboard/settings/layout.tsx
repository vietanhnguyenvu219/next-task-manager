import React from 'react'

export default function SettingsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <header style={{ marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Settings</h2>
        <nav style={{ marginTop: 8 }}>
          <a href="/dashboard/settings/profile" style={{ marginRight: 12 }}>
            Profile
          </a>
          <a href="/dashboard/settings/account">Account</a>
        </nav>
      </header>
      <div>{children}</div>
    </section>
  )
}
