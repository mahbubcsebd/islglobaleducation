"use client";

import * as React from "react";
import Image from "next/image";
import {
  FileCheck2,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Phone,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EligibilityForm({ lang, dict }) {
  const [formData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "malaysia",
    education: "hsc",
    passingYear: "2023",
    gpa: "",
    ieltsStatus: "moi",
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello ISL Global Education,\nI would like a free eligibility assessment for studying abroad.\n\nName: ${formData.fullName || "Student"}\nPhone: ${formData.phone || "N/A"}\nPreferred Country: ${formData.destination.toUpperCase()}\nEducation: ${formData.education.toUpperCase()}\nPassing Year: ${formData.passingYear}\nGPA: ${formData.gpa || "N/A"}\nEnglish Status: ${formData.ieltsStatus.toUpperCase()}`
    );
    return `https://wa.me/8801910030040?text=${text}`;
  };

  return (
    <section id="eligibility" className="py-20 border-t border-border/40 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/30 bg-card/90 backdrop-blur-xl p-8 sm:p-12 shadow-2xl shadow-primary/10 relative overflow-hidden">
          {/* Subtle decorative purple glow */}
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            {/* Official Brand Logo */}
            <div className="flex justify-center mb-5">
              <div className="bg-white/95 dark:bg-white/95 px-3.5 py-1.5 rounded-xl shadow-xs border border-white/20">
                <Image
                  src="/logo.png"
                  alt="ISL Global Education"
                  width={150}
                  height={38}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
              <Sparkles className="size-3.5" />
              <span>{dict.eligibility.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-3">
              {dict.eligibility.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {dict.eligibility.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 max-w-lg mx-auto space-y-6 animate-in fade-in zoom-in-95">
              <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 mx-auto">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {dict.eligibility.successTitle}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dict.eligibility.successMsg}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 text-xs font-semibold transition-all shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="size-4" />
                  <span>{dict.eligibility.whatsappDirect}</span>
                </a>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto rounded-full text-xs font-medium"
                >
                  {dict.eligibility.reset}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.eligibility.fullName} *
                  </label>
                  <Input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder={dict.eligibility.fullNamePlaceholder}
                    className="rounded-xl bg-background/80 border-border/70 text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.eligibility.phone} *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={dict.eligibility.phonePlaceholder}
                    className="rounded-xl bg-background/80 border-border/70 text-xs"
                  />
                </div>
              </div>

              {/* Row 2: Destination & Education */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.eligibility.destination}
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) =>
                      setFormData({ ...formData, destination: e.target.value })
                    }
                    className="w-full rounded-xl bg-background/80 border border-border/70 p-2.5 text-xs text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="malaysia">{dict.eligibility.destOptions.malaysia}</option>
                    <option value="uk">{dict.eligibility.destOptions.uk}</option>
                    <option value="canada">{dict.eligibility.destOptions.canada}</option>
                    <option value="australia">{dict.eligibility.destOptions.australia}</option>
                    <option value="europe">{dict.eligibility.destOptions.europe}</option>
                    <option value="usa">{dict.eligibility.destOptions.usa}</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.eligibility.education}
                  </label>
                  <select
                    value={formData.education}
                    onChange={(e) =>
                      setFormData({ ...formData, education: e.target.value })
                    }
                    className="w-full rounded-xl bg-background/80 border border-border/70 p-2.5 text-xs text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="hsc">{dict.eligibility.eduOptions.hsc}</option>
                    <option value="diploma">{dict.eligibility.eduOptions.diploma}</option>
                    <option value="bachelor">{dict.eligibility.eduOptions.bachelor}</option>
                    <option value="master">{dict.eligibility.eduOptions.master}</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Passing Year, GPA, English Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.eligibility.passingYear}
                  </label>
                  <Input
                    type="text"
                    value={formData.passingYear}
                    onChange={(e) =>
                      setFormData({ ...formData, passingYear: e.target.value })
                    }
                    placeholder={dict.eligibility.passingYearPlaceholder}
                    className="rounded-xl bg-background/80 border-border/70 text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.eligibility.gpa}
                  </label>
                  <Input
                    type="text"
                    value={formData.gpa}
                    onChange={(e) =>
                      setFormData({ ...formData, gpa: e.target.value })
                    }
                    placeholder={dict.eligibility.gpaPlaceholder}
                    className="rounded-xl bg-background/80 border-border/70 text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.eligibility.ieltsStatus}
                  </label>
                  <select
                    value={formData.ieltsStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, ieltsStatus: e.target.value })
                    }
                    className="w-full rounded-xl bg-background/80 border border-border/70 p-2.5 text-xs text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="moi">{dict.eligibility.ieltsOptions.moi}</option>
                    <option value="completed">{dict.eligibility.ieltsOptions.completed}</option>
                    <option value="preparing">{dict.eligibility.ieltsOptions.preparing}</option>
                    <option value="duolingo">{dict.eligibility.ieltsOptions.duolingo}</option>
                  </select>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto rounded-full px-8 py-2.5 text-xs font-semibold shadow-md shadow-primary/30 hover:shadow-primary/45 transition-all cursor-pointer"
                >
                  <Send className="size-3.5 mr-2" />
                  {loading ? dict.eligibility.submitting : dict.eligibility.submitBtn}
                </Button>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-primary" />
                    <span>Response in 2 Hours</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    <span>100% Free Consultation</span>
                  </span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
