import type React from "react"
import type { Metadata } from "next"
import { Poppins, Mulish, Prompt } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "600", "700", "900"],
})

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
  weight: ["300", "400", "700"],
})

const prompt = Prompt({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prompt",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Congreso Filosofía",
  description: "Congreso de Filosofía - November 9, 2024",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US" className={`${poppins.variable} ${mulish.variable} ${prompt.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
