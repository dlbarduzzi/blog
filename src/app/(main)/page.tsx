import type { Post } from "contentlayer/generated"

import Link from "next/link"

import { allPosts } from "contentlayer/generated"
import { FaAngleRight } from "react-icons/fa6"

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
      <Container className="pb-16 pt-8">
        <div className="mx-auto max-w-2xl space-y-16">
          {posts.map(post => (
            <Article key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </div>
  )
}

type ArticleProps = {
  post: Post
}

function Article({ post }: ArticleProps) {
  return (
    <article className="group relative">
      <div
        className="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-slate-50
          sm:rounded-xl md:-inset-x-6 md:-inset-y-4"
      />
      <div className="relative">
        <dl>
          <dt className="sr-only">Date</dt>
          <dd className="whitespace-nowrap text-sm leading-6 text-gray-500">
            <time dateTime={post.date}>{postDate(post.date)}</time>
          </dd>
        </dl>
        <h3 className="pt-1.5 text-lg font-bold tracking-tight text-gray-900">
          {post.title}
        </h3>
        <div className="relative mb-4 mt-2 line-clamp-2 text-gray-900">
          <p>{post.summary}</p>
        </div>
      </div>
      <Link
        href={`/posts/${post.slug}`}
        className="flex items-center text-sm font-medium text-gray-900"
      >
        <span
          className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-xl
            md:-inset-x-6 md:-inset-y-4"
        />
        <span className="relative">
          Read more
          <span className="sr-only">
            {", "}
            {`${post.title}`}
          </span>
        </span>
        <FaAngleRight className="relative ml-1 h-3 w-3 shrink-0" aria-hidden="true" />
      </Link>
    </article>
  )
}
