import type { Job } from '@/types'

export const JOBS: Job[] = [
  {
    id: 'sfe-01',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (Europe)',
    model: 'Remote',
    type: 'Full-time',
    summary: 'Own the verification dashboard experience used by thousands of compliance teams daily.',
  },
  {
    id: 'bke-02',
    title: 'Backend Engineer, Verification APIs',
    department: 'Engineering',
    location: 'Remote (US)',
    model: 'Remote',
    type: 'Full-time',
    summary: 'Design low-latency services that route millions of checks to global data sources.',
  },
  {
    id: 'mle-03',
    title: 'Machine Learning Engineer, Document Intelligence',
    department: 'Engineering',
    location: 'London, UK',
    model: 'Hybrid',
    type: 'Full-time',
    summary: 'Improve forgery-detection models across thousands of document formats.',
  },
  {
    id: 'des-04',
    title: 'Product Designer',
    department: 'Design',
    location: 'Berlin, Germany',
    model: 'Hybrid',
    type: 'Full-time',
    summary: 'Craft verification flows that feel effortless for end users and powerful for analysts.',
  },
  {
    id: 'pdm-05',
    title: 'Senior Product Manager, Compliance Suite',
    department: 'Product',
    location: 'Remote (Global)',
    model: 'Remote',
    type: 'Full-time',
    summary: 'Shape the roadmap for screening, monitoring and case management products.',
  },
  {
    id: 'gtm-06',
    title: 'Enterprise Account Executive',
    department: 'Go-to-Market',
    location: 'New York, US',
    model: 'On-site',
    type: 'Full-time',
    summary: 'Lead Fortune 500 relationships in fintech and marketplaces.',
  },
  {
    id: 'ops-07',
    title: 'Compliance Operations Analyst',
    department: 'Operations',
    location: 'Singapore',
    model: 'Hybrid',
    type: 'Full-time',
    summary: 'Run quality programs across our human review network.',
  },
  {
    id: 'sde-08',
    title: 'Security Engineer, Detection & Response',
    department: 'Engineering',
    location: 'Remote (US)',
    model: 'Remote',
    type: 'Full-time',
    summary: 'Harden the platform that protects some of the most sensitive data in fintech.',
  },
]

export const DEPARTMENTS = ['All', 'Engineering', 'Design', 'Product', 'Go-to-Market', 'Operations'] as const

export const PERKS = [
  'Competitive salary + meaningful equity',
  'Remote-first with quarterly team offsites',
  'Annual learning budget of $2,000',
  'Comprehensive health, dental and vision',
  '28 days paid leave, plus local holidays',
  'Latest hardware and home-office stipend',
]
