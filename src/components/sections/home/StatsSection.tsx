import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Counter } from '@/components/common/Counter'
import { METRICS } from '@/data/stats'

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28" aria-label="MetaCheck in numbers">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      </div>

      <Container className="relative">
        <Reveal variant="up" once className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">Proof at scale</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Numbers we&apos;re held accountable to
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Measured continuously across the MetaCheck platform.
          </p>
        </Reveal>

        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, index) => (
            <Reveal key={metric.id} variant="up" delay={index * 100}>
              <div className="group relative rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 text-center transition-all duration-500 hover:border-primary-200 hover:shadow-glow">
                {/* Top accent line */}
                <div className="absolute left-1/2 top-0 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <dd className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  <Counter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} />
                </dd>
                <dt className="mt-3 text-sm font-semibold text-primary-700">{metric.label}</dt>
                {metric.detail && (
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{metric.detail}</p>
                )}
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
