import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/buttons/Button'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page Not Found | MetaCheck Foundation')
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0a0a1a]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary-600/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-accent-500/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <Container className="relative flex min-h-[80vh] items-center pt-24 lg:pt-28">
        <Reveal variant="up" once className="mx-auto max-w-2xl text-center">
          <p className="text-8xl font-extrabold text-white/10">404</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-lg text-slate-400">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Button to="/" size="lg" className="group">
              Go Home
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
