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
              <p className="text-xs">
                {new Date(post.date).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="pt-1 font-bold">{post.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
