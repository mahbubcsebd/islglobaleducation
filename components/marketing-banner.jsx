import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "cn";

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
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Top Horizon Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-xl h-[1.5px] bg-gradient-to-r from-transparent via-gold-400/50 to-transparent z-20 pointer-events-none" />

      {/* Banner Image */}
      <div className="relative w-full overflow-hidden bg-navy-950">
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1000}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
          className="w-full h-auto object-cover sm:object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
        />

        {/* Hover Highlight Overlay */}
        {href && (
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-gold-500 text-navy-950 px-4 py-2 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 gold-button-glow">
              <span>{ctaText || (isExternal ? "Connect on WhatsApp" : "Learn More")}</span>
              {isExternal ? (
                <ExternalLink className="w-3.5 h-3.5" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5" />
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className={cn("py-12 sm:py-16 relative bg-transparent overflow-hidden", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with high contrast white & gold text */}
        {(badge || title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            {badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 px-3.5 py-1 text-xs font-bold mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{badge}</span>
              </div>
            )}
            {title && (
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
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
              className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400/40 rounded-2xl"
              aria-label={alt}
            >
              {BannerContent}
            </a>
          ) : (
            <Link
              href={href}
              className="block cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-400/40 rounded-2xl"
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
