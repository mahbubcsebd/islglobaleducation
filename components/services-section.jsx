import * as React from "react";
import {
  GraduationCap,
  Award,
  FileText,
  ShieldCheck,
  ArrowLeftRight,
  PlaneTakeoff,
  Sparkles,
} from "lucide-react";

export function ServicesSection({ dict }) {
  const services = [
    {
      icon: GraduationCap,
      title: dict.services.service1.title,
      desc: dict.services.service1.desc,
      category: "Admissions",
    },
    {
      icon: Award,
      title: dict.services.service2.title,
      desc: dict.services.service2.desc,
      category: "Financial Aid",
    },
    {
      icon: FileText,
      title: dict.services.service3.title,
      desc: dict.services.service3.desc,
      category: "Documentation",
    },
    {
      icon: ShieldCheck,
      title: dict.services.service4.title,
      desc: dict.services.service4.desc,
      category: "Visa & Embassy",
    },
    {
      icon: ArrowLeftRight,
      title: dict.services.service5.title,
      desc: dict.services.service5.desc,
      category: "Credit Transfer",
    },
    {
      icon: PlaneTakeoff,
      title: dict.services.service6.title,
      desc: dict.services.service6.desc,
      category: "Settlement",
    },
  ];

  return (
    <section id="services" className="py-20 border-t border-border/40 relative bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <Sparkles className="size-3.5" />
            <span>{dict.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.services.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {dict.services.subtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl border border-border/60 bg-card/80 p-7 backdrop-blur-xs transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-xs">
                    <IconComponent className="size-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80 bg-muted/60 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
