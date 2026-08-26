import {
  // Verification
  Fingerprint,
  UserCheck,
  FileSearch,
  GraduationCap,
  ShieldCheck,
  Building2,
  // Digital Platforms
  Workflow,
  Code2,
  MonitorSmartphone,
  ClipboardList,
  Puzzle,
  // Intelligence
  Gauge,
  Radar,
  Activity,
  ScanEye,
  Newspaper,
  TrendingUp,
  // Security & Trust
  Lock,
  KeyRound,
  ServerCog,
  AlertTriangle,
  Archive,
} from "lucide-react";
import type { Solution } from "@/types";

export const SOLUTIONS: Solution[] = [
  // ───────────────────────── Verification ─────────────────────────
  {
    id: "identity",
    icon: Fingerprint,
    title: "Identity Verification",
    shortDescription: "Confirm customers are who they say they are in seconds.",
    description:
      "Verify government IDs, selfies and personal details against authoritative sources with a frictionless flow your customers actually complete.",
    benefits: [
      "Global ID coverage in 190+ countries",
      "Biometric liveness detection",
      "Sub-30-second average flow",
    ],
    outcome: "Up to 92% auto-approval without human review",
  },
  {
    id: "background",
    icon: UserCheck,
    title: "Background Verification",
    shortDescription:
      "Screen candidates and partners with reliable, fair checks.",
    description:
      "Employment history, education, criminal records and references — consolidated into a single clear report with auditable sourcing.",
    benefits: [
      "FCRA-aligned workflows",
      "Candidate-friendly mobile experience",
      "Median turnaround under 48 hours",
    ],
    outcome: "3x faster hiring decisions with full audit trails",
  },
  {
    id: "documents",
    icon: FileSearch,
    title: "Document Verification",
    shortDescription: "Detect tampering and validate documents automatically.",
    description:
      "Machine-learning models inspect thousands of document types for forgery signals, extracting and cross-checking data in real time.",
    benefits: [
      "Tamper and counterfeit detection",
      "Automatic data extraction",
      "Human review queue for edge cases",
    ],
    outcome: "99.2% extraction accuracy across supported formats",
  },
  {
    id: "credentials",
    icon: GraduationCap,
    title: "Credential Verification",
    shortDescription:
      "Validate degrees, licenses and certifications at the source.",
    description:
      "Connect directly to registries, universities and licensing boards to confirm professional credentials without manual back-and-forth.",
    benefits: [
      "Direct registry integrations",
      "Continuous re-validation alerts",
      "Bulk verification for enterprises",
    ],
    outcome: "Credential fraud caught before day one",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance Checks",
    shortDescription: "Stay ahead of KYC, AML and sanctions obligations.",
    description:
      "Screen against global watchlists, PEP databases and adverse media, with rules engines that map directly to your regulatory program.",
    benefits: [
      "Sanctions, PEP and adverse media screening",
      "Configurable risk rules",
      "Regulator-ready case files",
    ],
    outcome: "Audit preparation time cut from weeks to hours",
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Verification",
    shortDescription: "Onboard legitimate companies and spot shell entities.",
    description:
      "Registry data, ownership graphs and financial signals combine to verify counterparties, beneficial owners and merchant legitimacy.",
    benefits: [
      "UBO discovery and mapping",
      "Company registry lookups worldwide",
      "Ongoing monitoring for changes",
    ],
    outcome: "Fraudulent merchants blocked before first transaction",
  },

  // ───────────────────────── Digital Platforms ─────────────────────────
  {
    id: "trust-widgets",
    icon: Puzzle,
    title: "Embeddable Trust Badges",
    shortDescription: "Show verified status anywhere your customers look.",
    description:
      "Drop-in widgets surface real-time verification status across your site, app or marketplace listings, building buyer confidence at the exact point of decision.",
    benefits: [
      "One-line embed script",
      "Custom branding & themes",
      "Real-time status sync",
    ],
    outcome: "Listings with trust badges convert up to 18% higher",
  },
  {
    id: "no-code-workflows",
    icon: Workflow,
    title: "No-Code Verification Workflows",
    shortDescription:
      "Build custom onboarding flows without writing a line of code.",
    description:
      "A drag-and-drop flow builder lets you sequence checks, add conditional logic and route edge cases — all without engineering time.",
    benefits: [
      "Visual flow builder",
      "Conditional branching logic",
      "Instant publish, no deploys",
    ],
    outcome: "Launch new onboarding flows in hours, not sprints",
  },
  {
    id: "developer-api",
    icon: Code2,
    title: "Developer API & SDKs",
    shortDescription: "Integrate verification into any stack in an afternoon.",
    description:
      "REST APIs, native SDKs and detailed docs make it simple to embed checks directly into your signup, checkout or admin flows.",
    benefits: [
      "REST API + native SDKs",
      "Sandbox & test environments",
      "Webhooks for every event",
    ],
    outcome: "Median integration time under two days",
  },
  {
    id: "white-label-portal",
    icon: MonitorSmartphone,
    title: "White-Label Verification Portal",
    shortDescription:
      "Give your users a branded, hosted verification experience.",
    description:
      "A fully hosted, mobile-optimized portal carries your logo, colors and copy — with no redirect to a third-party domain.",
    benefits: [
      "Custom domain & branding",
      "Mobile-first hosted flow",
      "Multi-language support",
    ],
    outcome: "Higher completion rates with a seamless brand experience",
  },
  {
    id: "case-management",
    icon: ClipboardList,
    title: "Case Management Dashboard",
    shortDescription:
      "Review, escalate and resolve flagged cases in one place.",
    description:
      "A unified queue gives your trust & safety team everything they need — evidence, history and collaboration tools — to make fast, consistent decisions.",
    benefits: [
      "Unified review queue",
      "Team assignment & SLAs",
      "Full decision audit trail",
    ],
    outcome: "Case resolution time cut by 60%",
  },

  // ───────────────────────── Intelligence ─────────────────────────
  {
    id: "fraud-scoring",
    icon: Gauge,
    title: "Fraud Risk Scoring",
    shortDescription: "Score every user and transaction in real time.",
    description:
      "Machine-learning models trained on billions of signals assign dynamic risk scores, so you know exactly who — and what — needs a closer look.",
    benefits: [
      "Real-time ML risk scores",
      "Explainable score breakdowns",
      "Custom thresholds by segment",
    ],
    outcome: "Fraud losses reduced by up to 70%",
  },
  {
    id: "device-network",
    icon: Radar,
    title: "Device & Network Intelligence",
    shortDescription: "Spot bots, emulators and suspicious networks instantly.",
    description:
      "Fingerprint devices, analyze network reputation and detect emulators, VPN abuse and bot farms before they ever reach your funnel.",
    benefits: [
      "Device fingerprinting",
      "Proxy/VPN/Tor detection",
      "Bot & emulator identification",
    ],
    outcome: "Automated fraud rings blocked at the source",
  },
  {
    id: "behavioral-analytics",
    icon: Activity,
    title: "Behavioral Analytics",
    shortDescription: "Detect anomalies in how users actually interact.",
    description:
      "Typing cadence, navigation patterns and session behavior feed continuous anomaly detection that flags account takeovers in progress.",
    benefits: [
      "Continuous session monitoring",
      "Account takeover detection",
      "Passive, frictionless signals",
    ],
    outcome: "Account takeovers caught before checkout",
  },
  {
    id: "synthetic-identity",
    icon: ScanEye,
    title: "Synthetic Identity Detection",
    shortDescription:
      "Catch fabricated identities that pass individual checks.",
    description:
      'Cross-reference identity elements across your entire user base to surface synthetic and "Frankenstein" identities that slip past single-point checks.',
    benefits: [
      "Cross-database identity linking",
      "Velocity & pattern analysis",
      "Fraud rings surfaced at the network level",
    ],
    outcome: "Synthetic fraud caught five times earlier",
  },
  {
    id: "adverse-media",
    icon: Newspaper,
    title: "Adverse Media Intelligence",
    shortDescription: "Surface negative news before it becomes your risk.",
    description:
      "NLP-powered media scanning continuously monitors global news sources for red flags tied to your customers, vendors and partners.",
    benefits: [
      "Global, multi-language coverage",
      "NLP relevance filtering",
      "Ongoing monitoring & alerts",
    ],
    outcome: "Reputational risks surfaced weeks earlier",
  },
  {
    id: "transaction-intelligence",
    icon: TrendingUp,
    title: "Transaction Risk Intelligence",
    shortDescription: "Understand the risk behind every payment in real time.",
    description:
      "Layer transaction velocity, amount anomalies and payment method signals on top of identity data for a complete picture of risk.",
    benefits: [
      "Real-time transaction scoring",
      "Velocity & anomaly rules",
      "Payment method risk signals",
    ],
    outcome: "Chargebacks reduced by up to 45%",
  },

  // ───────────────────────── Security & Trust ─────────────────────────
  {
    id: "data-encryption",
    icon: Lock,
    title: "Data Encryption & Privacy",
    shortDescription: "Protect sensitive data at every layer, by default.",
    description:
      "End-to-end encryption, tokenization and strict data residency controls keep personal information locked down from capture to storage.",
    benefits: [
      "AES-256 encryption at rest",
      "Configurable data residency",
      "Automatic PII tokenization",
    ],
    outcome: "Zero data breaches across the platform history",
  },
  {
    id: "access-control",
    icon: KeyRound,
    title: "Access Control & SSO",
    shortDescription: "Control exactly who can see and touch sensitive data.",
    description:
      "Role-based permissions, single sign-on and detailed access logs ensure only the right people can view or export verification results.",
    benefits: [
      "SAML/SSO & SCIM support",
      "Granular role-based access",
      "Full access audit logs",
    ],
    outcome: "Zero-trust access across every team",
  },
  {
    id: "infrastructure-security",
    icon: ServerCog,
    title: "Infrastructure & Platform Security",
    shortDescription:
      "SOC 2 Type II infrastructure built for scale and uptime.",
    description:
      "Redundant, continuously monitored infrastructure with regular penetration testing keeps the platform resilient against evolving threats.",
    benefits: [
      "SOC 2 Type II certified",
      "Quarterly penetration testing",
      "99.99% platform uptime SLA",
    ],
    outcome: "Enterprise-grade resilience, independently audited",
  },
  {
    id: "threat-monitoring",
    icon: AlertTriangle,
    title: "Continuous Threat Monitoring",
    shortDescription: "24/7 monitoring catches issues before they escalate.",
    description:
      "A dedicated security team monitors systems around the clock, with automated alerting and rapid incident response playbooks ready to go.",
    benefits: [
      "24/7 security operations",
      "Automated anomaly alerting",
      "Documented incident response",
    ],
    outcome: "Mean time to detect under five minutes",
  },
  {
    id: "secure-vault",
    icon: Archive,
    title: "Secure Document Vault",
    shortDescription: "Store sensitive documents with bank-grade protection.",
    description:
      "Encrypted storage with granular retention policies and instant, auditable deletion keeps you compliant without compromising accessibility.",
    benefits: [
      "Configurable retention policies",
      "One-click auditable deletion",
      "Encrypted at rest and in transit",
    ],
    outcome: "Retention compliance without manual cleanup",
  },
];
