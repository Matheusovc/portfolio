"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.61a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "120px 52px", maxWidth: "1220px", margin: "0 auto" }}
    >
      <motion.p
        className="section-lbl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
      >
        Contato
      </motion.p>
      <motion.h2
        className="display-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        Vamos construir<br />algo juntos
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "88px", alignItems: "start" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          <p style={{ color: "#A0A0A0", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "40px" }}>
            Estou disponível para oportunidades de Desenvolvedor Backend Java Júnior. Se você busca
            um profissional comprometido, com forte base em engenharia de software e visão de
            crescimento, entre em contato.
          </p>
          <div>
            <a href="https://linkedin.com/in/ovcmatheus" target="_blank" rel="noopener" className="contact-link">
              <span className="contact-link-icon"><LinkedinIcon /></span>
              linkedin.com/in/ovcmatheus
            </a>
            <a href="https://github.com/Matheusovc" target="_blank" rel="noopener" className="contact-link">
              <span className="contact-link-icon"><GithubIcon /></span>
              github.com/Matheusovc
            </a>
            <a href="mailto:matheusovc16@gmail.com" className="contact-link">
              <span className="contact-link-icon"><EmailIcon /></span>
              matheusovc16@gmail.com
            </a>
            <a href="tel:+5561981592930" className="contact-link">
              <span className="contact-link-icon"><PhoneIcon /></span>
              +55 (61) 98159-2930
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "0.67rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A0A0A0" }}>
              Nome
            </label>
            <input type="text" name="name" placeholder="Seu nome" required className="form-input" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "0.67rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A0A0A0" }}>
              E-mail
            </label>
            <input type="email" name="email" placeholder="seu@email.com" required className="form-input" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "0.67rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#A0A0A0" }}>
              Mensagem
            </label>
            <textarea
              name="message"
              placeholder="Descreva a oportunidade..."
              required
              className="form-input form-textarea"
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{
              alignSelf: "flex-start",
              background: sent ? "#1a6b1a" : undefined,
              color: sent ? "#fff" : undefined,
            }}
          >
            {sent ? "Mensagem enviada ✓" : "Enviar Mensagem"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
