import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
import Nav from "@/components/Nav";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Squirrel — Frontend Portfolio",
  description: "Особисте портфоліо: Next.js, TypeScript, Tailwind, анімації та проєкти",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Umami / AdRoll placeholders via env flags */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
          <script
            async
            src="https://analytics.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        ) : null}
        {process.env.NEXT_PUBLIC_ADROLL_ADVERTISER_ID && process.env.NEXT_PUBLIC_ADROLL_PIXELS_ID ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
  adroll_adv_id = "${process.env.NEXT_PUBLIC_ADROLL_ADVERTISER_ID}";
  adroll_pix_id = "${process.env.NEXT_PUBLIC_ADROLL_PIXELS_ID}";
  (function(w, d, e, o, a) {
    w.__adroll_loaded = true;
    w.adroll = w.adroll || [];
    w.adroll.f = [ 'setProperties', 'identify', 'track' ];
    var roundtripUrl = "https://s.adroll.com/j/roundtrip.js";
    for (a = 0; a < w.adroll.f.length; a++) { w.adroll[w.adroll.f[a]] = w.adrollFactory(w.adroll.f[a]); }
    var s = d.createElement('script');
    s.async = 1; s.src = roundtripUrl; (e = d.getElementsByTagName('script')[0]).parentNode.insertBefore(s, e);
  })(window, document);
              `,
            }}
          />
        ) : null}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-black/10 site-header">
          <Suspense fallback={null}>
            <Nav />
          </Suspense>
        </header>
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
        <footer className="border-t border-black/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-sm flex items-center justify-between">
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <a href="#home" className="hover:opacity-80">Вгору ↑</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
