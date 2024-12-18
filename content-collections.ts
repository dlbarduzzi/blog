import type { Options as RehypePrettyCodeOptions } from "rehype-pretty-code"

import rehypePrettyCode from "rehype-pretty-code"

import { compileMDX } from "@content-collections/mdx"
import { defineCollection, defineConfig } from "@content-collections/core"
import { remarkGfm, remarkHeading } from "fumadocs-core/mdx-plugins"

const rehypePrettyCodeOptions: RehypePrettyCodeOptions = {
  theme: {
    dark: "catppuccin-mocha",
    light: "everforest-light",
  },
}

const posts = defineCollection({
  name: "posts",
  directory: "./src/blog",
  include: "**/*.mdx",
  schema: z => ({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
  }),
  transform: async (post, context) => {
    const body = await context.cache(post.content, async () => {
      return compileMDX(context, post, {
        remarkPlugins: [remarkGfm, remarkHeading],
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      })
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
