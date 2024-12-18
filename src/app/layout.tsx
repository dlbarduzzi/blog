import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"
import "@/styles/mdx.css"

import localFont from "next/font/local"

import { ScreenSize } from "@/components/screen-size"
import { ThemeProvider } from "@/providers/theme"

import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"

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

const nunitoSans = localFont({
  src: [
    {
      path: "../fonts/Nunito.ttf",
      weight: "100 1000",
      style: "normal",
    },
    {
      path: "../fonts/NunitoItalic.ttf",
      weight: "100 1000",
      style: "italic",
    },
  ],
  variable: "--font-heading",
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
          "dark:bg-neutral-900 dark:text-neutral-200",
          "dark:selection:bg-emerald-600 dark:selection:text-white",
          rubikSans.variable,
          nunitoSans.variable,
          caskaydiaCode.variable
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <ScreenSize />
      </body>
    </html>
  )
}
