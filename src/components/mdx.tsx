import type { ComponentProps, HTMLProps } from "react"

import Link from "next/link"
import { MDXContent } from "@content-collections/mdx/react"

import { cn } from "@/lib/utils"

const h1 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "mb-5 mt-14 text-2xl font-extrabold tracking-tight text-gray-900",
        "first:mt-0 md:text-3xl"
      )}
      {...props}
    />
  )
}

const h2 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-5 mt-14 text-xl font-extrabold tracking-tight text-gray-900",
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
        "mb-5 mt-14 text-2xl font-bold tracking-tight text-gray-900",
        "first:mt-0 md:text-3xl"
      )}
      {...props}
    />
  )
}

const h4 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "mb-5 mt-14 text-lg font-semibold tracking-tight text-gray-900",
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
    "font-extrabold text-gray-800 underline decoration-gray-400 decoration-2",
    "underline-offset-[3px] hover:text-rose-500 hover:decoration-rose-500"
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
    <p
      className="text-sm leading-6 text-gray-800 md:text-base md:leading-7"
      {...props}
    />
  )
}

const strong = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <strong className="font-extrabold tracking-tight text-gray-800" {...props} />
}

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none">
      <MDXContent
        code={code}
        components={{ h1, h2, h3, h4, a, p, strong, ...components }}
      />
    </div>
  )
}
