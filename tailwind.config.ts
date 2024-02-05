import type { Config } from "tailwindcss"

import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            a: {
              color: colors.sky["500"],
              fontWeight: "500",
              textDecoration: "none",
              "&:hover": {
                borderBottom: "2px solid currentColor",
                transitionDuration: "200ms",
                transitionProperty: "border-color",
              },
            },
            pre: {
              padding: "0px",
              borderRadius: "0px",
            },
            code: {
              padding: "4px 8px",
              background: colors.slate["200"],
              borderRadius: "6px",
            },
            "code::before": {
              content: "normal",
            },
            "code::after": {
              content: "normal",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}

export default config
