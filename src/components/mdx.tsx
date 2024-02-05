import * as React from "react"

import { useMDXComponent } from "next-contentlayer/hooks"

import { CustomLink } from "@/components/custom-link"

import { cn } from "@/lib/utils"

type MdxProps = {
  code: string
}

const components = {
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) => (
    <h2
      className={cn(
        "mb-5 mt-12 font-sans text-2xl font-bold tracking-tight text-gray-900",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) => (
    <h3
      className={cn(
        "mb-5 mt-12 font-sans text-xl font-bold tracking-tight text-gray-900",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "mb-6 font-sans text-base font-normal leading-7 text-gray-900",
        className
      )}
      {...props}
    />
  ),
  a: CustomLink,
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <div className="prose max-w-none">
      <Component components={components} />
    </div>
  )
}
