export const site = {
  name: "Steven Enamakel",
  role: "Software engineer",
  location: "Bangalore, India",
  // Short bio — one or two sentences, plain language.
  bio: "I build small, fast tools and the infrastructure behind them. Currently working on agent tooling and developer workflows.",
  email: "stevent95@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/senamakel" },
    { label: "X", href: "https://x.com/enamakel" },
    { label: "LinkedIn", href: "https://linkedin.com/in/enamakel" },
  ],
  work: [
    {
      title: "Medulla",
      description: "Workflow orchestration for long-running coding agents.",
      href: "#",
      year: "2026",
    },
    {
      title: "OpenHuman",
      description: "An agent harness for running models against real repositories.",
      href: "#",
      year: "2025",
    },
    {
      title: "pr-babysitter",
      description: "Drives pull requests to green without human babysitting.",
      href: "#",
      year: "2025",
    },
  ],
} as const;
