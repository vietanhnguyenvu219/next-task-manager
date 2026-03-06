'use client'

import { useTheme } from '../app/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme, toggle, themes } = useTheme()

  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          aria-pressed={t === theme}
          className={`rounded px-2 py-1 ${t === theme ? 'border-primary bg-surface border-2' : 'border'} text-sm`}
          style={{
            borderColor: t === theme ? 'var(--primary)' : 'rgba(0,0,0,0.08)',
            background: t === theme ? 'var(--surface)' : 'transparent'
          }}
        >
          {t}
        </button>
      ))}
      <button onClick={toggle} className="button ml-2">
        Cycle
      </button>
    </div>
  )
}
