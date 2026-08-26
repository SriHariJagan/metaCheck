import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Input } from '@/components/forms/Input'
import { Textarea } from '@/components/forms/Textarea'
import { contactService } from '@/services/contactService'
import { usePageMeta } from '@/hooks/usePageMeta'

const CONTACT_INFO = [
  { icon: Mail, label: 'General Enquiries', value: 'hello@metacheck.io', description: 'For general questions and information.' },
  { icon: Mail, label: 'Partnerships', value: 'partners@metacheck.io', description: 'Explore collaboration opportunities.' },
  { icon: Mail, label: 'Careers', value: 'careers@metacheck.io', description: 'Job applications and talent inquiries.' },
  { icon: MapPin, label: 'Location', value: 'Global \u00b7 Remote-first', description: 'We operate across multiple regions.' },
]

interface FormState { name: string; email: string; phone: string; company: string; subject: string; message: string }
const EMPTY: FormState = { name: '', email: '', phone: '', company: '', subject: '', message: '' }
type Errors = Partial<Record<keyof FormState, string>>

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your full name.'
  if (!form.email.trim()) errors.email = 'An email address is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'That email address looks incomplete.'
  if (!form.subject.trim()) errors.subject = 'Please select or enter a subject.'
  if (!form.message.trim()) errors.message = 'Please enter your message.'
  return errors
}

export default function Contact() {
  usePageMeta('Contact | MetaCheck Foundation', 'Whether you want to collaborate, explore our solutions, join our team, or simply learn more, we would love to hear from you.')
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const update = (field: keyof FormState) => (value: string) => { setForm((prev) => ({ ...prev, [field]: value })); setErrors((prev) => ({ ...prev, [field]: undefined })) }
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setStatus('submitting')
    try {
      const result = await contactService.submit(form)
      if (result.ok) { setStatus('success'); setForm(EMPTY) } else { setStatus('error') }
    } catch { setStatus('error') }
  }
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-[#0a0a1a]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary-600/20 blur-[120px] animate-pulse-glow" />
          <div className="absolute -right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-accent-500/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
        <Container className="relative flex min-h-[70vh] items-center pt-24 lg:pt-28">
          <Reveal variant="up" once className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-300">Contact</p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Let&apos;s start a <span className="text-gradient-dark">conversation</span></h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400 sm:text-xl">Whether you want to collaborate, explore our solutions, join our team, or simply learn more about MetaCheck Foundation, we&apos;d love to hear from you.</p>
          </Reveal>
        </Container>
      </section>
      <section className="relative overflow-hidden bg-white py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value, description }, index) => (
              <Reveal key={label} variant="up" delay={index * 100}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all duration-500 hover:border-primary-200 hover:bg-white hover:shadow-glow">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="mt-4 font-semibold text-slate-900">{label}</h3>
                  <p className="mt-1 text-sm font-medium text-primary-600">{value}</p>
                  <p className="mt-1 text-xs text-slate-500">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dot opacity-50" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-600">Get in Touch</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Send us a message</h2>
                <p className="mt-4 text-lg text-slate-500">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>
              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-accent-50 p-6">
                  <p className="text-sm font-semibold text-slate-900">Response time</p>
                  <p className="mt-1 text-sm text-slate-500">We aim to respond within 24 hours on business days.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold text-slate-900">Partnership inquiries</p>
                  <p className="mt-1 text-sm text-slate-500">For partnership inquiries, please email <span className="font-medium text-primary-600">partners@metacheck.io</span> directly.</p>
                </div>
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              {status === 'success' ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 className="h-8 w-8" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Message sent</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600">Thank you. Your message has been received. Our team will get back to you shortly.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-primary-700 hover:text-primary-600">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
                  <div className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input label="Full Name" required name="name" autoComplete="name" placeholder="Your name" value={form.name} error={errors.name} onChange={(e) => update('name')(e.target.value)} />
                      <Input label="Work Email" required name="email" type="email" autoComplete="email" placeholder="you@company.com" value={form.email} error={errors.email} onChange={(e) => update('email')(e.target.value)} />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input label="Phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => update('phone')(e.target.value)} hint="Optional" />
                      <Input label="Organization" name="company" autoComplete="organization" placeholder="Company name" value={form.company} onChange={(e) => update('company')(e.target.value)} hint="Optional" />
                    </div>
                    <Input label="Subject" required name="subject" placeholder="How can we help?" value={form.subject} error={errors.subject} onChange={(e) => update('subject')(e.target.value)} />
                    <Textarea label="Message" required name="message" rows={5} placeholder="Tell us about your project, question, or idea..." value={form.message} error={errors.message} onChange={(e) => update('message')(e.target.value)} />
                  </div>
                  {status === 'error' && <p role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">Something went wrong sending your message. Please try again.</p>}
                  <div className="mt-6 flex items-center justify-between">
                    <p className="hidden text-xs text-slate-400 sm:block">Frontend demo — no data leaves your browser.</p>
                    <button type="submit" disabled={status === 'submitting'} className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-500 hover:shadow-md disabled:pointer-events-none disabled:opacity-50">
                      {status === 'submitting' ? (<><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />Sending...</>) : (<>Send Message<Send className="h-4 w-4" aria-hidden="true" /></>)}
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}