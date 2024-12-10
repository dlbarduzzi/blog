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
    <div className="mx-auto min-h-full w-full max-w-5xl bg-background">
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
            {post.title}
          </h1>
          <p className="pt-1 font-medium uppercase tracking-wide text-gray7">
            {post.description}
          </p>
        </div>
        <div className="pt-16">
          <Mdx code={post.body} />
        </div>
      </div>
    </div>
  )
}
