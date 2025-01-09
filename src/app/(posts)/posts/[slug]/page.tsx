import { Container } from "@/components/container"

import { notFound } from "next/navigation"
import { allPosts } from "content-collections"

import { cn } from "@/lib/utils"
import { Mdx } from "@/components/mdx"

export function generateStaticParams(): { slug: string }[] {
  return allPosts.map(post => ({ slug: post._meta.path }))
}

type Params = {
  readonly params: Promise<{ slug: string }>
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const post = allPosts.find(({ _meta }) => _meta.path === slug)

  if (!post) {
    return notFound()
  }

  return (
    <div className="2xl:bg-gray-100">
      <Container className="h-full">
        <section className="h-full bg-white pb-8 pt-12">
          <article className="mx-auto max-w-4xl">
            <div>
              <div className="text-left md:text-center">
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd className="text-sm">
                    <time dateTime={post.date.toISOString()}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </dd>
                </dl>
                <h1
                  className={cn(
                    "pt-5 font-sans text-2xl font-extrabold tracking-tight md:text-4xl"
                  )}
                >
                  {post.title}
                </h1>
                <p className="pt-1 text-sm uppercase tracking-wide md:text-base">
                  {post.subtitle}
                </p>
              </div>
              <div className="mt-10">
                <Mdx code={post.body} />
              </div>
            </div>
          </article>
        </section>
      </Container>
    </div>
  )
}
