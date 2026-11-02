import { SEO } from '@/seo/SEO';
import { Compass, Rocket, Code2, Globe2, ArrowRight, Eye, Scale, Gauge, Lock, Heart, UserCheck, Target, Users, Shield, Sparkles } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { CTASection } from '@/components/sections/CTASection'
import { APPROACH } from '@/data/values'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Button } from '@/components/buttons/Button'

const ABOUT_VALUES = [
  {
    icon: Scale,
    title: 'Integrity',
    description: 'Do the right thing with transparency and accountability.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Build relationships through openness and accountability.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Gauge,
    title: 'Innovation',
    description: 'Continuously explore better ways to solve problems.',
    color: 'from-emerald-500 to-green-600',
  },
  {
    icon: Lock,
    title: 'Inclusion',
    description: 'Create opportunities that reach people from diverse backgrounds.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'Focus on meaningful and measurable outcomes.',
    color: 'from-rose-500 to-pink-600',
  },
]

const FOUNDERS = [
  {
    name: 'Kishore Kodali',
    role: 'Founder & CEO',
    image: '/kishore.png',
    initials: 'KK',
    bio: 'Kishore founded MetaFlow to replace fragmented tools with one connected business platform. He sets product vision, growth strategy, and partnerships so companies can launch a website, admin, payments, and operations without rebuilding from scratch. His focus is simple: clear outcomes for every business that starts on MetaFlow.',
    highlights: [
      { icon: Rocket, label: 'Product Vision', desc: 'Defines roadmap & category strategy' },
      { icon: Target, label: 'Growth Strategy', desc: 'Scales from 0 → $10M+ ARR' },
      { icon: UserCheck, label: 'Partnerships', desc: 'Builds ecosystem alliances' },
    ],
    accent: '#6366f1',
    accentLight: '#6366f115',
    gradient: 'from-primary-500 to-accent-500',
  },
  {
    name: 'Satya Kavipurapu',
    role: 'COO',
    image: '/satya.png',
    initials: 'SK',
    bio: "Satya runs MetaFlow's day-to-day operations—delivery, support systems, and process quality. He keeps onboarding, module activation, and customer success moving in sync so teams can scale without losing reliability. Customers feel that discipline as faster launches and smoother handoffs.",
    highlights: [
      { icon: Shield, label: 'Operations', desc: 'Delivery, support & process quality' },
      { icon: Users, label: 'Customer Success', desc: 'Onboarding & activation at scale' },
      { icon: Sparkles, label: 'Reliability', desc: 'Systems that scale without breaking' },
    ],
    accent: '#8b5cf6',
    accentLight: '#8b5cf615',
    gradient: 'from-violet-500 to-purple-600',
  },
]

function FoundersSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden" aria-labelledby="founders-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] opacity-[0.04]" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 60%)' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            id="founders-heading"
            eyebrow="Founders"
            title="Two operators. One mission."
            description="Built by people who've lived the problem. Kishore and Satya have scaled technology from $0 to global impact across healthcare, education, and enterprise. They know the chaos — and they built MetaCheck to end it."
            align="center"
          />
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {FOUNDERS.map((founder, index) => (
              <article
                key={founder.name}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-slate-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Top accent bar */}
                <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r" style={{ background: founder.gradient }} aria-hidden="true" />
                {/* Subtle glow */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: founder.gradient }} aria-hidden="true" />

                <div className="p-7 sm:p-9 lg:p-10 flex flex-col h-full">
                  {/* Image + Role badge */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-[1.2rem] overflow-hidden ring-4 ring-white shadow-xl" style={{ boxShadow: `0 0 0 1px ${founder.accent}20, 0 20px 40px -12px ${founder.accent}25` }}>
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      {/* Role badge */}
                      <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-lg" style={{ color: founder.accent }}>
                          {founder.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{founder.name}</h3>
                      <p className="mt-1 text-sm font-medium" style={{ color: founder.accent }}>{founder.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-base leading-relaxed text-slate-600 mb-6 flex-1">{founder.bio}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                    {founder.highlights.map((h, _hi) => (
                      <div
                        key={h.label}
                        className="group relative p-4 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-300 text-center"
                      >
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: founder.accentLight }}>
                          <h.icon className="h-5 w-5" style={{ color: founder.accent }} aria-hidden="true" />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{h.label}</p>
                        <p className="text-[11px] font-medium text-slate-700 leading-snug">{h.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Shared philosophy */}
        <Reveal variant="up" delay={300}>
          <div className="mt-16 relative overflow-hidden rounded-[2rem] bg-[#0a0a1a] p-8 sm:p-12 lg:p-14">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />
            </div>
            <div className="relative max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden="true" />
                Shared philosophy
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Clear outcomes. No rebuilding from scratch.
              </h3>
              <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                Every feature we ship, every partnership we sign, every decision we make comes back to one question:
                does this give our customers a clear, measurable outcome — without forcing them to stitch together
                fragmented tools?
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <UserCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  Outcome-first
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <Rocket className="h-4 w-4 text-accent-400" aria-hidden="true" />
                  Ship fast
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                  <Users className="h-4 w-4 text-violet-400" aria-hidden="true" />
                  Customer-obsessed
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function About() {
  usePageMeta(
    'About | MetaCheck Foundation',
    'A technology-driven foundation working to create a more trusted, connected, and inclusive digital future.',
  )

  return (
    <>
      <SEO />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30 pt-4 lg:pt-6">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary-100/40 blur-[100px]" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-accent-100/30 blur-[80px]" />
          <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,black_60%,transparent_100%)]" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
            {/* Left content */}
            <Reveal variant="left">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-700">About MetaCheck Foundation</span>
                </div>

                <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Technology with a{' '}
                  <span className="relative">
                    <span className="text-gradient">purpose</span>
                    <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                      <path d="M2 8c30-6 70-6 100-2s60 4 96-2" stroke="url(#about-underline)" strokeWidth="3" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="about-underline" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#6366f1" />
                          <stop offset="1" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl">
                  MetaCheck Foundation brings technology, intelligence, and responsible innovation
                  together to create solutions that make people, organizations, and communities
                  more secure, transparent, and connected.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  {['Trust', 'Innovation', 'Impact', 'Transparency'].map((value) => (
                    <span key={value} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right visual */}
            <Reveal variant="right" delay={200}>
              <div className="relative">
                {/* Glow */}
                <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary-200/30 via-transparent to-accent-200/30 blur-2xl" aria-hidden="true" />

                {/* Main card */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg">
                      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">MetaCheck Foundation</p>
                      <p className="text-xs text-slate-500">Building a trusted digital future</p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      { label: 'Founded', value: '2021' },
                      { label: 'Global Reach', value: '190+' },
                      { label: 'Team Size', value: '120+' },
                      { label: 'Checks Run', value: '12M+' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                        <p className="text-2xl font-extrabold text-gradient">{stat.value}</p>
                        <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                    <p className="text-sm font-semibold text-slate-900">Our Mission</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      To leverage technology, innovation, and collaboration to create solutions
                      that improve trust, accessibility, and opportunity.
                    </p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -right-4 -top-4 animate-float rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-card">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Impact Driven</p>
                      <p className="text-[10px] text-emerald-600 font-medium">Measurable outcomes</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge 2 */}
                <div className="absolute -bottom-4 -left-4 animate-float-slow rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-card">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">Trusted</p>
                      <p className="text-[10px] text-slate-500">Enterprise-grade security</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary-100/30 blur-[80px]" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">Why We Exist</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                MetaCheck Foundation exists because trust is the foundation of progress
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  As digital systems become part of every aspect of life, organizations and individuals
                  face new challenges around identity, information, security, and verification.
                </p>
                <p>
                  We saw an opportunity to build technology that doesn&apos;t just process faster —
                  but creates genuine trust. Technology that makes people, organizations, and communities
                  more secure, transparent, and connected.
                </p>
                <p>
                  MetaCheck Foundation is the vehicle for that vision. We work across technology,
                  verification, intelligence, and digital solutions to address real-world challenges
                  and create sustainable impact.
                </p>
              </div>
            </Reveal>

            <div className="space-y-6">
              <Reveal variant="right" delay={100}>
                <div className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-accent-50 p-8 shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary-700">Our Mission</p>
                  <p className="mt-4 text-xl font-bold leading-snug tracking-tight text-slate-900">
                    To leverage technology, innovation, and collaboration to create solutions
                    that improve trust, accessibility, and opportunity.
                  </p>
                </div>
              </Reveal>

              <Reveal variant="right" delay={200}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Our Vision</p>
                  <p className="mt-4 text-xl font-bold leading-snug tracking-tight text-slate-900">
                    A world where technology creates greater trust, opportunity, and positive impact for everyone.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot opacity-50" aria-hidden="true" />

        <Container className="relative">
          <SectionHeading
            eyebrow="Our Values"
            title="Built Different. Built for Impact."
            description="These are the principles that guide every product decision, partnership, and hire at MetaCheck Foundation."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_VALUES.map((value, index) => (
              <Reveal key={value.title} variant="up" delay={(index % 3) * 110}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${value.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-md transition-transform duration-500 group-hover:scale-110`}>
                    <value.icon className="h-7 w-7" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/10 blur-[120px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" aria-hidden="true" />

        <Container className="relative">
          <Reveal variant="up" once className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">How We Work</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From research to impact
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {APPROACH.map((item, index) => (
              <Reveal key={item.step} variant="up" delay={index * 120}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]">
                  <span className="text-5xl font-extrabold text-white/5 transition-colors duration-500 group-hover:text-white/10">{item.step}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology & Innovation */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">Technology & Innovation</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Serious infrastructure behind simple flows
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                Every dashboard action is an API call. Every verification has an audit trail.
                We build for the teams that take trust seriously.
              </p>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { icon: Code2, title: 'API-First', description: 'Integrate verifications in an afternoon with typed SDKs and comprehensive docs.' },
                { icon: Globe2, title: 'Global by Default', description: 'Data sources across 190+ countries with regional processing options.' },
                { icon: Compass, title: 'Explainable Models', description: 'Risk scores come with reasons — no black boxes for analysts or auditors.' },
                { icon: Rocket, title: 'Always Shipping', description: 'Weekly improvements since day one. We never stop making it better.' },
              ].map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} variant="up" delay={index * 100}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all duration-500 hover:border-primary-200 hover:bg-white hover:shadow-card">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Initiative */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary-100/40 blur-[80px]" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              {/* Visual */}
              <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg">
                    <Globe2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">Featured Initiative</p>
                    <h3 className="text-xl font-bold text-slate-900">Creating Change Through Technology</h3>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 text-center">
                  {[
                    ['Global', 'Reach'],
                    ['Open', 'Source'],
                    ['Community', 'Driven'],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <p className="text-sm font-bold text-primary-700">{value}</p>
                      <p className="text-xs text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={120}>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Technology initiatives focused on accessibility and opportunity
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                MetaCheck Foundation develops platforms and solutions designed to address
                real-world challenges. Our work spans verification, digital platforms,
                intelligence, security, and community impact.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Building trust through intelligent verification',
                  'Scalable platforms for real-world workflows',
                  'Transforming data into actionable insights',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-primary-500" fill="none" aria-hidden="true">
                      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button to="/solutions" size="lg" className="group">
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FoundersSection />

      <CTASection
        title="Have an Idea That Could Create Impact?"
        description="Whether you're evaluating platforms, exploring partnerships, or looking for your next role, we'd love to hear from you."
        primaryLabel="Let's Talk"
        primaryTo="/contact"
        secondaryLabel="See Open Roles"
        secondaryTo="/careers"
      />
    </>
  )
}
