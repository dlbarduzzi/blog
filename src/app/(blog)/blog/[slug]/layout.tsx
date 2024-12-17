import type { ReactNode } from "react"

import { Header } from "@/components/header"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grid flex-1">{children}</main>
    </div>
  )
}
