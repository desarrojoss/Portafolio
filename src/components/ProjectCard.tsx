"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import type { MouseEvent } from "react";
import CardCover from "./CardCover";

type Project = {
  title: string;
  description: string;
  stack: string[];
  status: string | null;
  type: "profesional" | "personal";
  accent?: string;
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
};

function handleSpotlight(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = project.accent ?? "#00fff5";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      onMouseMove={handleSpotlight}
      style={{ "--accent": accent } as React.CSSProperties}
      className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-glow"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(400px circle at var(--x) var(--y), color-mix(in srgb, var(--accent) 12%, transparent), transparent 40%)",
        }}
      />

      {project.image ? (
        <div className="relative h-36 w-full overflow-hidden border-b border-white/10">
          <NextImage
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <CardCover index={index} />
      )}

      <div className="relative flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-mono text-base font-semibold text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          <span
            className={
              project.type === "profesional"
                ? "w-fit border border-white/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-400"
                : "w-fit border border-[var(--accent)]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--accent)]"
            }
          >
            {project.type === "profesional" ? "Proyecto profesional" : "Proyecto personal"}
          </span>
          {project.status && (
            <span className="w-fit border border-[var(--accent)]/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--accent)]">
              {project.status}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-slate-400">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-white/10 px-2 py-0.5 font-mono text-[11px] text-slate-400 transition-colors group-hover:border-[var(--accent)]/20 group-hover:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {(project.demoUrl || project.repoUrl) && (
          <div className="flex gap-4 pt-1 font-mono text-xs">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline underline-offset-4 hover:opacity-80"
              >
                Ver en producción ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 underline underline-offset-4 hover:text-slate-200"
              >
                Código ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
