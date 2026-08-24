import { Scale, Eye, Gauge, Lock } from 'lucide-react'
import type { ValueItem } from '@/types'

export const VALUES: ValueItem[] = [
  {
    icon: Scale,
    title: 'Integrity first',
    description:
      'Trust is our product. We surface uncertainty honestly, never tune decisions for convenience, and treat every verification like it will be examined.',
  },
  {
    icon: Eye,
    title: 'Radical transparency',
    description:
      'Every automated decision can explain itself. Customers and their end users always know what was checked, why, and on what evidence.',
  },
  {
    icon: Gauge,
    title: 'Speed with rigor',
    description:
      'Fast only counts when it is right. We obsess over shaving seconds from flows that thousands of teams depend on daily.',
  },
  {
    icon: Lock,
    title: 'Privacy by design',
    description:
      'We collect the minimum needed to reach a decision, encrypt everything, and design systems so sensitive data is never a liability.',
  },
]

export const APPROACH = [
  {
    step: '01',
    title: 'Understand the risk',
    description:
      'We start every engagement by mapping your regulatory exposure and fraud patterns — not by selling you a bundle of checks.',
  },
  {
    step: '02',
    title: 'Automate the clear cases',
    description:
      'Our models resolve the overwhelming majority of verifications instantly, reserving human expertise for the cases that genuinely need it.',
  },
  {
    step: '03',
    title: 'Prove every decision',
    description:
      'Each result ships with immutable evidence, sourced documents and reasoning — ready for auditors, regulators or your own QA team.',
  },
]
