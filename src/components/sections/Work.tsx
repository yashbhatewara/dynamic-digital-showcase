import { Github } from "lucide-react";

type Project = {
  n: string;
  label: string;
  title: string;
  tagline: string;
  bullets: string[];
  stack: string[];
  github?: string;
  reverse?: boolean;
};

const projects: Project[] = [
  {
    n: "01",
    label: "FEATURED PROJECT",
    title: "Vehicle Insurance ML Pipeline",
    tagline: "Production-grade ML system shipped end-to-end on AWS.",
    bullets: [
      "End-to-end pipeline: MongoDB ingestion → validation → training → deployment",
      "CI/CD with GitHub Actions, Docker containerisation, AWS S3 / ECR / EC2",
      "Real-time prediction service exposed via web interface",
    ],
    stack: ["Python", "MongoDB", "Scikit-learn", "Docker", "AWS", "GitHub Actions"],
    github: "https://github.com/yashbhatewara",
  },
  {
    n: "02",
    label: "PROJECT 02",
    title: "Real Estate Price Prediction",
    tagline: "Regression models for property pricing with full feature pipeline.",
    bullets: [
      "Cleaned and engineered features from real-world property datasets",
      "Compared multiple regression algorithms to select the best performer",
      "Evaluated with cross-validation and residual analysis",
    ],
    stack: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/yashbhatewara",
    reverse: true,
  },
];

const ProjectCard = ({ n }: { n: string }) => (
  <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[420px] rounded-2xl border border-border overflow-hidden bg-gradient-to-br from-card via-card to-[hsl(165_40%_10%)]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(41_60%_50%/0.15),transparent_60%)]" />
    <div className="absolute top-6 left-6 font-mono-ui text-xs tracking-[0.25em] text-muted-foreground">
      {n === "01" ? "FEATURED" : "PROJECT"}
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-display font-bold text-[200px] md:text-[260px] leading-none text-foreground/[0.06]">
        {n}
      </span>
    </div>
    <div className="absolute bottom-6 right-6 font-mono-ui text-xs tracking-[0.2em] text-muted-foreground">
      {n} / 02
    </div>
  </div>
);

export const Work = () => {
  return (
    <section id="work" className="py-28 md:py-36">
      <div className="container">
        <div className="font-mono-ui text-xs tracking-[0.25em] text-primary mb-6">/ SELECTED WORK</div>
        <h2 className="font-display font-semibold text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] text-headline">
          Production over notebooks.
        </h2>

        <div className="mt-20 space-y-28">
          {projects.map((p) => (
            <article
              key={p.n}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${p.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <ProjectCard n={p.n} />
              <div>
                <div className="font-mono-ui text-xs tracking-[0.25em] text-muted-foreground">{p.label}</div>
                <h3 className="mt-3 font-display font-semibold text-[clamp(1.75rem,3.5vw,3rem)] leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">{p.tagline}</p>
                <ul className="mt-8 space-y-3 text-[15px]">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono-ui text-xs tracking-wider text-muted-foreground">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/40 hover:bg-card transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
