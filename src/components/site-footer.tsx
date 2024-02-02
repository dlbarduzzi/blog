import { Logo } from "@/components/logo"
import { Container } from "@/components/container"

import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        <div
          className="flex flex-col gap-y-2 py-5 sm:flex-row sm:items-center
            sm:justify-between sm:gap-x-4 sm:gap-y-0"
        >
          <Logo className="w-12" />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
