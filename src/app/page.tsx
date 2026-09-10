import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-16 px-6 py-16 sm:py-24">
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="text-muted-foreground text-sm">
            {site.role} · {site.location}
          </p>
        </div>
        <ThemeToggle />
      </header>

      <section>
        <p className="text-base leading-relaxed text-pretty sm:text-lg">
          {site.bio}
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
          Work
        </h2>
        <ul className="divide-border divide-y border-y">
          {site.work.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="hover:bg-muted/50 focus-visible:ring-ring group flex items-baseline gap-4 py-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1 font-medium">
                    {item.title}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-60" />
                  </span>
                  <span className="text-muted-foreground mt-1 block text-sm">
                    {item.description}
                  </span>
                </span>
                <span className="text-muted-foreground font-mono text-xs">
                  {item.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
          Elsewhere
        </h2>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            className="underline-offset-4 hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          {site.links.map((link) => (
            <a
              key={link.label}
              className="underline-offset-4 hover:underline"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <Separator className="mt-auto" />

      <footer className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </main>
  );
}
