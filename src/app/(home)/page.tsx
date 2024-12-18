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
                "block rounded-md border border-gray-200 bg-white",
                "px-6 py-5 hover:border-gray-300"
              )}
            >
              <article>
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd className="text-sm text-gray-500">
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
                    "pt-5 font-heading text-lg font-black tracking-tight text-black"
                  )}
                >
                  {post.title}
                </h3>
                <p className="leading-7 text-black">{post.subtitle}</p>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
