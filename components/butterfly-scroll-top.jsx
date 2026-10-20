"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export function ButterflyScrollTop() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const isBn = pathname?.startsWith("/bn");
  const tooltipText = isBn ? "উপরে যান" : "Back to Top";

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY =
        window.pageYOffset ||
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // Show when scrolled down past 250px
      if (scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle fly to top
  const handleScrollToTop = useCallback(() => {
    if (isFlying) return;

    setIsFlying(true);

    // Create magical sparkling particle trail
    const newSparkles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 50,
      y: Math.random() * 40 - 15,
      size: Math.random() * 6 + 4,
      delay: i * 0.07,
    }));
    setSparkles(newSparkles);

    // Smooth scroll to top of window
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset flight state once reached top
    const timer = setTimeout(() => {
      setIsFlying(false);
      setIsVisible(false);
      setSparkles([]);
    }, 1300);

    return () => clearTimeout(timer);
  }, [isFlying]);

  if (!mounted) {
    return null;
  }

  const showButton = isVisible || isFlying;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 select-none transition-all duration-500 ease-out ${
        showButton
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none translate-y-4"
      }`}
    >
      {/* Flight sparkle trail */}
      {isFlying && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {sparkles.map((sparkle) => (
            <span
              key={sparkle.id}
              className="absolute rounded-full bg-primary animate-ping"
              style={{
                left: `calc(50% + ${sparkle.x}px)`,
                top: `calc(50% + ${sparkle.y}px)`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                animationDuration: "0.9s",
                animationDelay: `${sparkle.delay}s`,
                boxShadow: "0 0 12px #F7DF1E, 0 0 24px #F7DF1E",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Butterfly Button */}
      <button
        type="button"
        onClick={handleScrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={tooltipText}
        title={tooltipText}
        className={`group relative flex items-center justify-center w-16 h-16 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 transition-all ${
          isFlying ? "butterfly-flying" : "hover:scale-110 active:scale-95"
        }`}
      >
        {/* Soft Ambient Glow Halo behind Butterfly */}
        <div
          className={`absolute inset-0 rounded-full bg-primary/25 blur-xl transition-all duration-300 pointer-events-none ${
            isHovered || isFlying
              ? "opacity-100 scale-125"
              : "opacity-40 scale-100"
          }`}
        />

        {/* Small Discreet Scroll Indicator Badge with Arrow */}
        <div
          className={`absolute -bottom-1 z-20 flex items-center justify-center w-6 h-6 rounded-full bg-background/90 dark:bg-surface/90 border border-primary/50 text-primary shadow-sm backdrop-blur-sm transition-all duration-300 ${
            isFlying
              ? "opacity-0 scale-50"
              : "opacity-90 group-hover:opacity-100 group-hover:scale-110"
          }`}
        >
          <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>

        {/* 3D Butterfly Container */}
        <div
          className={`relative w-14 h-14 transition-transform duration-300 ${
            !isFlying ? "animate-butterfly-float" : ""
          }`}
          style={{
            perspective: "500px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Shared SVG Defs for Wings */}
          <svg className="absolute w-0 h-0" aria-hidden="true">
            <defs>
              <linearGradient id="bfGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF47D" />
                <stop offset="45%" stopColor="#F7DF1E" />
                <stop offset="100%" stopColor="#E5A000" />
              </linearGradient>

              <linearGradient id="bfAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="60%" stopColor="#2C3A88" />
                <stop offset="100%" stopColor="#15162B" />
              </linearGradient>

              <radialGradient id="bfSpot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#F7DF1E" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#2C3A88" stopOpacity="0.1" />
              </radialGradient>
            </defs>
          </svg>

          {/* LEFT WING (Hinged at right edge) */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full origin-right ${
              isFlying
                ? "bf-wing-left-flight"
                : isHovered
                ? "bf-wing-left-hover"
                : "bf-wing-left-idle"
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <svg
              viewBox="0 0 60 120"
              className="w-full h-full overflow-visible drop-shadow-[0_4px_8px_rgba(247,223,30,0.35)] dark:drop-shadow-[0_4px_12px_rgba(247,223,30,0.5)]"
            >
              {/* Left Forewing (Upper) */}
              <path
                d="M 60,56 C 50,28 20,10 6,26 C -5,38 10,68 36,72 C 48,74 58,64 60,56 Z"
                fill="url(#bfGold)"
                stroke="url(#bfAccent)"
                strokeWidth="1.6"
              />
              {/* Inner Veins */}
              <path
                d="M 58,56 C 44,40 26,30 16,36 C 10,40 20,58 36,64"
                fill="none"
                stroke="url(#bfAccent)"
                strokeWidth="1.2"
                strokeOpacity="0.55"
              />
              <path
                d="M 10,24 C 22,16 42,24 58,48"
                fill="none"
                stroke="#FFF47D"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              {/* Forewing Eyespot */}
              <circle cx="26" cy="40" r="4.5" fill="url(#bfSpot)" />
              <circle cx="26" cy="40" r="2" fill="#15162B" opacity="0.8" />

              {/* Left Hindwing (Lower) */}
              <path
                d="M 58,66 C 46,72 22,70 18,86 C 14,100 36,106 48,96 C 54,90 58,76 58,66 Z"
                fill="url(#bfGold)"
                stroke="url(#bfAccent)"
                strokeWidth="1.6"
              />
              <path
                d="M 54,70 C 42,76 28,82 26,92"
                fill="none"
                stroke="url(#bfAccent)"
                strokeWidth="1"
                strokeOpacity="0.45"
              />
              <circle cx="32" cy="88" r="3" fill="url(#bfSpot)" />
            </svg>
          </div>

          {/* RIGHT WING (Hinged at left edge) */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full origin-left ${
              isFlying
                ? "bf-wing-right-flight"
                : isHovered
                ? "bf-wing-right-hover"
                : "bf-wing-right-idle"
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <svg
              viewBox="60 0 60 120"
              className="w-full h-full overflow-visible drop-shadow-[0_4px_8px_rgba(247,223,30,0.35)] dark:drop-shadow-[0_4px_12px_rgba(247,223,30,0.5)]"
            >
              {/* Right Forewing (Upper) */}
              <path
                d="M 60,56 C 70,28 100,10 114,26 C 125,38 110,68 84,72 C 72,74 62,64 60,56 Z"
                fill="url(#bfGold)"
                stroke="url(#bfAccent)"
                strokeWidth="1.6"
              />
              {/* Inner Veins */}
              <path
                d="M 62,56 C 76,40 94,30 104,36 C 110,40 100,58 84,64"
                fill="none"
                stroke="url(#bfAccent)"
                strokeWidth="1.2"
                strokeOpacity="0.55"
              />
              <path
                d="M 110,24 C 98,16 78,24 62,48"
                fill="none"
                stroke="#FFF47D"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              {/* Forewing Eyespot */}
              <circle cx="94" cy="40" r="4.5" fill="url(#bfSpot)" />
              <circle cx="94" cy="40" r="2" fill="#15162B" opacity="0.8" />

              {/* Right Hindwing (Lower) */}
              <path
                d="M 62,66 C 74,72 98,70 102,86 C 106,100 84,106 72,96 C 66,90 62,76 62,66 Z"
                fill="url(#bfGold)"
                stroke="url(#bfAccent)"
                strokeWidth="1.6"
              />
              <path
                d="M 66,70 C 78,76 92,82 94,92"
                fill="none"
                stroke="url(#bfAccent)"
                strokeWidth="1"
                strokeOpacity="0.45"
              />
              <circle cx="88" cy="88" r="3" fill="url(#bfSpot)" />
            </svg>
          </div>

          {/* CENTRAL BODY & ANTENNAE (Elevated in 3D) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: "translateZ(6px)",
            }}
          >
            <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
              {/* Left Antenna */}
              <path
                d="M 59,48 C 55,36 46,26 40,24"
                fill="none"
                stroke="#15162B"
                className="dark:stroke-amber-200"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="39" cy="23" r="2.2" fill="#F7DF1E" />

              {/* Right Antenna */}
              <path
                d="M 61,48 C 65,36 74,26 80,24"
                fill="none"
                stroke="#15162B"
                className="dark:stroke-amber-200"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="81" cy="23" r="2.2" fill="#F7DF1E" />

              {/* Head */}
              <circle
                cx="60"
                cy="49"
                r="3.5"
                fill="#15162B"
                stroke="#F7DF1E"
                strokeWidth="0.8"
              />

              {/* Thorax */}
              <ellipse
                cx="60"
                cy="62"
                rx="3.2"
                ry="8"
                fill="#1E2238"
                stroke="#F7DF1E"
                strokeWidth="0.8"
              />

              {/* Abdomen */}
              <ellipse
                cx="60"
                cy="80"
                rx="2.6"
                ry="11"
                fill="#15162B"
                stroke="#F7DF1E"
                strokeWidth="0.8"
              />

              {/* Golden Ring Bands */}
              <line x1="58" y1="74" x2="62" y2="74" stroke="#F7DF1E" strokeWidth="0.9" />
              <line x1="58" y1="78" x2="62" y2="78" stroke="#F7DF1E" strokeWidth="0.9" />
              <line x1="58.5" y1="82" x2="61.5" y2="82" stroke="#F7DF1E" strokeWidth="0.9" />
              <line x1="59" y1="86" x2="61" y2="86" stroke="#F7DF1E" strokeWidth="0.9" />
            </svg>
          </div>
        </div>

        {/* Floating Tooltip Pill */}
        <span
          className={`absolute -top-8 px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-full shadow-lg bg-surface text-foreground border border-border whitespace-nowrap transition-all duration-300 pointer-events-none ${
            isHovered && !isFlying
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-90"
          }`}
        >
          {tooltipText}
        </span>
      </button>
    </div>
  );
}
