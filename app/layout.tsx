import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Carvalho — Desenvolvedor Backend Java",
  description:
    "Portfólio de Matheus Carvalho. Backend Java especializado em Spring Boot, APIs REST, JWT e Arquitetura de Software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
