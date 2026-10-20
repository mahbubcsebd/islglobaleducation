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
      category: dict.services.categories?.cat1 || "Admissions",
    },
    {
      icon: Award,
      title: dict.services.service2.title,
      desc: dict.services.service2.desc,
      category: dict.services.categories?.cat2 || "Financial Aid",
    },
    {
      icon: FileText,
      title: dict.services.service3.title,
      desc: dict.services.service3.desc,
      category: dict.services.categories?.cat3 || "Documentation",
    },
    {
      icon: ShieldCheck,
      title: dict.services.service4.title,
      desc: dict.services.service4.desc,
      category: dict.services.categories?.cat4 || "Visa & Embassy",
    },
    {
      icon: ArrowLeftRight,
      title: dict.services.service5.title,
      desc: dict.services.service5.desc,
      category: dict.services.categories?.cat5 || "Credit Transfer",
    },
    {
      icon: PlaneTakeoff,
      title: dict.services.service6.title,
      desc: dict.services.service6.desc,
      category: dict.services.categories?.cat6 || "Settlement",
    },
  ];

  return (
    <section id="services" className="py-20 relative bg-transparent overflow-hidden">
      {/* Subtle Services Radial Atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[400px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12)_0%,rgba(247,223,30,0.12)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(44,58,136,0.22)_0%,rgba(247,223,30,0.08)_50%,transparent_75%)] blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
            <Sparkles className="size-3.5" />
            <span>{dict.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.services.title}
          </h2>
          <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
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
                className="group relative rounded-xl border border-border/80 bg-surface/85 dark:bg-surface/85 backdrop-blur-md p-7 transition-all duration-300 hover:border-primary hover:bg-surface hover:shadow-xl shadow-2xs"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-2xs transition-transform duration-200 group-hover:scale-105">
                    <IconComponent className="size-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-md shadow-2xs">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
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
