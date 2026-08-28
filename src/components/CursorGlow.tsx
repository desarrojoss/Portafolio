"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 220}px, ${e.clientY - 220}px, 0)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[440px] w-[440px] rounded-full bg-cyan-neon/10 blur-[110px] transition-transform duration-300 ease-out sm:block"
    />
  );
}
