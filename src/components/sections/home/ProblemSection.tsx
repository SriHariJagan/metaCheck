import { AlertTriangle, Link2, ShieldAlert, Users } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'

const PROBLEMS = [
  {
    icon: AlertTriangle,
    number: '01',
    title: 'Information Without Verification',
    description: 'Reliable information is becoming increasingly important in a connected world. Without proper verification, trust becomes a guessing game.',
    accent: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: ShieldAlert,
    number: '02',
    title: 'Digital Risk',
    description: 'Organizations need stronger systems to operate confidently in digital environments. The cost of a single breach extends far beyond the immediate damage.',
    accent: 'from-red-500 to-rose-500',
    bg: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: Link2,
    number: '03',
    title: 'Fragmented Systems',
    description: 'Disconnected systems create unnecessary complexity and inefficiency. When tools don\'t talk to each other, gaps emerge where risk hides.',
    accent: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Users,
    number: '04',
    title: 'Limited Accessibility',
    description: 'Technology should create opportunities rather than barriers. When systems are built for the few, the many are left behind.',
    accent: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
]

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-100/30 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent-100/30 blur-[80px]" />
      </div>

      <Container className="relative">
        {/* Header */}
        <Reveal variant="up" once className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">The Challenge</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            The world is becoming more connected.{' '}
            <span className="text-gradient">Trust must keep up.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            As digital systems become part of every aspect of life, organizations and individuals
            face new challenges around identity, information, security, verification, and accessibility.
          </p>
        </Reveal>

        {/* Problem cards - asymmetric grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem, index) => (
            <Reveal key={problem.number} variant="up" delay={index * 120}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                {/* Gradient accent on hover */}
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${problem.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="flex items-start justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${problem.bg} transition-transform duration-500 group-hover:scale-110`}>
                    <problem.icon className={`h-6 w-6 ${problem.iconColor}`} aria-hidden="true" />
                  </span>
                  <span className="text-3xl font-extrabold text-slate-100 transition-colors duration-500 group-hover:text-slate-200">
                    {problem.number}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">{problem.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{problem.description}</p>

                {/* Bottom line reveal */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
