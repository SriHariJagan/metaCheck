import { useState } from 'react'
import { X } from 'lucide-react'
import type { Job } from '@/types'
import { Button } from '@/components/buttons/Button'
import { Input } from '@/components/forms/Input'
import { Textarea } from '@/components/forms/Textarea'
import { applicationsService } from '@/services/applicationsService'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

interface ApplicationModalProps {
  job: Job
  onClose: () => void
}

interface FormState {
  name: string
  email: string
  phone: string
  portfolioUrl: string
  coverLetter: string
}

const EMPTY: FormState = { name: '', email: '', phone: '', portfolioUrl: '', coverLetter: '' }

type Errors = Partial<Record<keyof FormState, string>>

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your full name.'
  if (!form.email.trim()) errors.email = 'An email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'That email address looks incomplete.'
  if (form.portfolioUrl && !/^https?:\/\/.+\..+/.test(form.portfolioUrl))
    errors.portfolioUrl = 'Portfolio links should start with http:// or https://.'
  if (!form.coverLetter.trim()) errors.coverLetter = 'Tell us briefly why this role fits you.'
  return errors
}

export function ApplicationModal({ job, onClose }: ApplicationModalProps) {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useLockBodyScroll(true)

  const update = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      const result = await applicationsService.submit({
        jobId: job.id,
        jobTitle: job.title,
        ...form,
      })
      setStatus(result.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-title"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-white shadow-soft sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-slate-100 bg-white px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-700">Apply now</p>
            <h2 id="application-title" className="mt-1 text-lg font-bold text-slate-900">{job.title}</h2>
            <p className="text-xs text-slate-500">
              {job.department} · {job.location} · {job.type}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close application form"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-6 py-12 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-5 text-xl font-bold text-slate-900">Application received</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              Thanks for applying to {job.title}. Our talent team reviews every
              application personally and will reach out within five business days.
            </p>
            <Button onClick={onClose} variant="secondary" className="mt-8">
              Back to open roles
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5 px-6 py-6">
            <Input
              label="Full name"
              required
              name="name"
              autoComplete="name"
              placeholder="Jordan Smith"
              value={form.name}
              error={errors.name}
              onChange={(e) => update('name')(e.target.value)}
            />
            <Input
              label="Email"
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              error={errors.email}
              onChange={(e) => update('email')(e.target.value)}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+49 …"
                value={form.phone}
                error={errors.phone}
                hint="Optional"
                onChange={(e) => update('phone')(e.target.value)}
              />
              <Input
                label="Portfolio / LinkedIn"
                name="portfolioUrl"
                type="url"
                placeholder="https://…"
                value={form.portfolioUrl}
                error={errors.portfolioUrl}
                hint="Optional"
                onChange={(e) => update('portfolioUrl')(e.target.value)}
              />
            </div>
            <Textarea
              label="Why MetaCheck?"
              required
              name="coverLetter"
              rows={5}
              placeholder="A few sentences about your experience and what draws you to this role."
              value={form.coverLetter}
              error={errors.coverLetter}
              onChange={(e) => update('coverLetter')(e.target.value)}
            />

            {status === 'error' && (
              <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                Something went wrong sending your application. Please try again.
              </p>
            )}

            <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <p className="hidden text-xs text-slate-400 sm:block">
                Frontend demo — no data leaves your browser.
              </p>
              <div className="flex gap-3">
                <Button type="button" variant="secondary" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" loading={status === 'submitting'}>
                  Submit application
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
