import { Container } from "@/components/container"

export function Footer() {
  return (
    <footer className="border-t border-t-gray-200 bg-white">
      <Container className="py-5">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dylan Barduzzi
          </p>
        </div>
      </Container>
    </footer>
  )
}
