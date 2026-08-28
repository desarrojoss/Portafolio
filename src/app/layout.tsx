import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "DesarroJoss",
  description: "Josttin Perez — construyo apps, webs y marketplaces, con y sin IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${mono.variable} ${sans.variable}`}>
      <body className="bg-ink font-sans text-slate-200">{children}</body>
    </html>
  );
}
