import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'light-outline'
type Size = 'sm' | 'md' | 'lg'

interface CommonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  loading?: boolean
  className?: string
  ariaLabel?: string
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    to?: string
    href?: string
  }

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white shadow-sm hover:bg-primary-500 active:bg-primary-700 focus-visible:outline-primary-600',
  secondary:
    'bg-white text-slate-900 border border-slate-300 shadow-sm hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-400',
  ghost:
    'bg-transparent text-primary-700 hover:bg-primary-50 focus-visible:outline-primary-600',
  dark: 'bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-900',
  'light-outline':
    'bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/10 focus-visible:outline-white',
}

const SIZES: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = 'primary', size = 'md', fullWidth, loading, className, ariaLabel, to, href, ...rest },
  ref,
) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:pointer-events-none disabled:opacity-55',
    VARIANTS[variant],
    SIZES[size],
    fullWidth && 'w-full',
    className,
  )

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} className={classes} disabled={rest.disabled || loading} aria-label={ariaLabel} {...rest}>
      {content}
    </button>
  )
})
