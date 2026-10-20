import { AmbientBackground } from '@/components/ambient-background';
import { ContactSection } from '@/components/contact-section';
import { CtaSection } from '@/components/cta-section';
import { DestinationsSection } from '@/components/destinations-section';
import { EligibilityForm } from '@/components/eligibility-form';
import { FaqSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { MarketingBanner } from '@/components/marketing-banner';
import { MarketingVideo } from '@/components/marketing-video';
import { MetricsRibbon } from '@/components/metrics-ribbon';
import { Navbar } from '@/components/navbar';
import { ProcessRoadmap } from '@/components/process-roadmap';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { TopContactBar } from '@/components/top-contact-bar';
import { WhyChooseUs } from '@/components/why-choose-us';
import { getDictionary, hasLocale, locales } from '@/lib/dictionaries';
import { notFound } from 'next/navigation';


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
      'study abroad',
      'malaysia student visa',
      'uk study visa',
      'canada student visa',
      'isl global education',
      'education consultancy panthapath dhaka',
      'study without ielts',
      'study gap accepted',
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
    <div
      lang={lang}
      className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors selection:bg-primary/25 selection:text-primary"
    >
      <AmbientBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <TopContactBar dict={dict} />
        <Navbar lang={lang} dict={dict} />
        <main className="flex-1">
          <Hero lang={lang} dict={dict} />
          <MetricsRibbon dict={dict} />
          <DestinationsSection lang={lang} dict={dict} />

          {/* Targeted Marketing Campaign: Study in Malaysia Special Facility */}
          <MarketingBanner
            src="/marketing/banners/isl-marketing-2.jpg"
            alt={lang === "bn" ? "মালয়েশিয়ায় উচ্চশিক্ষা - ভিসা অনুমোদনের পূর্বে কোনো পেমেন্ট নেই | আইএসএল গ্লোবাল এডুকেশন" : "Study in Malaysia - All Payments After Visa Approval | ISL Global Education"}
            href="https://wa.me/8801910030040"
            badge={lang === "bn" ? "বিশেষ ক্যাম্পেইন" : "Special Campaign"}
            title={lang === "bn" ? "মালয়েশিয়ায় উচ্চশিক্ষা: শতভাগ বিশ্বস্ত ও নিরাপদ প্রক্রিয়া" : "Study in Malaysia: 100% Transparent Process"}
            subtitle={lang === "bn" ? "ভিসা অনুমোদনের পূর্বে কোনো পেমেন্ট নেই এবং ফ্রি এয়ার টিকিট সুবিধা নিয়ে শীর্ষ মালয়েশিয়ান ক্যাম্পাসে ভর্তি হোন।" : "All payments after visa approval with free air ticket facility for top Malaysian universities."}
            ctaText={lang === "bn" ? "হোয়াটসঅ্যাপে অফারটি জানুন" : "Chat on WhatsApp"}
          />

          <ServicesSection dict={dict} />
          <WhyChooseUs dict={dict} />
          <ProcessRoadmap dict={dict} />

          {/* Global Opportunities Marketing Banner: Go Abroad and Create It */}
          <MarketingBanner
            src="/marketing/banners/isl-marketing-1.png"
            alt={lang === "bn" ? "আন্তর্জাতিক উচ্চশিক্ষার সুযোগ - আইএসএল গ্লোবাল এডুকেশন" : "Unlock Global Opportunities - Go Abroad and Create It | ISL Global Education"}
            href="#eligibility"
            badge={lang === "bn" ? "ভর্তি চলছে" : "Admissions Open"}
            title={lang === "bn" ? "আন্তর্জাতিক ক্যাম্পাসে আপনার স্বপ্নপূরণ হোক আজই" : "Unlock Global Opportunities with Confidence"}
            subtitle={lang === "bn" ? "যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা, অস্ট্রেলিয়া, ইউরোপ ও এশিয়ার সেরা বিশ্ববিদ্যালয়গুলোর সম্পূর্ণ ভর্তির গাইডলাইন।" : "Direct admissions and comprehensive visa processing support for UK, USA, Canada, Australia, Europe & Asia."}
            ctaText={lang === "bn" ? "যোগ্যতা যাচাই করুন" : "Check Eligibility"}
          />

          <EligibilityForm lang={lang} dict={dict} />

          {/* Interactive Marketing Video Showcase */}
          <MarketingVideo
            videoId="LXb3EKWsInQ"
            badge={lang === "bn" ? "ভিডিও গাইড" : "Video Guide"}
            title={lang === "bn" ? "ভিডিওতে দেখুন আমাদের কাউন্সেলিং ও স্টুডেন্টদের সাফল্য" : "Watch How We Guide Students to Top Global Universities"}
            subtitle={lang === "bn" ? "অভিজ্ঞ কাউন্সেলরদের আন্তরিক দিকনির্দেশনা ও সঠিক বিশ্ববিদ্যালয় সিলেকশন প্রক্রিয়া সম্পর্কে বিস্তারিত জানুন।" : "From university selection to visa approval and pre-departure flight booking, watch how ISL Global supports you."}
          />

          <TestimonialsSection dict={dict} />
          <FaqSection dict={dict} />
          <ContactSection dict={dict} />
          <CtaSection dict={dict} />
        </main>
        <Footer lang={lang} dict={dict} />
      </div>
    </div>
  );
}
