import type { ComponentProps, HTMLProps } from "react"

import Link from "next/link"
import { MDXContent } from "@content-collections/mdx/react"

import { cn } from "@/lib/utils"

const h2 = ({ ...props }: HTMLProps<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "mb-6 mt-10 font-heading text-xl font-black tracking-tight text-rose-500",
        "first:mt-0 md:text-2xl",
        "dark:text-yellow-300"
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
    "font-bold text-black underline decoration-gray-400 decoration-2",
    "underline-offset-2 transition-colors hover:text-rose-500",
    "hover:decoration-rose-400",
    "dark:text-neutral-100 dark:decoration-neutral-500",
    "dark:hover:text-yellow-300 dark:hover:decoration-yellow-300"
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
      className={cn(
        "text-base font-normal leading-7 text-black",
        "dark:text-neutral-200"
      )}
      {...props}
    />
  )
}

const strong = ({ ...props }: HTMLProps<HTMLElement>) => {
  return <strong className="font-bold text-black dark:text-neutral-100" {...props} />
}

export function Mdx({ code, components }: ComponentProps<typeof MDXContent>) {
  return (
    <div className="prose max-w-none">
      <MDXContent code={code} components={{ h2, a, p, strong, ...components }} />
    </div>
  )
}
