import { notFound } from "next/navigation"
import { allPosts } from "content-collections"

import { Mdx } from "@/components/mdx"
import { Container } from "@/components/container"

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
    <Container>
      <div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
        <div>
          <Mdx code={post.body} />
        </div>
      </div>
    </Container>
  )
}
