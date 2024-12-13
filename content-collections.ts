import type { RehypeCodeOptions } from "fumadocs-core/mdx-plugins"

import { compileMDX } from "@content-collections/mdx"
import { defineCollection, defineConfig } from "@content-collections/core"
import { rehypeCode, remarkGfm, remarkHeading } from "fumadocs-core/mdx-plugins"

const rehypeCodeOptions: RehypeCodeOptions = {
  themes: {
    light: "min-light",
    dark: "material-theme",
  },
}

const posts = defineCollection({
  name: "posts",
  directory: "src/content/blog",
  include: "**/*.mdx",
  schema: z => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
  transform: async (page, context) => {
    const body = await context.cache(page.content, async () =>
      compileMDX(context, page, {
        remarkPlugins: [remarkGfm, remarkHeading],
        rehypePlugins: [[rehypeCode, rehypeCodeOptions]],
      })
    )
    return {
      ...page,
      body,
      date: new Date(page.date),
      slug: page._meta.path,
    }
  },
})

export default defineConfig({ collections: [posts] })
