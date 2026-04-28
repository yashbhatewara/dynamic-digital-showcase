const points = [
  "I build ML systems, not just models.",
  "Focused on deployment, pipelines, and real-world usability.",
  "Comfortable with LLMs, LangChain and multimodal Generative AI workflows.",
  "Interested in applying AI across health, finance, real estate, robotics and IT.",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="font-mono-ui text-xs tracking-[0.25em] text-primary mb-10">/ ABOUT</div>
        <div className="space-y-7 md:space-y-9 max-w-5xl">
          {points.map((p, i) => (
            <p
              key={i}
              className="about-shimmer font-display font-medium text-[clamp(1.35rem,2.6vw,2.15rem)] leading-[1.35] max-w-[46ch]"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
