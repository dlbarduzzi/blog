import Link from "next/link"

import { cn } from "@/lib/utils"

export function BlogHeader() {
  return (
    <header className="bg-white">
      <div className="pt-5 md:px-4">
        <Link
          href="/"
          className={cn(
            "group flex items-center text-sm font-semibold leading-6 text-gray-700",
            "hover:text-gray-900"
          )}
        >
          <svg
            viewBox="0 -9 3 24"
            className={cn(
              "mr-3 h-6 w-auto overflow-visible text-gray-400",
              "group-hover:text-gray-600"
            )}
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Go back
          <span className="sr-only">Link to home page.</span>
        </Link>
      </div>
    </header>
  )
}
