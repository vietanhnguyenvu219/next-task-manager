'use client'

import React, { createContext, useContext, useState } from 'react'

type LoadingContextValue = {
  isLoading: boolean
  setLoading: (v: boolean) => void
}

const LoadingContext = createContext<LoadingContextValue | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  const value = {
    isLoading,
    setLoading: setIsLoading
  }

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}

export function useLoading() {
  const ctx = useContext(LoadingContext)
  if (!ctx) throw new Error('useLoading must be used within LoadingProvider')
  return ctx
}

export default LoadingContext
