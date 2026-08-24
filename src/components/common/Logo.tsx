import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <Link to="/" className={cn('group inline-flex items-center gap-2.5', className)} aria-label="MetaCheck home">
      <img
        src="/logo.png"
        alt="MetaCheck Foundation"
        className={cn(
          'h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105',
          variant === 'light' && 'brightness-0 invert',
        )}
      />
    </Link>
  )
}
