import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"

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
      compileMDX(context, page, {})
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
