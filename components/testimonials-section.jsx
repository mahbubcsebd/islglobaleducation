import * as React from "react";
import { Quote, Sparkles, Star, GraduationCap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection({ dict }) {
  const stories = [
    {
      initials: "TA",
      flag: "🇲🇾",
      ...dict.testimonials.story1,
    },
    {
      initials: "SI",
      flag: "🇬🇧",
      ...dict.testimonials.story2,
    },
    {
      initials: "RH",
      flag: "🇨🇦",
      ...dict.testimonials.story3,
    },
  ];

  return (
    <section className="py-20 border-t border-border/40 relative bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <Sparkles className="size-3.5" />
            <span>{dict.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {dict.testimonials.subtitle}
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-border bg-surface p-7 transition-colors hover:border-primary flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xl">{story.flag}</span>
                </div>

                <p className="text-xs sm:text-sm text-foreground italic leading-relaxed mb-6">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <Avatar className="size-10 border border-border">
                  <AvatarFallback className="bg-primary-soft text-primary font-bold text-xs">
                    {story.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-foreground">
                    {story.name}
                  </div>
                  <div className="text-[11px] text-primary font-medium">
                    {story.university}
                  </div>
                  <div className="text-[10px] text-foreground-secondary">
                    {story.course}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
