import { createJiti } from "jiti"
import { fileURLToPath } from "url"
import { withcontentCollections } from "@content-collections/next"

const jiti = createJiti(fileURLToPath(import.meta.url))

await jiti.import("./src/env/client.ts")
await jiti.import("./src/env/server.ts")

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withcontentCollections(nextConfig)
