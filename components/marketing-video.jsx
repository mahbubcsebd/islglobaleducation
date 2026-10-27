import { cn } from 'cn';
import { Sparkles } from 'lucide-react';

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
        {/* Section Header with high contrast white & gold */}
        {(badge || title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            {badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 px-3.5 py-1 text-xs font-bold mb-3 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{badge}</span>
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Video Player Frame with Sleek Border & Ambient Lighting */}
        <div className="relative mx-auto max-w-4xl">
          {/* Subtle Ambient Backlight Glow */}
          <div className="pointer-events-none absolute -inset-2 bg-[radial-gradient(ellipse_at_center,rgba(44,58,136,0.35)_0%,rgba(247,223,30,0.12)_45%,transparent_75%)] opacity-70 blur-2xl rounded-3xl" />

          {/* 1px Horizon Top Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-md h-[1.5px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent z-20 pointer-events-none" />

          {/* Direct Responsive YouTube Iframe Player */}
          <div className="relative aspect-video w-full rounded-2xl border border-white/15 bg-black shadow-2xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title || 'ISL Global Education Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
