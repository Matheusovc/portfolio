"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
  tags: string[];
  note?: string;
}

const experiences: Experience[] = [
  {
    id: "esales",
    company: "e.Sales",
    role: "Estagiário de TI — Suporte",
    period: "Fev 2026",
    current: true,
    bullets: [
      "Atendimento e suporte técnico a clientes internos e externos.",
      "Monitoramento de aplicações e acionamento de equipes responsáveis quando necessário.",
      "Criação e manutenção de documentações técnicas.",
      "Uso de terminal Linux para manutenção e verificações em ambientes de produção.",
      "Suporte pontual com JavaScript para ajustes técnicos.",
      "Atuação com protocolos de comunicação e integração de sistemas: FTP, HTTP, WebServices, APIs REST, EDI e e-mail.",
      "Verificação de conectividade e análise de regras e protocolos de firewall.",
      "Aplicação de IA com Claude Code, MCPs e Engenharia de Contexto para diagnóstico, documentação e automação de rotinas.",
    ],
    tags: ["Linux", "JavaScript", "REST APIs", "HTTP", "FTP", "EDI", "Firewall", "Claude Code", "n8n"],
  },
  {
    id: "egregora",
    company: "EGRÉGORA",
    role: "Estagiário de TI — Suporte em Desenvolvimento Front-End",
    period: "Jun 2025 – Jan 2026",
    current: false,
    bullets: [
      "Desenvolvimento e manutenção de sites com HTML, CSS e JavaScript.",
      "Construção de fluxos avançados de automação com n8n.",
      "Uso do Cursor como apoio ao desenvolvimento e à produtividade.",
      "Suporte técnico em ambientes Linux e macOS.",
      "Auxílio na reorganização do banco de dados da empresa.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "n8n", "Linux", "macOS"],
  },
  {
    id: "renapsi",
    company: "RENAPSI",
    role: "Jovem Aprendiz — Caixa Econômica Federal",
    period: "Mai 2023 – Mai 2025",
    current: false,
    note: "Carta de recomendação disponível.",
    bullets: [
      "Funções administrativas e atendimento ao público.",
      "Organização e gestão de documentos, incluindo documentos jurídicos.",
      "Suporte a clientes e auxílio em processos bancários internos.",
      "Utilização de sistemas administrativos internos.",
    ],
    tags: ["Administrativo", "Atendimento", "Documentação"],
  },
];

function PulseDot() {
  return (
    <motion.span
      style={{
        display: "inline-block",
        width: "7px", height: "7px",
        borderRadius: "50%",
        background: "#D4AF37",
        boxShadow: "0 0 8px rgba(212,175,55,0.7)",
      }}
      animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Journey() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [featured, ...rest] = experiences;

  return (
    <section
      id="journey"
      ref={ref}
      style={{ padding: "120px 52px", maxWidth: "1220px", margin: "0 auto" }}
    >
      <motion.p
        className="section-lbl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
      >
        Experiência Profissional
      </motion.p>
      <motion.h2
        className="display-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        Crescimento real,<br />responsabilidade de verdade
      </motion.h2>

      {/* e.Sales — featured card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        style={{
          background: "linear-gradient(145deg, rgba(212,175,55,0.07) 0%, #111111 45%)",
          border: "1px solid rgba(212,175,55,0.2)",
          borderTop: "2px solid rgba(212,175,55,0.55)",
          borderRadius: "12px",
          padding: "48px",
          marginBottom: "24px",
        }}
      >
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: "36px",
          flexWrap: "wrap", gap: "20px",
        }}>
          <div>
            <h3 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)",
              fontWeight: "normal", lineHeight: 1.05, marginBottom: "8px",
            }}>
              {featured.company}
            </h3>
            <p style={{ color: "#888", fontSize: "0.88rem", letterSpacing: "0.03em" }}>
              {featured.role}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37", fontSize: "0.64rem", letterSpacing: "0.16em",
              textTransform: "uppercase", padding: "5px 13px", borderRadius: "100px",
            }}>
              <PulseDot />
              Em andamento
            </span>
            <span style={{ color: "#555", fontSize: "0.76rem", letterSpacing: "0.08em" }}>
              Desde {featured.period}
            </span>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(212,175,55,0.12)", marginBottom: "36px" }} />

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "13px", marginBottom: "36px" }}>
          {featured.bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.35 + i * 0.06 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                color: "#B0B0B0", fontSize: "0.9rem", lineHeight: "1.65",
              }}
            >
              <span style={{
                color: "#D4AF37", opacity: 0.65, flexShrink: 0,
                marginTop: "4px", fontSize: "0.45rem",
              }}>◆</span>
              {b}
            </motion.li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {featured.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
      </motion.div>

      {/* EGRÉGORA + RENAPSI */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {rest.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease, delay: 0.45 + i * 0.15 }}
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px",
              padding: "40px",
            }}
          >
            <p style={{
              fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#D4AF37", marginBottom: "12px",
            }}>
              {exp.period}
            </p>
            <h3 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "1.4rem", fontWeight: "normal", marginBottom: "5px",
            }}>
              {exp.company}
            </h3>
            <p style={{ color: "#666", fontSize: "0.82rem", marginBottom: "28px", letterSpacing: "0.02em" }}>
              {exp.role}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  color: "#909090", fontSize: "0.85rem", lineHeight: "1.55",
                }}>
                  <span style={{ color: "#D4AF37", opacity: 0.5, flexShrink: 0, marginTop: "4px", fontSize: "0.4rem" }}>◆</span>
                  {b}
                </li>
              ))}
            </ul>
            {exp.note && (
              <p style={{
                color: "#666", fontSize: "0.76rem", fontStyle: "italic",
                marginBottom: "20px",
                borderLeft: "2px solid rgba(212,175,55,0.2)", paddingLeft: "12px",
              }}>
                {exp.note}
              </p>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {exp.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
