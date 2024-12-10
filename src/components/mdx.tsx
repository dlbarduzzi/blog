import type { ComponentProps, HTMLProps } from "react"

import Link from "next/link"
import { MDXContent } from "@content-collections/mdx/react"

import { cn } from "@/lib/utils"

const h2 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-5 mt-14 text-2xl font-normal tracking-tight text-red first:mt-0"
      )}
      {...props}
    />
  )
}

const a = ({ href, ...props }: HTMLProps<HTMLAnchorElement>) => {
  if (typeof href !== "string") {
    throw new TypeError("href is required")
  }

  const className = cn(
    "font-extrabold text-foreground underline decoration-gray6",
    "decoration-2 underline-offset-2 hover:text-red hover:decoration-red"
  )

  if (href.startsWith("/")) {
    return <Link href={href} className={className} {...props} />
  }

  return (
    <a
      {...props}
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}

const p = ({ ...props }: HTMLProps<HTMLParagraphElement>) => {
  return <p className="text-lg font-normal text-foreground" {...props} />
}

const strong = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <strong className="font-extrabold" {...props} />
}

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none">
      <MDXContent code={code} components={{ h2, a, p, strong, ...components }} />
    </div>
  )
}
