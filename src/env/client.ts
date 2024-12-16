import type { ZodError } from "zod"

import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid client environment variables:",
      error.flatten().fieldErrors
    )
    process.exit(1)
  },
  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  emptyStringAsUndefined: true,
})
