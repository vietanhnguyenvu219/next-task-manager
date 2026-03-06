'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'solar'
const THEMES: Theme[] = ['light', 'dark', 'solar']

type ThemeContextValue = {
  theme: Theme
  setTheme: (t: Theme) => void
  toggle: () => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme') as Theme | null
        if (saved && THEMES.includes(saved)) return saved
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
          return 'dark'
      }
    } catch {}
    return 'light'
  })

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const setTheme = (t: Theme) => setThemeState(t)
  const toggle = () => {
    const idx = THEMES.indexOf(theme)
    setThemeState(THEMES[(idx + 1) % THEMES.length])
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}

export default ThemeContext
