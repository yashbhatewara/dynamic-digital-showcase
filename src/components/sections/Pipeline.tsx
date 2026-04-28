import { Database, ShieldCheck, Cpu, Cloud, Activity } from "lucide-react";

const steps = [
  { n: "01", icon: Database, title: "Ingest", sub: "MongoDB" },
  { n: "02", icon: ShieldCheck, title: "Validate", sub: "Schema · Drift" },
  { n: "03", icon: Cpu, title: "Train", sub: "Scikit-learn" },
  { n: "04", icon: Cloud, title: "Deploy", sub: "AWS · Docker" },
  { n: "05", icon: Activity, title: "Serve", sub: "Real-time API" },
];

export const Pipeline = () => {
  return (
    <section id="pipeline" className="py-28 md:py-36 relative">
      <div className="container">
        <div className="font-mono-ui text-xs tracking-[0.25em] text-primary mb-6">/ HOW I SHIP</div>
        <h2 className="font-display font-semibold text-[clamp(2rem,5vw,4rem)] leading-[1.05] max-w-[18ch] text-headline">
          Anatomy of a production ML system.
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg">
          Every project I ship moves through this pipeline — designed for reproducibility,
          observability, and zero-touch deployment.
        </p>

        <div className="mt-20 relative">
          {/* Rail */}
          <div className="absolute left-0 right-0 top-[60px] h-px bg-border" aria-hidden />
          {/* Champagne sweep */}
          <div className="absolute left-0 right-0 top-[58px] h-[5px] overflow-hidden" aria-hidden>
            <div className="h-full w-1/3 pipeline-glow animate-sweep" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-[88px] h-[88px] md:w-[120px] md:h-[120px] rounded-2xl border border-border bg-card/60 backdrop-blur-sm flex items-center justify-center shadow-[inset_0_1px_0_hsl(0_0%_100%/0.04)]">
                    <s.icon className="w-7 h-7 md:w-9 md:h-9 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center font-mono-ui text-[11px] text-muted-foreground">
                    {s.n}
                  </span>
                </div>
                <div className="mt-4 md:mt-6 font-display font-semibold text-base md:text-xl">{s.title}</div>
                <div className="mt-1 font-mono-ui text-xs tracking-wider text-muted-foreground">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 px-6 py-5 rounded-2xl border border-border bg-card/50 font-mono-ui text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
            PIPELINE STATUS · <span className="text-success">HEALTHY</span>
          </div>
          <div className="text-muted-foreground">LATENCY · ~120ms</div>
          <div className="text-muted-foreground">MODEL · v1.2.0</div>
          <div className="text-primary">CI/CD · GITHUB ACTIONS</div>
        </div>
      </div>
    </section>
  );
};
