export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "30px 52px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}
    >
      <span style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        color: "#D4AF37", fontSize: "0.9rem", letterSpacing: "0.12em",
      }}>
        MC
      </span>
      <p style={{ color: "#444", fontSize: "0.76rem", letterSpacing: "0.04em" }}>
        &copy; 2025 Matheus Carvalho &mdash; Desenvolvedor Backend Java
      </p>
    </footer>
  );
}
