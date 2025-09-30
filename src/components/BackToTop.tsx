"use client";

import { useEffect, useState, useCallback } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const evaluateVisibility = useCallback(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const beyondFirstScreen = typeof window !== "undefined" ? window.scrollY > window.innerHeight * 0.5 : false;
    // Показуємо кнопку, якщо не перша секція або користувач проскролив вниз
    setVisible((hash && hash !== "#home") || beyondFirstScreen);
  }, []);

  useEffect(() => {
    evaluateVisibility();
    window.addEventListener("scroll", evaluateVisibility, { passive: true });
    window.addEventListener("hashchange", evaluateVisibility);
    return () => {
      window.removeEventListener("scroll", evaluateVisibility as any);
      window.removeEventListener("hashchange", evaluateVisibility as any);
    };
  }, [evaluateVisibility]);

  const handleTop = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const lenis = (window as any).__lenis;
    if (lenis?.scrollTo) {
      lenis.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    history.replaceState(null, "", "#home");
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={handleTop}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm shadow-lg hover:opacity-90 transition-opacity"
    >
      Top ↑
    </button>
  );
}


