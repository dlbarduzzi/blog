import { Mdx } from "@/components/mdx"
import { notFound } from "next/navigation"
import { allPosts } from "content-collections"

export function generateStatictParams(): { slug: string }[] {
  return allPosts.map(post => ({ slug: post._meta.path }))
}

type Params = {
  readonly params: Promise<{ slug: string }>
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const post = allPosts.find(({ _meta }) => _meta.path === slug)

  if (!post) {
    // TODO: Create a not found page!
    notFound()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div>
        <h1>{post.title}</h1>
      </div>
      <div className="mt-10">
        <Mdx code={post.body} />
      </div>
    </div>
  )
}
