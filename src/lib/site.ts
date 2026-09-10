export const site = {
  name: "Steven Enamakel",
  role: "Second-time immigrant founder",
  tagline: "Building towards open-source AGI",
  location: "Dubai, United Arab Emirates",
  // `**text**` renders bold. Countries are bolded throughout.
  bio: [
    "I'm a computer scientist, economist, and mathematician from the University of Toronto who enjoys building systems that solve real problems and try to help forward humanity.",
    "I was born in Mumbai, **India**, and spent most of my childhood in **Bahrain** and **Kuwait**.",
    "I studied mathematics and computer science at the University of Toronto in **Canada**, then dropped out a few years in. I started my career working in Mumbai, **India** and London, **the UK**. I now live in Dubai, **the UAE**.",
    "Over the years, I've founded and led several projects in decentralized finance, including ZeroLend, a decentralized money market that grew to $300M+ in liquidity, and MahaDAO, a stablecoin ecosystem built from the ground up.",
    "In 2025, I stepped away from crypto to focus on AI infrastructure. I'm currently building towards open-source AGI, harnesses and memory.",
    "My journey has largely been self-directed, driven by curiosity about technology, economics, and human behavior, and how these systems interact to shape the world. I enjoy building things from first principles and learning along the way.",
    "I've seen and gone through racism, been both rich and poor, lived under three different governments and experienced four different cultures. Because of that, I've been fortunate to see many of the unfortunate parts of the world.",
    "I simply want to live in a world where the people I care for are loved and live happy lives. I like to do things that can help many people, and to find the answers to the toughest questions that surround humanity today.",
    "I've gone through a lot of failures in my journey. But each time I've come back stronger and built something bigger than before.",
  ],
  intro:
    "I'm a computer scientist, economist, and mathematician from the University of Toronto who enjoys building systems that solve real problems and try to help forward humanity.",
  quote: "I was born a hustler and will forever be a hustler.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Building", href: "#building" },
    { label: "Writing", href: "#writing" },
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
  // Fallback only: the live list is fetched from the Medium and Substack
  // feeds at build time. Dates are ISO so they sort with the fetched posts.
  writing: [
    {
      title: "The Anatomy of Engineering Wealth",
      href: "https://enamakel.substack.com/p/the-anatomy-of-engineering-wealth",
      date: "2026-09-10T17:41:09.071Z",
    },
    {
      title:
        "Redesigning Money, using CryptoCurrencies to provide a Universal Basic Income",
      href: "https://medium.com/enamakel/redesigning-money-using-cryptocurrencies-to-provide-a-universal-basic-income-c0238840d9ca",
      date: "2019-09-15T11:08:43.000Z",
    },
    {
      title: "Making of a decentralised physical reserve \u2014 Note 1",
      href: "https://medium.com/enamakel/making-of-a-decentralised-physical-reserve-note-1-e8e76817e6b4",
      date: "2018-07-18T09:14:28.000Z",
    },
    {
      title: "Problems with interoperable blockchains & hybrid exchanges",
      href: "https://medium.com/enamakel/problems-with-interoperable-blockchains-hybrid-exchanges-4897f2dc5b04",
      date: "2018-07-18T08:42:11.000Z",
    },
    {
      title: "Decentralised Mobile Payments for the poor",
      href: "https://medium.com/enamakel/decentralised-mobile-payment-for-the-poor-86ad101f119a",
      date: "2018-06-28T17:15:46.000Z",
    },
    {
      title:
        "How Kuwait & Me, a small startup that I built to spread the joy of giving in Kuwait, died",
      href: "https://medium.com/enamakel/how-kuwait-me-a-small-startup-that-i-built-to-spread-the-joy-of-giving-in-kuwait-died-7a3832b4057b",
      date: "2017-03-24T13:36:36.000Z",
    },
  ],
} as const;
