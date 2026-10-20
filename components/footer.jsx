import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer({ lang, dict }) {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link
              href={`/${lang}`}
              className="inline-block transition-transform hover:scale-[1.02]"
            >
              <div className="inline-flex items-center bg-white/95 dark:bg-white/95 px-3 py-1.5 rounded-xl shadow-xs border border-white/20">
                <Image
                  src="/logo.png"
                  alt="ISL Global Education"
                  width={160}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              {dict.footer.brandDesc}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.facebook.com/islglobaleducation"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-full border border-border/60 bg-muted/40 hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all text-xs font-bold"
                aria-label="Facebook Page"
              >
                f
              </a>
              <a
                href="https://wa.me/8801910030040"
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-full border border-border/60 bg-muted/40 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
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

          {/* Top Destinations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {dict.footer.topDestinations}
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="#destinations" className="hover:text-primary transition-colors">
                  🇲🇾 Malaysia (No IELTS Option)
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-primary transition-colors">
                  🇬🇧 United Kingdom (2-Yr PSW)
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-primary transition-colors">
                  🇨🇦 Canada (PGWP & PR)
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-primary transition-colors">
                  🇦🇺 Australia (High Minimum Wage)
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-primary transition-colors">
                  🇪🇺 Europe / Schengen (Low Tuition)
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-primary transition-colors">
                  🇺🇸 United States (STEM OPT)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              {dict.footer.contactInfo}
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span>Panthapath, Dhaka, Bangladesh</span>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {dict.nav.brand}. {dict.footer.allRights}</p>
          <p className="flex items-center gap-2 font-medium">
            <span>{dict.footer.builtWith}</span>
            <span className="text-primary">•</span>
            <span>English & বাংলা</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
