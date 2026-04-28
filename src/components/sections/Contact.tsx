import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(41_60%_40%/0.12),transparent_60%)]" aria-hidden />
      <div className="container relative">
        <div className="font-mono-ui text-xs tracking-[0.25em] text-primary mb-8">/ CONTACT</div>
        <h2 className="font-display font-semibold text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] text-headline max-w-[14ch]">
          Open for AI/ML opportunities.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          If you're shipping AI products and need someone who thinks beyond notebooks — let's talk.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:yash27bhatewara@gmail.com"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-[var(--shadow-glow)]"
          >
            yash27bhatewara@gmail.com
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-bhatewara-5b084a214"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/40 hover:bg-card transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/yashbhatewara"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card/40 hover:bg-card transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-border flex flex-wrap justify-between gap-3 font-mono-ui text-xs tracking-widest text-muted-foreground">
          <span>© 2026 YASH BHATEWARA</span>
          <span>INDORE, IN</span>
          <span>BUILT WITH REACT · TAILWIND</span>
        </div>
      </div>
    </section>
  );
};
