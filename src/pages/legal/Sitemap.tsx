import { Link } from "react-router-dom"
import { Map, Building2, Package, Layers, Users, Mail, ShieldCheck, FileText, Award, Network } from "lucide-react"
import { LegalLayout } from "@/components/legal/LegalLayout"

const GROUPS = [
  {
    title: "Company",
    desc: "Who we are and why we exist.",
    icon: Building2,
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Solutions",
    desc: "Outcomes for health, education, gov-tech, and enterprise.",
    icon: Layers,
    links: [
      { label: "All Solutions", to: "/solutions" },
      { label: "Digital Health", to: "/solutions" },
      { label: "Education", to: "/solutions" },
      { label: "Government", to: "/solutions" },
      { label: "Enterprise", to: "/solutions" },
      { label: "FinTech", to: "/solutions" },
      { label: "AI & Automation", to: "/solutions" },
    ],
  },
  {
    title: "Products",
    desc: "The MetaDev product family.",
    icon: Package,
    links: [
      { label: "MetaHealth — Care Platform", to: "https://metahealth.live" },
      { label: "MetaEdu — Learning OS", to: "https://metaedu.in" },
      { label: "MetaGreen — Sustainability", to: "https://metagreen.in" },
      { label: "MetaFlow — Workflow", to: "https://metaflow.in" },
      { label: "MetaHire — Talent", to: "https://metahire.in" },
      { label: "MetaCheck — Verification", to: "https://metacheck.in" },
      { label: "MetaAds — Growth", to: "https://metaads.in" },
      { label: "MetaNav — Navigation", to: "https://metanav.in" },
      { label: "MetaLedger — Finance", to: "https://metaledger.in" },
      { label: "MetaCard — Payments", to: "https://metacard.in" },
      { label: "MetaIM — Messaging", to: "https://metaim.in" },
      { label: "MetaPE — Payments Engine", to: "https://metape.in" },
    ],
  },
  {
    title: "Resources",
    desc: "People, stories, and ways to collaborate.",
    icon: Users,
    links: [
      { label: "Careers — Open roles", to: "/careers" },
      { label: "About", to: "/about" },
      { label: "Contact — Sales & Support", to: "/contact" },
    ],
  },
  {
    title: "Legal & Trust",
    desc: "Policies and assurance.",
    icon: ShieldCheck,
    links: [
      { label: "Privacy Policy", to: "/legal/privacy-policy" },
      { label: "Terms of Service", to: "/legal/terms-of-service" },
      { label: "Cancellation & Refunds", to: "/legal/cancellation" },
      { label: "Security", to: "/legal/security" },
      { label: "Compliance", to: "/legal/compliance" },
      { label: "Sitemap (this page)", to: "/sitemap" },
    ],
  },
  {
    title: "Platform",
    desc: "Account and product workspaces.",
    icon: Network,
    links: [
      { label: "Home", to: "/" },
      { label: "Contact", to: "/contact" },
    ],
  },
]

export function Sitemap() {
  return (
    <LegalLayout
      icon={Map}
      eyebrow="Navigate — Sitemap"
      title="Sitemap"
      description="Every public page — products, solutions, company, and legal — in one place. For crawlers, see sitemap.xml and robots.txt."
      updatedAt="28 August 2026"
      toc={[
        { id: "explore", label: "Explore" },
        { id: "for-crawlers", label: "For crawlers & SEO" },
        { id: "need-help", label: "Need help?" },
      ]}
    >
      <h2 id="explore">Explore</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.title} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:border-meta-blue/30">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-meta-blue to-meta-violet text-white"><g.icon size={18} /></span>
              <h3 className="m-0 text-sm font-bold text-meta-navy">{g.title}</h3>
            </div>
            <p className="mb-3 text-xs leading-6 text-slate-500">{g.desc}</p>
            <ul className="flex list-none flex-col gap-1.5 p-0">
              {g.links.map((l) => (
                <li key={l.to + l.label} className="m-0">
                  {l.to.startsWith("http") ? (
                    <a href={l.to} target="_blank" rel="noopener noreferrer" className="text-sm font-medium no-underline hover:underline">{l.label}</a>
                  ) : (
                    <Link to={l.to} className="text-sm font-medium no-underline hover:underline">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 id="for-crawlers">For crawlers & SEO</h2>
      <div className="mb-6 flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-meta-blue/10 text-meta-blue"><FileText size={18} /></span>
        <div>
          <p className="mb-1 text-sm font-bold text-meta-navy">Machine-readable sitemaps</p>
          <p className="m-0 text-sm leading-6 text-slate-500"><code>/sitemap.xml</code> — canonical URL list &nbsp;·&nbsp; <code>/robots.txt</code> — crawl rules and sitemap pointer. Both are auto-generated on deploy.</p>
        </div>
      </div>
      <p>We follow semantic HTML, canonical URLs, and structured data (Organization, Product, BreadcrumbList) to help search engines and assistive tech understand our content. If you spot a broken link, please report it to <a href="mailto:support@metadev.in">support@metadev.in</a>.</p>

      <h2 id="need-help">Need help finding something?</h2>
      <p>Try search or write to us:</p>
      <ul>
        <li><Mail size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }} /><a href="mailto:support@metadev.in">support@metadev.in</a> — general & support</li>
        <li><Award size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }} /><a href="mailto:business@metadev.in">business@metadev.in</a> — partnerships & sales</li>
        <li><ShieldCheck size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }} /><a href="mailto:info@metadev.in">info@metadev.in</a> — legal & compliance</li>
      </ul>
      <p className="text-xs text-slate-500">Last audited 28 August 2026. New products and solutions are added here on launch.</p>
    </LegalLayout>
  )
}
