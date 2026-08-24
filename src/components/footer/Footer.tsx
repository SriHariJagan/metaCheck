import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'
import { FOOTER_LINKS } from '@/data/navigation'
import { Logo } from '@/components/common/Logo'

const SOCIALS = [
  { label: 'MetaCheck on Twitter', icon: Twitter },
  { label: 'MetaCheck on LinkedIn', icon: Linkedin },
  { label: 'MetaCheck on GitHub', icon: Github },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (event: FormEvent) => {
    event.preventDefault()
    if (!email.includes('@')) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-[#0a0a1a] text-slate-400">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Building a more trusted digital future. MetaCheck Foundation creates
              technology solutions that make people, organizations, and communities
              more secure, transparent, and connected.
            </p>
            <p className="mt-6 text-xs uppercase tracking-widest text-slate-600">
              MetaCheck Foundation
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_LINKS.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h3 className="text-sm font-semibold text-white">{group.heading}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <form onSubmit={onSubscribe} className="w-full max-w-md" noValidate>
            <label htmlFor="newsletter-email" className="text-sm font-medium text-white">
              Verification insights, monthly
            </label>
            {subscribed ? (
              <p className="mt-3 flex items-center gap-2 text-sm text-emerald-400" role="status">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                You&apos;re on the list. Talk soon.
              </p>
            ) : (
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Subscribe
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            )}
          </form>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={`${label} (placeholder link)`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} MetaCheck Foundation. All rights reserved.</p>
          <p className="text-slate-600">Built for a more trusted digital future.</p>
        </div>
      </div>
    </footer>
  )
}
