"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about",   label: "Sobre" },
  { href: "#stack",   label: "Stack" },
  { href: "#projects", label: "Projetos" },
  { href: "#journey", label: "Experiência" },
  { href: "#contact", label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "22px 52px",
        transition: "background 0.4s, border-color 0.4s",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "transparent"}`,
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "1rem", letterSpacing: "0.14em",
          color: "#D4AF37", textDecoration: "none", textTransform: "uppercase",
        }}
      >
        MC
      </a>
      <ul style={{ display: "flex", gap: "32px", listStyle: "none" }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color: "#A0A0A0", textDecoration: "none",
                fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={e => (e.currentTarget.style.color = "#A0A0A0")}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
