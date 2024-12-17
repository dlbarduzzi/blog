import Link from "next/link"
import { allPosts } from "content-collections"

export default function Page() {
  const posts = allPosts.toSorted((a, b) => b.date.getTime() - a.date.getTime())
  return (
    <div className="px-9 py-8">
      <div className="max-w-2xl rounded-md bg-gray-50 p-6">
        <h1 className="font-bold tracking-tight">A Fun Fact</h1>
        <p className="pt-7 leading-7">
          The colors of the rainbow in order are red, orange, yellow, green, blue,
          indigo and violet. A good way to remember it is ROY G. BIV. My five year old
          knows the correct way of which the colors of the rainbow goes.
        </p>
      </div>
      <div className="space-y-7 pt-8">
        {posts.map(post => (
          <Link
            key={post.title}
            href={`/blog/${post._meta.path}`}
            className="block rounded-md border border-gray-200 px-4 py-3"
          >
            <article>
              <dl>
                <dt className="sr-only">Date</dt>
                <dd className="text-sm text-gray-500">
                  <time dateTime={post.date.toISOString()}>
                    {new Date(post.date).toLocaleDateString("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </dd>
              </dl>
              <h3 className="pt-4 font-bold tracking-tight text-gray-900">
                {post.title}
              </h3>
              <p className="leading-7 text-gray-900">{post.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
