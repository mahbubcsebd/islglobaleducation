"use client";

import * as React from "react";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getContactSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { FormField, FormInput, FormTextarea } from "@/components/ui/form-field";

export function ContactSection({ dict }) {
  const [sent, setSent] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState(null);
  const leftColRef = React.useRef(null);
  const [minFormHeight, setMinFormHeight] = React.useState(null);

  React.useEffect(() => {
    if (!leftColRef.current) return;
    const updateHeight = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024 && leftColRef.current) {
        setMinFormHeight(leftColRef.current.offsetHeight);
      } else {
        setMinFormHeight(null);
      }
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(leftColRef.current);
    window.addEventListener("resize", updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const contactSchema = React.useMemo(() => getContactSchema(dict), [dict]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      query: "",
    },
  });

  const onSubmit = async (data) => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmittedData(data);
    setSent(true);
  };

  const handleReset = () => {
    reset();
    setSent(false);
    setSubmittedData(null);
  };

  const getWhatsAppDirectLink = () => {
    if (!submittedData) return "https://wa.me/8801910030040";
    const text = encodeURIComponent(
      `Hello ISL Global,\nMy name is ${submittedData.name}.\nPhone: ${submittedData.phone}\nQuery: ${submittedData.query}`
    );
    return `https://wa.me/8801910030040?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 relative bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
            <MapPin className="size-3.5" />
            <span>{dict.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            {dict.contact.title}
          </h2>
          <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed">
            {dict.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid aligned to start so left side never stretches on form errors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Office Details with fixed gap that never expands */}
          <div ref={leftColRef} className="flex flex-col gap-4">
            {/* Address Card with Brand Logo */}
            <div className="rounded-xl border border-border bg-surface p-6 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <BrandLogo
                  width={160}
                  height={44}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-md shadow-2xs">
                  {dict.contact.headOffice || "Head Office"}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0 mt-0.5 shadow-2xs">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {dict.contact.addressTitle}
                  </h4>
                  <p className="text-xs text-foreground-secondary mt-1 leading-relaxed">
                    {dict.contact.addressDesc}
                  </p>
                  <div className="mt-2 text-xs text-primary font-medium">
                    {dict.contact.appointmentBadge}
                  </div>
                </div>
              </div>
            </div>

            {/* Hotline Numbers & Premium WhatsApp Card */}
            <div className="rounded-xl border border-border bg-surface p-6 flex items-start gap-4 shadow-2xs">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0 shadow-2xs">
                <Phone className="size-5" />
              </div>
              <div className="w-full">
                <h4 className="text-sm font-bold text-foreground">
                  {dict.contact.phoneTitle}
                </h4>
                <div className="flex flex-wrap items-center gap-3 mt-1.5">
                  <a
                    href="tel:+8801910030040"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    +880 1910-030040
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href="tel:+8801910030093"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    +880 1910-030093
                  </a>
                </div>
                {/* WhatsApp Action Button with Standard Outline Theme */}
                <div className="mt-3">
                  <a
                    href="https://wa.me/8801910030040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-alt hover:bg-surface hover:border-primary text-foreground px-3.5 py-2 text-xs font-semibold transition-colors shadow-2xs"
                  >
                    <MessageCircle className="size-4 text-emerald-500 shrink-0" />
                    <span>WhatsApp: +880 1910-030040</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Hours Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-3 shadow-2xs">
                  <Mail className="size-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">
                  {dict.contact.emailTitle}
                </h4>
                <a
                  href="mailto:islglobaleducation@gmail.com"
                  className="text-xs text-foreground-secondary hover:text-primary transition-colors block mt-1 break-all"
                >
                  islglobaleducation@gmail.com
                </a>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5 shadow-2xs">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-3 shadow-2xs">
                  <Clock className="size-4" />
                </div>
                <h4 className="text-xs font-bold text-foreground">
                  {dict.contact.hoursTitle}
                </h4>
                <p className="text-xs text-foreground-secondary mt-1">
                  {dict.contact.hoursDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card matching initial left height, freely expanding on error */}
          <div
            style={{ minHeight: minFormHeight ? `${minFormHeight}px` : undefined }}
            className="rounded-xl border border-border bg-surface p-7 shadow-2xs flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {dict.contact.messageBoxTitle}
              </h3>
              <p className="text-xs text-foreground-secondary mb-6">
                {dict.contact.inquirySubtitle}
              </p>
            </div>

            {sent ? (
              <div className="p-6 rounded-xl bg-surface border border-border text-center space-y-4 my-auto animate-in fade-in-50 duration-200">
                <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mx-auto">
                  <CheckCircle2 className="size-7" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    {dict.contact.msgSent}
                  </h4>
                  <p className="text-xs text-foreground-secondary mt-1 max-w-sm mx-auto">
                    {dict.contact.msgSentDetail}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href={getWhatsAppDirectLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4 mr-2 text-emerald-500" />
                      <span>{dict.contact.openWhatsApp}</span>
                    </a>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="w-full sm:w-auto"
                  >
                    {dict.contact.sendAnother}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col justify-between space-y-4" noValidate>
                <div className="space-y-4">
                  <FormField
                    id="contact-name"
                    label={dict.contact.msgName}
                    required
                    error={errors.name?.message}
                  >
                    <FormInput
                      id="contact-name"
                      type="text"
                      placeholder={dict.contact.msgNamePlaceholder || "Lubna Rahman"}
                      hasError={Boolean(errors.name)}
                      {...register("name")}
                    />
                  </FormField>

                  <FormField
                    id="contact-phone"
                    label={dict.contact.msgPhone}
                    required
                    error={errors.phone?.message}
                  >
                    <FormInput
                      id="contact-phone"
                      type="tel"
                      placeholder={dict.contact.phonePlaceholder || "01710-000000"}
                      hasError={Boolean(errors.phone)}
                      {...register("phone")}
                    />
                  </FormField>

                  <FormField
                    id="contact-query"
                    label={dict.contact.msgQuery}
                    required
                    error={errors.query?.message}
                  >
                    <FormTextarea
                      id="contact-query"
                      rows={4}
                      placeholder={dict.contact.queryPlaceholder || "e.g., I want to study..."}
                      hasError={Boolean(errors.query)}
                      {...register("query")}
                    />
                  </FormField>
                </div>

                <div className="pt-2 mt-auto">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    <Send className="size-4 mr-2" />
                    {isSubmitting ? dict.eligibility.submitting : dict.contact.msgSend}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
