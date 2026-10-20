"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar({ lang, dict }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href={`/${lang}`}
          className="group flex items-center gap-2 transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center bg-white/95 dark:bg-white/95 px-2.5 py-1 rounded-xl shadow-xs border border-white/20">
            <Image
              src="/logo.png"
              alt="ISL Global Education"
              width={160}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/70 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <Button
            size="sm"
            className="rounded-full shadow-sm shadow-primary/25 hover:shadow-primary/40 font-medium text-xs px-4"
            asChild
          >
            <Link href="#eligibility">
              <PhoneCall className="size-3 mr-1.5" />
              {dict.nav.bookConsultation}
            </Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1 pt-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-border/40">
            <Button
              className="w-full rounded-full font-medium text-xs justify-center"
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="#eligibility">
                <PhoneCall className="size-3 mr-1.5" />
                {dict.nav.bookConsultation}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
