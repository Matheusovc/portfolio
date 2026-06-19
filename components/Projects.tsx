"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

interface Project {
  id: string;
  label: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
  canvasColor: { r: number; g: number; b: number };
}

const projects: Project[] = [
  {
    id: "pv1",
    label: "// JWT Auth System",
    title: "Sistema de Autenticação JWT",
    desc: "Autenticação e autorização completas com tokens JWT, refresh token, controle de acesso por roles e proteção de endpoints via Spring Security.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT"],
    link: "https://github.com/Matheusovc",
    canvasColor: { r: 212, g: 175, b: 55 },
  },
  {
    id: "pv2",
    label: "// Full Stack Spring",
    title: "CRUD Full Stack Spring",
    desc: "Aplicação full stack com Spring Boot no backend, operações CRUD completas, integração com banco de dados e endpoints REST documentados.",
    tags: ["Java", "Spring Boot", "JPA", "MySQL"],
    link: "https://github.com/Matheusovc/crudfullstackSpring",
    canvasColor: { r: 90, g: 150, b: 255 },
  },
  {
    id: "pv3",
    label: "// NeonRift Game",
    title: "NeonRift Game",
    desc: "Projeto de jogo desenvolvido como exercício de lógica de programação, estruturas de dados e arquitetura orientada a objetos.",
    tags: ["Java", "OOP", "Game Logic"],
    link: "https://github.com/Matheusovc/NeonRift_Game",
    canvasColor: { r: 190, g: 90, b: 255 },
  },
  {
    id: "pv4",
    label: "// n8n Flows",
    title: "Automações Empresariais",
    desc: "Fluxos com n8n para integração entre sistemas corporativos, automação de processos operacionais e redução de tarefas manuais repetitivas.",
    tags: ["n8n", "REST APIs", "Automação"],
    link: "https://github.com/Matheusovc",
    canvasColor: { r: 72, g: 200, b: 110 },
  },
];

function ProjectCanvas({ color }: { color: { r: number; g: number; b: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let pts: { x: number; y: number; vx: number; vy: number; rad: number }[] = [];
    let rafId: number;

    function resize() {
      w = canvas!.width = canvas!.offsetWidth;
      h = canvas!.height = canvas!.offsetHeight;
      pts = Array.from({ length: 22 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        rad: Math.random() * 2 + 0.6,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      ctx!.strokeStyle = "rgba(255,255,255,.022)";
      ctx!.lineWidth = 0.5;
      for (let x = 0; x < w; x += 28) {
        ctx!.beginPath(); ctx!.moveTo(x, 0); ctx!.lineTo(x, h); ctx!.stroke();
      }
      for (let y = 0; y < h; y += 28) {
        ctx!.beginPath(); ctx!.moveTo(0, y); ctx!.lineTo(w, y); ctx!.stroke();
      }
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.rad, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${color.r},${color.g},${color.b},.55)`;
        ctx!.fill();
      });
      rafId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="proj-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease, delay }}
    >
      <div
        style={{
          height: "196px", background: "#181818",
          position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <ProjectCanvas color={project.canvasColor} />
        <span
          style={{
            position: "relative", zIndex: 1,
            fontFamily: "ui-monospace, 'SF Mono', monospace",
            fontSize: "0.78rem", color: "#D4AF37", opacity: 0.65, letterSpacing: "0.06em",
          }}
        >
          {project.label}
        </span>
      </div>
      <div style={{ padding: "32px" }}>
        <h3 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "1.28rem", fontWeight: "normal", marginBottom: "12px",
        }}>
          {project.title}
        </h3>
        <p style={{ color: "#A0A0A0", fontSize: "0.88rem", lineHeight: "1.65", marginBottom: "22px" }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}>
          {project.tags.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
        </div>
        <a href={project.link} target="_blank" rel="noopener" className="proj-link">
          <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "120px 52px", maxWidth: "1220px", margin: "0 auto" }}
    >
      <p className="section-lbl">Projetos</p>
      <h2 className="display-heading">Trabalhos em destaque</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
