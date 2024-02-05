import type { Metadata } from "next"

import { allPosts } from "contentlayer/generated"

import { Mdx } from "@/components/mdx"
import { Container } from "@/components/container"

import { postDate } from "@/lib/contentlayer"

type PageProps = {
  params: {
    slug: string
  }
}

async function getPostFromParams(slug: string) {
  const post = allPosts.find(post => post.slug === slug)

  if (!post) {
    return null
  }

  return post
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostFromParams(params.slug)

  if (!post) {
    return {}
  }

  return { title: post.title, description: post.summary }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPosts.map(post => ({ slug: post.slug }))
}

export default async function Page({ params }: PageProps) {
  const post = await getPostFromParams(params.slug)

  if (!post) {
    return (
      <Container className="py-8">
        <p>Post not found!</p>
      </Container>
    )
  }

  return (
    <div>
      <section aria-labelledby={`${params.slug}`}>
        <h2 id={`${params.slug}`} className="sr-only">
          Welcome!
        </h2>
      </section>
      <Container className="py-8">
        <header className="pt-16">
          <div className="space-y-2 md:text-center">
            <dl>
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-sm font-medium text-gray-500">
                  <time dateTime={post.date}>{postDate(post.date)}</time>
                </dd>
              </div>
            </dl>
            <div>
              <h1
                className="text-balance text-4xl font-black leading-10
                  tracking-tight text-gray-900"
              >
                {post.title}
              </h1>
            </div>
          </div>
        </header>
        <div className="pt-20">
          <div className="md:mx-auto md:max-w-3xl">
            <Mdx code={post.body.code} />
          </div>
        </div>
      </Container>
    </div>
  )
}
