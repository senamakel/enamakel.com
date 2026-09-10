const HEX = "0123456789abcdef";

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
    const binary = row % 3 === 1;
    let line = "";
    while (line.length < columns) {
      const group = binary
        ? Array.from({ length: 8 }, () => (random() < 0.5 ? "0" : "1")).join("")
        : Array.from({ length: 2 }, () => HEX[(random() * 16) | 0]).join("");
      line += `${group} `;
    }
    out.push(line.slice(0, columns));
  }
  return out;
}

const ROWS = build(80, 44);

/** Ambient fill for the empty half of the rail. Decorative only. */
export function HexTile({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`text-muted-foreground/35 pointer-events-none overflow-hidden font-mono text-[10px] leading-[1.35] whitespace-pre select-none [mask-image:linear-gradient(to_bottom,black,transparent)] ${className}`}
    >
      {ROWS.map((row, i) => (
        <div key={i}>{row}</div>
      ))}
    </div>
  );
}
