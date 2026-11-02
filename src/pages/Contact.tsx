import { SEO } from '@/seo/SEO';
import { useState, useCallback } from "react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/buttons/Button";
import { Input } from "@/components/forms/Input";
import { Select } from "@/components/forms/Select";
import { Textarea } from "@/components/forms/Textarea";
import { contactService } from "@/services/contactService";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  LifeBuoy,
  Handshake,
  UserPlus,
  Clock,
  ArrowRight,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const CONTACT_REASONS = [
  { value: "demo", label: "Request a live demo" },
  { value: "pricing", label: "Pricing & plans" },
  { value: "enterprise", label: "Enterprise / custom deployment" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "press", label: "Press & media" },
  { value: "other", label: "Other" },
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];

const VERIFICATION_VOLUMES = [
  { value: "under-1k", label: "Under 1k checks/month" },
  { value: "1k-10k", label: "1k-10k checks/month" },
  { value: "10k-100k", label: "10k-100k checks/month" },
  { value: "100k+", label: "100k+ checks/month" },
  { value: "not-sure", label: "Not sure yet" },
];

const channels = [
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Account & verification help",
    gradient: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    value: "support@metadev.in",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    desc: "Integrations & collaborations",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-600",
    value: "partners@metadev.in",
  },
  {
    icon: UserPlus,
    title: "Careers",
    desc: "Questions about open roles",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    text: "text-pink-600",
    value: "careers@metadev.in",
  },
  {
    icon: Phone,
    title: "General",
    desc: "Main contact line",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
    value: "+91 95595 59143",
  },
];

const METADEV_CONTACT_EMAILS = [
  "info@metadev.in",
  "contact@metadev.in",
  "support@metadev.in",
  "partnership@metacheck.in",
];

const METADEV_OFFICES = [
  "Hyderabad, Telangana (HQ)",
  "Amaravathi, Andhra Pradesh",
  "Bangalore, Karnataka",
  "Bengaluru, Karnataka (HQ)",
];

const METADEV_PHONES = ["+91 95595 59143"];

