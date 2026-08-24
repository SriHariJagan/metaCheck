import { Shield, Brain, Globe, Lock, Heart, Zap } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SolutionsGrid } from '@/components/sections/home/SolutionsGrid'
import { CTASection } from '@/components/sections/CTASection'
import { usePageMeta } from '@/hooks/usePageMeta'

const CATEGORIES = [
  { icon: Shield, label: 'Verification', description: 'Building trust through intelligent verification and validation.', color: 'from-blue-500 to-indigo-600' },
  { icon: Globe, label: 'Digital Platforms', description: 'Scalable platforms designed around real-world workflows.', color: 'from-violet-500 to-purple-600' },
  { icon: Brain, label: 'Intelligence', description: 'Transforming data into actionable insights.', color: 'from-emerald-500 to-green-600' },
  { icon: Lock, label: 'Security & Trust', description: 'Helping organizations operate with greater confidence.', color: 'from-amber-500 to-orange-600' },
  { icon: Heart, label: 'Community Impact', description: 'Technology initiatives focused on accessibility and opportunity.', color: 'from-rose-500 to-pink-600' },
]

const TECH_STACK = [
  { icon: Brain, name: 'Artificial Intelligence', description: 'Machine learning models for verification, fraud detection, and document analysis.' },
  { icon: Globe, name: 'Cloud Computing', description: 'Scalable infrastructure with regional processing and data residency options.' },
  { icon: Zap, name: 'Automation', description: 'Automated workflows that resolve the majority of verifications without human review.' },
  { icon: Shield, name: 'Security', description: 'Enterprise-grade encryption, access controls, and compliance certifications.' },
]

const CODE_SAMPLE = `curl https://api.metacheck.io/v1/verifications \\
  -H "Authorization: Bearer mc_live_••••" \\
  -d type=identity \\
  -d country=DE \\
  -d reference=onboarding_4821

# → 201 Created
{
  "id": "vrf_9f2c81",
  "status": "approved",
  "confidence": 0.98,
  "evidence_url": "https://evidence.mc/vrf_9f2c81"
}`

export default function Solutions() {
  usePageMeta(
    'Solutions | MetaCheck Foundation',
    'Explore the platforms, initiatives, and technology solutions developed through the MetaCheck Foundation ecosystem.',
  )

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#0a0a1a]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary-600/20 blur-[120px] animate-pulse-glow" />
          <div className="absolute -right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-accent-500/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black_30%,transparent_100%)]" aria-hidden="true" />

        <Container className="relative flex min-h-[70vh] items-center pt-24 lg:pt-28">
          <Reveal variant="up" once className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">Solutions</p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology designed to solve{' '}
              <span className="text-gradient-dark">real problems</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              Explore the platforms, initiatives, and technology solutions developed through
              the MetaCheck Foundation ecosystem.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Solution Categories */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <Container>
          <Reveal variant="up" once className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">What We Build</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Solutions built around real-world needs
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, index) => (
              <Reveal key={cat.label} variant="up" delay={index * 100}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-md transition-transform duration-500 group-hover:scale-110`}>
                    <cat.icon className="h-7 w-7" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{cat.label}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{cat.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Solutions */}
      <div className="bg-slate-50 pt-20 sm:pt-24">
        <Container>
          <SectionHeading
            eyebrow="What's Inside"
            title="Six solutions, zero blind spots"
            description="Each solution is powerful alone — together they form a complete trust program with shared audit trails and analytics."
          />
        </Container>
        <SolutionsGrid detailed />
      </div>

      {/* Technology Stack */}
      <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/10 blur-[120px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" aria-hidden="true" />

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">Technology</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built with modern technology
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Launch your first verification before standup tomorrow. Typed SDKs,
                sandbox environments, webhooks and idempotent requests come standard.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {TECH_STACK.map(({ icon: Icon, name, description }, index) => (
                  <Reveal key={name} variant="up" delay={index * 100}>
                    <div className="group rounded-xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]">
                      <Icon className="h-6 w-6 text-accent-400" aria-hidden="true" />
                      <h3 className="mt-3 font-semibold text-white">{name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-glow backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden="true" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
                    <span className="ml-3 font-mono text-xs text-slate-500">create-verification.sh</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/25">
                    sandbox
                  </span>
                </div>
                <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-slate-300">
                  <code>{CODE_SAMPLE}</code>
                </pre>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a Challenge? Let's Solve It Together."
        description="Our team will map your requirements to the right verification stack in a 30-minute call."
        primaryLabel="Talk to MetaCheck"
        primaryTo="/contact"
        secondaryLabel="Get Started"
        secondaryTo="/contact"
      />
    </>
  )
}
