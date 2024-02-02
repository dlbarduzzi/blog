import { allPosts } from "contentlayer/generated"

import { Container } from "@/components/container"

import { sortPosts, postDate } from "@/lib/contentlayer"

export default function Page() {
  const posts = sortPosts(allPosts)
  return (
    <div>
      <section aria-labelledby="homepage-header">
        <h2 id="homepage-header" className="sr-only">
          Welcome!
        </h2>
      </section>
      <Container className="py-8">
        <div className="mx-auto max-w-2xl space-y-6">
          {posts.map(post => (
            <div key={post.slug} className="rounded-xl bg-slate-100 px-3 py-4">
              <span className="text-sm">{postDate(post.date)}</span>
              <div className="pt-1.5">
                <h2 className="font-bold">{post.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
