"use client"

import { useTheme } from "next-themes"

const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
]
export function ToggleTheme() {
  const { setTheme } = useTheme()
  return (
    <div className="space-x-3">
      {themes.map(theme => (
        <button
          key={theme.value}
          onClick={() => setTheme(theme.value)}
          className="border border-gray-300 px-3 py-2"
        >
          {theme.label}
        </button>
      ))}
    </div>
  )
}
