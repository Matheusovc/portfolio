"use client";

import { motion } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const ease = [0.4, 0, 0.2, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 52px", position: "relative", overflow: "hidden",
      }}
    >
      {/* WebGL shader contido no hero */}
      <WebGLShader className="absolute inset-0 w-full h-full block" />

      {/* Overlay escuro para legibilidade + toque dourado */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `
            linear-gradient(to bottom, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.72) 60%, rgba(10,10,10,0.90) 100%),
            radial-gradient(ellipse 60% 50% at 60% 40%, rgba(212,175,55,0.06) 0%, transparent 70%)
          `,
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.15 }}
        style={{
          position: "relative", zIndex: 1,
          fontSize: "0.68rem", letterSpacing: "0.32em",
          textTransform: "uppercase", color: "#D4AF37", marginBottom: "28px",
        }}
      >
        Backend Java Developer &mdash; Disponível para oportunidades
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.35 }}
        style={{
          position: "relative", zIndex: 1,
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(3.8rem, 10.5vw, 9.5rem)",
          fontWeight: "normal", lineHeight: "0.93", letterSpacing: "-0.025em",
        }}
      >
        <span style={{ display: "block", color: "#fff" }}>Matheus</span>
        <span
          style={{
            display: "block", color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.22)",
          }}
        >
          Carvalho
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.65 }}
        style={{
          position: "relative", zIndex: 1,
          width: "56px", height: "1px", background: "#D4AF37",
          margin: "38px 0", transformOrigin: "left",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.85 }}
        style={{
          position: "relative", zIndex: 1,
          maxWidth: "500px", color: "#A0A0A0", fontSize: "1.05rem", lineHeight: "1.75",
        }}
      >
        Construindo APIs escaláveis, sistemas robustos e soluções orientadas a
        negócios com Java, Spring Boot e Arquitetura de Software.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 1.05 }}
        style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "44px" }}
      >
        <a href="#projects" className="btn-primary">Ver Projetos</a>
        <a href="https://github.com/Matheusovc" target="_blank" rel="noopener" className="btn-ghost">GitHub</a>
        <a href="https://linkedin.com/in/ovcmatheus" target="_blank" rel="noopener" className="btn-ghost">LinkedIn</a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 1.5 }}
        style={{
          position: "absolute", zIndex: 1, bottom: "44px", left: "52px",
          display: "flex", alignItems: "center", gap: "14px",
          color: "#444", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase",
        }}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease, delay: 2 }}
          style={{
            width: "40px", height: "1px", background: "#444",
            display: "block", transformOrigin: "left",
          }}
        />
        Scroll
      </motion.div>
    </section>
  );
}
