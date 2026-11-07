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
      {/* Top Horizon Luxury Light Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 dark:via-gold-400/30 to-transparent" />

      {/* Gentle, non-intrusive ambient light aura at the top */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.08)_0%,transparent_70%)] blur-3xl opacity-80" />
    </div>
  );
}
