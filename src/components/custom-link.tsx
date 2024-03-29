import type { AnchorHTMLAttributes } from "react"

import Link from "next/link"

export function CustomLink({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isAnchorLink = href && href.startsWith("#")
  const isInternalLink = href && href.startsWith("/")

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}
