"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const categories = [
  { title: "Backend",      items: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "REST API"] },
  { title: "Banco de Dados", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Ferramentas",  items: ["Git & GitHub", "Swagger / OpenAPI", "Postman", "Maven"] },
  { title: "Cloud",        items: ["AWS"] },
  { title: "Automação",    items: ["n8n", "Integração de APIs", "Fluxos empresariais"] },
  { title: "Modelagem",    items: ["UML", "Engenharia de Requisitos", "Diagrama de Classes", "Casos de Uso"] },
];

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      id="stack"
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
          Tecnologias
        </motion.p>
        <motion.h2
          className="display-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          Stack técnica
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "10px", overflow: "hidden",
          }}
        >
          {categories.map(({ title, items }) => (
            <div key={title} className="stack-cat">
              <h3>{title}</h3>
              <ul>
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
