"use client";
import Link from "next/link";
import { useCallback } from "react";

export default function Nav() {
  const handleSmoothNav = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const anchor = e.currentTarget as HTMLAnchorElement;
    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement | null;
    const lenis = (window as any).__lenis;
    if (target && lenis?.scrollTo) {
      lenis.scrollTo(target, { offset: -56 });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
      <Link href="#home" className="font-semibold tracking-tight" onClick={handleSmoothNav}>igor.projects</Link>
      <ul className="hidden sm:flex gap-6 text-sm">
        <li><a href="#home" data-scroll-to className="hover:opacity-80" onClick={handleSmoothNav}>About me</a></li>
        <li><a href="#projects" data-scroll-to className="hover:opacity-80" onClick={handleSmoothNav}>Projects</a></li>
        <li><a href="#skills" data-scroll-to className="hover:opacity-80" onClick={handleSmoothNav}>Skills</a></li>
        <li><a href="#contact" data-scroll-to className="hover:opacity-80" onClick={handleSmoothNav}>Contact</a></li>
      </ul>
    </nav>
  );
}
