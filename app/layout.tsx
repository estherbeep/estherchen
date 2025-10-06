import type { Metadata } from 'next'
import './globals.css'

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
      <body className="bg-beige-50 text-beige-900 antialiased">
        {children}
      </body>
    </html>
  )
}

