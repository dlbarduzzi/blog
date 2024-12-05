import { env } from "@/env/client"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "Blog",
  description: "A blog website about software development.",
  url: env.NEXT_PUBLIC_BASE_URL,
}
