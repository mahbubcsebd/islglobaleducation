import * as React from "react";
import {
  Compass,
  FileCheck,
  Stamp,
  Plane,
  ArrowRight,
} from "lucide-react";

export function ProcessRoadmap({ dict }) {
  const steps = [
    {
      step: dict.process.step1.step,
      title: dict.process.step1.title,
      desc: dict.process.step1.desc,
      icon: Compass,
    },
    {
      step: dict.process.step2.step,
      title: dict.process.step2.title,
      desc: dict.process.step2.desc,
      icon: FileCheck,
    },
    {
      step: dict.process.step3.step,
      title: dict.process.step3.title,
      desc: dict.process.step3.desc,
      icon: Stamp,
    },
    {
      step: dict.process.step4.step,
      title: dict.process.step4.title,
      desc: dict.process.step4.desc,
      icon: Plane,
    },
  ];

  return (
    <section id="process" className="py-20 relative bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <Compass className="size-3.5" />
            <span>{dict.process.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.process.title}
          </h2>
          <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
            {dict.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="group relative rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-accent">
                      {item.step}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <IconComponent className="size-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-semibold text-primary">
                  <span>{dict.process.phase || "Phase"} {dict.process.phases?.[i] || i + 1}</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
