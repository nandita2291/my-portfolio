import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nandita Sajeev - Software Developer",
  description: "Associate Software Developer with expertise in full-stack development using Angular and C# .NET",
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
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
