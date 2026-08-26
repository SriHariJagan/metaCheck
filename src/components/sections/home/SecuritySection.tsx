import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Lock, FileClock, KeyRound, Server, Shield, Eye, Fingerprint, Cpu } from 'lucide-react'

const PILLARS = [
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit, and strict data minimization by default.',
  },
  {
    icon: Server,
    title: 'Secure Processing',
    description: 'Isolated regional processing environments with continuous penetration testing.',
  },
  {
    icon: FileClock,
    title: 'Audit Trails',
    description: 'Every decision is immutably logged with its sources, models and reviewers.',
  },
  {
    icon: KeyRound,
    title: 'Access Controls',
    description: 'Role-based permissions, SSO/SAML and granular API scopes out of the box.',
  },
]

const AUDIT_LOG = [
  { time: '14:02:11', event: 'Decision: identity approved', actor: 'auto-decision-engine', icon: Shield },
  { time: '14:02:09', event: 'Document authenticity score 0.98', actor: 'doc-intel-v4', icon: Eye },
  { time: '14:01:58', event: 'Sanctions screening completed — clear', actor: 'screening-service', icon: Fingerprint },
  { time: '14:01:44', event: 'Verification request received', actor: 'api-gateway', icon: Cpu },
]

export function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent-500/10 blur-[100px]" />
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-primary-500/10 blur-[80px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <Reveal variant="left">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">Security</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Trust infrastructure needs to{' '}
              <span className="text-gradient-dark">earn trust itself</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              MetaCheck handles some of the most sensitive data in fintech. Our security
              posture is not a feature — it is the foundation every verification runs on.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {PILLARS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-accent-300 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right - Terminal */}
          <Reveal variant="right" delay={120}>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 shadow-glow backdrop-blur-xl">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
                  <span className="ml-3 text-xs font-mono text-slate-500">audit-trail.log</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/25">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
                  Immutable
                </span>
              </div>

              {/* Log entries */}
              <ul className="divide-y divide-white/5 p-2">
                {AUDIT_LOG.map((entry, index) => (
                  <li
                    key={entry.time}
                    className="flex items-start gap-3 rounded-lg px-4 py-3.5 transition-colors hover:bg-white/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <entry.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                    <span className="shrink-0 font-mono text-xs text-slate-600">{entry.time}</span>
                    <span className="min-w-0 flex-1 break-words font-mono text-xs text-slate-300">{entry.event}</span>
                    <span className="hidden shrink-0 rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-accent-300 sm:block">
                      {entry.actor}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t border-white/10 px-5 py-3.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono">Retained for 7 years</span>
                  <span className="font-mono text-accent-400">exportable as signed evidence</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
