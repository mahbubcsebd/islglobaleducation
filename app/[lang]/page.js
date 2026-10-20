import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "@/lib/dictionaries";
import { TopContactBar } from "@/components/top-contact-bar";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MetricsRibbon } from "@/components/metrics-ribbon";
import { DestinationsSection } from "@/components/destinations-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProcessRoadmap } from "@/components/process-roadmap";
import { EligibilityForm } from "@/components/eligibility-form";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);
  return {
    title: `${dict.nav.brand} | ${dict.hero.titleLine1} ${dict.hero.titleLine2}`,
    description: dict.hero.subtitle,
    keywords: [
      "study abroad",
      "malaysia student visa",
      "uk study visa",
      "canada student visa",
      "isl global education",
      "education consultancy panthapath dhaka",
      "study without ielts",
      "study gap accepted",
    ],
  };
}

export default async function LocalizedPage({ params }) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors selection:bg-primary/25 selection:text-primary">
      <TopContactBar dict={dict} />
      <Navbar lang={lang} dict={dict} />
      <main className="flex-1">
        <Hero lang={lang} dict={dict} />
        <MetricsRibbon dict={dict} />
        <DestinationsSection lang={lang} dict={dict} />
        <ServicesSection dict={dict} />
        <WhyChooseUs dict={dict} />
        <ProcessRoadmap dict={dict} />
        <EligibilityForm lang={lang} dict={dict} />
        <TestimonialsSection dict={dict} />
        <FaqSection dict={dict} />
        <ContactSection dict={dict} />
        <CtaSection dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </div>
  );
}
