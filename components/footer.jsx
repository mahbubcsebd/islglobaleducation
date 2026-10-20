import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

export function Footer({ lang, dict }) {
  const currentYear = 2026;

  // Comprehensive array of all major social media platforms.
  // ONLY platforms with a non-null/truthy href will be sequentially rendered.
  const socialPlatforms = [
    {
      id: "facebook",
      name: "Facebook",
      href: "https://www.facebook.com/islglobaleducation",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      bgColor: "bg-[#1877F2]", // Facebook Brand Blue
      hoverBg: "hover:bg-[#166fe5]",
      textColor: "text-white",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: "https://wa.me/8801910030040",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12.031 2C6.511 2 2.016 6.495 2.016 12.015c0 1.867.518 3.619 1.417 5.129L2.006 22l5.006-1.396a9.99 9.99 0 0 0 5.019 1.41c5.52 0 10.015-4.495 10.015-10.015S17.551 2 12.031 2zm5.792 14.167c-.244.685-1.415 1.256-1.95 1.313-.496.053-1.14.075-3.292-.816-2.585-1.07-4.24-3.712-4.368-3.884-.128-.172-1.045-1.39-1.045-2.651 0-1.261.66-1.882.894-2.139.235-.257.512-.321.683-.321.171 0 .341.002.491.01.159.009.373-.06.582.443.214.513.726 1.77.79 1.9.064.129.107.278.021.45-.085.171-.128.278-.256.428-.128.15-.269.335-.384.45-.128.128-.262.268-.113.524.15.257.666 1.099 1.428 1.778.98.874 1.807 1.144 2.064 1.272.256.128.406.107.555-.064.15-.171.641-.748.812-1.005.17-.256.342-.214.577-.128.235.086 1.492.704 1.748.832.256.128.427.192.491.299.064.107.064.62-.18 1.305z"/>
        </svg>
      ),
      bgColor: "bg-[#25D366]", // WhatsApp Brand Green
      hoverBg: "hover:bg-[#20bd5a]",
      textColor: "text-white",
    },
    {
      id: "instagram",
      name: "Instagram",
      href: "https://www.instagram.com/islglobaleducation",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      bgColor: "bg-[#E4405F]", // Instagram Brand Magenta/Pink
      hoverBg: "hover:bg-[#d62e4d]",
      textColor: "text-white",
    },
    {
      id: "youtube",
      name: "YouTube",
      href: "https://www.youtube.com/@islglobaleducation",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      bgColor: "bg-[#FF0000]", // YouTube Brand Red
      hoverBg: "hover:bg-[#cc0000]",
      textColor: "text-white",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/islglobaleducation",
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      bgColor: "bg-[#0A66C2]", // LinkedIn Brand Blue
      hoverBg: "hover:bg-[#084e96]",
      textColor: "text-white",
    },
    {
      id: "x",
      name: "X (Twitter)",
      href: null, // Hidden until active link is configured
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      bgColor: "bg-black",
      hoverBg: "hover:bg-neutral-800",
      textColor: "text-white",
    },
    {
      id: "tiktok",
      name: "TikTok",
      href: null, // Hidden until active link is configured
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      bgColor: "bg-black",
      hoverBg: "hover:bg-neutral-800",
      textColor: "text-white",
    },
  ];

  const activeSocials = socialPlatforms.filter((platform) => Boolean(platform.href));

  const destinationsList = [
    { key: "malaysia", label: dict.footer.destList?.malaysia || "🇲🇾 Malaysia (No IELTS Option)" },
    { key: "uk", label: dict.footer.destList?.uk || "🇬🇧 United Kingdom (2-Yr PSW)" },
    { key: "canada", label: dict.footer.destList?.canada || "🇨🇦 Canada (PGWP & PR)" },
    { key: "australia", label: dict.footer.destList?.australia || "🇦🇺 Australia (High Minimum Wage)" },
    { key: "europe", label: dict.footer.destList?.europe || "🇪🇺 Europe / Schengen (Low Tuition)" },
    { key: "usa", label: dict.footer.destList?.usa || "🇺🇸 United States (STEM OPT)" },
  ];

  return (
    <footer className="relative border-t border-border/60 bg-background overflow-hidden transition-colors">
      {/* 1.5px Horizon Top Edge Accent Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1.5px] bg-gradient-to-r from-transparent via-[#2C3A88]/35 dark:via-[#F7DF1E]/40 to-transparent" />

      {/* Atmospheric Ambient Lighting & Animated Glow */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Soft Center Top Spotlight Beam */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] md:w-[1200px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.20)_0%,rgba(247,223,30,0.22)_45%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(44,58,136,0.35)_0%,rgba(247,223,30,0.08)_45%,transparent_75%)] opacity-90 dark:opacity-95 blur-2xl" />

        {/* Ambient Floating Lighting Orb 1 (Royal Navy Sapphire) */}
        <div className="absolute -bottom-16 -left-20 sm:left-[3%] md:left-[6%] w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] rounded-full bg-gradient-to-br from-[#2C3A88]/25 via-blue-600/22 to-indigo-500/20 dark:bg-[#2C3A88]/35 blur-[90px] sm:blur-[120px] animate-ambient-float" />

        {/* Ambient Floating Lighting Orb 2 (Warm Golden Shimmer) */}
        <div className="absolute -top-10 -right-20 sm:right-[3%] md:right-[8%] w-64 sm:w-80 md:w-[360px] h-64 sm:h-80 md:h-[360px] rounded-full bg-gradient-to-br from-amber-400/35 via-yellow-400/28 to-amber-200/22 dark:bg-[#F7DF1E]/14 blur-[80px] sm:blur-[110px] animate-ambient-pulse" />

        {/* Architectural Dot Matrix Grid with Subtle Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(44,58,136,0.065)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_85%_75%_at_50%_40%,#000_40%,transparent_100%)] opacity-75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-9 md:pt-12 pb-3.5 sm:pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6 md:mb-8">
          {/* Brand Info with Prominent Logo */}
          <div className="space-y-4 md:col-span-1">
            <Link
              href={`/${lang}`}
              className="inline-block transition-transform hover:scale-[1.02]"
            >
              <BrandLogo
                width={180}
                height={48}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-foreground-secondary leading-relaxed max-w-xs">
              {dict.footer.brandDesc}
            </p>

            {/* Minimal & Luxury Monochromatic Social Media Links */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {activeSocials.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.id}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-lg border border-border/70 bg-surface/50 hover:bg-surface text-foreground-secondary hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all shadow-2xs hover:scale-105"
                    aria-label={platform.name}
                    title={platform.name}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-foreground-secondary">
              <li>
                <Link href="#destinations" className="hover:text-primary transition-colors">
                  {dict.nav.destinations}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-primary transition-colors">
                  {dict.nav.whyUs}
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-primary transition-colors">
                  {dict.nav.process}
                </Link>
              </li>
              <li>
                <Link href="#eligibility" className="hover:text-primary transition-colors">
                  {dict.nav.eligibility}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition-colors">
                  {dict.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations (Fully Localized) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {dict.footer.topDestinations}
            </h4>
            <ul className="space-y-2 text-xs text-foreground-secondary">
              {destinationsList.map((dest) => (
                <li key={dest.key}>
                  <Link href="#destinations" className="hover:text-primary transition-colors">
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information (Fully Localized) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {dict.footer.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-xs text-foreground-secondary">
              <li className="flex items-start gap-2">
                <MapPin className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>{dict.footer.address || dict.contact.addressDesc}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 text-primary shrink-0" />
                <a href="tel:+8801910030040" className="hover:text-primary transition-colors">
                  +880 1910-030040
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 text-primary shrink-0" />
                <a href="tel:+8801910030093" className="hover:text-primary transition-colors">
                  +880 1910-030093
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 text-primary shrink-0" />
                <a
                  href="mailto:islglobaleducation@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  islglobaleducation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Replaced developer placeholder with professional agency tagline & policy links) */}
        <div className="pt-4 sm:pt-4.5 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground-secondary">
          <p>© {currentYear} {dict.nav.brand}. {dict.footer.allRights}</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-medium">
            <span>{dict.footer.bottomTagline}</span>
            <span className="text-border hidden sm:inline">•</span>
            <span className="text-foreground-muted">{dict.footer.privacyPolicy}</span>
            <span className="text-border">•</span>
            <span className="text-foreground-muted">{dict.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
