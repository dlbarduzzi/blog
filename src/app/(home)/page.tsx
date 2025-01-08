import Link from "next/link"

import { allPosts } from "content-collections"
import { Container } from "@/components/container"

import { cn } from "@/lib/utils"

export default function Page() {
  const posts = allPosts.toSorted((a, b) => b.date.getTime() - a.date.getTime())
  return (
    <div className="py-8">
      <Container>
        <section>
          <ul className="space-y-8">
            {posts.map(post => (
              <Link
                key={post._meta.path}
                href={`/posts/${post._meta.path}`}
                className="block"
              >
                <li
                  className={cn(
                    "rounded-md border border-gray-200 px-6 py-4 transition-colors",
                    "hover:border-gray-400"
                  )}
                >
                  <article>
                    <dl>
                      <dt className="sr-only">Date</dt>
                      <dd className="text-sm text-gray-600">
                        <time dateTime={post.date.toISOString()}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </dd>
                    </dl>
                    <h3 className="pt-5 font-head text-lg font-bold tracking-tight">
                      {post.title}
                    </h3>
                    <p className="leading-7 text-gray-800">{post.subtitle}</p>
                  </article>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </Container>
    </div>
  )
}
