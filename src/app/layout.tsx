import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/site";

// Serif for reading, grotesque for headings, mono for metadata.
const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} — ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://enamakel.com"),
  title,
  description: site.intro,
  openGraph: {
    type: "profile",
    title,
    description: site.intro,
    images: ["/steven.jpg"],
  },
  twitter: {
    card: "summary",
    title,
    description: site.intro,
    images: ["/steven.jpg"],
  },
};

// Applies the stored theme before first paint so there is no flash.
const themeScript = `try{const t=localStorage.getItem("theme")??(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");if(t==="dark")document.documentElement.classList.add("dark")}catch{}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background text-foreground font-serif flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
