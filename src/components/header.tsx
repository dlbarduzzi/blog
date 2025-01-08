import Link from "next/link"

import { Container } from "@/components/container"
import { SiteLogo } from "@/components/site-logo"

export function Header() {
  return (
    <header className="sticky inset-0 z-50 border-b border-b-gray-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-x-4">
          <div className="flex items-center">
            <Link href="/">
              <SiteLogo />
              <span className="sr-only">Link to home page.</span>
            </Link>
          </div>
          <div className="text-sm text-gray-600">Right</div>
        </div>
      </Container>
    </header>
  )
}
