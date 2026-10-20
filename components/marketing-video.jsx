import { cn } from 'cn';
import { Sparkles } from 'lucide-react';

/**
 * MarketingVideo Component
 *
 * Clean, lightweight, and modern YouTube video showcase component.
 * Directly renders a responsive YouTube iframe player using the provided videoId prop.
 *
 * @param {string} videoId - YouTube video ID (e.g. "LXb3EKWsInQ" or custom ISL Global video ID)
 * @param {string} [title] - Section heading
 * @param {string} [subtitle] - Section description
 * @param {string} [badge] - Category or status pill (e.g., "Video Guide", "ভিডিও গাইডেন্স")
 * @param {string} [className] - Additional wrapper class
 */

export function MarketingVideo({
  videoId = 'LXb3EKWsInQ',
  title = 'Watch How We Guide Students to Top Global Universities',
  subtitle = 'From university shortlisting to visa processing and airport departure, explore how ISL Global Education supports you at every step.',
  badge = 'Video Tour & Guide',
  className,
}) {
  return (
    <section
      className={cn(
        'py-16 sm:py-20 relative bg-transparent overflow-hidden',
        className,
      )}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {(badge || title || subtitle) && (
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            {badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
                <Sparkles className="size-3.5" />
                <span>{badge}</span>
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Video Player Frame with Sleek Border & Ambient Lighting */}
        <div className="relative mx-auto max-w-4xl">
          {/* Subtle Ambient Backlight Glow */}
          <div className="pointer-events-none absolute -inset-2 bg-[radial-gradient(ellipse_at_center,rgba(44,58,136,0.25)_0%,rgba(247,223,30,0.08)_45%,transparent_75%)] opacity-70 blur-2xl rounded-3xl" />

          {/* 1px Horizon Top Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-md h-[1.5px] bg-gradient-to-r from-transparent via-primary/50 dark:via-[#F7DF1E]/40 to-transparent z-20 pointer-events-none" />

          {/* Direct Responsive YouTube Iframe Player */}
          <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl border border-border/80 dark:border-white/10 bg-black shadow-2xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title || 'ISL Global Education Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0 rounded-xl sm:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
