import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const themes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
]

export function ToggleTheme() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Theme</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={2}>
        {themes.map(({ label, value }) => (
          <DropdownMenuItem key={value}>{label}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
