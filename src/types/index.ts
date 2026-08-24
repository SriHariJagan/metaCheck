import type { LucideIcon } from 'lucide-react'

export interface NavLinkItem {
  label: string
  to: string
}

export interface Solution {
  id: string
  icon: LucideIcon
  title: string
  shortDescription: string
  description: string
  benefits: string[]
  outcome: string
}

export interface Metric {
  id: string
  value: number
  label: string
  detail?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export type WorkModel = 'Remote' | 'Hybrid' | 'On-site'

export interface Job {
  id: string
  title: string
  department: JobDepartment
  location: string
  model: WorkModel
  type: string
  summary: string
}

export type JobDepartment = 'Engineering' | 'Design' | 'Product' | 'Go-to-Market' | 'Operations'

export interface ApplicationPayload {
  jobId: string
  jobTitle: string
  name: string
  email: string
  phone?: string
  portfolioUrl?: string
  coverLetter: string
}

export interface ContactPayload {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
}

export type SubmitResult = { ok: true } | { ok: false; error: string }

export interface ValueItem {
  icon: LucideIcon
  title: string
  description: string
}
