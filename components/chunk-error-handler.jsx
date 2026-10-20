"use client";

import { useEffect } from "react";

/**
 * ChunkErrorHandler
 *
 * cPanel (shared hosting) deployments sometimes fail to serve
 * Next.js JS chunks immediately after an upload — the browser
 * gets a cached HTML page that references new chunk hashes
 * that the server hasn't finished propagating yet.
 *
 * Symptoms: "This page couldn't load" on cPanel, works on reload.
 * Root cause: stale HTML referencing chunks that 404 or timeout.
 *
 * Fix: intercept the global "unhandledrejection" event, detect
 * ChunkLoadError / loading chunk failed, and do one hard reload
 * per session so the browser fetches fresh HTML + matching chunks.
 */
export default function ChunkErrorHandler() {
  useEffect(() => {
    const SESSION_KEY = "__chunk_reload__";

    function handleError(event) {
      const error =
        event?.reason ?? // unhandledrejection
        event?.error; // error event

      if (!error) return;

      const msg = (error.message ?? error.name ?? String(error)).toLowerCase();
      const isRecoverableError =
        error.name === "ChunkLoadError" ||
        msg.includes("enqueuemodel") ||
        msg.includes("t.reason") ||
        msg.includes("chunk.reason") ||
        msg.includes("loading chunk") ||
        msg.includes("loading css chunk") ||
        msg.includes("failed to fetch") ||
        msg.includes("failed to load") ||
        msg.includes("unexpected token") ||
        msg.includes("client-side exception");

      if (!isRecoverableError) return;

      // Prevent reload loop: allow at most one reload within 10 seconds
      const lastReload = Number(sessionStorage.getItem(SESSION_KEY) || 0);
      const now = Date.now();
      if (now - lastReload < 10000) return;

      sessionStorage.setItem(SESSION_KEY, String(now));

      // Hard reload clears stale cache and fetches fresh HTML + chunks
      window.location.reload();
    }

    window.addEventListener("unhandledrejection", handleError);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("unhandledrejection", handleError);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null;
}
