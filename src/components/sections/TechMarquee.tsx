const techs = ["Scikit-learn", "GitHub Actions", "FastAPI", "Pandas", "Python", "AWS", "Docker", "MLflow", "MongoDB", "PyTorch"];

export const TechMarquee = () => {
  const row = [...techs, ...techs];
  return (
    <section className="py-20 border-y border-border/60 bg-card/20 overflow-hidden">
      <div className="container flex items-center gap-10">
        <div className="font-mono-ui text-xs tracking-[0.25em] text-muted-foreground shrink-0">BUILT WITH</div>
        <div className="flex-1 overflow-hidden mask-fade">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {row.map((t, i) => (
              <span
                key={i}
                className="font-display font-semibold text-3xl md:text-4xl text-muted-foreground/60 hover:text-primary transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`.mask-fade{mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);}`}</style>
    </section>
  );
};
