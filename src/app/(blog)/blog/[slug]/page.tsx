import { notFound } from "next/navigation"
import { allPosts } from "content-collections"

import { Mdx } from "@/components/mdx"
import { Container } from "@/components/container"

import { cn } from "@/lib/utils"

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
    // TODO: Create a not found page!
    notFound()
  }

  return (
    <div className="py-8">
      <Container>
        <article>
          <div
            className={cn(
              "sm:border sm:border-gray-200 sm:px-8 sm:py-6 md:px-14 md:py-11",
              "lg:px-20 lg:py-14",
              "dark:sm:border-neutral-700"
            )}
          >
            <div className="text-left sm:text-center">
              <dl>
                <dt className="sr-only">Date</dt>
                <dd className="text-sm text-gray-500 dark:text-neutral-400">
                  <time dateTime={post.date.toISOString()}>
                    {new Date(post.date).toLocaleDateString("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </dd>
              </dl>
              <h1
                className={cn(
                  "pt-5 font-heading text-2xl font-black tracking-tighter",
                  "text-black md:text-4xl",
                  "dark:text-neutral-200"
                )}
              >
                {post.title}
              </h1>
              <p
                className={cn(
                  "pt-1 text-sm uppercase tracking-wide text-black md:text-base",
                  "dark:text-neutral-200"
                )}
              >
                {post.subtitle}
              </p>
            </div>
            <div className="mt-10">
              <Mdx code={post.body} />
            </div>
          </div>
        </article>
      </Container>
    </div>
  )
}
