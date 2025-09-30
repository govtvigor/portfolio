"use client";

import { useRef } from "react";

export default function CosmicJourney() {
	const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <section id="home" className="cj-section h-screen snap-start flex flex-col items-center justify-center text-center px-6 z-10 relative">
        <img src="/cyan_amongus.png" alt="among us" className="w-[140px] h-auto mb-6" />
        <h1 className="text-4xl font-semibold mb-3 z-2 relative">Hi, I'm Igor</h1>
        <div className="text-xl opacity-80 w-[90%] z-10 relative text-left font-bold">I’m a frontend developer specializing in building fast, clean, and highly interactive interfaces. I work primarily with Next.js, React, and TypeScript, focusing on delivering applications that are performant, accessible, and intuitive.

I have a keen eye for detail and a strong passion for user-first design, creating experiences that are not only functional but also delightful—with smooth animations and thoughtful micro-interactions that bring digital products to life. Accessibility and clarity in UX are central to my work, ensuring interfaces are inclusive and easy to navigate for everyone.

Beyond front-end development, I’m deeply engaged with the crypto and Web3 community, exploring decentralized technologies and innovative applications that redefine digital experiences. This interest informs my work, inspiring me to build interfaces that are not just visually polished, but also forward-thinking and adaptable to the evolving landscape of web technologies.

I thrive on turning complex challenges into elegant, reliable solutions, combining technical excellence with creativity to deliver interfaces that are both beautiful and performant.</div>
			</section>

      <section id="skills" className="z-2 relative cj-section h-screen snap-start flex flex-col items-center justify-center text-center px-6">
        <img src="/planet.png" alt="skills planet" className="planet w-[200px] h-[200px] rounded-full object-cover shadow-[0_0_70px_rgba(16,185,129,0.55)] mb-6" style={{ filter: "hue-rotate(20deg) saturate(1.2)" }} />
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm max-w-3xl">
          {["Next.js","Tailwind","React","TypeScript","web3.js","ethers.js","Telegram API","CoinGecko API","Charting library","Umami / AdRoll / Google Analytics","MongoDB","Firebase","Linux","Git","Sass","Bootstrap"].map((skill) => (
            <li key={skill} className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">{skill}</li>
          ))}
        </ul>
			</section>

      <section id="projects" className="z-2 relative cj-section h-screen snap-start flex flex-col items-center justify-center text-center px-6">
        <img src="/planet_green.png" alt="projects planet" className="planet w-[220px] h-[220px] rounded-full object-cover shadow-[0_0_80px_rgba(244,114,182,0.5)] mb-6" style={{ filter: "hue-rotate(300deg) saturate(1.3)" }} />
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="w-full max-w-2xl text-left space-y-4">
          <a href="https://shp.network" target="_blank" rel="noreferrer" className="block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center justify-between"><h3 className="font-semibold">SHP.Network (current)</h3><span className="text-xs opacity-60">↗</span></div>
            <p className="opacity-80 text-sm">Platform for renting VPN servers.</p>
          </a>
          <a href="https://tradekeeper.io" target="_blank" rel="noreferrer" className="block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center justify-between"><h3 className="font-semibold">TradeKeeper.io</h3><span className="text-xs opacity-60">↗</span></div>
            <p className="opacity-80 text-sm">Platform for getting stats of your latest crypto trades.</p>
          </a>
          <a href="https://t.me/squirrelapp_bot" target="_blank" rel="noreferrer" className="block rounded-lg border border-black/10 dark:border-white/10 p-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center justify-between"><h3 className="font-semibold">@squirrelapp_bot (Telegram)</h3><span className="text-xs opacity-60">↗</span></div>
            <p className="opacity-80 text-sm">Mini tap game about a squirrel jumping from branch to branch (made during the Telegram tap-games meta).</p>
          </a>
        </div>
			</section>

      <section id="contact" className="z-2 relative cj-section h-screen snap-start flex flex-col items-center justify-center text-center px-6">
				
                <img src="/planet_yellow.png" alt="projects planet" className="planet w-[220px] h-[220px] rounded-full object-cover shadow-[0_0_80px_rgba(244,114,182,0.5)] mb-6" style={{ filter: "hue-rotate(300deg) saturate(1.3)" }} />
        <h2 className="text-3xl font-semibold mb-2">Contact</h2>
        <p className="opacity-80">Telegram: <a className="underline hover:opacity-80" href="https://t.me/Nabuuuuuuu" target="_blank" rel="noreferrer">@Nabuuuuuuu</a></p>
			</section>
		</div>
	);
}
