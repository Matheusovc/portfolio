"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { target: 4,   suffix: "",  label: "Projetos Desenvolvidos" },
  { target: 15,  suffix: "+", label: "Tecnologias Utilizadas" },
  { target: 3,   suffix: "",  label: "Certificações" },
  { target: 500, suffix: "+", label: "Horas de Estudo" },
];

function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const fps = 60;
    const dur = 1600;
    const steps = dur / (1000 / fps);
    const inc = target / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setCount(Math.round(cur));
      if (cur >= target) clearInterval(timer);
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "3.8rem", lineHeight: 1, color: "#D4AF37", marginBottom: "8px",
      }}>
        {count}{suffix}
      </div>
      <div style={{
        color: "#A0A0A0", fontSize: "0.72rem",
        letterSpacing: "0.18em", textTransform: "uppercase",
      }}>
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div style={{
      background: "#111111",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      padding: "80px 52px",
    }}>
      <div style={{
        maxWidth: "1220px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "48px",
      }}>
        {stats.map(s => (
          <Counter key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </div>
  );
}
