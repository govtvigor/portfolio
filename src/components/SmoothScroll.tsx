"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

type LenisEasing = (t: number) => number;
interface LenisOptions {
  autoRaf?: boolean;
  duration?: number;
  easing?: LenisEasing;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  gestureOrientation?: "vertical" | "horizontal";
}
interface LenisInstance {
  raf: (time: number) => void;
  on: (event: "scroll", handler: () => void) => void;
  destroy: () => void;
}
interface LenisScroll {
  scrollTo?: (target: number | Element, options?: { offset?: number }) => void;
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
    } as unknown as LenisOptions) as unknown as LenisInstance;

    // expose lenis globally for controlled section snapping (only scrollTo)
    const lenisWithScroll = lenis as unknown as LenisScroll;
    window.__lenis = {
      scrollTo: lenisWithScroll.scrollTo?.bind(lenisWithScroll)
    };

    const update = (time: number) => {
      lenis.raf(time * 1000);
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);

    lenis.on("scroll", () => ScrollTrigger.update());

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      try { delete window.__lenis; } catch {}
    };
  }, []);
  return children;
}


