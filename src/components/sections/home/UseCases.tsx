import { Landmark, ShoppingBag, Users, Handshake, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Link } from 'react-router-dom'

const USE_CASES = [
  {
    icon: Landmark,
    title: 'Fintech Onboarding',
    description: 'KYC and AML flows that clear genuine customers in seconds and keep regulators satisfied.',
    stats: '3x faster onboarding',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: ShoppingBag,
    title: 'Marketplace Vetting',
    description: 'Screen sellers and merchants before their first listing — block fraud rings, not growth.',
    stats: '91% auto-approval',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'HR Screening',
    description: 'Background checks candidates actually complete, with results hiring managers trust.',
    stats: '48h turnaround',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: Handshake,
    title: 'Vendor Compliance',
    description: 'Validate suppliers and partners against sanctions, ownership and credential requirements.',
    stats: '190+ countries',
    color: 'from-amber-500 to-orange-600',
  },
]

export function UseCases() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 sm:py-32">
      <Container className="relative">
        <SectionHeading
          eyebrow="Use Cases"
          title="Built for teams where trust is the product"
          description="From fintech onboarding to vendor compliance, MetaCheck adapts to your verification needs."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map(({ icon: Icon, title, description, stats, color }, index) => (
            <Reveal key={title} variant="up" delay={index * 110}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`} />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-600" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{description}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold text-primary-600">{stats}</span>
                    <Link to="/solutions" className="text-xs font-medium text-slate-400 transition-colors group-hover:text-primary-600">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
