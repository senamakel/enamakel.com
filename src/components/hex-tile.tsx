"use client";

import { useEffect, useState } from "react";

const HEX = "0123456789abcdef";

/** Rows at this index are binary rather than hex. */
const isBinaryRow = (row: number) => row % 3 === 1;

/** Deterministic PRNG, so the server and the client generate the same tile. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function build(lines: number, columns: number) {
  const random = mulberry32(0x5e7a);
  const out: string[] = [];
  for (let row = 0; row < lines; row++) {
    // Alternate bytes of hex with runs of binary so the block has texture.
    let line = "";
    while (line.length < columns) {
      const group = isBinaryRow(row)
        ? Array.from({ length: 8 }, () => (random() < 0.5 ? "0" : "1")).join("")
        : Array.from({ length: 2 }, () => HEX[(random() * 16) | 0]).join("");
      line += `${group} `;
    }
    out.push(line.slice(0, columns));
  }
  return out;
}

const ROWS = build(80, 44);
const FLIPS_PER_TICK = 6;
const TICK_MS = 140;

/**
 * Ambient fill for the empty half of the rail. Decorative only. The block
 * holds still and a few digits change in place, like a memory dump ticking
 * over. It starts from the deterministic tile so the prerendered markup
 * matches, then mutates only after mount.
 */
export function HexTile({ className = "" }: { className?: string }) {
  const [rows, setRows] = useState(ROWS);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setRows((previous) => {
        const next = previous.slice();
        for (let flip = 0; flip < FLIPS_PER_TICK; flip++) {
          const row = (Math.random() * next.length) | 0;
          const line = next[row];
          const column = (Math.random() * line.length) | 0;
          if (line[column] === " ") continue;
          const digit = isBinaryRow(row)
            ? Math.random() < 0.5
              ? "0"
              : "1"
            : HEX[(Math.random() * 16) | 0];
          next[row] = line.slice(0, column) + digit + line.slice(column + 1);
        }
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`text-muted-foreground/35 pointer-events-none overflow-hidden font-mono text-[10px] leading-[1.35] whitespace-pre select-none [mask-image:linear-gradient(to_bottom,black,transparent)] ${className}`}
    >
      {rows.map((row, i) => (
        <div key={i}>{row}</div>
      ))}
    </div>
  );
}
