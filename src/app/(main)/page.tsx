import type { Post } from "contentlayer/generated"

import Link from "next/link"

import { allPosts } from "contentlayer/generated"
import { FaArrowRightLong } from "react-icons/fa6"

import { Container } from "@/components/container"

import { cn } from "@/lib/utils"
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
        <div className="mx-auto max-w-5xl space-y-10 divide-y divide-gray-200">
          {posts.map((post, index) => (
            <Article key={post.slug} post={post} isFirst={index === 0} />
          ))}
        </div>
      </Container>
    </div>
  )
}

type ArticleProps = {
  post: Post
  isFirst: boolean
}

function Article({ post, isFirst }: ArticleProps) {
  return (
    <article className={cn("md:flex md:gap-x-28", !isFirst && "pt-10")}>
      <div>
        <dl>
          <dt className="sr-only">Date</dt>
          <dd className="whitespace-nowrap text-sm leading-6 text-gray-500">
            <time dateTime={post.date}>{postDate(post.date)}</time>
          </dd>
        </dl>
      </div>
      <div className="pr-3 md:pr-6 lg:pr-20">
        <Link href={`/posts/${post.slug}`} className="group">
          <h2
            className="text-lg font-extrabold tracking-tight text-gray-900
              group-hover:text-gray-700"
          >
            {post.title}
          </h2>
          <div className="line-clamp-2 pt-4 text-gray-600">
            <p>{post.summary}</p>
          </div>
          <div className="pt-4">
            <span
              className="flex items-center gap-x-2 text-sm font-medium
                text-sky-500"
            >
              Read more
              <FaArrowRightLong
                className="h-3.5 w-3.5 duration-300 group-hover:ml-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      </div>
    </article>
  )
}
