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
      head: ["var(--font-head)"],
      code: ["var(--font-code)"],
    },
    extend: {
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
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              quotes: "none",
            },
          },
        },
      },
    },
  },
  plugins: [tailwindcssForms, tailwindcssAnimate, tailwindTypography],
} satisfies Config
