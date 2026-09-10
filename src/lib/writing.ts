import { site } from "@/lib/site";

export type Post = {
  title: string;
  href: string;
  date: string;
};

const MEDIUM_FEED = "https://medium.com/feed/enamakel";
const SUBSTACK_ARCHIVE =
  "https://enamakel.substack.com/api/v1/archive?sort=new&limit=50";

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
};

function decode(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&[a-z]+;|&#39;/gi, (entity) => ENTITIES[entity] ?? entity)
    .trim();
}

/** Strips Medium's rss tracking parameters. */
function clean(url: string) {
  return url.split("?")[0];
}

function tag(item: string, name: string) {
  const match = item.match(
    new RegExp(`<${name}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${name}>`),
  );
  return match ? decode(match[1]) : "";
}

async function fetchMedium(): Promise<Post[]> {
  const response = await fetch(MEDIUM_FEED);
  if (!response.ok) throw new Error(`Medium feed: ${response.status}`);
  const xml = await response.text();

  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].flatMap(([, item]) => {
    const title = tag(item, "title");
    const link = tag(item, "link");
    const published = tag(item, "pubDate");
    if (!title || !link || !published) return [];
    return [{ title, href: clean(link), date: new Date(published).toISOString() }];
  });
}

async function fetchSubstack(): Promise<Post[]> {
  const response = await fetch(SUBSTACK_ARCHIVE);
  if (!response.ok) throw new Error(`Substack archive: ${response.status}`);
  const posts = (await response.json()) as {
    title?: string;
    canonical_url?: string;
    post_date?: string;
    audience?: string;
  }[];

  return posts.flatMap((post) =>
    post.title && post.canonical_url && post.post_date
      ? [
          {
            title: decode(post.title),
            href: post.canonical_url,
            date: new Date(post.post_date).toISOString(),
          },
        ]
      : [],
  );
}

/**
 * Reads both feeds at build time and merges them, newest first. A feed that
 * fails is skipped rather than breaking the build; if both fail, the list
 * checked into site.ts is used so the section never renders empty.
 */
export async function getWriting(): Promise<Post[]> {
  const results = await Promise.allSettled([fetchMedium(), fetchSubstack()]);

  const posts = results.flatMap((result) => {
    if (result.status === "fulfilled") return result.value;
    console.warn(`[writing] ${result.reason}`);
    return [];
  });

  if (posts.length === 0) return [...site.writing];

  const seen = new Set<string>();
  return posts
    .filter((post) => !seen.has(post.href) && seen.add(post.href))
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** "Sep 2019" */
export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
