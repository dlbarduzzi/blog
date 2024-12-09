import { Mdx } from "@/components/mdx"
import { notFound } from "next/navigation"
import { allPosts } from "content-collections"
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
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="rounded-lg border-2 border-gray2 px-8 py-10">
        <Container className="max-w-4xl">
          <Mdx code={post.body} />
        </Container>
      </div>
    </div>
  )
}
