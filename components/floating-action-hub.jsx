"use client";

import * as React from "react";
import { ChevronUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActionHub({ lang, dict }) {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappText =
    dict.floating?.chatWhatsApp ||
    (lang === "bn" ? "সিনিয়র কাউন্সেলরের সাথে কথা বলুন" : "Chat with Senior Counselor");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back to Top Button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-navy-900/90 text-slate-300 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp CTA with smooth expandable reveal on hover */}
      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        href="https://wa.me/8801910030040?text=Hello%20ISL%20Global%20Counselor%2C%20I%20am%20interested%20in%20studying%20abroad."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center group hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Chat with Senior Counselor on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs group-hover:px-2.5">
          {whatsappText}
        </span>
      </motion.a>
    </div>
  );
}
