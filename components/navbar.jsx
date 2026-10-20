"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandLogo } from "@/components/brand-logo";

export function Navbar({ lang, dict }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: dict.nav.destinations, href: `#destinations` },
    { label: dict.nav.services, href: `#services` },
    { label: dict.nav.whyUs, href: `#why-us` },
    { label: dict.nav.process, href: `#process` },
    { label: dict.nav.eligibility, href: `#eligibility` },
    { label: dict.nav.faq, href: `#faq` },
    { label: dict.nav.contact, href: `#contact` },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "border-b border-border bg-background/95 dark:bg-[#0F1020]/90 backdrop-blur-xl shadow-md"
          : "border-b border-border/70 bg-background/80 dark:bg-[#0F1020]/80 backdrop-blur-xl shadow-2xs"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo without any background or border */}
        <Link
          href={`/${lang}`}
          className="group flex items-center transition-transform hover:scale-[1.02]"
        >
          <BrandLogo
            priority
            className="h-9 sm:h-10 md:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2.5 py-1.5 text-sm font-medium text-foreground-secondary hover:text-foreground rounded-md hover:bg-surface-alt transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side controls (Desktop) */}
        <div className="hidden lg:flex items-center gap-2.5">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <Button
            size="sm"
            asChild
          >
            <Link href="#eligibility">
              <PhoneCall className="size-3.5 mr-1.5" />
              {dict.nav.bookConsultation}
            </Link>
          </Button>
        </div>

        {/* Mobile & Tablet controls + trigger (< lg) */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background px-4 sm:px-6 pt-2 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-foreground-secondary hover:text-foreground rounded-lg hover:bg-surface-alt transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-border">
            <Button
              size="default"
              className="w-full justify-center"
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="#eligibility">
                <PhoneCall className="size-4 mr-1.5" />
                {dict.nav.bookConsultation}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
