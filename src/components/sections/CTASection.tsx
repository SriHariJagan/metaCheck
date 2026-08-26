import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/buttons/Button'

interface CTASectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  bullets?: string[]
}

export function CTASection({
  title = "Let's Build Something That Matters",
  description = "Whether you're an organization, technology partner, professional, or community looking to create meaningful impact, there's a place for you in the MetaCheck Foundation ecosystem.",
  primaryLabel = 'Partner With Us',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Solutions',
  secondaryTo = '/solutions',
  bullets = ['No commitment required', 'Enterprise-grade security', 'Global reach'],
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32" aria-labelledby="cta-heading">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary-600/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-500/15 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" aria-hidden="true" />

      <Container className="relative">
        <Reveal variant="scale" once className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-accent-300" aria-hidden="true" />
            <span className="text-sm font-medium text-white/80">Get started today</span>
          </div>

          <h2 id="cta-heading" className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">{description}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to={primaryTo} size="lg" className="group w-full bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow hover:shadow-glow-lg sm:w-auto">
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button to={secondaryTo} size="lg" variant="light-outline" className="w-full sm:w-auto">
              {secondaryLabel}
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-emerald-400" fill="none" aria-hidden="true">
                  <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
