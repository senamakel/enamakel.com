export const site = {
  name: "Steven Enamakel",
  role: "Second-time immigrant founder",
  tagline: "Building towards open-source AGI",
  location: "Dubai, United Arab Emirates",
  email: "steven.enamakel@gmail.com",
  // `**text**` renders bold. Countries are bolded throughout.
  bio: [
    "I was born in Mumbai, **India**, and spent most of my childhood in **Bahrain** and **Kuwait**.",
    "I studied mathematics and computer science at the University of Toronto in **Canada**, then dropped out a few years in. I started my career working in Mumbai, **India** and London, **the UK**. I now live in Dubai, **the UAE**.",
    "I trained as a computer scientist, economist and mathematician, and I like building systems that hold up once a lot of people are using them. Most of the last decade went into decentralized finance. I founded ZeroLend, a money market that grew past $300M in liquidity and 100k daily users, and I built MahaDAO, a crypto-backed stablecoin, from nothing.",
    "In 2025 I left crypto for AI infrastructure. Now I build memory for AI systems: how a machine decides what to keep and what to forget.",
    "I've seen and gone through racism, been both rich and poor, lived under three different governments and experienced four different cultures. Because of that, I've been fortunate to see many of the unfortunate parts of the world.",
    "I simply want to live in a world where the people I care for are loved and live happy lives. I like to do things that can help many people, and to find the answers to the toughest questions that surround humanity today.",
    "I have failed a lot. Each time I came back and built something bigger than the last one.",
  ],
  quote: "I was born a hustler and will forever be a hustler.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Building", href: "#building" },
  ],
  links: [
    { label: "GitHub", icon: "github", href: "https://github.com/senamakel" },
    { label: "X", icon: "x", href: "https://x.com/senamakel" },
    {
      label: "LinkedIn",
      icon: "linkedin",
      href: "https://linkedin.com/in/senamakel",
    },
    { label: "Telegram", icon: "telegram", href: "https://t.me/enamakel" },
    {
      label: "Instagram",
      icon: "instagram",
      href: "https://instagram.com/stevenenamakel",
    },
  ],
  // What I'm working on right now.
  building: [
    {
      title: "OpenHuman",
      description:
        "Open-source personal AI for Mac, Windows and Linux, with local-first memory and agent orchestration.",
      href: "https://github.com/tinyhumansai/openhuman",
      stars: "39.6k",
    },
    {
      title: "OpenCompany",
      description:
        "Open-source runtime where AI agents run every function of a one-person company.",
      href: "https://github.com/tinyhumansai/opencompany",
      stars: "114",
    },
    {
      title: "Medulla",
      description: "Run up to 1,000 agents with automations and workflows.",
      href: "https://github.com/tinyhumansai/medulla",
      stars: "11",
    },
    {
      title: "TinyHivemind",
      description: "Hive mind mechanics for agents. A step closer towards AGI.",
      href: "https://github.com/tinyhumansai/tinyhivemind",
      stars: "4",
    },
  ],
} as const;
