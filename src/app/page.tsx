"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import ProjectCard from "@/components/ProjectCard";
import { IconGithub, IconLinkedin, IconInstagram, IconTiktok } from "@/components/icons";

const projects = [
  {
    title: "Portal corporativo de abastecimiento (procurement)",
    description:
      "Contribución full-stack a un portal corporativo con módulos de gestión de riesgo de terceros, licitaciones asistidas por IA generativa, aprobaciones y analítica de uso. Aporté funcionalidades de frontend en React (gestión de usuarios, panel de estadísticas, sistema de gestión de incidentes con carga de evidencias, módulo de capacitación multi-agente) y contribución en backend con integración de servicios de IA de Azure (clasificación de riesgo, búsqueda semántica).",
    stack: ["React", "Node.js", "TypeScript", "Express", "Azure OpenAI", "Azure AI Search", "Docker", "CI/CD"],
    status: null,
    type: "profesional" as const,
  },
  {
    title: "Sistema de automatización documental para cumplimiento normativo",
    description:
      "Diseño y desarrollo end-to-end (solo) de un sistema que consolida información dispersa en múltiples repositorios documentales de una empresa y genera automáticamente reportes con validez legal para procesos regulatorios del sector de servicios públicos. Desarrollado bajo metodología TDD con ~140 pruebas automatizadas, incluyendo mitigación de vulnerabilidades tipo SSRF.",
    stack: ["Python", "FastAPI", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "En expansión activa",
    type: "profesional" as const,
  },
  {
    title: "Plataforma de estimación de costos de inversión (CAPEX) con IA",
    description:
      "Desarrollo en solitario de una plataforma full-stack para estimar costos de inversión en proyectos de infraestructura energética, usando un motor de IA generativa (RAG) sobre una base de datos vectorial. Lideré la migración completa de su backend de producción (Python → Node.js/TypeScript/Prisma) sin pérdida de datos ni downtime, con estrategia de convivencia gradual.",
    stack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "pgvector", "Google Gemini", "React", "Vite", "Tailwind"],
    status: "En desarrollo activo",
    type: "profesional" as const,
  },
  {
    title: "Plataforma de capacitación corporativa con IA",
    description:
      "Diseño y construcción end-to-end (arquitectura, backend, frontend, IA e infraestructura cloud) de una plataforma de aprendizaje corporativo con inteligencia artificial generativa, incluyendo un mentor conversacional por voz en tiempo real y búsqueda semántica híbrida (RAG) para respuestas verificadas.",
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "pgvector", "React", "Google Gemini", "GCP", "WebSockets"],
    status: "Desplegada y en producción",
    type: "profesional" as const,
  },
  {
    title: "Agente de IA para análisis de escenarios técnicos",
    description:
      "Aplicación full-stack con un agente de IA que usa function calling y visión multimodal para interpretar gráficos y tablas técnicas de modelos de planeación, generando automáticamente informes en Word.",
    stack: ["React", "TypeScript", "Vite", "Express", "Azure OpenAI (GPT-4o vision)", "Word (XML)"],
    status: "Desplegada y en producción",
    type: "profesional" as const,
  },
];

const stackGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
  { label: "Backend", items: ["Node.js", "Express", "Python", "FastAPI"] },
  { label: "Bases de datos", items: ["PostgreSQL (pgvector)", "Azure SQL", "MySQL"] },
  { label: "IA / LLM", items: ["Azure OpenAI", "Google Gemini", "RAG", "Embeddings vectoriales"] },
  { label: "Cloud / DevOps", items: ["Azure", "GCP", "Docker", "GitHub Actions", "Bicep"] },
];

const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "Azure OpenAI",
  "Google Gemini",
  "RAG",
  "PostgreSQL",
  "Docker",
  "GCP",
];

const links = [
  { label: "GitHub", href: "https://github.com/desarrojoss", Icon: IconGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/josttin-perez", Icon: IconLinkedin },
  { label: "Instagram", href: "https://instagram.com/desarrojoss", Icon: IconInstagram },
  { label: "TikTok", href: "https://tiktok.com/@desarrojoss", Icon: IconTiktok },
];

const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ScrollProgress />
      <CursorGlow />

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 animate-blob rounded-full bg-cyan-neon/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 animate-blob rounded-full bg-blue-500/10 blur-3xl [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-blob rounded-full bg-cyan-neon/5 blur-3xl [animation-delay:8s]" />
      </div>

      {/* Nav */}
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="DesarroJoss" width={32} height={32} className="rounded-full" />
            <span className="font-mono text-sm font-semibold text-white">DesarroJoss</span>
          </a>
          <div className="flex gap-5 font-mono text-xs uppercase tracking-wide text-slate-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative transition hover:text-cyan-neon">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="flex min-h-screen flex-col items-start justify-center gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="animate-float"
          >
            <Image
              src="/logo.jpg"
              alt="DesarroJoss"
              width={80}
              height={80}
              className="rounded-full shadow-glow"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-mono text-4xl font-bold text-white sm:text-6xl"
          >
            Desarro<span className="text-cyan-neon">Joss</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl text-lg text-slate-400 sm:text-xl"
          >
            Construyo apps, webs y marketplaces —{" "}
            <span className="text-cyan-neon">con y sin IA</span>.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#proyectos"
            className="mt-4 border border-cyan-neon px-6 py-3 font-mono text-sm text-cyan-neon shadow-glow transition-colors hover:bg-cyan-neon hover:text-ink"
          >
            Ver proyectos ↓
          </motion.a>
        </section>

        {/* Marquee */}
        <div className="relative -mx-6 overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
          <div className="flex w-max animate-marquee gap-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="font-mono text-sm text-slate-500">
                {item} <span className="text-cyan-neon">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* Sobre mí */}
        <section id="sobre-mi" className="scroll-mt-20 py-24">
          <Reveal>
            <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-cyan-neon">Sobre mí</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl leading-relaxed text-slate-300">
              Ingeniero de Sistemas Jr., actualmente en la célula de IA de Ayesa, trabajando en
              automatización, soluciones digitales y ciberseguridad de aplicaciones. Experiencia previa en
              desarrollo full-stack (sistema de gestión hospitalaria, sitio corporativo, sistema de rastreo
              en tiempo real con IA). Construyendo DesarroJoss como proyecto personal para eventualmente
              operar como freelance o fundar su propia casa de desarrollo de software.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {stackGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05}>
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wide text-slate-500">
                  {group.label}
                </h3>
                <ul className="space-y-1 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="scroll-mt-20 border-t border-white/10 py-24">
          <Reveal>
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-cyan-neon">Proyectos</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="scroll-mt-20 border-t border-white/10 py-24">
          <Reveal>
            <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-cyan-neon">Contacto</h2>
          </Reveal>
          <div className="flex flex-wrap gap-4">
            {links.map(({ label, href, Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border border-white/10 px-5 py-3 font-mono text-sm text-slate-300 transition-colors hover:border-cyan-neon hover:text-cyan-neon hover:shadow-glow"
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.a>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} DesarroJoss
        </footer>
      </div>
    </main>
  );
}
