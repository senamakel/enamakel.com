export const site = {
  name: "Steven Enamakel",
  role: "Second-time immigrant founder",
  tagline: "Building towards open-source AGI",
  location: "Dubai, United Arab Emirates",
  // `**text**` renders bold. Countries are bolded throughout.
  bio: [
    "I was born in Mumbai, **India**, and spent most of my childhood in **Bahrain** and **Kuwait**.",
    "I studied mathematics and computer science at the University of Toronto in **Canada**, then dropped out a few years in. I started my career working in Mumbai, **India** and London, **the UK**. I now live in Dubai, **the UAE**.",
    "I'm a computer scientist, economist, and mathematician from the University of Toronto who enjoys building systems that solve real problems and scale globally.",
    "Over the years, I've founded and led several projects in decentralized finance, including ZeroLend, a decentralized money market that grew to $300M+ in liquidity, and MahaDAO, a stablecoin ecosystem built from the ground up.",
    "In 2025, I stepped away from crypto to focus on AI infrastructure. I'm currently building a memory layer for AI systems, exploring how machines can better retain, prioritize, and organize knowledge over time.",
    "My journey has largely been self-directed, driven by curiosity about technology, economics, and human behavior, and how these systems interact to shape the world. I enjoy building things from first principles and learning along the way.",
    "I've seen and gone through racism, been both rich and poor, lived under three different governments and experienced four different cultures. Because of that, I've been fortunate to see many of the unfortunate parts of the world.",
    "I simply want to live in a world where the people I care for are loved and live happy lives. I like to do things that can help many people, and to find the answers to the toughest questions that surround humanity today.",
    "I've gone through a lot of failures in my journey. But each time I've come back stronger and built something bigger than before.",
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
      label: "Substack",
      icon: "substack",
      href: "https://enamakel.substack.com",
    },
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
