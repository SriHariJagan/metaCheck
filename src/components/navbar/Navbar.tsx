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
  const isDarkNavbar = solid || isDarkPage

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        isDarkNavbar
          ? 'bg-[#0a0a1a]/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
          : 'bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(15,23,42,0.08)]',
      )}
    >
      {/* Gradient border line */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-primary-500/50 via-accent-500/50 to-emerald-500/50" aria-hidden="true" />
      
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8 relative"
        aria-label="Main navigation"
      >
        {/* Logo with enhanced container */}
        <div className="relative flex items-center gap-3">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          <Logo variant={isDarkNavbar ? 'light' : 'dark'} className="relative z-10" />
          {/* Subtle brand indicator */}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
        </div>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300',
                    isActive
                      ? isDarkNavbar
                        ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white shadow-[0_4px_16px_rgba(99,102,241,0.3)]'
                        : 'bg-gradient-to-r from-primary-500/10 to-accent-500/10 text-primary-700 shadow-[0_4px_16px_rgba(99,102,241,0.2)]'
                      : isDarkNavbar
                        ? 'text-slate-400 hover:bg-white/5 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 -bottom-px h-0.5 rounded-full transition-all duration-300',
                        isActive
                          ? isDarkNavbar
                            ? 'bg-gradient-to-r from-primary-400 to-accent-400 opacity-100 scale-x-100'
                            : 'bg-primary-600 opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0',
                      )}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            to="/contact"
            size="sm"
            variant="primary"
            className="group relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 shadow-[0_8px_24px_rgba(99,102,241,0.4)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.5)] hover:from-primary-500 hover:via-primary-400 hover:to-accent-400 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Partner With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" aria-hidden="true" />
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 md:hidden',
            isDarkNavbar
              ? 'text-white hover:bg-white/10 hover:shadow-[0_4px_16px_rgba(255,255,255,0.1)]'
              : 'text-slate-700 hover:bg-slate-100 hover:shadow-[0_4px_16px_rgba(15,23,42,0.1)]',
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
          open ? 'max-h-[420px] opacity-100 shadow-[0_16px_48px_rgba(0,0,0,0.4)]' : 'max-h-0 opacity-0',
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
                    'block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200',
                    isActive
                      ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-white shadow-[0_4px_16px_rgba(99,102,241,0.3)]'
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
            <Button
              to="/contact"
              fullWidth
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-500 hover:to-accent-400 shadow-[0_8px_24px_rgba(99,102,241,0.4)]"
            >
              Partner With Us
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
