import { compileMDX } from "@content-collections/mdx"
import { defineCollection, defineConfig } from "@content-collections/core"

const posts = defineCollection({
  name: "posts",
  directory: "./src/blog",
  include: "**/*.mdx",
  schema: z => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
  transform: async (post, context) => {
    const body = await context.cache(post.content, async () => {
      return compileMDX(context, post, {})
    })
    return {
      ...post,
      body,
      date: new Date(post.date),
      slug: post._meta.path,
    }
  },
})

export default defineConfig({ collections: [posts] })
