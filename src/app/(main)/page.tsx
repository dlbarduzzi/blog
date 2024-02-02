import { Container } from "@/components/container"

export default function Page() {
  return (
    <div>
      <section aria-labelledby="homepage-header">
        <h2 id="homepage-header" className="sr-only">
          Welcome!
        </h2>
      </section>
      <Container className="py-8">Welcome.</Container>
    </div>
  )
}
