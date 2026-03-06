import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { LoadingProvider } from './context/LoadingContext'
import LoadingOverlay from '../components/LoadingOverlay'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin', 'vietnamese'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'A simple task management application built with Next.js and TypeScript.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <LoadingProvider>
          {children}
          <LoadingOverlay />
        </LoadingProvider>
      </body>
    </html>
  )
}
