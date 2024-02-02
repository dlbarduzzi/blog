import { env } from "@/lib/env"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "Blog",
  description: "A blog about software development.",
  url: env.NEXT_PUBLIC_APP_URL,
}
