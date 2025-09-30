"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.defaults({ anticipatePin: 1 });

    // Use default window scrolling for best compatibility
    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
    });

    // expose lenis globally for controlled section snapping
    (window as Window).__lenis = lenis;

    // Disable internal RAF loop; we drive it via GSAP ticker
    try { lenis.stop(); } catch {}

    const update = (time: number) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);

    lenis.on("scroll", () => ScrollTrigger.update());

    return () => {
      gsap.ticker.remove(update);
      try { lenis.destroy(); } catch {}
      try { delete (window as Window).__lenis; } catch {}
    };
  }, []);
  return <>{children}</>;
}


