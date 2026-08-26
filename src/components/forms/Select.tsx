import { forwardRef, type SelectHTMLAttributes } from 'react'
import { ChevronDown, AlertCircle } from 'lucide-react'
import { cn } from '@/utils/cn'

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'children'> {
  label?: string
  error?: string
  options: Array<{ value: string; label: string }>
  placeholderOption?: string
  className?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, error, options, placeholderOption, className, id, required, ...rest },
  ref,
) {
  const selectId = id ?? rest.name
  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label htmlFor={selectId} className="mb-1.5 block text-sm font-medium text-slate-700">
          {label}
          {required && <span className="ml-0.5 text-primary-600">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          aria-invalid={error ? true : undefined}
          className={cn(
            'block w-full appearance-none rounded-lg border bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-900 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500',
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
              : 'border-slate-300 hover:border-slate-400 focus:border-primary-500 focus:ring-primary-200',
            !rest.value && 'text-slate-400',
          )}
          {...rest}
        >
          {placeholderOption && (
            <option value="" disabled>
              {placeholderOption}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error ? (
          <AlertCircle
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-red-500"
            aria-hidden="true"
          />
        ) : (
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
        )}
      </div>
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
})
