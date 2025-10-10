import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "Esther's Birthday Internship Project",
  description: "Hi, I'm Esther — and today's my birthday! As a determined student passionate about finance & consulting, I'm celebrating by sharing my journey and seeking an internship opportunity.",
  keywords: ['Esther Chen', 'Finance', 'Consulting', 'Internship', 'Birthday', 'Student'],
  authors: [{ name: 'Esther Chen' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

