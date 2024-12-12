import type { Config } from "tailwindcss"

import tailwindcssForms from "@tailwindcss/forms"
import tailwindcssAnimate from "tailwindcss-animate"

export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
    },
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      dark1: "var(--dark1)",
      dark2: "var(--dark2)",
      accent1: "var(--accent1)",
      accent2: "var(--accent2)",
      accent3: "var(--accent3)",
      accent4: "var(--accent4)",
      accent5: "var(--accent5)",
      accent6: "var(--accent6)",
      dimmed1: "var(--dimmed1)",
      dimmed2: "var(--dimmed2)",
      dimmed3: "var(--dimmed3)",
      dimmed4: "var(--dimmed4)",
      dimmed5: "var(--dimmed5)",
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
    },
  },
  plugins: [tailwindcssForms, tailwindcssAnimate],
} satisfies Config
