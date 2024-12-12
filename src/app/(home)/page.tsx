import Link from "next/link"

import { allPosts } from "content-collections"
import { Container } from "@/components/container"

export default function Page() {
  return (
    <div className="py-8">
      <Container>
        <div className="space-y-6">
          {allPosts.map(post => (
            <Link
              key={post.title}
              href={`/blog/${post._meta.path}`}
              className="block rounded-md border border-border px-4 py-3"
            >
              <article>
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd className="text-xs text-foreground">
                    <time dateTime={new Date(post.date).toLocaleDateString()}>
                      {new Date(post.date).toLocaleDateString("en-us", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </dd>
                </dl>
                <h3 className="pt-1 text-base font-bold text-foreground">
                  {post.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
