import type { LucideIcon } from 'lucide-react'
import {
  ShieldCheck,
  UserCheck,
  GraduationCap,
  Megaphone,
  BadgeCheck,
  Receipt,
  Workflow,
  Package,
  CreditCard,
  HeartPulse,
  Leaf,
  Navigation,
} from 'lucide-react'

export interface EcosystemProduct {
  id: string
  name: string
  subtitle: string
  description: string
  benefitForMetaCheck: string
  icon: LucideIcon
  href: string
  accent: string
  external: boolean
}

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  metahealth: HeartPulse,
  metaedu: GraduationCap,
  metagreen: Leaf,
  metaflow: Workflow,
  metahire: UserCheck,
  metacheck: ShieldCheck,
  metaads: Megaphone,
  metanav: Navigation,
  metaledger: Receipt,
  metacard: CreditCard,
  metaim: Package,
  metaverify: BadgeCheck,
}

const ACCENTS: Record<string, string> = {
  metahealth: '#14B8A6',
  metaedu: '#0066FF',
  metagreen: '#10B981',
  metaflow: '#8B5CF6',
  metahire: '#0066FF',
  metacheck: '#F59E0B',
  metaads: '#8B5CF6',
  metanav: '#F97316',
  metaledger: '#10B981',
  metacard: '#6366F1',
  metaim: '#06B6D4',
}

export const ALL_ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'metahealth',
    name: 'MetaHealth',
    subtitle: 'Healthcare Platform',
    description: 'Hospital & clinic operating system.',
    benefitForMetaCheck: 'Healthcare organizations use MetaCheck for HIPAA-compliant identity verification and staff credentialing.',
    icon: PRODUCT_ICONS.metahealth,
    href: 'https://metahealth.metadev.io',
    accent: ACCENTS.metahealth,
    external: true,
  },
  {
    id: 'metaedu',
    name: 'MetaEdu',
    subtitle: 'EdTech Platform',
    description: 'Learning management & live classrooms.',
    benefitForMetaCheck: 'Educational institutions verify student identities and credentials through MetaCheck for secure exam proctoring.',
    icon: PRODUCT_ICONS.metaedu,
    href: 'https://metaedu.metadev.io',
    accent: ACCENTS.metaedu,
    external: true,
  },
  {
    id: 'metagreen',
    name: 'MetaGreen',
    subtitle: 'Sustainability',
    description: 'Carbon & ESG tracking.',
    benefitForMetaCheck: 'Green-certified organizations use MetaCheck for supply chain partner verification and compliance.',
    icon: PRODUCT_ICONS.metagreen,
    href: 'https://metagreen.metadev.io',
    accent: ACCENTS.metagreen,
    external: true,
  },
  {
    id: 'metaflow',
    name: 'MetaFlow',
    subtitle: 'Enterprise Workflow',
    description: 'Approvals & automation.',
    benefitForMetaCheck: 'Route verification requests through MetaFlow approval chains — no email chaos.',
    icon: PRODUCT_ICONS.metaflow,
    href: 'https://metaflow.metadev.io',
    accent: ACCENTS.metaflow,
    external: true,
  },
  {
    id: 'metahire',
    name: 'MetaHire',
    subtitle: 'Hiring & Talent',
    description: 'Talent pipeline & interviews.',
    benefitForMetaCheck: 'MetaHire integrates MetaCheck background verification directly into hiring pipelines — one click to verify.',
    icon: PRODUCT_ICONS.metahire,
    href: 'https://metahire.metadev.io',
    accent: ACCENTS.metahire,
    external: true,
  },
  {
    id: 'metacheck',
    name: 'MetaCheck',
    subtitle: 'Verification & Compliance',
    description: 'Identity, background, document, credential & compliance checks.',
    benefitForMetaCheck: 'The core: unified verification platform with global coverage, explainable decisions, and audit-ready evidence.',
    icon: PRODUCT_ICONS.metacheck,
    href: '/',
    accent: ACCENTS.metacheck,
    external: false,
  },
  {
    id: 'metaads',
    name: 'MetaAds',
    subtitle: 'AdTech & Marketing',
    description: 'Unified campaigns, attribution and AI optimization.',
    benefitForMetaCheck: 'Ad platforms use MetaCheck for advertiser identity verification and fraud prevention.',
    icon: PRODUCT_ICONS.metaads,
    href: 'https://metaads.metadev.io',
    accent: ACCENTS.metaads,
    external: true,
  },
  {
    id: 'metanav',
    name: 'MetaNav',
    subtitle: 'Fleet & Logistics',
    description: 'Route & fleet control.',
    benefitForMetaCheck: 'Logistics companies verify driver credentials and vehicle documents through MetaCheck.',
    icon: PRODUCT_ICONS.metanav,
    href: 'https://metanav.metadev.io',
    accent: ACCENTS.metanav,
    external: true,
  },
  {
    id: 'metaledger',
    name: 'MetaLedger',
    subtitle: 'Billing & Finance',
    description: 'Invoicing & revenue reconciliation.',
    benefitForMetaCheck: 'MetaLedger reconciles MetaCheck verification spend to invoices, closing loop from check to cash.',
    icon: PRODUCT_ICONS.metaledger,
    href: 'https://metaledger.metadev.io',
    accent: ACCENTS.metaledger,
    external: true,
  },
  {
    id: 'metacard',
    name: 'MetaCard',
    subtitle: 'Digital ID',
    description: 'Verified identity cards.',
    benefitForMetaCheck: 'MetaCard issues verified identity cards powered by MetaCheck — one verification, lifetime trust.',
    icon: PRODUCT_ICONS.metacard,
    href: 'https://metacard.metadev.io',
    accent: ACCENTS.metacard,
    external: true,
  },
  {
    id: 'metaim',
    name: 'MetaIM',
    subtitle: 'Inventory',
    description: 'Stock & catalog sync.',
    benefitForMetaCheck: 'Supply chain partners verified through MetaCheck before MetaIM syncs their catalogs.',
    icon: PRODUCT_ICONS.metaim,
    href: 'https://metaim.metadev.io',
    accent: ACCENTS.metaim,
    external: true,
  },
]

// For MetaCheck: only show useful companions (not every product). Curated for verification relevance.
export const METACHECK_ECOSYSTEM_IDS = ['metahire', 'metaflow', 'metacard', 'metaledger', 'metaedu', 'metahealth'] as const

export function getUsefulFor(productId: string): EcosystemProduct[] {
  if (productId === 'metacheck') {
    return ALL_ECOSYSTEM_PRODUCTS.filter((p) => (METACHECK_ECOSYSTEM_IDS as readonly string[]).includes(p.id))
  }
  // Generic fallback for other products
  const priority: Record<string, string[]> = {
    metahire: ['metacheck', 'metaflow', 'metacard', 'metaledger'],
    metaflow: ['metacheck', 'metahire', 'metaledger', 'metaim'],
    metaledger: ['metacheck', 'metaflow', 'metaim', 'metacard'],
    metahealth: ['metacheck', 'metahire', 'metacard', 'metaledger'],
    metaedu: ['metacheck', 'metahire', 'metacard', 'metaledger'],
    default: ['metacheck', 'metahire', 'metaledger', 'metaflow'],
  }
  const ids = priority[productId] || priority.default
  return ALL_ECOSYSTEM_PRODUCTS.filter((p) => ids.includes(p.id))
}

export function getProductById(id: string): EcosystemProduct | undefined {
  return ALL_ECOSYSTEM_PRODUCTS.find((p) => p.id === id)
}