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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: Award,
      title: dict.services.service2.title,
      desc: dict.services.service2.desc,
      category: dict.services.categories?.cat2 || "Financial Aid",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: FileText,
      title: dict.services.service3.title,
      desc: dict.services.service3.desc,
      category: dict.services.categories?.cat3 || "Documentation",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: ShieldCheck,
      title: dict.services.service4.title,
      desc: dict.services.service4.desc,
      category: dict.services.categories?.cat4 || "Visa & Embassy",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: ArrowLeftRight,
      title: dict.services.service5.title,
      desc: dict.services.service5.desc,
      category: dict.services.categories?.cat5 || "Credit Transfer",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: PlaneTakeoff,
      title: dict.services.service6.title,
      desc: dict.services.service6.desc,
      category: dict.services.categories?.cat6 || "Settlement",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-50/70 dark:bg-navy-900/60 border-t border-slate-200 dark:border-white/10 overflow-hidden transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 dark:bg-gold-500/15 border border-amber-500/25 dark:border-gold-500/30 text-amber-700 dark:text-gold-300 px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
            <Sparkles className="size-3.5 text-amber-600 dark:text-gold-400" />
            <span>{dict.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {dict.services.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {dict.services.subtitle}
          </p>
        </div>

        {/* 6 Services Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-950 transition-all duration-300 hover:border-amber-500/50 dark:hover:border-gold-500/40 hover:shadow-xl shadow-xs flex flex-col justify-between"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-navy-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-white/90 dark:bg-navy-950/90 text-slate-900 dark:text-gold-300 border border-slate-200 dark:border-gold-500/30 px-2.5 py-1 rounded-full shadow-sm backdrop-blur-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon badge floating on image */}
                  <div className="absolute bottom-3.5 left-4 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 text-navy-950 shadow-md">
                    <IconComponent className="size-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
