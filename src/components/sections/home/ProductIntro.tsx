import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Shield, CheckCircle2, Clock, TrendingUp } from 'lucide-react'

const KPI_CARDS = [
  { icon: CheckCircle2, label: 'Auto-approval', value: '91.4%', delta: '+2.1 pts', positive: true, color: 'text-emerald-500' },
  { icon: Clock, label: 'Decision time', value: '2m 41s', delta: '-38s', positive: true, color: 'text-primary-500' },
  { icon: Shield, label: 'Flagged cases', value: '312', delta: '-14%', positive: true, color: 'text-amber-500' },
  { icon: TrendingUp, label: 'Active checks', value: '8,940', delta: 'live', positive: undefined, color: 'text-accent-500' },
]

const CHART_BARS = [42, 58, 45, 66, 52, 74, 61, 82, 70, 88, 78, 95]

const TABLE_ROWS = [
  { id: '#VC-90412', subject: 'Acme Logistics GmbH', check: 'Business + UBO', result: 'Approved', tone: 'text-emerald-700 bg-emerald-50 ring-emerald-600/20' },
  { id: '#VC-90411', subject: 'Jonas Weber', check: 'Identity + AML', result: 'Approved', tone: 'text-emerald-700 bg-emerald-50 ring-emerald-600/20' },
  { id: '#VC-90409', subject: 'Brightline Staffing Ltd', check: 'Credential sweep', result: 'In review', tone: 'text-amber-700 bg-amber-50 ring-amber-600/20' },
  { id: '#VC-90407', subject: 'Mira Al-Sayed', check: 'Document tamper', result: 'Rejected', tone: 'text-red-700 bg-red-50 ring-red-600/15' },
]

export function ProductIntro() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" aria-hidden="true" />

      <Container className="relative">
        <Reveal variant="up" once className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">One platform</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Every verification,{' '}
            <span className="text-gradient-dark">one command center</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Submit checks through the dashboard or API and watch decisions land in real time —
            with evidence attached to every single one.
          </p>
        </Reveal>

        <Reveal variant="up" delay={150} className="mt-16">
          <div className="relative mx-auto max-w-5xl">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-primary-500/20 via-transparent to-accent-500/20 blur-3xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glow-lg backdrop-blur-xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
                <span className="ml-4 hidden rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500 sm:block">
                  app.metacheck.io/dashboard
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {/* KPIs */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {KPI_CARDS.map((kpi) => (
                    <div key={kpi.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <div className="flex items-center gap-2">
                        <kpi.icon className={`h-4 w-4 ${kpi.color}`} aria-hidden="true" />
                        <p className="truncate text-[11px] font-medium text-slate-500">{kpi.label}</p>
                      </div>
                      <p className="mt-2 text-xl font-bold text-white">{kpi.value}</p>
                      {kpi.positive !== undefined && (
                        <p className={`mt-0.5 text-[11px] font-semibold ${kpi.positive ? 'text-emerald-400' : 'text-slate-500'}`}>
                          {kpi.delta}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Checks completed</p>
                    <p className="text-xs text-slate-500">Last 12 months</p>
                  </div>
                  <div className="mt-4 flex h-32 items-end gap-1.5 sm:gap-2" role="img" aria-label="Bar chart of monthly completed checks trending upward">
                    {CHART_BARS.map((height, index) => (
                      <div
                        key={index}
                        style={{ height: `${height}%` }}
                        className={`flex-1 rounded-t-md transition-all duration-500 hover:opacity-80 ${
                          index >= CHART_BARS.length - 3
                            ? 'bg-gradient-to-t from-primary-600 to-accent-400'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="mt-5 overflow-x-auto rounded-xl border border-white/5">
                  <table className="w-full min-w-[480px] text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/5 text-slate-500">
                        <th scope="col" className="px-4 py-3 font-medium">Case</th>
                        <th scope="col" className="px-4 py-3 font-medium">Subject</th>
                        <th scope="col" className="px-4 py-3 font-medium">Check</th>
                        <th scope="col" className="px-4 py-3 font-medium">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {TABLE_ROWS.map((row) => (
                        <tr key={row.id} className="transition-colors hover:bg-white/[0.02]">
                          <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-300">{row.id}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-slate-300">{row.subject}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-slate-500">{row.check}</td>
                          <td className="whitespace-nowrap px-4 py-3">
                            <span className={`rounded-full px-2 py-0.5 font-medium ring-1 ring-inset ${row.tone}`}>
                              {row.result}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
