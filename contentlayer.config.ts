import type { LocalDocument, ComputedFields } from "contentlayer/source-files"

import rehypePrettyCode from "rehype-pretty-code"

import { defineDocumentType, makeSource } from "contentlayer/source-files"

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (post: LocalDocument) => post._raw.flattenedPath.split("/")[1],
  },
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    date: {
      type: "date",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        // @todo: Find a better type definition.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rehypePrettyCode as any,
        {
          theme: "material-theme-darker",
        },
      ],
    ],
  },
})
