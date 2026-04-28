const points = [
  "I build ML systems, not just models.",
  "Focused on deployment, pipelines, and real-world usability.",
  "Interested in applying AI across health, finance, real estate, robotics and IT.",
];

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container">
        <div className="font-mono-ui text-xs tracking-[0.25em] text-primary mb-10">/ ABOUT</div>
        <div className="space-y-10">
          {points.map((p, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="font-mono-ui text-xs text-muted-foreground pt-3 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display font-medium text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.2] max-w-[22ch]">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
