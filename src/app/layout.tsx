import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"
import "@/styles/mdx.css"

import localFont from "next/font/local"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"
import { ThemeProvider } from "@/providers/theme"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const caskaydiaMono = localFont({
  src: "../fonts/CaskaydiaCoveNerdFontMono-Regular.ttf",
  variable: "--font-caskaydia-mono",
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
          "min-h-screen bg-background font-sans text-base text-foreground antialiased",
          geistSans.variable,
          geistMono.variable,
          caskaydiaMono.variable
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
