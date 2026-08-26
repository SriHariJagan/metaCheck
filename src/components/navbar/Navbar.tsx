import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/data/navigation'
import { useScrolled } from '@/hooks/useScrolled'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { Logo } from '@/components/common/Logo'
import { Button } from '@/components/buttons/Button'
import { cn } from '@/utils/cn'

const DARK_BG_ROUTES = ['/']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(8)
  const location = useLocation()
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useLockBodyScroll(open)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    firstMobileLinkRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const solid = scrolled || open
  const isDarkPage = DARK_BG_ROUTES.includes(location.pathname)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid || isDarkPage
          ? 'border-b border-white/10 bg-[#0a0a1a]/90 shadow-lg backdrop-blur-xl'
          : 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-md',
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8"
        aria-label="Main navigation"
      >
        <Logo variant={solid || isDarkPage ? 'light' : 'dark'} />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? solid || isDarkPage ? 'text-white' : 'text-primary-700'
                      : solid || isDarkPage ? 'text-slate-400 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 -bottom-px h-0.5 rounded-full transition-all duration-300',
                        solid || isDarkPage
                          ? 'bg-gradient-to-r from-primary-400 to-accent-400'
                          : 'bg-primary-600',
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0',
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" size="sm" variant="primary" className="group bg-gradient-to-r from-primary-600 to-primary-500 shadow-glow hover:shadow-glow-lg">
            Partner With Us
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 md:hidden',
            solid || isDarkPage
              ? 'text-white hover:bg-white/10'
              : 'text-slate-700 hover:bg-slate-100',
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-5">
            <Menu
              className={cn(
                'absolute inset-0 h-5 w-5 transition-all duration-300',
                open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100',
              )}
              aria-hidden="true"
            />
            <X
              className={cn(
                'absolute inset-0 h-5 w-5 transition-all duration-300',
                open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0',
              )}
              aria-hidden="true"
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-white/10 bg-[#0a0a1a]/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden',
          open ? 'max-h-[420px] opacity-100 shadow-lg' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((item, index) => (
            <li key={item.to}>
              <NavLink
                ref={index === 0 ? firstMobileLinkRef : undefined}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white',
                  )
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Button to="/contact" fullWidth onClick={() => setOpen(false)}>
              Partner With Us
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
