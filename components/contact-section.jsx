"use client";

import * as React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection({ dict }) {
  const [inquiry, setInquiry] = React.useState({
    name: "",
    phone: "",
    query: "",
  });
  const [sent, setSent] = React.useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setInquiry({ name: "", phone: "", query: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border/40 relative bg-muted/20">
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
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Office Details */}
          <div className="space-y-4">
            {/* Address Card with Logo */}
            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur-xs shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="bg-white/95 dark:bg-white/95 px-3 py-1.5 rounded-xl shadow-xs border border-white/20">
                  <Image
                    src="/logo.png"
                    alt="ISL Global Education"
                    width={140}
                    height={36}
                    className="h-7 w-auto object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Head Office
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {dict.contact.addressTitle}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {dict.contact.addressDesc}
                  </p>
                  <div className="mt-2 text-xs text-primary font-medium">
                    Direct appointment available daily
                  </div>
                </div>
              </div>
            </div>

            {/* Hotline Numbers Card */}
            <div className="rounded-xl border border-border bg-surface p-6 flex items-start gap-4">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary shrink-0">
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
                <div className="mt-3">
                  <a
                    href="https://wa.me/8801910030040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-500 border border-emerald-500/30 px-3.5 py-1 text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="size-3.5" />
                    <span>WhatsApp: 01910-030040</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email & Hours Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary mb-3">
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

              <div className="rounded-xl border border-border bg-surface p-5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary mb-3">
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

          {/* Right Column: Quick Inquiry Form */}
          <div className="rounded-xl border border-border bg-surface p-7">
            <h3 className="text-lg font-bold text-foreground mb-1">
              {dict.contact.messageBoxTitle}
            </h3>
            <p className="text-xs text-foreground-secondary mb-6">
              Have a quick question? Leave your phone number and we will call you back.
            </p>

            {sent ? (
              <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <CheckCircle2 className="size-8 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold text-foreground">
                  {dict.contact.msgSent}
                </h4>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.contact.msgName} *
                  </label>
                  <Input
                    required
                    type="text"
                    value={inquiry.name}
                    onChange={(e) =>
                      setInquiry({ ...inquiry, name: e.target.value })
                    }
                    placeholder="Your Name"
                    className="rounded-lg bg-surface-alt border-border text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.contact.msgPhone} *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={inquiry.phone}
                    onChange={(e) =>
                      setInquiry({ ...inquiry, phone: e.target.value })
                    }
                    placeholder="Phone / WhatsApp"
                    className="rounded-lg bg-surface-alt border-border text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground block mb-1.5">
                    {dict.contact.msgQuery}
                  </label>
                  <textarea
                    rows={3}
                    value={inquiry.query}
                    onChange={(e) =>
                      setInquiry({ ...inquiry, query: e.target.value })
                    }
                    placeholder="e.g., I want to study B.Sc. in Malaysia or UK with scholarship..."
                    className="w-full rounded-lg bg-surface-alt border border-border p-3 text-xs text-foreground placeholder:text-foreground-muted outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-lg py-2.5 text-xs font-semibold text-on-primary transition-colors cursor-pointer"
                >
                  <Send className="size-3.5 mr-2" />
                  {dict.contact.msgSend}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
