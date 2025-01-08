import { compileMDX } from "@content-collections/mdx"
import { defineCollection, defineConfig } from "@content-collections/core"

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: z => ({
    title: z.string(),
    subtitle: z.string(),
    timestamp: z.string(),
  }),
  transform: async (doc, ctx) => {
    const mdx = await ctx.cache(doc.content, async () => {
      return compileMDX(ctx, doc, {
        remarkPlugins: [],
        rehypePlugins: [],
      })
    })
    return {
      ...doc,
      body: mdx,
      date: new Date(doc.timestamp),
      slug: doc._meta.path,
    }
  },
})

export default defineConfig({ collections: [posts] })
