import { SEO } from '@/seo/SEO';
import { Hero } from "@/components/sections/home/Hero";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ProductIntro } from "@/components/sections/home/ProductIntro";
import { EcosystemSection } from "@/components/sections/home/EcosystemSection";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { SecuritySection } from "@/components/sections/home/SecuritySection";
import { UseCases } from "@/components/sections/home/UseCases";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SolutionsSection } from "@/components/sections/home/SolutionsSection";

export default function Home() {
  usePageMeta(
    "MetaCheck Foundation | Building a More Trusted Digital Future",
    "MetaCheck Foundation brings technology, intelligence, and responsible innovation together to create solutions that make people, organizations, and communities more secure, transparent, and connected.",
  );

  return (
    <>
      <SEO />
      <Hero />
      <StatsSection />
      <ProblemSection />
      <ProductIntro />
      <EcosystemSection currentId="metacheck" />
      <SolutionsSection />
      <HowItWorks />
      <SecuritySection />
      <UseCases />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
