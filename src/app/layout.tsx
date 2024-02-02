import type { Metadata, Viewport } from "next"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "@/styles/globals.css"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"
import { TailwindIndicator } from "@/components/tailwind-indicator"

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
          `min-h-screen bg-white font-sans text-gray-900 antialiased
          selection:bg-sky-200`,
          GeistMono.variable,
          GeistSans.variable
        )}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
