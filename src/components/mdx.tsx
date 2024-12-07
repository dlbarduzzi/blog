import type { ComponentProps } from "react"

import { MDXContent } from "@content-collections/mdx/react"

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div>
      <MDXContent code={code} components={{ ...components }} />
    </div>
  )
}
