import { SEO } from '@/seo/SEO';
import { useState } from 'react'
import { ArrowRight, MapPin, Clock, Briefcase, ChevronRight, Heart, TrendingUp, Lightbulb, Target } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/buttons/Button'
import { JOBS, DEPARTMENTS, PERKS } from '@/data/jobs'
import { CAREER_STATS } from '@/data/stats'
import { ApplicationModal } from '@/components/careers/ApplicationModal'
import { usePageMeta } from '@/hooks/usePageMeta'

const WHY_WORK = [
  { icon: Target, title: 'Purpose', description: 'Work on products that solve meaningful problems.' },
  { icon: TrendingUp, title: 'Growth', description: 'Learn from experienced engineers, leaders, and domain experts.' },
  { icon: Lightbulb, title: 'Ownership', description: 'Take responsibility for ideas from concept to implementation.' },
  { icon: Heart, title: 'Innovation', description: 'Experiment with modern technology and new approaches.' },
]

const HIRING_PROCESS = [
  { step: '01', title: 'Application', description: 'Submit your application and tell us about yourself.' },
  { step: '02', title: 'Initial Review', description: 'Our talent team reviews your background and experience.' },
  { step: '03', title: 'Technical Discussion', description: 'A focused conversation about your skills and approach.' },
  { step: '04', title: 'Interview', description: 'Meet the team and learn about the role in depth.' },
  { step: '05', title: 'Offer', description: 'We extend an offer and welcome you to the team.' },
]

export default function Careers() {
  usePageMeta(
    'Careers | MetaCheck Foundation',
    'Join people who believe technology can create meaningful change. Build technology that matters.',
  )

  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [selectedJob, setSelectedJob] = useState<typeof JOBS[number] | null>(null)

  const filteredJobs = activeFilter === 'All'
    ? JOBS
    : JOBS.filter((job) => job.department === activeFilter)

  return (
    <>
      <SEO />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a1a] pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary-600/20 blur-[120px] animate-pulse-glow" />
          <div className="absolute -right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-accent-500/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black_30%,transparent_100%)]" aria-hidden="true" />

        <Container className="relative">
          <Reveal variant="up" once className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">Careers</p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build technology that{' '}
              <span className="text-gradient-dark">matters</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">
              Join people who believe technology can create meaningful change.
            </p>
            <div className="mt-10">
              <Button to="#positions" size="lg" className="group bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow hover:shadow-glow-lg">
                View Open Positions
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-white py-16 scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {CAREER_STATS.map((stat, index) => (
              <Reveal key={stat.label} variant="up" delay={index * 100}>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-gradient">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot opacity-50" aria-hidden="true" />

        <Container className="relative">
          <SectionHeading
            eyebrow="Why MetaCheck"
            title="Why work with us"
            description="We believe the best work happens when people have purpose, autonomy, and support."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_WORK.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} variant="up" delay={index * 100}>
                <article className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-md transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Perks */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <SectionHeading
                align="left"
                eyebrow="Benefits"
                title="What we offer"
                description="We invest in the people who invest their talent with us."
              />
            </Reveal>

            <Reveal variant="right" delay={120}>
              <div className="grid gap-3 sm:grid-cols-2">
                {PERKS.map((perk) => (
                  <div
                    key={perk}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all duration-300 hover:border-primary-200 hover:bg-white hover:shadow-card"
                  >
                    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" fill="none" aria-hidden="true">
                      <path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-slate-700">{perk}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="positions" className="relative overflow-hidden bg-slate-50 py-24 sm:py-32 scroll-mt-20">
        <Container>
          <SectionHeading
            eyebrow="Open Roles"
            title="Find your role"
            description="We're looking for people who want to do the best work of their careers."
          />

          {/* Department filters */}
          <Reveal variant="up" delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setActiveFilter(dept)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeFilter === dept
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-primary-200 hover:text-primary-700'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Job cards */}
          <div className="mt-10 space-y-4">
            {filteredJobs.map((job, index) => (
              <Reveal key={job.id} variant="up" delay={index * 80}>
                <article className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-glow sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-700">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {job.type}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{job.summary}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-primary-200 bg-primary-50 px-5 py-2.5 text-sm font-semibold text-primary-700 transition-all duration-300 hover:bg-primary-600 hover:text-white hover:shadow-md group-hover:border-primary-600"
                  >
                    View Position
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Hiring Process */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Hiring Process"
            title="How we hire"
            description="A transparent process designed to be respectful of your time."
          />

          <div className="relative mt-16">
            {/* Connecting line */}
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 via-accent-300 to-emerald-300 opacity-30 sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />

            <div className="space-y-8">
              {HIRING_PROCESS.map(({ step, title, description }, index) => (
                <Reveal key={step} variant={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
                  <div className={`relative sm:grid sm:grid-cols-2 sm:items-center sm:gap-12 ${index % 2 === 0 ? '' : 'sm:direction-rtl'}`}>
                    <div className="absolute left-[28px] z-10 -translate-x-1/2 sm:left-1/2">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-lg font-bold text-white shadow-lg">
                        {step}
                      </div>
                    </div>

                    <div className={`ml-20 sm:ml-0 ${index % 2 === 0 ? 'sm:text-right sm:pr-16' : 'sm:col-start-2 sm:pl-16'}`} style={{ direction: 'ltr' }}>
                      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-sm text-slate-500">{description}</p>
                    </div>

                    {index % 2 === 0 && <div className="hidden sm:block" />}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* General Application */}
      <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/10 blur-[120px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" aria-hidden="true" />

        <Container className="relative">
          <Reveal variant="scale" once className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">General Application</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don&apos;t see your role?
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              If you believe you can contribute to our mission, we&apos;d still like to hear from you.
            </p>
            <div className="mt-8">
              <Button to="/contact" size="lg" className="group bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow hover:shadow-glow-lg">
                Send Your Resume
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  )
}
