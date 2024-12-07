import { allPosts } from "content-collections"

export default function Page() {
  return (
    <div className="bg-white">
      <div className="py-8">
        <div className="text-center">Welcome to my blog!</div>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="space-y-6">
          {allPosts.map(post => (
            <div
              key={post.title}
              className="rounded-md border border-gray-300 px-4 py-5"
            >
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <div>
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
