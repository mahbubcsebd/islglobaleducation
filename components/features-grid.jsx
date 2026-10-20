import * as React from "react";
import {
  Globe,
  Moon,
  Palette,
  Layers,
  Type,
  Sparkles,
} from "lucide-react";

export function FeaturesGrid({ dict }) {
  const features = [
    {
      icon: Globe,
      title: dict.features.item1.title,
      desc: dict.features.item1.desc,
      tag: dict.features.item1.tag,
    },
    {
      icon: Moon,
      title: dict.features.item2.title,
      desc: dict.features.item2.desc,
      tag: dict.features.item2.tag,
    },
    {
      icon: Palette,
      title: dict.features.item3.title,
      desc: dict.features.item3.desc,
      tag: dict.features.item3.tag,
    },
    {
      icon: Layers,
      title: dict.features.item4.title,
      desc: dict.features.item4.desc,
      tag: dict.features.item4.tag,
    },
    {
      icon: Type,
      title: dict.features.item5.title,
      desc: dict.features.item5.desc,
      tag: dict.features.item5.tag,
    },
    {
      icon: Sparkles,
      title: dict.features.item6.title,
      desc: dict.features.item6.desc,
      tag: dict.features.item6.tag,
    },
  ];

  return (
    <section id="features" className="py-20 border-t border-border/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-3">
            {dict.features.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            {dict.features.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {dict.features.sectionDesc}
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-border/50 bg-card/60 p-6 sm:p-7 backdrop-blur-xs transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Subtle hover gradient indicator */}
                <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-5">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="size-5" />
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80 bg-muted/60 px-2.5 py-0.5 rounded-full">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
