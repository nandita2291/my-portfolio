import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nandita Sajeev Portfolio',
  description: 'Portfolio',
  icons: {
    icon: '/profile.jpeg', // or /favicon.png or /favicon.svg
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.jpeg" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
