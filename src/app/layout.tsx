import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"
import localFont from "next/font/local"

import { ScreenSize } from "@/components/screen-size"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const rubikSans = localFont({
  src: [
    {
      path: "../fonts/Rubik.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../fonts/RubikItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
})

const caskaydiaCode = localFont({
  src: "../fonts/Caskaydia.ttf",
  variable: "--font-code",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-base text-black antialiased",
          "selection:bg-yellow-200 selection:text-black",
          rubikSans.variable,
          caskaydiaCode.variable
        )}
      >
        {children}
        <ScreenSize />
      </body>
    </html>
  )
}
