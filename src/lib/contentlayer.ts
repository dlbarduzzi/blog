import type { Post } from "contentlayer/generated"

function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => dateSortDesc(a.date, b.date))
}

const postDateFormat: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
}

export function postDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", postDateFormat)
}
