import Link from "next/link"

import { allPosts } from "content-collections"
import { Container } from "@/components/container"
import { ToggleTheme } from "@/components/toggle-theme"

export default function Page() {
  return (
    <div className="py-8">
      <Container>
        <ToggleTheme />
        <div className="mt-8 space-y-6">
          {allPosts.map(post => (
            <Link
              key={post.title}
              href={`/blog/${post._meta.path}`}
              className="border-gray-300 block rounded-md border px-4 py-5"
            >
              <p className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div>
                <h3>{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
