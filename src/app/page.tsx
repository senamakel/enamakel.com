import Image from "next/image";

import { HexTile } from "@/components/hex-tile";
import { RichText } from "@/components/rich-text";
import { SocialIcon } from "@/components/social-icon";
import { ThemeButton } from "@/components/theme-button";
import { site } from "@/lib/site";

// Mono is kept for the star counts, where the figures should line up.
const MONO = "font-mono text-xs tracking-tight";
const LABEL = `${MONO} text-muted-foreground`;
const META = "font-sans text-[13px] text-muted-foreground";

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="font-sans scroll-mt-16 pt-2 text-[22px] leading-tight font-normal"
    >
      {children}
    </h2>
  );
}

type Project = {
  title: string;
  description: string;
  href: string;
  stars: string;
};

function ProjectList({ items }: { items: readonly Project[] }) {
  return (
    <ul className="mt-4">
      {items.map((item) => (
        <li key={item.title} className="border-border border-b last:border-b-0">
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-link group flex items-baseline gap-6 py-3 transition-colors"
          >
            <span className="min-w-0 flex-1">
              <span className="font-sans group-hover:underline">
                {item.title}
              </span>
              <span className="text-muted-foreground mt-0.5 block">
                {item.description}
              </span>
            </span>
            <span className={`${LABEL} shrink-0 tabular-nums`}>
              {item.stars} ★
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
      <ThemeButton />
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        {/* Left rail: identity and navigation, pinned on wide screens. */}
        <aside className="border-border flex flex-col gap-6 py-10 lg:col-span-3 lg:sticky lg:top-0 lg:h-screen lg:max-w-[16rem] lg:self-start lg:py-16">
          <nav className="flex flex-col gap-1 font-sans">
            {site.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-link w-fit underline-offset-4 transition-colors hover:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-muted-foreground max-w-[15rem] text-[13px] italic">
            &quot;{site.quote}&quot;
          </p>
          <ul className="flex items-center gap-4">
            {site.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  title={link.label}
                  className="text-muted-foreground hover:text-foreground block transition-colors"
                >
                  <SocialIcon name={link.icon} className="size-[18px]" />
                  <span className="sr-only">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <HexTile className="h-24 lg:h-auto lg:flex-1" />
        </aside>

        <main className="border-border w-full max-w-[38rem] pb-24 lg:col-span-9 lg:col-start-4 lg:border-l lg:pl-8 xl:pl-12">
          <header className="border-border flex flex-col gap-3 border-b pt-2 pb-6 lg:pt-16">
            <Image
              src="/steven.jpg"
              alt={site.name}
              width={88}
              height={88}
              priority
              className="mb-2 size-22 rounded-xs object-cover"
            />
            <h1 className="text-[28px] leading-[1.15] font-light tracking-[-0.02em] sm:text-[32px]">
              {site.name}
            </h1>
            <p className={`${META} flex flex-wrap justify-between gap-x-6`}>
              <span>
                {site.role} · {site.tagline}
              </span>
              <span>{site.location}</span>
            </p>
          </header>

          <section className="mt-10 space-y-3">
            <SectionHeading id="about">About</SectionHeading>
            {site.bio.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </section>

          <section className="mt-12">
            <SectionHeading id="building">Building</SectionHeading>
            <ProjectList items={site.building} />
          </section>

          <footer className={`${META} border-border mt-10 border-t pt-6`}>
            © {new Date().getFullYear()} {site.name}
          </footer>
        </main>
      </div>
    </div>
  );
}
