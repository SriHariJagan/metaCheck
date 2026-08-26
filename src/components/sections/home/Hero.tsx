import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/buttons/Button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0a0a1a]">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-primary-600/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-[10%] top-[30%] h-[500px] w-[500px] rounded-full bg-accent-500/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-primary-400/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black_30%,transparent_100%)]" aria-hidden="true" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-primary-400 animate-float" />
        <div className="absolute left-[75%] top-[15%] h-1.5 w-1.5 rounded-full bg-accent-400 animate-float-slow" />
        <div className="absolute left-[60%] top-[60%] h-2.5 w-2.5 rounded-full bg-primary-300 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute left-[25%] top-[70%] h-1.5 w-1.5 rounded-full bg-accent-300 animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute left-[85%] top-[45%] h-2 w-2 rounded-full bg-primary-500 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute left-[40%] top-[85%] h-1 w-1 rounded-full bg-accent-500 animate-float-slow" style={{ animationDelay: '2.5s' }} />
      </div>

      <Container className="relative flex min-h-[90vh] items-center">
        <div className="grid w-full items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <Reveal variant="left" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-white/80">Trusted by organizations worldwide</span>
            </div>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Building a{' '}
              <span className="relative">
                <span className="text-gradient-dark">more trusted</span>
                <svg className="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                  <path d="M2 8c30-6 70-6 100-2s60 4 96-2" stroke="url(#underline-grad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="underline-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#818cf8" />
                      <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              digital future
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              MetaCheck Foundation brings technology, intelligence, and responsible innovation together
              to create solutions that make people, organizations, and communities more secure,
              transparent, and connected.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/solutions" size="lg" className="group bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow hover:shadow-glow-lg">
                Explore Our Solutions
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button to="/contact" size="lg" variant="light-outline" className="group">
                Partner With Us
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
              {[
                { icon: Shield, label: 'Enterprise Security' },
                { icon: Zap, label: 'Real-time Processing' },
                { icon: Globe, label: 'Global Reach' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-500">
                  <Icon className="h-4 w-4 text-primary-400" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right visual */}
          <Reveal variant="right" delay={200} once className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Glow behind */}
      <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 blur-3xl" aria-hidden="true" />

      {/* Main card */}
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
              <Shield className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Trust Engine</p>
              <p className="text-xs text-slate-400">Real-time verification</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active
          </span>
        </div>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: 'Checks Today', value: '12,847', trend: '+18%' },
            { label: 'Accuracy', value: '99.7%', trend: '+0.3%' },
            { label: 'Avg Speed', value: '1.2s', trend: '-40%' },
          ].map((metric) => (
            <div key={metric.label} className="rounded-xl border border-white/5 bg-white/5 p-3">
              <p className="text-[11px] text-slate-500">{metric.label}</p>
              <p className="mt-1 text-lg font-bold text-white">{metric.value}</p>
              <p className="text-[11px] font-medium text-emerald-400">{metric.trend}</p>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div className="mt-5 space-y-2">
          {[
            { status: 'approved', text: 'Identity verified — Sarah K.', time: '2s ago' },
            { status: 'processing', text: 'Document scan in progress...', time: '5s ago' },
            { status: 'approved', text: 'AML check cleared — M. Corp', time: '12s ago' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <span className={`h-2 w-2 rounded-full ${item.status === 'approved' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
              <span className="flex-1 text-xs text-slate-300">{item.text}</span>
              <span className="text-[10px] text-slate-600">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-6 -top-6 animate-float rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <svg viewBox="0 0 16 16" className="h-4 w-4 text-emerald-400" fill="none" aria-hidden="true">
              <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Verified</p>
            <p className="text-[10px] text-emerald-400">Confidence: 98%</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-6 animate-float-slow rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20">
            <Zap className="h-4 w-4 text-primary-400" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Processed</p>
            <p className="text-[10px] text-primary-300">1.2s response</p>
          </div>
        </div>
      </div>
    </div>
  )
}
