import type { Config } from "tailwindcss"

import tailwindcssForms from "@tailwindcss/forms"
import tailwindcssAnimate from "tailwindcss-animate"
import tailwindTypography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      red: "var(--red)",
      orange: "var(--orange)",
      yellow: "var(--yellow)",
      green: "var(--green)",
      blue: "var(--blue)",
      magenta: "var(--magenta)",
      gray1: "var(--gray1)",
      gray2: "var(--gray2)",
      gray3: "var(--gray3)",
      gray4: "var(--gray4)",
      gray5: "var(--gray5)",
      gray6: "var(--gray6)",
      gray7: "var(--gray7)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
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
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            h2: {
              color: theme("colors.red"),
              fontSize: theme("fontSize.2xl"),
              fontWeight: theme("fontWeight.normal"),
              letterSpacing: theme("letterSpacing.tight"),
              marginTop: theme("margin.0"),
              marginBottom: theme("margin.5"),
            },
            p: {
              color: theme("colors.foregorund"),
              fontSize: theme("fontSize.lg"),
            },
            strong: {
              fontWeight: theme("fontWeight.extrabold"),
            },
          },
        },
      }),
    },
  },
  plugins: [tailwindcssForms, tailwindcssAnimate, tailwindTypography],
} satisfies Config
