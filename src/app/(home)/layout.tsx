import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div>Header</div>
      <main className="grid flex-1">{children}</main>
      <div>Footer</div>
    </div>
  )
}
