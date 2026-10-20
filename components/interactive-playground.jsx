"use client";

import * as React from "react";
import { useTheme } from "@/components/theme-provider";
import {
  Sparkles,
  Globe,
  Sun,
  Moon,
  Laptop,
  Check,
  Palette,
  Code2,
  Send,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { LanguageSwitcher } from "@/components/language-switcher";

export function InteractivePlayground({ lang, dict }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [testInput, setTestInput] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="playground" className="py-20 bg-muted/20 border-t border-border/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-3">
            <Sparkles className="size-3" />
            <span>{dict.interactive.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            {dict.interactive.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {dict.interactive.subtitle}
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Localization Controller */}
          <Card className="border-border/60 bg-card/80 backdrop-blur-md shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Globe className="size-4" />
                </div>
                <Badge variant="outline" className="text-xs font-mono">
                  {lang === "en" ? "en-US" : "bn-BD"}
                </Badge>
              </div>
              <CardTitle className="text-lg mt-3">{dict.interactive.languageCardTitle}</CardTitle>
              <CardDescription className="text-xs">
                {lang === "en"
                  ? "Toggle between English and Bangla. Translations and URL routes update instantly."
                  : "ইংরেজি ও বাংলার মধ্যে পরিবর্তন করুন। সম্পূর্ণ টেক্সট এবং ইউআরএল সাথে সাথে পরিবর্তিত হবে।"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-xl bg-muted/50 border border-border/40 flex items-center justify-between">
                <span className="text-xs font-medium text-foreground">
                  {lang === "en" ? "Switch language:" : "ভাষা পরিবর্তন করুন:"}
                </span>
                <LanguageSwitcher currentLang={lang} />
              </div>
              <div className="rounded-lg bg-background p-3 border border-border/40 font-mono text-[11px] text-muted-foreground space-y-1">
                <div>Locale route: <span className="text-primary font-semibold">/{lang}</span></div>
                <div>Status: <span className="text-emerald-500 font-semibold">Loaded via Server Dictionary</span></div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Theme Controller */}
          <Card className="border-border/60 bg-card/80 backdrop-blur-md shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Moon className="size-4" />
                </div>
                <Badge className="bg-primary/15 text-primary border-primary/20 text-xs font-mono">
                  {mounted ? resolvedTheme : "dark"}
                </Badge>
              </div>
              <CardTitle className="text-lg mt-3">{dict.interactive.themeCardTitle}</CardTitle>
              <CardDescription className="text-xs">
                {lang === "en"
                  ? "Initially dark mode active. Toggle seamlessly between Dark, Light, and System modes."
                  : "ডিফল্টভাবে ডার্ক মোড সক্রিয়। ডার্ক, লাইট এবং সিস্টেম মোডের মাঝে নির্বাচন করুন।"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    mounted && resolvedTheme === "dark"
                      ? "border-primary bg-primary/10 text-primary shadow-xs"
                      : "border-border/50 bg-background hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <Moon className="size-4" />
                  <span>{dict.common.themeDark}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    mounted && resolvedTheme === "light"
                      ? "border-primary bg-primary/10 text-primary shadow-xs"
                      : "border-border/50 bg-background hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <Sun className="size-4" />
                  <span>{dict.common.themeLight}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme("system")}
                  className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    mounted && theme === "system"
                      ? "border-primary bg-primary/10 text-primary shadow-xs"
                      : "border-border/50 bg-background hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <Laptop className="size-4" />
                  <span>{dict.common.themeSystem}</span>
                </button>
              </div>
              <div className="rounded-lg bg-background p-3 border border-border/40 font-mono text-[11px] text-muted-foreground space-y-1">
                <div>Default: <span className="text-primary font-semibold">dark</span></div>
                <div>Class variant: <span className="text-emerald-500 font-semibold">.dark & (Tailwind v4)</span></div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Color Tokens */}
          <Card className="border-border/60 bg-card/80 backdrop-blur-md shadow-sm" id="design-system">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Palette className="size-4" />
                </div>
                <Badge variant="outline" className="text-xs font-mono text-primary border-primary/30">
                  Purple OKLCH
                </Badge>
              </div>
              <CardTitle className="text-lg mt-3">{dict.interactive.colorsCardTitle}</CardTitle>
              <CardDescription className="text-xs">
                {dict.interactive.changeNote}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Primary swatch */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-muted/40 border border-border/40">
                <div className="flex items-center gap-2.5">
                  <div className="size-6 rounded-lg bg-primary shadow-xs" />
                  <div>
                    <div className="text-xs font-semibold text-foreground">
                      {dict.interactive.primaryColorName}
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">
                      var(--primary)
                    </div>
                  </div>
                </div>
                <Badge className="text-[10px] bg-primary text-primary-foreground font-mono">
                  #7c3aed
                </Badge>
              </div>

              {/* Secondary swatch */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-muted/40 border border-border/40">
                <div className="flex items-center gap-2.5">
                  <div className="size-6 rounded-lg bg-secondary border border-border/60 shadow-xs" />
                  <div>
                    <div className="text-xs font-semibold text-foreground">
                      {dict.interactive.secondaryColorName}
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">
                      var(--secondary)
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px] font-mono">
                  Slate-Purple
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live shadcn Component Showcase Ribbon */}
        <Card className="border-border/60 bg-card/70 backdrop-blur-md shadow-sm">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle className="text-lg">shadcn/ui Component Kit</CardTitle>
                <CardDescription className="text-xs mt-1">
                  {lang === "en"
                    ? "Interactive demonstration of styled buttons, badges, inputs, and avatars with active purple tokens."
                    : "অ্যাক্টিভ পার্পল টোকেনসহ শ্যাডসিএন বাটন, ব্যাজ, ইনপুট এবং অবতার কম্পোনেন্টের সরাসরি ডেমো।"}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="w-fit font-mono text-xs">
                Tailwind CSS v4 + Base UI
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Row 1: Buttons and Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Button className="rounded-full shadow-sm shadow-primary/20">
                <Sparkles className="size-3.5 mr-1.5" />
                {dict.interactive.btnPrimary}
              </Button>
              <Button variant="secondary" className="rounded-full">
                {dict.interactive.btnSecondary}
              </Button>
              <Button variant="outline" className="rounded-full">
                {dict.interactive.btnOutline}
              </Button>
              <Button variant="destructive" size="sm" className="rounded-full">
                Destructive
              </Button>
              <div className="h-6 w-px bg-border/60 hidden sm:block" />
              <Badge className="bg-primary text-primary-foreground">Primary Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>

            <Separator className="bg-border/40" />

            {/* Row 2: Live Input & Avatar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1.5">
                  {dict.interactive.inputLabel}
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    placeholder={dict.interactive.inputPlaceholder}
                    className="rounded-full bg-background/80 border-border/60 text-sm focus-visible:ring-primary/30"
                  />
                  <Button size="icon" className="rounded-full shrink-0">
                    <Send className="size-3.5" />
                  </Button>
                </div>
                {testInput && (
                  <p className="text-xs text-primary mt-1.5 font-medium">
                    {lang === "en" ? "Live preview: " : "লাইভ প্রিভিউ: "}
                    <span className="text-foreground">{testInput}</span>
                  </p>
                )}
              </div>

              {/* Avatar group */}
              <div className="flex items-center gap-3 md:justify-end">
                <div className="flex -space-x-2 overflow-hidden">
                  <Avatar className="ring-2 ring-background size-9">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                      IS
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background size-9">
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-xs font-semibold">
                      GL
                    </AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-background size-9">
                    <AvatarFallback className="bg-muted text-muted-foreground text-xs font-semibold">
                      AI
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-foreground">ISL Global Team</div>
                  <div className="text-muted-foreground text-[11px]">Bilingual Next.js 16</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
