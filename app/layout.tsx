import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({ subsets: ['latin'] })
const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K&G Golf - Keep On Going Golf Apparel & Accessories',
  description: 'Shop premium golf apparel, bags, accessories, and more. K&G Keep On Going Golf - elevate your game with style and performance.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
