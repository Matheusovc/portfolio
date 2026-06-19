"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const values = [
  {
    title: "Arquitetura & Design",
    desc: "Modelagem de sistemas com UML, Engenharia de Requisitos e foco em soluções sustentáveis a longo prazo.",
  },
  {
    title: "APIs & Segurança",
    desc: "APIs REST documentadas com Swagger/OpenAPI, autenticação JWT e padrões de segurança via Spring Security.",
  },
  {
    title: "Crescimento Contínuo",
    desc: "Estudo estruturado, certificações ativas e projetos práticos que evoluem com o mercado de engenharia.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "120px 52px", maxWidth: "1220px", margin: "0 auto" }}
    >
      <motion.p
        className="section-lbl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
      >
        Sobre Mim
      </motion.p>
      <motion.h2
        className="display-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        Engenharia de software<br />como disciplina de vida
      </motion.h2>

      <div
        style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "88px", alignItems: "start",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease, delay: 0.2 }}
        >
          <p style={{ color: "#A0A0A0", fontSize: "1.05rem", lineHeight: "1.82", marginBottom: "22px" }}>
            Sou estudante de{" "}
            <strong style={{ color: "#fff", fontWeight: 500 }}>Análise e Desenvolvimento de Sistemas</strong>{" "}
            e estagiário de TI em transição ativa para Desenvolvedor Backend Java. Minha trajetória
            começou longe da tecnologia, com experiências que me ensinaram algo que nenhuma faculdade ensina:{" "}
            <strong style={{ color: "#fff", fontWeight: 500 }}>disciplina, resiliência e visão de longo prazo</strong>.
          </p>
          <p style={{ color: "#A0A0A0", fontSize: "1.05rem", lineHeight: "1.82", marginBottom: "22px" }}>
            Hoje meu foco é construir sistemas que resolvem problemas reais. Não apenas código que funciona, mas código{" "}
            <strong style={{ color: "#fff", fontWeight: 500 }}>seguro, documentado, testável e escalável</strong>.
            É por isso que invisto em Engenharia de Requisitos, modelagem UML e práticas de Arquitetura
            de Software desde o início da carreira.
          </p>
          <p style={{ color: "#A0A0A0", fontSize: "1.05rem", lineHeight: "1.82" }}>
            Meu objetivo é claro: entrar em uma equipe de engenharia séria, contribuir desde o primeiro
            dia e crescer como desenvolvedor backend nos próximos anos.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {values.map(({ title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease, delay: 0.3 + i * 0.12 }}
              style={{ borderLeft: "1px solid rgba(212,175,55,0.28)", paddingLeft: "22px" }}
            >
              <h4 style={{
                fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase",
                color: "#fff", fontWeight: 500, marginBottom: "8px",
              }}>
                {title}
              </h4>
              <p style={{ color: "#A0A0A0", fontSize: "0.88rem", lineHeight: "1.65" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
