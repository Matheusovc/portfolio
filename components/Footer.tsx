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
        color: "#D4AF37", fontSize: "1.1rem", letterSpacing: "0.06em",
      }}>
        M
      </span>
      <p style={{ color: "#888", fontSize: "0.76rem", letterSpacing: "0.04em" }}>
        &copy; 2026 Matheus Carvalho &mdash; Todos os direitos reservados
      </p>
    </footer>
  );
}
