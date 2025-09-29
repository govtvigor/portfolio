export type Lang = "ua" | "en";

export const dict = {
  ua: {
    nav: { projects: "Проєкти", about: "Про мене", contact: "Контакти" },
    skillsTitle: "Що я вмію",
    skills: ["Next.js", "TypeScript", "React", "Tailwind", "Sass", "HTML5", "Google Analytics, AdRoll, Umami", "MongoDB", "Firebase", "Vercel", "Linux", "Git", "Ethers.js (Web3)", "Tonconnect/ui-react", "Telegram Bot API", "Cookies, CORS, pagination"],
    hero: {
      title: "Привіт, я Ігор",
      desc:
        "Працюю з Next.js, TypeScript, React, Tailwind. Маю досвід з аналітикою (AdRoll, Umami) та графічними бібліотеками. Люблю чистий код і приємні інтерфейси.",
      ctaProjects: "Дивитись проєкти",
      ctaContact: "Зв'язатися",
    },
    projectsTitle: "Проєкти",
    projects: {
      tradekeeper: {
        title: "TradeKeeper.io",
        desc: "Платформа для аналітики крипто-трейдів: метрики, статистика, візуалізації.",
        tags: ["Next.js", "Tailwind", "Charts"],
      },
      shp: {
        title: "SHP.Network",
        desc: "Оренда VPN-серверів різних типів з зручним інтерфейсом.",
        tags: ["Next.js", "TypeScript", "Payments"],
      },
      bot: {
        title: "@squirrelapp_bot",
        desc:
          "Міні-гра про білочку, що стрибає з гілки на гілку. Робив у період мети tap-ігор у Telegram.",
        tags: ["Telegram", "Mini App"],
      },
    },
    aboutTitle: "Про мене",
    aboutBody:
      "Я спеціалізуюсь на створенні швидких, адаптивних інтерфейсів. Мені подобається проектувати зрозумілу інформаційну архітектуру та додавати делікатні анімації.",
    contactTitle: "Контакти",
    contactBody: "Напишіть мені у Telegram:",
  },
  en: {
    nav: { projects: "Projects", about: "About", contact: "Contact" },
    skillsTitle: "What I can do",
    skills: ["Next.js", "TypeScript", "React", "Tailwind", "Sass", "HTML5", "Google Analytics, AdRoll, Umami", "MongoDB", "Firebase", "Vercel", "Linux", "Git", "Ethers.js (Web3)", "Tonconnect/ui-react", "Telegram Bot API", "Cookies, CORS, pagination" ],
    hero: {
      title: "Hi, I'm Igor",
      desc:
        "I work with Next.js, TypeScript, React, Tailwind. Experience with analytics (AdRoll, Umami) and charting libs. I love clean code and delightful UIs.",
      ctaProjects: "View projects",
      ctaContact: "Contact",
    },
    projectsTitle: "Projects",
    projects: {
      tradekeeper: {
        title: "TradeKeeper.io",
        desc: "Crypto-trade analytics platform: metrics, stats, and visualizations.",
        tags: ["Next.js", "Tailwind", "Charts"],
      },
      shp: {
        title: "SHP.Network",
        desc: "Platform to rent different types of VPN servers with a handy UI.",
        tags: ["Next.js", "TypeScript", "Payments"],
      },
      bot: {
        title: "@squirrelapp_bot",
        myLink: "@Nabuuuuuuu",
        desc:
          "A mini game about a squirrel jumping from branch to branch, made during the Telegram tap-games meta.",
        tags: ["Telegram", "Mini App"],
      },
    },
    aboutTitle: "About",
    aboutBody:
      "I focus on fast, responsive interfaces, clear IA, and subtle animations that improve UX.",
    contactTitle: "Contact",
    contactBody: "Message me on Telegram:",
  },
} as const;

export function getLangFromSearch(search: string | null | undefined): Lang {
  const value = new URLSearchParams(search || "").get("lang");
  return value === "en" || value === "ua" ? value : "ua";
}

