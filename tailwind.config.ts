import type { Config } from "tailwindcss"

import tailwindcssForms from "@tailwindcss/forms"
import tailwindcssAnimate from "tailwindcss-animate"
import tailwindTypography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)"],
      heading: ["var(--font-heading)"],
      code: ["var(--font-code)"],
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "background-hover": "hsl(var(--background-hover))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
        outline: "hsl(var(--outline))",
        underline: "hsl(var(--underline))",
        "popover-background": "hsl(var(--popover-background))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        "popover-background-focus": "hsl(var(--popover-background-focus))",
        "popover-foreground-focus": "hsl(var(--popover-foreground-focus))",
        "popover-ring": "hsl(var(--popover-ring))",
      },
      keyframes: {
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "soft-spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "soft-spin": "soft-spin 1s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssForms, tailwindcssAnimate, tailwindTypography],
} satisfies Config
