import Link from "next/link"

import { Logo } from "./logo"
import { Container } from "@/components/container"

export function Header() {
  return (
    <header className="border-b border-b-gray1 bg-background">
      <Container>
        <nav className="flex h-14 items-center">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
