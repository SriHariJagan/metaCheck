import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { Clock3, ShieldCheck, ArrowLeft } from 'lucide-react'

export interface TocItem { id: string; label: string }

interface Props {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  toc: TocItem[]
  children: React.ReactNode
}

export function LegalLayout({ icon: Icon, eyebrow, title, description, updatedAt, toc, children }: Props) {
  const [active, setActive] = useState(toc[0]?.id ?? '')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )
    toc.forEach((t) => {
      const el = document.getElementById(t.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [toc])

  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-meta-navy-950 px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-36">
        <div className="pointer-events-none absolute -left-28 -top-28 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#35c9ff,transparent_70%)] opacity-30 blur-[60px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -right-28 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle_at_60%_40%,#4f7bff,transparent_72%)] opacity-25 blur-[60px]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_30%,transparent_75%)]" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-[860px] flex-col items-center gap-3 text-center">
          <Link to="/" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70 backdrop-blur transition hover:border-white/25 hover:text-white">
            <ArrowLeft size={14} /> Back to home
          </Link>
          <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-meta-cyan shadow-lg">
            <Icon size={30} strokeWidth={1.7} />
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-meta-cyan backdrop-blur">{eyebrow}</span>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-none">{title}</h1>
          <p className="max-w-[44rem] text-sm leading-7 text-white/65">{description}</p>
          <span className="mt-2 inline-flex flex-wrap items-center justify-center gap-2 text-xs text-white/50">
            <Clock3 size={13} /> Last updated � {updatedAt}
            <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
            <ShieldCheck size={13} /> MetaDev Innovations Pvt. Ltd.
          </span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
          <aside className="flex flex-col gap-4 lg:sticky lg:top-24">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">On this page</p>
            <nav>
              <ul className="flex list-none flex-col gap-0.5 p-0">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className={`block rounded-lg border-l-2 px-2.5 py-1.5 text-sm leading-5 no-underline transition ${active === t.id ? 'border-meta-blue bg-meta-blue/10 font-semibold text-meta-blue' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-meta-navy'}`}>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-1 text-sm font-bold text-meta-navy">Need help?</p>
              <p className="mb-3 text-xs leading-6 text-slate-500">Questions about these terms? Our support team replies within 24 hours.</p>
              <a href="mailto:info@metadev.in" className="text-sm font-semibold text-meta-blue hover:underline">info@metadev.in ?</a>
              <a href="mailto:contact@metadev.in" className="mt-1 block text-xs text-slate-500 hover:text-meta-blue">contact@metadev.in (privacy)</a>
            </div>
          </aside>

          <article className="min-w-0 max-w-[720px] text-[15px] leading-7 text-slate-600 [&_a]:text-meta-blue [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-meta-violet [&_code]:rounded-md [&_code]:border [&_code]:border-slate-200 [&_code]:bg-slate-50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-meta-navy [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:scroll-mt-28 [&_h2]:border-t [&_h2]:border-slate-200 [&_h2]:pt-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-meta-navy [&_h2:first-of-type]:mt-0 [&_h2:first-of-type]:border-0 [&_h2:first-of-type]:pt-0 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-bold [&_h3]:text-meta-navy [&_li]:mb-1.5 [&_li::marker]:text-meta-blue [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-meta-navy [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">{children}</article>
        </div>
      </div>
    </div>
  )
}
