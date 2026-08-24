import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Search, ScanSearch, Brain, BadgeCheck } from 'lucide-react'

const STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Identify',
    description: 'Recognize the trust gap. Map what needs verification and why — before reaching for a tool.',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: ScanSearch,
    step: '02',
    title: 'Verify',
    description: 'Check documents, biometrics and registry data against authoritative sources in real time.',
    color: 'from-primary-500 to-primary-600',
    bg: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: Brain,
    step: '03',
    title: 'Analyze',
    description: 'Risk models weigh every signal and route clear cases to instant decisions, edge cases to experts.',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Impact',
    description: 'Deliver auditable decisions with full evidence — ready for regulators, partners, and your own QA.',
    color: 'from-emerald-500 to-green-500',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
]

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      {/* Background dots */}
      <div className="pointer-events-none absolute inset-0 bg-dot opacity-50" aria-hidden="true" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our Approach"
          title="From complexity to confidence"
          description="A rigorous process designed for volume — most verifications complete without a single human touch."
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-primary-400 to-emerald-400 opacity-30 sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />

          <div className="space-y-12 sm:space-y-0">
            {STEPS.map(({ icon: Icon, step, title, description, color }, index) => {
              const isEven = index % 2 === 0
              return (
                <Reveal key={step} variant={isEven ? 'left' : 'right'} delay={index * 120}>
                  <div className={`relative sm:grid sm:grid-cols-2 sm:items-center sm:gap-12 ${isEven ? '' : 'sm:direction-rtl'}`}>
                    {/* Step number badge */}
                    <div className="absolute left-[28px] z-10 -translate-x-1/2 sm:left-1/2">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`ml-20 sm:ml-0 ${isEven ? 'sm:text-right sm:pr-16' : 'sm:col-start-2 sm:pl-16'}`} style={{ direction: 'ltr' }}>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step {step}</span>
                      <h3 className="mt-2 text-2xl font-bold text-slate-900">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">{description}</p>
                    </div>

                    {/* Spacer for alternating layout */}
                    {isEven && <div className="hidden sm:block" />}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
