"use client";
import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";
import { useSearchParams } from "next/navigation";
import { dict, getLangFromSearch } from "@/lib/i18n";

export default function Nav() {
  const search = useSearchParams();
  const lang = getLangFromSearch(search?.toString());
  const t = dict[lang];
  return (
    <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
      <Link href="#home" className="font-semibold tracking-tight">igor.projects</Link>
      <div className="flex items-center gap-3">
        <ul className="hidden sm:flex gap-6 text-sm">
          <li><a href="#projects" className="hover:opacity-80">{t.nav.projects}</a></li>
          <li><a href="#about" className="hover:opacity-80">{t.nav.about}</a></li>
          <li><a href="#contact" className="hover:opacity-80">{t.nav.contact}</a></li>
        </ul>
        <LangSwitcher />
      </div>
    </nav>
  );
}
