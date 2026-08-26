import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/common/Reveal";
import { Shield, FileSearch, MapPin, Search, Briefcase, GraduationCap, CreditCard, Beaker } from "lucide-react";

interface CheckItem {
  title: string;
  description: string;
}

interface CheckCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  gradient: string;
  color: string;
  items: CheckItem[];
}

const CHECK_CATEGORIES: CheckCategory[] = [
  {
    id: "identity",
    label: "Identity Verification",
    icon: Shield,
    gradient: "from-blue-500 to-indigo-600",
    color: "blue",
    items: [
      { title: "Voter ID Verification", description: "Confirming the identity and eligibility of a candidate's Voter ID issued by the election commission of India." },
      { title: "Driving License Verification", description: "Confirming the authenticity and validity of a driver's license including DL validity, name, place of issue." },
      { title: "Passport Verification", description: "Confirming the authenticity and validity of an individual's passport by scrutinizing identity information." },
      { title: "Face Match Check", description: "Match profile photos with ID documents, backed by an automatic liveness check for added authenticity." },
    ],
  },
  {
    id: "criminal",
    label: "Criminal Checks",
    icon: FileSearch,
    gradient: "from-red-500 to-rose-600",
    color: "red",
    items: [
      { title: "Criminal Court Record Check", description: "Identifying if the candidate matches any registered criminal or civil cases in digitized court records." },
      { title: "Criminal Record Check via Law Firm", description: "Verifying an individual's background for criminal records within the jurisdiction of local police stations." },
      { title: "Police Clearance Certificate", description: "A thorough background check by state law enforcement, resulting in a PCC or signed acknowledgement." },
      { title: "Global Database Check", description: "Examining international databases for fraudulent, terrorist, or criminal activities." },
      { title: "eFIR Check", description: "A digital screening process that verifies whether an individual has an online FIR registered." },
    ],
  },
  {
    id: "address",
    label: "Address Verification",
    icon: MapPin,
    gradient: "from-emerald-500 to-teal-600",
    color: "emerald",
    items: [
      { title: "Physical Address Verification", description: "Confirming the address of a candidate by conducting an in-person visit to ensure authenticity." },
      { title: "Postal Address Verification", description: "Confirming the address by sending a letter. The recipient confirms a 4 digit pin to verify." },
      { title: "Digital Address Verification", description: "Validating the address using a digital approach via a web link received through SMS." },
    ],
  },
  {
    id: "field-audit",
    label: "Field Audit Checks",
    icon: Search,
    gradient: "from-amber-500 to-orange-600",
    color: "amber",
    items: [
      { title: "Physical Due Diligence", description: "A comprehensive evaluation of physical assets, helping mitigate risks and ensure compliance." },
    ],
  },
  {
    id: "employment",
    label: "Employment Verification",
    icon: Briefcase,
    gradient: "from-violet-500 to-purple-600",
    color: "violet",
    items: [
      { title: "Employment Verification", description: "Validating employment credentials such as designation, tenure, exit reason, conduct, etc." },
      { title: "Professional Reference Check", description: "Obtaining subjective performance-related information through customized questionnaires." },
      { title: "eLockr Reference Check", description: "An instant reference verification examining a vast data repository of credentials on eLockr." },
      { title: "Curriculum Vitae Verification", description: "Confirming the accuracy of information provided on a job applicant's CV or resume." },
    ],
  },
  {
    id: "education",
    label: "Education Verification",
    icon: GraduationCap,
    gradient: "from-cyan-500 to-sky-600",
    color: "cyan",
    items: [
      { title: "Education Verification", description: "Validating education credentials including qualification, completion status, percentage, etc." },
    ],
  },
  {
    id: "credit",
    label: "Credit Check",
    icon: CreditCard,
    gradient: "from-pink-500 to-rose-600",
    color: "pink",
    items: [
      { title: "Credit Check", description: "Assessing credit history by obtaining credit score, loan payments, and credit card activity." },
      { title: "Bank Account Verification", description: "Ensuring legitimacy of bank accounts by retrieving account holder's name, bank, branch, MICR code." },
    ],
  },
  {
    id: "other",
    label: "Other Checks",
    icon: Beaker,
    gradient: "from-slate-500 to-gray-600",
    color: "slate",
    items: [
      { title: "Drug Test", description: "Determining if a candidate has consumed any substances based on a specific panel type." },
      { title: "SMC Check", description: "Identifying flagged content associated with a candidate across social media handles." },
    ],
  },
];

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; fill: string }> = {
  blue:    { bg: "bg-blue-500",    text: "text-blue-600",    border: "border-blue-200",    fill: "bg-blue-100" },
  red:     { bg: "bg-red-500",     text: "text-red-600",     border: "border-red-200",     fill: "bg-red-100" },
  emerald: { bg: "bg-emerald-500", text: "text-emerald-600", border: "border-emerald-200", fill: "bg-emerald-100" },
  amber:   { bg: "bg-amber-500",   text: "text-amber-600",   border: "border-amber-200",   fill: "bg-amber-100" },
  violet:  { bg: "bg-violet-500",  text: "text-violet-600",  border: "border-violet-200",  fill: "bg-violet-100" },
  cyan:    { bg: "bg-cyan-500",    text: "text-cyan-600",    border: "border-cyan-200",    fill: "bg-cyan-100" },
  pink:    { bg: "bg-pink-500",    text: "text-pink-600",    border: "border-pink-200",    fill: "bg-pink-100" },
  slate:   { bg: "bg-slate-500",   text: "text-slate-600",   border: "border-slate-200",   fill: "bg-slate-100" },
};

