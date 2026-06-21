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
  const [logoHovered, setLogoHovered] = useState(false);

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
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "1.4rem", letterSpacing: "0.06em",
          color: "#D4AF37", textDecoration: "none",
          transition: "transform 0.25s ease, text-shadow 0.25s ease",
          display: "inline-block",
          transform: logoHovered ? "scale(1.08)" : "scale(1)",
          textShadow: logoHovered
            ? "0 0 18px rgba(212,175,55,0.7), 0 0 40px rgba(212,175,55,0.3)"
            : "none",
        }}
      >
        M
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
