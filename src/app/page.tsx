"use client";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { dict, getLangFromSearch } from "@/lib/i18n";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const search = useSearchParams();
  const lang = getLangFromSearch(search?.toString());
  const t = dict[lang];
  return (
    <div id="home" className="space-y-24">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-base leading-7 opacity-80">
            {t.hero.desc}
          </motion.p>
          <div className="flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-foreground text-background text-sm hover:opacity-90">{t.hero.ctaProjects}</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-black/10 dark:border-white/20 text-sm hover:bg-black/5 dark:hover:bg-white/5">{t.hero.ctaContact}</a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="rounded-xl border border-black/10 p-6 bg-white/70 surface">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            <li className="px-3 py-2 rounded-md bg-black/5 chip">Next.js</li>
            <li className="px-3 py-2 rounded-md bg-black/5 chip">TypeScript</li>
            <li className="px-3 py-2 rounded-md bg-black/5 chip">React</li>
            <li className="px-3 py-2 rounded-md bg-black/5 chip">Tailwind</li>
            <li className="px-3 py-2 rounded-md bg-black/5 chip">Sass</li>
            <li className="px-3 py-2 rounded-md bg-black/5 chip">HTML5</li>
          </ul>
        </motion.div>
      </section>

      <section id="projects" className="space-y-10">
        <h2 className="text-2xl font-semibold">{t.projectsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard title={t.projects.tradekeeper.title} description={t.projects.tradekeeper.desc} href="https://tradekeeper.io" tags={t.projects.tradekeeper.tags} />
          <ProjectCard title={t.projects.shp.title} description={t.projects.shp.desc} href="https://shp.network" tags={t.projects.shp.tags} />
          <ProjectCard title={t.projects.bot.title} description={t.projects.bot.desc} href="https://t.me/squirrelapp_bot" tags={t.projects.bot.tags} />
        </div>
      </section>

      <section id="about" className="space-y-6">
        <h2 className="text-2xl font-semibold">{t.aboutTitle}</h2>
        <p className="opacity-80 max-w-2xl">{t.aboutBody}</p>
      </section>

      <section id="skills" className="space-y-6">
        <h2 className="text-2xl font-semibold">{t.skillsTitle}</h2>
        <ul className="flex flex-wrap gap-2">
          {t.skills.map((s) => (
            <li key={s} className="text-xs px-2 py-1 rounded-md border border-black/10">{s}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold">{t.contactTitle}</h2>
        <p className="opacity-80">{t.contactBody} <a className="underline" href="https://web.telegram.org/a/#323923289" target="_blank" rel="noreferrer">@Nabuuuuuuu</a></p>
      </section>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tags: readonly string[];
};

function ProjectCard({ title, description, href, tags }: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border border-black/10 dark:border-white/10 p-5 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs opacity-60">↗</span>
      </div>
      <p className="mt-2 text-sm opacity-80">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/5">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
