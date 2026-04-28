const points = [
  "I build ML systems, not just models.",
  "Focused on deployment, pipelines, and real-world usability.",
  "Shipped production ML on AWS with Docker and GitHub Actions CI/CD.",
  "Comfortable with LLMs, LangChain and multimodal Generative AI workflows.",
  "Interested in applying AI across health, finance, real estate, robotics and IT.",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="font-mono-ui text-xs tracking-[0.25em] text-primary mb-10">/ ABOUT</div>
        <div className="space-y-6 md:space-y-7 max-w-5xl">
          {points.map((p, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="font-mono-ui text-xs text-muted-foreground pt-2 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display font-medium text-[clamp(1.05rem,2vw,1.6rem)] leading-[1.35] max-w-[46ch]">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
