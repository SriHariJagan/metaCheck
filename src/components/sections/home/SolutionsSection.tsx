import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";

const USE_CASES = [
  {
    number: "01",
    eyebrow: "PROFESSIONAL WORKFORCE",
    title: "White Collar",
    highlight: "Verification",
    description:
      "Build confidence in every hire with comprehensive verification designed for professionals, executives, and corporate employees.",
    href: "/solutions/white-collar-verification",
    features: [
      "Employment verification",
      "Education verification",
      "Identity verification",
      "Professional reference checks",
    ],
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    softGradient: "from-blue-50 to-violet-50",
  },
  {
    number: "02",
    eyebrow: "FRONTLINE WORKFORCE",
    title: "Blue Collar",
    highlight: "Verification",
    description:
      "Verify frontline and operational workers quickly with streamlined checks built for high-volume and distributed hiring.",
    href: "/solutions/blue-collar-verification",
    features: [
      "Identity verification",
      "Address verification",
      "Criminal background checks",
      "High-volume verification",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    softGradient: "from-orange-50 to-yellow-50",
  },
  {
    number: "03",
    eyebrow: "THIRD-PARTY RISK",
    title: "Vendor",
    highlight: "Due Diligence",
    description:
      "Strengthen your third-party ecosystem with structured verification and due diligence for vendors, partners, and suppliers.",
    href: "/solutions/vendor-due-diligence",
    features: [
      "Business verification",
      "Director verification",
      "Compliance checks",
      "Risk assessment",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    softGradient: "from-emerald-50 to-cyan-50",
  },
  {
    number: "04",
    eyebrow: "FAST & INTELLIGENT",
    title: "Instant Background",
    highlight: "Verification",
    description:
      "Accelerate hiring decisions with technology-driven background verification that delivers reliable results faster.",
    href: "/solutions/instant-background-verification",
    features: [
      "Real-time verification",
      "Automated workflows",
      "Digital reports",
      "Faster turnaround",
    ],
    gradient: "from-violet-600 via-fuchsia-600 to-pink-500",
    softGradient: "from-violet-50 to-pink-50",
  },
];


export function SolutionsSection() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[500px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px]" />

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Hero copy */}
            <Reveal variant="up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                <Sparkles className="h-4 w-4 text-primary-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Solutions
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Verification that
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  moves business forward.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                From hiring the right people to managing third-party risk, build
                trust into every decision with intelligent verification
                solutions.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#use-cases"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100"
                >
                  Explore solutions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
                >
                  Talk to our team
                </a>
              </div>
            </Reveal>

            {/* Hero visual */}
            <Reveal variant="up" delay={150}>
              <div className="relative">
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl" />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                        Verification Network
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white">
                        Trust, connected.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10">
                      <ShieldCheck className="h-5 w-5 text-emerald-400" />
                    </div>
                  </div>

                  <div className="my-8 flex items-center justify-center">
                    <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10">
                      <div className="absolute inset-4 rounded-full border border-dashed border-white/10" />

                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 shadow-[0_0_60px_rgba(99,102,241,0.35)]">
                        <ShieldCheck
                          className="h-10 w-10 text-white"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="absolute -right-3 top-8 rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-300 shadow-xl">
                        Identity
                      </div>

                      <div className="absolute -left-6 bottom-10 rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs text-slate-300 shadow-xl">
                        Background
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      ["01", "People"],
                      ["02", "Vendors"],
                      ["03", "Businesses"],
                    ].map(([number, label]) => (
                      <div
                        key={number}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
                      >
                        <p className="text-[10px] text-slate-600">{number}</p>

                        <p className="mt-1 text-xs font-semibold text-slate-300">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="relative py-16 sm:py-24">
        <Container>
          <Reveal variant="up" once className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600">
              By Use Cases
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              One platform.
              <br />
              <span className="text-gradient">Every verification need.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Different businesses face different risks. Our solutions are
              designed around the people, partners, and processes that matter
              most to your organization.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative border-y border-slate-100 bg-white py-10 sm:py-14">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "10M+", label: "Background checks completed" },
              { value: "99.9%", label: "Accuracy rate" },
              { value: "200+", label: "Countries covered" },
              { value: "48hr", label: "Average turnaround" },
            ].map((stat, index) => (
              <Reveal key={stat.label} variant="up" delay={index * 60}>
                <div className="text-center">
                  <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          USE CASES
      ========================================================= */}
      <section id="use-cases" className="relative bg-slate-50 py-16 sm:py-24">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((useCase, index) => {
              return (
                <Reveal key={useCase.number} variant="up" delay={index * 80}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
                    {/* Decorative gradient */}
                    <div
                      className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${useCase.softGradient} opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    {/* Content */}
                    <div className="relative flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold tracking-[0.18em] text-slate-400">
                          {useCase.number}
                        </span>
                        <span className="h-px w-4 bg-slate-200" />
                        <span className="text-[9px] font-bold tracking-[0.12em] text-primary-600">
                          {useCase.eyebrow}
                        </span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900">
                        {useCase.title}{" "}
                        <span
                          className={`bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}
                        >
                          {useCase.highlight}
                        </span>
                      </h3>

                      <p className="mt-2.5 text-xs leading-5 text-slate-500">
                        {useCase.description}
                      </p>

                      {/* Features */}
                      <div className="mt-4 space-y-1.5">
                        {useCase.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-500" />
                            <span className="text-[11px] font-medium text-slate-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover border */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${useCase.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================
          TRUST SECTION
      ========================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
            {/* Background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-500/20 blur-[80px]" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <Reveal variant="up">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-400">
                  Built around trust
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Make every decision with
                  <span className="text-primary-400"> confidence.</span>
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                  Whether you are hiring, onboarding, partnering, or scaling,
                  verification should make your business faster — not slower.
                </p>
              </Reveal>

              <Reveal variant="up" delay={150}>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100"
                >
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
