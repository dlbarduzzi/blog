import type { ComponentProps, HTMLProps } from "react"

import Link from "next/link"
import { MDXContent } from "@content-collections/mdx/react"

import { cn } from "@/lib/utils"

function Heading2({ ...props }: HTMLProps<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "mb-6 mt-10 font-head text-2xl font-normal tracking-tight",
        "text-sky-500 first:mt-0 md:text-2xl"
      )}
      {...props}
    />
  )
}

function Paragraph({ ...props }: HTMLProps<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base font-normal leading-7 text-gray-800")} {...props} />
  )
}

function Anchor({ href, ...props }: HTMLProps<HTMLAnchorElement>) {
  if (typeof href !== "string") {
    throw new TypeError("href is required")
  }

  const className = cn(
    "inline-block font-bold text-gray-900 underline decoration-gray-400 decoration-2",
    "underline-offset-2 transition-colors hover:text-sky-500",
    "hover:decoration-sky-400"
  )

  if (href.startsWith("/")) {
    return <Link href={href} className={className} {...props} />
  }

  if (href.startsWith("#")) {
    return <a href={href} className={className} {...props} />
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

function UnorderedList({ ...props }: HTMLProps<HTMLUListElement>) {
  return (
    <ul
      className={cn("ps-10 text-base font-normal leading-7 text-gray-800")}
      {...props}
    />
  )
}

function ListItem({ ...props }: HTMLProps<HTMLLIElement>) {
  return <li className={cn("marker:text-gray-300")} {...props} />
}

function Strong({ ...props }: HTMLProps<HTMLElement>) {
  return <strong className="font-bold text-gray-900" {...props} />
}

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none">
      <MDXContent
        code={code}
        components={{
          a: Anchor,
          p: Paragraph,
          h2: Heading2,
          ul: UnorderedList,
          li: ListItem,
          strong: Strong,
          ...components,
        }}
      />
    </div>
  )
}
