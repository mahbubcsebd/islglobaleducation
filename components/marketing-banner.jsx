import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "cn";

/**
 * MarketingBanner Component
 * 
 * Reusable promotional banner component designed for study abroad campaigns,
 * special intake announcements, destination-specific promotions, and partner university features.
 * 
 * @param {string} src - Path to the banner image in /public (e.g., "/marketing/banners/isl-marketing-1.png")
 * @param {string} alt - Alt text for accessibility
 * @param {string} [href] - Optional link (external WhatsApp/website or internal hash anchor)
 * @param {string} [badge] - Optional pill badge (e.g., "Special Campaign", "ভর্তি চলছে")
 * @param {string} [title] - Optional section title above banner
 * @param {string} [subtitle] - Optional subtitle above banner
 * @param {string} [ctaText] - Optional button text on hover overlay or action button
 * @param {boolean} [priority=false] - Next.js Image priority loading
 * @param {string} [className] - Additional classes for container
 */
export function MarketingBanner({
  src,
  alt = "ISL Global Education Campaign",
  href,
  badge,
  title,
  subtitle,
  ctaText,
  priority = false,
  className,
}) {
  const isExternal = href && (href.startsWith("http://") || href.startsWith("https://"));

  const BannerContent = (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 dark:border-white/10 bg-surface/80 dark:bg-[#121428]/80 shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Subtle Top 1px Horizon Gradient Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-xl h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 dark:via-[#F7DF1E]/30 to-transparent z-20 pointer-events-none" />

      {/* Responsive Banner Image */}
      <div className="relative w-full overflow-hidden bg-background/50">
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1000}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
          className="w-full h-auto object-cover sm:object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
        />

        {/* Subtle Glassmorphic Hover Highlight Overlay */}
        {href && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-primary text-primary-foreground px-3.5 py-1.5 text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>{ctaText || (isExternal ? "Connect on WhatsApp" : "Learn More")}</span>
              {isExternal ? (
                <ExternalLink className="size-3.5" />
              ) : (
                <ArrowRight className="size-3.5" />
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={cn("py-10 sm:py-14 relative bg-transparent overflow-hidden", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Optional Section Header */}
        {(badge || title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            {badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
                <Sparkles className="size-3.5" />
                <span>{badge}</span>
              </div>
            )}
            {title && (
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-2">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Banner with or without interactive link */}
        {href ? (
          isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl sm:rounded-2xl"
              aria-label={alt}
            >
              {BannerContent}
            </a>
          ) : (
            <Link
              href={href}
              className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl sm:rounded-2xl"
              aria-label={alt}
            >
              {BannerContent}
            </Link>
          )
        ) : (
          BannerContent
        )}
      </div>
    </section>
  );
}
