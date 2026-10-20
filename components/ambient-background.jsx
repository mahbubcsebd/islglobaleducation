import * as React from "react";

/**
 * AmbientBackground Component
 * Provides global, theme-aware atmospheric lighting, animated glowing orbs,
 * and an architectural dot-matrix texture across the entire page for both Light and Dark themes.
 */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-0 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* =========================================================================
          TOP HORIZON AMBIENT BEAM (Subtle 1.5px radiant top horizon highlight)
          ========================================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[1.5px] bg-gradient-to-r from-transparent via-[#2C3A88]/35 dark:via-[#F7DF1E]/40 to-transparent" />

      {/* =========================================================================
          GLOBAL ARCHITECTURAL DOT MATRIX GRID (Full page texture)
          ========================================================================= */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(44,58,136,0.065)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px] opacity-80" />

      {/* =========================================================================
          ZONE 1: HERO & TOP STAGE (Top 0% - 15%)
          ========================================================================= */}
      {/* 1. Grand Top Radial Spotlight Beam */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] md:w-[1250px] h-[420px] sm:h-[520px] md:h-[620px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(79,70,229,0.22)_0%,rgba(59,130,246,0.18)_30%,rgba(247,223,30,0.24)_60%,transparent_80%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(44,58,136,0.48)_0%,rgba(247,223,30,0.14)_45%,transparent_75%)] opacity-90 dark:opacity-95 blur-2xl" />

      {/* 2. Floating Animated Light Orb (Deep Sapphire / Royal Navy Blue) */}
      <div className="absolute top-12 -left-16 sm:left-[3%] md:left-[7%] w-72 sm:w-96 md:w-[480px] h-72 sm:h-96 md:h-[480px] rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-500/22 to-sky-400/20 dark:bg-[#2C3A88]/42 blur-[85px] sm:blur-[115px] animate-ambient-float" />

      {/* 3. Floating Animated Light Orb (JS Warm Yellow Glow) */}
      <div className="absolute top-20 -right-16 sm:right-[3%] md:right-[7%] w-64 sm:w-84 md:w-[420px] h-64 sm:h-84 md:h-[420px] rounded-full bg-gradient-to-br from-amber-400/35 via-yellow-400/30 to-amber-300/25 dark:bg-[#F7DF1E]/18 blur-[80px] sm:blur-[105px] animate-ambient-pulse" />

      {/* =========================================================================
          ZONE 2: DESTINATIONS & SERVICES (15% - 35%)
          ========================================================================= */}
      {/* Destinations Right Glow - Electric Sapphire */}
      <div className="absolute top-[16%] -right-24 sm:right-[3%] md:right-[6%] w-80 sm:w-[440px] md:w-[500px] h-80 sm:h-[440px] md:h-[500px] rounded-full bg-gradient-to-br from-sky-400/30 via-blue-500/25 to-indigo-500/20 dark:bg-blue-600/18 blur-[90px] sm:blur-[130px] animate-ambient-drift" />

      {/* Services Left Glow - Soft Indigo Aura */}
      <div className="absolute top-[26%] -left-24 sm:left-[2%] md:left-[5%] w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-400/22 to-blue-500/18 dark:bg-[#2C3A88]/30 blur-[85px] sm:blur-[120px] animate-ambient-float" />

      {/* =========================================================================
          ZONE 3: WHY CHOOSE US & PROCESS ROADMAP (35% - 60%)
          ========================================================================= */}
      {/* Why Us Center-Right Glow - Warm Gold Sparkle */}
      <div className="absolute top-[38%] -right-20 sm:right-[8%] md:right-[12%] w-64 sm:w-88 md:w-[400px] h-64 sm:h-88 md:h-[400px] rounded-full bg-gradient-to-br from-amber-400/35 via-yellow-400/28 to-orange-300/20 dark:bg-[#F7DF1E]/14 blur-[80px] sm:blur-[115px] animate-ambient-pulse" />

      {/* Process Roadmap Left Glow - Sapphire Navy Beam */}
      <div className="absolute top-[50%] -left-20 sm:left-[4%] md:left-[7%] w-80 sm:w-[450px] md:w-[500px] h-80 sm:h-[450px] md:h-[500px] rounded-full bg-gradient-to-br from-[#2C3A88]/25 via-blue-600/22 to-indigo-500/20 dark:bg-[#2C3A88]/30 blur-[95px] sm:blur-[125px] animate-ambient-drift" />

      {/* =========================================================================
          ZONE 4: ELIGIBILITY FORM & TESTIMONIALS (60% - 80%)
          ========================================================================= */}
      {/* Eligibility Center Spotlight */}
      <div className="absolute top-[63%] left-1/2 -translate-x-1/2 w-[550px] sm:w-[800px] md:w-[1000px] h-[350px] sm:h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.20)_0%,rgba(247,223,30,0.22)_45%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(44,58,136,0.35)_0%,rgba(247,223,30,0.12)_50%,transparent_75%)] opacity-85 dark:opacity-90 blur-3xl" />

      {/* Testimonials Right Glow - Warm Golden Sun */}
      <div className="absolute top-[74%] -right-24 sm:right-[4%] md:right-[8%] w-72 sm:w-96 md:w-[440px] h-72 sm:h-96 md:h-[440px] rounded-full bg-gradient-to-br from-amber-400/32 via-yellow-400/28 to-amber-200/22 dark:bg-[#F7DF1E]/16 blur-[85px] sm:blur-[115px] animate-ambient-pulse" />

      {/* =========================================================================
          ZONE 5: FAQ, CONTACT & CTA (80% - 100%)
          ========================================================================= */}
      {/* FAQ Left Glow - Deep Royal Aura */}
      <div className="absolute top-[85%] -left-20 sm:left-[3%] md:left-[6%] w-80 sm:w-[450px] md:w-[480px] h-80 sm:h-[450px] md:h-[480px] rounded-full bg-gradient-to-br from-[#2C3A88]/25 via-indigo-600/22 to-blue-500/18 dark:bg-[#2C3A88]/35 blur-[90px] sm:blur-[120px] animate-ambient-float" />

      {/* Bottom CTA Spotlight Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] md:w-[1050px] h-[380px] sm:h-[480px] bg-[radial-gradient(ellipse_at_bottom,rgba(247,223,30,0.30)_0%,rgba(79,70,229,0.25)_50%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_bottom,rgba(247,223,30,0.16)_0%,rgba(44,58,136,0.45)_55%,transparent_75%)] opacity-90 dark:opacity-95 blur-2xl" />
    </div>
  );
}
