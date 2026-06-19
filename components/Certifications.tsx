"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const certs = [
  { title: "MongoDB Overview: Core Concepts and Architecture", org: "MongoDB University" },
  { title: "Desenvolvendo Inteligência Artificial para Suporte e Implantação", org: "Formação Técnica" },
];

const upcoming = [
  "Oracle Certified Professional Java SE",
  "Spring Professional Certification",
  "AWS Certified Cloud Practitioner",
  "AWS Certified Developer – Associate",
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      id="certifications"
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "120px 52px",
      }}
    >
      <div ref={ref} style={{ maxWidth: "1220px", margin: "0 auto" }}>
        <motion.p
          className="section-lbl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          Certificações
        </motion.p>
        <motion.h2
          className="display-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          Formação complementar
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {certs.map(({ title, org }, i) => (
            <motion.div
              key={title}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.2 + i * 0.12 }}
            >
              <div
                style={{
                  width: "38px", height: "38px",
                  border: "1px solid rgba(212,175,55,0.28)", borderRadius: "6px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#D4AF37", fontSize: "1rem", marginBottom: "22px",
                }}
              >
                ◈
              </div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 500, lineHeight: 1.42, marginBottom: "10px" }}>
                {title}
              </h3>
              <p style={{ color: "#A0A0A0", fontSize: "0.78rem", letterSpacing: "0.05em" }}>{org}</p>
            </motion.div>
          ))}

          {/* Em andamento card */}
          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.44 }}
            style={{ borderColor: "rgba(212,175,55,0.18)" }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.28)",
              color: "#D4AF37", fontSize: "0.6rem", letterSpacing: "0.15em",
              textTransform: "uppercase", padding: "4px 11px", borderRadius: "100px",
              marginBottom: "22px",
            }}>
              <motion.span
                style={{
                  display: "inline-block", width: "6px", height: "6px",
                  borderRadius: "50%", background: "#D4AF37",
                  boxShadow: "0 0 7px rgba(212,175,55,0.7)",
                }}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              Em andamento
            </span>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "13px" }}>
              {upcoming.map(cert => (
                <li key={cert} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  color: "#A0A0A0", fontSize: "0.82rem", lineHeight: "1.4",
                }}>
                  <span style={{
                    flexShrink: 0, marginTop: "1px",
                    width: "13px", height: "13px",
                    border: "1px solid rgba(212,175,55,0.32)", borderRadius: "3px",
                    display: "inline-block",
                  }} />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
