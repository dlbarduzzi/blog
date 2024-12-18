import type { ComponentProps, HTMLProps } from "react"

import Link from "next/link"
import { MDXContent } from "@content-collections/mdx/react"

import { cn } from "@/lib/utils"

const h2 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-6 mt-10 font-heading text-xl font-black tracking-tight text-accent",
        "first:mt-0 md:text-2xl"
      )}
      {...props}
    />
  )
}

const h3 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "mb-6 mt-10 font-heading text-lg font-black tracking-tight text-accent",
        "first:mt-0 md:text-xl"
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
    "text-foreground hover:text-accent hover:decoration-accent font-extrabold",
    "underline decoration-gray-300 decoration-2 underline-offset-2",
    "transition-colors"
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
  return (
    <p className={cn("text-base font-normal leading-7 text-foreground")} {...props} />
  )
}

const strong = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <strong className="font-extrabold text-foreground" {...props} />
}

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none">
      <MDXContent code={code} components={{ h2, h3, a, p, strong, ...components }} />
    </div>
  )
}
