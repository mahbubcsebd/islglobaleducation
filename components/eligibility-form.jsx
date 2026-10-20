"use client";

import * as React from "react";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import {
  Sparkles,
  Send,
  MessageCircle,
  CheckCircle2,
  Clock,
  RotateCcw,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getEligibilitySchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { FormField, FormInput } from "@/components/ui/form-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function EligibilityForm({ lang, dict }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [assessmentData, setAssessmentData] = React.useState(null);

  const eligibilitySchema = React.useMemo(() => getEligibilitySchema(dict), [dict]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(eligibilitySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      destination: "",
      education: "",
      passingYear: "",
      gpa: "",
      ieltsStatus: "",
    },
  });

  const onSubmit = async (data) => {
    // Simulate assessment submission
    await new Promise((resolve) => setTimeout(resolve, 700));
    setAssessmentData(data);
    setSubmitted(true);
  };

  const handleReset = () => {
    reset({
      fullName: "",
      phone: "",
      email: "",
      destination: "",
      education: "",
      passingYear: "",
      gpa: "",
      ieltsStatus: "",
    });
    setSubmitted(false);
    setAssessmentData(null);
  };

  const getWhatsAppLink = () => {
    if (!assessmentData) return "https://wa.me/8801910030040";
    const text = encodeURIComponent(
      `Hello ISL Global Education,\nI would like a free eligibility assessment for studying abroad.\n\n` +
      `• Name: ${assessmentData.fullName}\n` +
      `• Phone: ${assessmentData.phone}\n` +
      `• Email: ${assessmentData.email || "N/A"}\n` +
      `• Preferred Country: ${assessmentData.destination.toUpperCase()}\n` +
      `• Education: ${assessmentData.education.toUpperCase()}\n` +
      `• Passing Year: ${assessmentData.passingYear}\n` +
      `• GPA / Result: ${assessmentData.gpa}\n` +
      `• English Status: ${assessmentData.ieltsStatus.toUpperCase()}`
    );
    return `https://wa.me/8801910030040?text=${text}`;
  };

  return (
    <section id="eligibility" className="py-16 sm:py-20 relative bg-transparent">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border/80 dark:border-white/10 bg-surface/90 dark:bg-[#121426]/90 backdrop-blur-xl p-6 sm:p-9 md:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle Top Horizon Radiant Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-md h-[1.5px] bg-gradient-to-r from-transparent via-primary dark:via-[#F7DF1E]/50 to-transparent z-10" />

          {/* Radiant Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-[radial-gradient(ellipse_at_top,rgba(247,223,30,0.25)_0%,rgba(79,70,229,0.18)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(247,223,30,0.12)_0%,rgba(44,58,136,0.25)_50%,transparent_75%)] opacity-85 dark:opacity-85 blur-2xl" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-9 relative z-10">
            {/* Brand Logo without any background or border */}
            <div className="flex justify-center mb-4">
              <BrandLogo
                width={160}
                height={44}
                className="h-8 sm:h-9 w-auto object-contain opacity-95"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3.5 py-1 text-xs font-bold shadow-2xs mb-3">
              <Sparkles className="size-3.5" />
              <span>{dict.eligibility.badge}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-2.5">
              {dict.eligibility.title}
            </h2>
            <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed max-w-xl mx-auto">
              {dict.eligibility.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 max-w-lg mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500 mx-auto">
                <CheckCircle2 className="size-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {dict.eligibility.successTitle}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed">
                  {dict.eligibility.successMsg}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="outline"
                  size="default"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4 mr-2 text-emerald-500" />
                    <span>{dict.eligibility.whatsappDirect}</span>
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={handleReset}
                  className="w-full sm:w-auto"
                >
                  <RotateCcw className="size-3.5 mr-2" />
                  {dict.eligibility.reset}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-3xl mx-auto" noValidate>
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  id="eligibility-fullName"
                  label={dict.eligibility.fullName}
                  required
                  error={errors.fullName?.message}
                >
                  <FormInput
                    id="eligibility-fullName"
                    type="text"
                    placeholder={dict.eligibility.fullNamePlaceholder || "Lubna Rahman"}
                    hasError={Boolean(errors.fullName)}
                    {...register("fullName")}
                  />
                </FormField>

                <FormField
                  id="eligibility-phone"
                  label={dict.eligibility.phone}
                  required
                  error={errors.phone?.message}
                >
                  <FormInput
                    id="eligibility-phone"
                    type="tel"
                    placeholder={dict.eligibility.phonePlaceholder}
                    hasError={Boolean(errors.phone)}
                    {...register("phone")}
                  />
                </FormField>
              </div>

              {/* Row 2: Destination & Education with Shadcn Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  id="eligibility-destination"
                  label={dict.eligibility.destination}
                  required
                  error={errors.destination?.message}
                >
                  <Controller
                    control={control}
                    name="destination"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || undefined}
                      >
                        <SelectTrigger hasError={Boolean(errors.destination)}>
                          <SelectValue placeholder={dict.eligibility.destinationPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="malaysia">{dict.eligibility.destOptions.malaysia}</SelectItem>
                          <SelectItem value="uk">{dict.eligibility.destOptions.uk}</SelectItem>
                          <SelectItem value="canada">{dict.eligibility.destOptions.canada}</SelectItem>
                          <SelectItem value="australia">{dict.eligibility.destOptions.australia}</SelectItem>
                          <SelectItem value="europe">{dict.eligibility.destOptions.europe}</SelectItem>
                          <SelectItem value="usa">{dict.eligibility.destOptions.usa}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>

                <FormField
                  id="eligibility-education"
                  label={dict.eligibility.education}
                  required
                  error={errors.education?.message}
                >
                  <Controller
                    control={control}
                    name="education"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || undefined}
                      >
                        <SelectTrigger hasError={Boolean(errors.education)}>
                          <SelectValue placeholder={dict.eligibility.educationPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hsc">{dict.eligibility.eduOptions.hsc}</SelectItem>
                          <SelectItem value="diploma">{dict.eligibility.eduOptions.diploma}</SelectItem>
                          <SelectItem value="bachelor">{dict.eligibility.eduOptions.bachelor}</SelectItem>
                          <SelectItem value="master">{dict.eligibility.eduOptions.master}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>
              </div>

              {/* Row 3: Passing Year, GPA, English Status with Shadcn Select */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FormField
                  id="eligibility-passingYear"
                  label={dict.eligibility.passingYear}
                  required
                  error={errors.passingYear?.message}
                >
                  <FormInput
                    id="eligibility-passingYear"
                    type="text"
                    placeholder={dict.eligibility.passingYearPlaceholder}
                    hasError={Boolean(errors.passingYear)}
                    {...register("passingYear")}
                  />
                </FormField>

                <FormField
                  id="eligibility-gpa"
                  label={dict.eligibility.gpa}
                  required
                  error={errors.gpa?.message}
                >
                  <FormInput
                    id="eligibility-gpa"
                    type="text"
                    placeholder={dict.eligibility.gpaPlaceholder}
                    hasError={Boolean(errors.gpa)}
                    {...register("gpa")}
                  />
                </FormField>

                <FormField
                  id="eligibility-ieltsStatus"
                  label={dict.eligibility.ieltsStatus}
                  required
                  error={errors.ieltsStatus?.message}
                >
                  <Controller
                    control={control}
                    name="ieltsStatus"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || undefined}
                      >
                        <SelectTrigger hasError={Boolean(errors.ieltsStatus)}>
                          <SelectValue placeholder={dict.eligibility.ieltsPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moi">{dict.eligibility.ieltsOptions.moi}</SelectItem>
                          <SelectItem value="completed">{dict.eligibility.ieltsOptions.completed}</SelectItem>
                          <SelectItem value="preparing">{dict.eligibility.ieltsOptions.preparing}</SelectItem>
                          <SelectItem value="duolingo">{dict.eligibility.ieltsOptions.duolingo}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormField>
              </div>

              {/* Submit Buttons & Trust badges */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-11 px-7 font-semibold rounded-md shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="size-4 mr-2" />
                  {isSubmitting ? dict.eligibility.submitting : dict.eligibility.submitBtn}
                </Button>

                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-foreground-secondary">
                  <div className="flex items-center gap-1.5 rounded-md border border-border/70 bg-background/50 px-2.5 py-1 shadow-2xs">
                    <Clock className="size-3.5 text-primary shrink-0" />
                    <span>{dict.eligibility.response2Hours || "Response in 2 Hours"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md border border-border/70 bg-background/50 px-2.5 py-1 shadow-2xs">
                    <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                    <span>{dict.eligibility.freeConsultation || "100% Free Consultation"}</span>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
