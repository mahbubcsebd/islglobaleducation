"use client";

import * as React from "react";
import { Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export function TestimonialsSection({ dict }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Testimonials Array of Objects (Supports both profile image and initials fallback)
  const stories = [
    {
      id: "story-1",
      name: dict.testimonials?.story1?.name || "Tanvir Ahmed",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      initials: "TA",
      destination: dict.testimonials?.story1?.destination || "Malaysia",
      flag: "🇲🇾",
      university: dict.testimonials?.story1?.university || "Asia Pacific University (APU)",
      course: dict.testimonials?.story1?.course || "B.Sc. in Computer Science",
      quote: dict.testimonials?.story1?.quote || "I had a 4-year study gap after HSC and was rejected by other agencies. ISL Global handled my case with absolute professionalism. Got my Malaysia visa within 3 weeks without IELTS!",
      rating: 5,
    },
    {
      id: "story-2",
      name: dict.testimonials?.story2?.name || "Sadia Islam",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      initials: "SI",
      destination: dict.testimonials?.story2?.destination || "United Kingdom",
      flag: "🇬🇧",
      university: dict.testimonials?.story2?.university || "University of Hertfordshire",
      course: dict.testimonials?.story2?.course || "M.Sc. in International Business",
      quote: dict.testimonials?.story2?.quote || "The counseling at their Panthapath office was clear and transparent. No hidden charges, and they trained me for the credibility interview thoroughly. Highly recommend ISL Global!",
      rating: 5,
    },
    {
      id: "story-3",
      name: dict.testimonials?.story3?.name || "Rakibul Hasan",
      image: null, // Fallback to initials
      initials: "RH",
      destination: dict.testimonials?.story3?.destination || "Canada",
      flag: "🇨🇦",
      university: dict.testimonials?.story3?.university || "Fanshawe College",
      course: dict.testimonials?.story3?.course || "Post-Graduate Certificate in Project Management",
      quote: dict.testimonials?.story3?.quote || "From university selection to SOP writing and SDS visa filing, ISL Global guided me smoothly. Today I am studying in Canada with a full work permit opportunity.",
      rating: 5,
    },
    {
      id: "story-4",
      name: dict.testimonials?.story4?.name || "Nusrat Jahan",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80",
      initials: "NJ",
      destination: dict.testimonials?.story4?.destination || "Australia",
      flag: "🇦🇺",
      university: dict.testimonials?.story4?.university || "Deakin University",
      course: dict.testimonials?.story4?.course || "Master of Information Technology",
      quote: dict.testimonials?.story4?.quote || "ISL Global processed my Australia admission and visa with utmost care. Their advice on financial documentation and genuine student requirements made all the difference.",
      rating: 5,
    },
    {
      id: "story-5",
      name: dict.testimonials?.story5?.name || "Farhan Kabir",
      image: null, // Fallback to initials
      initials: "FK",
      destination: dict.testimonials?.story5?.destination || "Germany",
      flag: "🇩🇪",
      university: dict.testimonials?.story5?.university || "IU International University",
      course: dict.testimonials?.story5?.course || "B.A. in International Management",
      quote: dict.testimonials?.story5?.quote || "Affordable European study was my dream. With ISL Global's assistance, I secured an English-taught program with a 40% scholarship. Outstanding support from beginning to end!",
      rating: 5,
    },
    {
      id: "story-6",
      name: dict.testimonials?.story6?.name || "Mehnaz Chowdhury",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      initials: "MC",
      destination: dict.testimonials?.story6?.destination || "United States",
      flag: "🇺🇸",
      university: dict.testimonials?.story6?.university || "University of North Texas",
      course: dict.testimonials?.story6?.course || "M.Sc. in Data Science",
      quote: dict.testimonials?.story6?.quote || "The visa mock interview sessions gave me total confidence before facing the US embassy consular officer. Thanks to ISL Global, I got my F-1 visa approved on the first attempt!",
      rating: 5,
    },
  ];

  const getInitials = (name, fallback) => {
    if (fallback) return fallback;
    if (!name) return "ST";
    return name
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <section className="py-20 relative bg-transparent overflow-hidden">
      {/* Subtle Testimonials Radial Atmosphere */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[380px] sm:h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(247,223,30,0.15)_0%,rgba(79,70,229,0.12)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(247,223,30,0.08)_0%,rgba(44,58,136,0.22)_50%,transparent_75%)] blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
              <Sparkles className="size-3.5" />
              <span>{dict.testimonials.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              {dict.testimonials.title}
            </h2>
            <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
              {dict.testimonials.subtitle}
            </p>
          </div>

          {/* Slider Custom Nav Controls */}
          <div className="flex items-center gap-2 mt-6 md:mt-0">
            <button
              type="button"
              className="testimonials-prev-btn flex size-10 items-center justify-center rounded-lg border border-border/80 bg-surface/85 dark:bg-surface/85 backdrop-blur-md text-foreground hover:bg-surface hover:border-primary transition-all cursor-pointer shadow-2xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="testimonials-next-btn flex size-10 items-center justify-center rounded-lg border border-border/80 bg-surface/85 dark:bg-surface/85 backdrop-blur-md text-foreground hover:bg-surface hover:border-primary transition-all cursor-pointer shadow-2xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Swiper Slider with Uniform Heights and Perfect Alignment */}
        <div className="w-full">
          {mounted ? (
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: ".testimonials-prev-btn",
                nextEl: ".testimonials-next-btn",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="testimonials-swiper"
            >
              {stories.map((story) => (
                <SwiperSlide key={story.id}>
                  <div className="group relative rounded-xl border border-border/80 bg-surface/85 dark:bg-surface/85 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:border-primary hover:bg-surface hover:shadow-xl flex flex-col justify-between w-full h-full shadow-2xs">
                    {/* Top Content: Rating, Flag and Quote */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-primary">
                          {[...Array(story.rating || 5)].map((_, s) => (
                            <Star key={s} className="size-3.5 fill-current" />
                          ))}
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-alt border border-border text-xs font-semibold">
                          <span>{story.flag}</span>
                          <span className="text-[11px] text-foreground-secondary">{story.destination}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-foreground italic leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>

                    {/* Bottom: Student Profile with Perfectly Aligned Avatar and Designation */}
                    <div className="pt-4 border-t border-border flex items-center gap-3.5 mt-6">
                      <Avatar className="size-12 rounded-full border border-border shrink-0 bg-primary/10">
                        {story.image ? (
                          <AvatarImage
                            src={story.image}
                            alt={story.name}
                            className="size-full rounded-full object-cover"
                          />
                        ) : null}
                        <AvatarFallback className="size-full flex items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-sm tracking-wide">
                          {getInitials(story.name, story.initials)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm text-foreground leading-snug truncate">
                          {story.name}
                        </div>
                        <div className="text-xs text-primary font-medium leading-snug mt-0.5 truncate">
                          {story.university}
                        </div>
                        <div className="text-[11px] text-foreground-secondary leading-snug mt-0.5 truncate">
                          {story.course}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.slice(0, 3).map((story) => (
                <div key={story.id} className="rounded-xl border border-border bg-surface p-6 sm:p-7 flex flex-col justify-between h-full shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-primary">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="size-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold">{story.flag} {story.destination}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground italic leading-relaxed">
                      "{story.quote}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center gap-3.5 mt-6">
                    <Avatar className="size-12 rounded-full border border-border shrink-0 bg-primary/10">
                      {story.image ? (
                        <AvatarImage src={story.image} alt={story.name} className="size-full rounded-full object-cover" />
                      ) : null}
                      <AvatarFallback className="size-full flex items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-sm tracking-wide">
                        {getInitials(story.name, story.initials)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-sm text-foreground leading-snug truncate">{story.name}</div>
                      <div className="text-xs text-primary font-medium leading-snug mt-0.5 truncate">{story.university}</div>
                      <div className="text-[11px] text-foreground-secondary leading-snug mt-0.5 truncate">{story.course}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
