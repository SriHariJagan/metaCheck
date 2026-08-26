import type { Metric } from '@/types'

export const METRICS: Metric[] = [
  {
    id: 'checks',
    value: 12,
    suffix: 'M+',
    label: 'Checks completed',
    detail: 'Across identity, background and compliance programs.',
  },
  {
    id: 'businesses',
    value: 4200,
    label: 'Businesses served',
    detail: 'From startups to Fortune 500 compliance teams.',
  },
  {
    id: 'accuracy',
    value: 99.4,
    decimals: 1,
    suffix: '%',
    label: 'Decision accuracy',
    detail: 'Measured against adjudicated ground truth.',
  },
  {
    id: 'speed',
    value: 3,
    prefix: '<',
    suffix: ' min',
    label: 'Median verification',
    detail: 'From submission to a confident decision.',
  },
]

export const CAREER_STATS = [
  { value: '120+', label: 'Team members across 14 countries' },
  { value: '38', label: 'Open roles in engineering, design and go-to-market' },
  { value: '94%', label: 'Of teammates would recommend MetaCheck as a place to work' },
]
