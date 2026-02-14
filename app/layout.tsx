import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { MusicPlayer } from "@/components/MusicPlayer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "My Valentine",
  description: "A journey through our moments",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          playfair.variable,
          inter.variable
        )}
      >
        {children}
        <MusicPlayer />
      </body>
    </html>
  )
}
