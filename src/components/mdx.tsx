import type { ComponentProps } from "react"

import { MDXContent } from "@content-collections/mdx/react"

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none">
      <MDXContent
        code={code}
        components={{
          ...components,
        }}
      />
    </div>
  )
}
