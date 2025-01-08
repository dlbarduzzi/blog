import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["@typescript-eslint/eslint-plugin"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "max-len": ["error", { code: 88 }],
      "no-unused-expressions": "error",
      "no-unused-vars": "off",
      "prefer-const": "error",
      quotes: [2, "double"],
    },
  }),
]

export default eslintConfig
