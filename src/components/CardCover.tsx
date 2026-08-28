"use client";

import { motion } from "framer-motion";

const NODES: [number, number][] = [
  [30, 118],
  [95, 60],
  [95, 60 - 38],
  [170, 96],
  [240, 46],
  [240, 46 - 34],
  [305, 84],
  [305, 84 + 40],
  [372, 38],
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [4, 5],
  [4, 6],
  [6, 7],
  [6, 8],
];

const PULSE_NODES = [4, 6];

export default function CardCover({ index }: { index: number }) {
  return (
    <div className="relative h-36 w-full overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#0a0f1a_0%,#0d1524_100%)]">
      <svg
        viewBox="0 0 400 144"
        className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
      >
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke="var(--accent)"
            strokeOpacity={0.25}
            strokeWidth={1.5}
          />
        ))}
        {NODES.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 0 || i === 8 ? 3.5 : 2.5} fill="var(--accent)" fillOpacity={0.5} />
        ))}
        {PULSE_NODES.map((n) => (
          <motion.circle
            key={n}
            cx={NODES[n][0]}
            cy={NODES[n][1]}
            r={2.5}
            fill="var(--accent)"
            initial={{ opacity: 0.9, r: 2.5 }}
            animate={{ opacity: 0, r: 14 }}
            transition={{ duration: 2, repeat: Infinity, delay: n * 0.4, ease: "easeOut" }}
          />
        ))}
      </svg>

      <span className="absolute right-4 top-3 font-mono text-xs tracking-widest text-white/20">
        {"<DJ/>"}
      </span>
      <span className="absolute -bottom-5 -right-1 font-mono text-7xl font-bold text-white/5">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="absolute right-6 top-6 h-14 w-14 rounded-full bg-[var(--accent)]/20 blur-2xl transition-opacity duration-300 group-hover:bg-[var(--accent)]/40" />
    </div>
  );
}
