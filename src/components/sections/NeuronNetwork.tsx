import { useEffect, useRef } from "react";

/** Animated neuron / constellation background — nodes drift, lines connect,
 *  pulses travel along edges. Canvas, no deps. */
export const NeuronNetwork = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number };
    type Pulse = { from: number; to: number; t: number; speed: number };
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 22000);
      nodes = Array.from({ length: Math.max(40, Math.min(90, count)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const LINK = 140;

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const a = Math.floor(Math.random() * nodes.length);
      // find a nearby node
      let best = -1, bestD = LINK * LINK;
      for (let i = 0; i < nodes.length; i++) {
        if (i === a) continue;
        const dx = nodes[i].x - nodes[a].x, dy = nodes[i].y - nodes[a].y;
        const d = dx*dx + dy*dy;
        if (d < bestD) { bestD = d; best = i; }
      }
      if (best >= 0) pulses.push({ from: a, to: best, t: 0, speed: 0.006 + Math.random()*0.008 });
    };

    let lastSpawn = 0;
    const tick = (ts: number) => {
      ctx.clearRect(0, 0, w, h);

      // move nodes
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx*dx + dy*dy;
          if (d2 < LINK * LINK) {
            const alpha = 1 - Math.sqrt(d2) / LINK;
            ctx.strokeStyle = `hsla(41, 60%, 70%, ${alpha * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.fillStyle = "hsla(41, 70%, 75%, 0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // pulses
      if (ts - lastSpawn > 280) { spawnPulse(); lastSpawn = ts; }
      pulses = pulses.filter((p) => p.t < 1);
      for (const p of pulses) {
        p.t += p.speed;
        const a = nodes[p.from], b = nodes[p.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 16);
        g.addColorStop(0, "hsla(45, 90%, 80%, 0.9)");
        g.addColorStop(1, "hsla(45, 90%, 80%, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
};
