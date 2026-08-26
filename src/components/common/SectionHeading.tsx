import { cn } from '@/utils/cn'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      variant="up"
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest',
            dark
              ? 'border-white/15 bg-white/5 text-accent-300'
              : 'border-primary-200 bg-primary-50 text-primary-700',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl',
          dark ? 'text-white' : 'text-slate-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', dark ? 'text-slate-300' : 'text-slate-600')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
