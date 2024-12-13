import Link from "next/link"

import { Logo } from "@/components/logo"
import { Container } from "@/components/container"
import { ToggleTheme } from "@/components/toggle-theme"

import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header
      className={cn(
        "border-b border-b-gray-200 bg-white",
        "dark:border-b-neutral-700 dark:bg-neutral-900"
      )}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-x-4">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "rounded focus-visible:outline focus-visible:outline-2",
                "focus-visible:outline-offset-2 focus-visible:outline-black",
                "dark:focus-visible:outline-neutral-200"
              )}
            >
              <Logo />
              <span className="sr-only">Link to homepage.</span>
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <div>
              <ToggleTheme />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
