import Link from "next/link"

import { allPosts } from "content-collections"
import { ToggleTheme } from "@/components/toggle-theme"

export default function Page() {
  return (
    <div>
      <div className="py-8">
        <div className="text-center">Welcome to my blog!</div>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <ToggleTheme />
        <div className="mt-8 space-x-2 space-y-2">
          <div className="inline bg-red px-3 py-2">Color</div>
          <div className="inline bg-yellow px-3 py-2">Color</div>
          <div className="inline bg-blue px-3 py-2">Color</div>
          <div className="inline bg-orange px-3 py-2">Color</div>
          <div className="inline bg-green px-3 py-2">Color</div>
          <div className="inline bg-magenta px-3 py-2">Color</div>
          <div className="inline bg-gray1 px-3 py-2">Color</div>
          <div className="inline bg-gray2 px-3 py-2">Color</div>
          <div className="inline bg-gray3 px-3 py-2">Color</div>
          <div className="inline bg-gray4 px-3 py-2">Color</div>
          <div className="inline bg-gray5 px-3 py-2">Color</div>
          <div className="inline bg-gray6 px-3 py-2">Color</div>
          <div className="inline bg-gray7 px-3 py-2">Color</div>
        </div>
        <div className="mt-8 space-y-6">
          {allPosts.map(post => (
            <Link
              key={post.title}
              href={`/blog/${post._meta.path}`}
              className="border-gray-300 block rounded-md border px-4 py-5"
            >
              <p className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div>
                <h3>{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