export function SolutionsGrid() {
  const [activeId, setActiveId] = useState(CHECK_CATEGORIES[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const headerRefs = sectionRefs.current;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("data-cat");
            if (id) setActiveId(id);
          }
        }
      },
      { root: container, rootMargin: "-10% 0px -70% 0px", threshold: 0 },
    );

    headerRefs.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const jump = (id: string) => {
    setActiveId(id);
    const el = sectionRefs.current.get(id);
    if (el && scrollRef.current) {
      scrollRef.current.scrollTo({ top: el.offsetTop - 12, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <Reveal variant="up" once className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-400">
            Comprehensive Checks
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Six solutions,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              zero blind spots
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
            Each solution is powerful alone — together they form a complete trust
            program with shared audit trails and analytics.
          </p>
        </Reveal>

        {/* Layout */}
        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[280px_1fr] lg:gap-6">
          {/* Sidebar */}
          <Reveal variant="left" delay={100}>
            <div className="flex gap-2 lg:sticky lg:top-24 lg:flex-col lg:gap-1.5" style={{ height: "calc(100vh - 10rem)" }}>
              {CHECK_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeId === cat.id;
                const c = COLOR_MAP[cat.color];

                return (
                  <button
                    key={cat.id}
                    onClick={() => jump(cat.id)}
                    className={`group relative flex items-center gap-3 overflow-hidden whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 lg:w-full ${
                      isActive
                        ? `${c.fill} ${c.text} shadow-md ring-1 ${c.border} scale-[1.02]`
                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${cat.gradient} text-white shadow-lg transition-transform duration-200 ${
                        isActive ? "scale-110" : "group-hover:scale-105"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span className="hidden lg:inline">{cat.label}</span>
                    <span className="lg:hidden">{cat.label}</span>
                    {isActive && (
                      <span className="ml-auto hidden h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] lg:block" />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Right content */}
          <div
            ref={scrollRef}
            className="overflow-y-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", height: "calc(100vh - 10rem)" }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {CHECK_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const c = COLOR_MAP[cat.color];

              return (
                <div
                  key={cat.id}
                  data-cat={cat.id}
                  className="scroll-mt-24 pb-8"
                >
                  {/* Section header */}
                  <div
                    ref={(el) => { if (el) sectionRefs.current.set(cat.id, el); }}
                    className={`mb-4 flex items-center gap-3 rounded-xl ${c.fill} ${c.border} border px-4 py-3`}
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${cat.gradient} text-white shadow-md`}>
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <h3 className={`text-sm font-bold ${c.text}`}>{cat.label}</h3>
                    <span className={`ml-auto text-[10px] font-semibold ${c.text} opacity-60`}>
                      {cat.items.length} {cat.items.length === 1 ? "check" : "checks"}
                    </span>
                  </div>

                  {/* Cards grid */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <div
                        key={item.title}
                        className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:shadow-lg"
                      >
                        {/* Gradient top edge */}
                        <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${cat.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />

                        <div className="flex items-start gap-3">
                          <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${cat.gradient} text-white`}>
                            <Icon className="h-3 w-3" strokeWidth={2} />
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                            <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
