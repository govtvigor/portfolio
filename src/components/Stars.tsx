"use client";

import { useEffect, useMemo, useState } from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";

export default function Stars() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      const { loadSlim } = await import("@tsparticles/slim");
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => { cancelled = true; };
  }, []);

  const options = useMemo(() => ({
    background: { color: "transparent" },
    fullScreen: { enable: true, zIndex: 1 },
    fpsLimit: 120,
    particles: {
      number: { value: 200, density: { enable: true, width: 1920, height: 1080 } },
      color: { value: "#fff" },
      shape: { type: "circle" },
      size: { value: 3, animation: { enable: false, speed: 5 } },
      opacity: { value: 1, animation: { enable: false, speed: 2 } },
      links: { enable: false },
      move: {
        enable: false,
        direction: "right",
        speed: 3,
        straight: false,
        outModes: { default: "out", top: "out", right: "out", bottom: "out", left: "out" },
        angle: { value: 10, offset: 0 },
        path: { enable: false },
      },
      zIndex: { value: 5, opacityRate: 0.5, sizeRate: 1, velocityRate: 1 },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        resize: { enable: true, delay: 0.5 },
        onHover: { enable: false },
        onClick: { enable: false },
        parallax: { enable: false, force: 2, smooth: 10 },
      },
    },
    detectRetina: true,
  }), []);

  if (!ready) return null;
  return <Particles id="tsparticles-stars" options={options as any} style={{ pointerEvents: "none" }} />;
}


