import type { ZodError } from "zod"

import { z } from "zod"
import { createEnv } from "@t3-oss/env-nextjs"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid server environment variables:",
      error.flatten().fieldErrors
    )
    process.exit(1)
  },
  emptyStringAsUndefined: true,
  runtimeEnv: process.env,
  skipValidation: process.env.SKIP_ENV_VALIDATIONS === "true",
})
