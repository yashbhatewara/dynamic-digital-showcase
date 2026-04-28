import { ArrowRight, Download } from "lucide-react";
import { NeuronNetwork } from "./NeuronNetwork";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
      <NeuronNetwork />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" aria-hidden />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/40 backdrop-blur-sm font-mono-ui text-xs tracking-wider text-muted-foreground mb-10 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
          OPEN TO AI/ML OPPORTUNITIES
        </div>

        <h1 className="font-display font-semibold text-[clamp(2.75rem,8vw,7rem)] leading-[1.02] tracking-tight max-w-[18ch] text-headline animate-fade-up">
          Building AI systems that actually work in production.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground animate-fade-up">
          AI/ML Engineer focused on MLOps, deployment, and scalable pipelines.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-[var(--shadow-glow)] hover:shadow-[0_0_100px_hsl(var(--primary)/0.45)] transition-shadow"
          >
            View Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/Yash_Bhatewara_AI_ML.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/40 backdrop-blur-sm hover:bg-card transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        <div className="absolute left-4 right-4 bottom-8 flex justify-between font-mono-ui text-xs tracking-widest text-muted-foreground/70">
          <span>YASH BHATEWARA · INDORE, IN</span>
          <span>PORTFOLIO · 2026</span>
        </div>
      </div>
    </section>
  );
};
