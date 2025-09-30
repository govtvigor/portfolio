export const dict = {
  nav: { projects: "Projects", about: "About", contact: "Contact" },
  skillsTitle: "What I can do",
  skills: ["Next.js", "TypeScript", "React", "Tailwind", "Sass", "HTML5", "Google Analytics, AdRoll, Umami", "MongoDB", "Firebase", "Vercel", "Linux", "Git", "Ethers.js (Web3)", "Tonconnect/ui-react", "Telegram Bot API", "Cookies, CORS, pagination", "CoinGecko API"],
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
} as const;

export function getLangFromSearch(): "en" { return "en"; }

