"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type Lang = "ua" | "en";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "ua";
  const stored = localStorage.getItem("lang");
  if (stored === "ua" || stored === "en") return stored;
  const nav = navigator.language?.toLowerCase() || "en";
  return nav.startsWith("uk") || nav.startsWith("uk-") ? "ua" : "en";
}

export default function LangSwitcher() {
  const [lang, setLang] = useState<Lang>("ua");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fromUrl = (searchParams?.get("lang") as Lang | null) || null;
    if (fromUrl === "ua" || fromUrl === "en") {
      setLang(fromUrl);
      localStorage.setItem("lang", fromUrl);
    } else {
      setLang(getInitialLang());
    }
  }, [searchParams]);

  function updateUrl(newLang: Lang) {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("lang", newLang);
    router.replace(`${pathname}?${params.toString()}` as any);
  }

  function toggle() {
    const next = lang === "ua" ? "en" : "ua";
    setLang(next);
    localStorage.setItem("lang", next);
    updateUrl(next);
  }

  return (
    <button
      onClick={toggle}
      className="h-8 px-2 text-xs rounded-md border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5"
      aria-label="Switch language"
      title="Switch language"
    >
      {lang.toUpperCase()}
    </button>
  );
}


