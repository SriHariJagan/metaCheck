import {
  Fingerprint,
  UserCheck,
  FileSearch,
  GraduationCap,
  ShieldCheck,
  Building2,
} from 'lucide-react'
import type { Solution } from '@/types'

export const SOLUTIONS: Solution[] = [
  {
    id: 'identity',
    icon: Fingerprint,
    title: 'Identity Verification',
    shortDescription: 'Confirm customers are who they say they are in seconds.',
    description:
      'Verify government IDs, selfies and personal details against authoritative sources with a frictionless flow your customers actually complete.',
    benefits: ['Global ID coverage in 190+ countries', 'Biometric liveness detection', 'Sub-30-second average flow'],
    outcome: 'Up to 92% auto-approval without human review',
  },
  {
    id: 'background',
    icon: UserCheck,
    title: 'Background Verification',
    shortDescription: 'Screen candidates and partners with reliable, fair checks.',
    description:
      'Employment history, education, criminal records and references — consolidated into a single clear report with auditable sourcing.',
    benefits: ['FCRA-aligned workflows', 'Candidate-friendly mobile experience', 'Median turnaround under 48 hours'],
    outcome: '3x faster hiring decisions with full audit trails',
  },
  {
    id: 'documents',
    icon: FileSearch,
    title: 'Document Verification',
    shortDescription: 'Detect tampering and validate documents automatically.',
    description:
      'Machine-learning models inspect thousands of document types for forgery signals, extracting and cross-checking data in real time.',
    benefits: ['Tamper and counterfeit detection', 'Automatic data extraction', 'Human review queue for edge cases'],
    outcome: '99.2% extraction accuracy across supported formats',
  },
  {
    id: 'credentials',
    icon: GraduationCap,
    title: 'Credential Verification',
    shortDescription: 'Validate degrees, licenses and certifications at the source.',
    description:
      'Connect directly to registries, universities and licensing boards to confirm professional credentials without manual back-and-forth.',
    benefits: ['Direct registry integrations', 'Continuous re-validation alerts', 'Bulk verification for enterprises'],
    outcome: 'Credential fraud caught before day one',
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'Compliance Checks',
    shortDescription: 'Stay ahead of KYC, AML and sanctions obligations.',
    description:
      'Screen against global watchlists, PEP databases and adverse media, with rules engines that map directly to your regulatory program.',
    benefits: ['Sanctions, PEP and adverse media screening', 'Configurable risk rules', 'Regulator-ready case files'],
    outcome: 'Audit preparation time cut from weeks to hours',
  },
  {
    id: 'business',
    icon: Building2,
    title: 'Business Verification',
    shortDescription: 'Onboard legitimate companies and spot shell entities.',
    description:
      'Registry data, ownership graphs and financial signals combine to verify counterparties, beneficial owners and merchant legitimacy.',
    benefits: ['UBO discovery and mapping', 'Company registry lookups worldwide', 'Ongoing monitoring for changes'],
    outcome: 'Fraudulent merchants blocked before first transaction',
  },
]
