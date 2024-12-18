import Link from "next/link"

import { allPosts } from "content-collections"
import { Container } from "@/components/container"

import { cn } from "@/lib/utils"

export default function Page() {
  const posts = allPosts.toSorted((a, b) => b.date.getTime() - a.date.getTime())
  return (
    <div className="py-8">
      <Container>
        <div className="space-y-7">
          {posts.map(post => (
            <Link
              key={post.title}
              href={`/blog/${post._meta.path}`}
              className={cn(
                "block rounded-md border border-border bg-background",
                "px-6 py-5 shadow-md hover:border-accent"
              )}
            >
              <article>
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd className="text-sm text-muted">
                    <time dateTime={post.date.toISOString()}>
                      {new Date(post.date).toLocaleDateString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </dd>
                </dl>
                <h3
                  className={cn(
                    "pt-5 font-heading text-lg font-black tracking-tight text-accent"
                  )}
                >
                  {post.title}
                </h3>
                <p className="leading-7 text-foreground">{post.subtitle}</p>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
