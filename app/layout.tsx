import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Memory game - UI Studio',
  description: 'Created with novacops',
  generator: 'novacops & UI studio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
