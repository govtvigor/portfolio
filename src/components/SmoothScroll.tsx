"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.defaults({ anticipatePin: 1 });

    // Use default window scrolling for best compatibility
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      smoothWheel: true,
      smoothTouch: true,
      gestureOrientation: "vertical",
    } as any);

    // expose lenis globally for controlled section snapping
    (window as any).__lenis = lenis;

    const update = (time: number) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);

    lenis.on("scroll", () => ScrollTrigger.update());

    return () => {
      gsap.ticker.remove(update);
      (lenis as any)?.destroy?.();
      try { delete (window as any).__lenis; } catch {}
    };
  }, []);
  return children as any;
}


