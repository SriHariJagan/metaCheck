import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { SOLUTIONS } from '@/data/solutions'

interface SolutionsGridProps {
  detailed?: boolean
}

export function SolutionsGrid({ detailed = false }: SolutionsGridProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 top-1/2 h-64 w-64 rounded-full bg-primary-100/40 blur-[80px]" />
        <div className="absolute -left-32 top-1/3 h-48 w-48 rounded-full bg-accent-100/40 blur-[60px]" />
      </div>

      <Container className="relative">
        {!detailed && (
          <SectionHeading
            eyebrow="Solutions"
            title="Solutions built around real-world needs"
            description="Six composable building blocks that cover the entire spectrum of business verification — API-first and audit-ready."
          />
        )}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, index) => (
            <Reveal key={solution.id} variant="up" delay={(index % 3) * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-glow">
                {/* Number watermark */}
                <span className="absolute -right-4 -top-4 text-7xl font-extrabold text-slate-50/[0.5] transition-colors duration-500 group-hover:text-primary-50/[0.5]" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 transition-all duration-500 group-hover:scale-110 group-hover:from-primary-600 group-hover:to-primary-500 group-hover:text-white group-hover:shadow-glow">
                    <solution.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-600" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">{solution.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">
                  {detailed ? solution.description : solution.shortDescription}
                </p>

                {detailed && (
                  <>
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg viewBox="0 0 16 16" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary-500" fill="none" aria-hidden="true">
                            <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-50/50 px-4 py-3 text-xs font-medium leading-relaxed text-emerald-800 ring-1 ring-inset ring-emerald-600/10">
                      Outcome: {solution.outcome}
                    </p>
                  </>
                )}

                <Link
                  to="/solutions"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-600"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
