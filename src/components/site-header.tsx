import Link from "next/link"

import { Logo } from "@/components/logo"
import { Container } from "@/components/container"

export function SiteHeader() {
  return (
    <header className="border-b border-b-gray-200 bg-white">
      <Container className="flex h-20 items-center justify-between gap-x-4 py-2">
        <div className="flex items-center gap-x-3">
          <Link
            href="/"
            className="flex items-center gap-x-2.5 focus:outline-2
              focus:outline-offset-4 focus:outline-gray-800"
          >
            <Logo />
          </Link>
        </div>
      </Container>
    </header>
  )
}
