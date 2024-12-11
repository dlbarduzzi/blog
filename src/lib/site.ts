export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "Blog",
  description: "A blog website about software development.",
  // TODO: Get url value from env.
  url: "http://localhost:3000",
}
