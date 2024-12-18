"use client"

import { useTheme } from "next-themes"
import { SunIcon, MoonIcon, MonitorCogIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { cn } from "@/lib/utils"

const themes = [
  { label: "Light", value: "light", icon: SunIcon },
  { label: "Dark", value: "dark", icon: MoonIcon },
  { label: "System", value: "system", icon: MonitorCogIcon },
]

export function ToggleTheme() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex size-9 items-center justify-center rounded-md bg-gray-100",
            "text-gray-700 transition-colors hover:bg-gray-200 hover:text-black",
            "focus-visible:outline focus-visible:outline-2",
            "focus-visible:outline-offset-2 focus-visible:outline-black",
            "dark:bg-neutral-800 dark:text-neutral-400",
            "dark:hover:bg-neutral-800 dark:hover:text-neutral-200",
            "dark:focus-visible:outline-neutral-200"
          )}
        >
          <SunIcon className="size-5 scale-100 dark:scale-0" />
          <MoonIcon className="absolute size-5 scale-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={5}>
        {themes.map(({ label, value, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className="group"
          >
            <Icon
              className={cn(
                "size-4 text-gray-500 transition-colors group-hover:text-gray-700",
                "dark:text-neutral-400 dark:group-hover:text-neutral-300"
              )}
            />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