const METADEV_HOURS = [
  "Monday – Friday: 9AM – 6PM",
  "Saturday: 10AM – 4PM",
  "Sunday: Closed",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  reason: string;
  companySize: string;
  adSpend: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
  message?: string;
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute left-1/2 bottom-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <Reveal variant="left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative h-full w-full rounded-full bg-green-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                Available 24/7
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's build
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                trust together.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
              Whether you need background verification at scale, enterprise
              compliance, or just have questions — our team is here to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: Shield, label: "SOC 2 Certified" },
                { icon: Globe, label: "200+ Countries" },
                { icon: Zap, label: "< 4hr Response" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  <item.icon className="h-4 w-4 text-primary-400" />
                  <span className="text-xs font-medium text-slate-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right visual */}
          <Reveal variant="right" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Response Time
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Average under 4 hours
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-400/10">
                    <Clock className="h-5 w-5 text-green-400" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "Demo requests",
                      value: "< 4 hrs",
                      gradient: "from-blue-500 to-indigo-500",
                    },
                    {
                      label: "Pricing",
                      value: "< 8 hrs",
                      gradient: "from-cyan-500 to-teal-500",
                    },
                    {
                      label: "Enterprise",
                      value: "< 24 hrs",
                      gradient: "from-violet-500 to-purple-500",
                    },
                    {
                      label: "Support",
                      value: "< 1 hr",
                      gradient: "from-pink-500 to-rose-500",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div
                        className={`h-1 w-8 rounded-full bg-gradient-to-r ${item.gradient} mb-3`}
                      />
                      <p className="text-xs text-slate-400">{item.label}</p>
                      <p className="mt-1 text-sm font-bold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      99.9% uptime guarantee
                    </p>
                    <p className="text-xs text-slate-400">
                      Enterprise-grade reliability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ChannelsSection() {
  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="up">
          <div className="-mt-10 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <div
                    key={ch.title}
                    className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-transparent hover:shadow-xl"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${ch.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${ch.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-slate-900 text-sm">
                          {ch.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {ch.desc}
                        </p>
                        <p
                          className="text-xs font-semibold mt-2 truncate"
                          style={{ color: `var(--tw-gradient-stops)` }}
                        >
                          <span
                            className={`bg-gradient-to-r ${ch.gradient} bg-clip-text text-transparent`}
                          >
                            {ch.value}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    reason: "demo",
    companySize: "",
    adSpend: "not-sure",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.reason) newErrors.reason = "Please select a reason";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 20)
      newErrors.message = "Please provide more detail (at least 20 characters)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await contactService.submit({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        reason: formData.reason,
        companySize: formData.companySize,
        adSpend: formData.adSpend,
        subject: formData.reason,
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        reason: "demo",
        companySize: "",
        adSpend: "not-sure",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[100px]" />
        <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-100/50 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14">
          {/* Left info */}
          <div>
            <Reveal variant="up">
              <SectionHeading
                eyebrow="Contact us"
                title="Start the conversation"
                description="Fill out the form and we'll route you to the right person. Most inquiries get a response within 4 business hours."
                align="left"
              />
            </Reveal>

            <Reveal variant="up" delay={100}>
              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: Mail,
                    gradient: "from-blue-500 to-indigo-500",
                    title: "Email",
                    lines: METADEV_CONTACT_EMAILS,
                  },
                  {
                    icon: MapPin,
                    gradient: "from-emerald-500 to-teal-500",
                    title: "Offices",
                    lines: METADEV_OFFICES,
                  },
                  {
                    icon: Phone,
                    gradient: "from-violet-500 to-purple-500",
                    title: "Phone",
                    lines: METADEV_PHONES,
                  },
                  {
                    icon: Clock,
                    gradient: "from-amber-500 to-orange-500",
                    title: "Working Hours",
                    lines: METADEV_HOURS,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-200 hover:border-slate-200 hover:shadow-md"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md transition-transform duration-200 group-hover:scale-110`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">
                          {item.title}
                        </h3>
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-slate-500 mt-0.5"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div>
            <Reveal variant="up" delay={150}>
              {submitStatus === "success" ? (
                <div
                  className="rounded-2xl border border-slate-100 bg-white p-8 sm:p-12 text-center shadow-lg"
                  role="status"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/25 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Message sent!
                  </h2>
                  <p className="mt-3 text-slate-500 max-w-md mx-auto">
                    Thanks for reaching out. Our team will review and get back
                    to you within our committed response time.
                  </p>
                  <Button
                    variant="primary"
                    className="mt-8"
                    onClick={() => setSubmitStatus("idle")}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-lg"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Input
                      label="Full name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      error={errors.name}
                      required
                      placeholder="Priya Sharma"
                      autoComplete="name"
                    />
                    <Input
                      label="Work email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      error={errors.email}
                      required
                      placeholder="priya@company.com"
                      autoComplete="email"
                    />
                  </div>
                  <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    error={errors.company}
                    required
                    placeholder="Lumenkart"
                    autoComplete="organization"
                    className="mb-4"
                  />
                  <Select
                    label="How can we help?"
                    name="reason"
                    value={formData.reason}
                    onChange={(e) => handleChange("reason", e.target.value)}
                    options={CONTACT_REASONS}
                    error={errors.reason}
                    required
                    className="mb-4"
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                    <Select
                      label="Company size"
                      name="companySize"
                      value={formData.companySize}
                      onChange={(e) =>
                        handleChange("companySize", e.target.value)
                      }
                      options={COMPANY_SIZES}
                      placeholderOption="Select company size"
                    />
                    <Select
                      label="Monthly verification volume"
                      name="adSpend"
                      value={formData.adSpend}
                      onChange={(e) => handleChange("adSpend", e.target.value)}
                      options={VERIFICATION_VOLUMES}
                      placeholderOption="Select verification volume"
                    />
                  </div>
                  <Textarea
                    label="Tell us more"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    error={errors.message}
                    required
                    rows={4}
                    placeholder="What challenges are you facing? What outcomes are you looking for?"
                    className="mb-6"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin mr-2"
                          aria-hidden="true"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowRight
                          className="h-4 w-4 ml-2"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Button>
                  {submitStatus === "error" && (
                    <p
                      className="mt-4 text-center text-sm text-red-500"
                      role="alert"
                    >
                      Something went wrong. Please try again or email
                      hello@metacheck.metadev.io directly.
                    </p>
                  )}
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <SEO />
      <ContactHero />
      <ChannelsSection />
      <ContactFormSection />
    </>
  );
}
