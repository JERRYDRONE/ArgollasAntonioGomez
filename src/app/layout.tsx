import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Argollas Antonio Gómez | Argollas Soldadas para Lonas",
  description:
    "Taller de manufactura especializado en argollas de acero soldadas para lonas. Calibre 3/16, galvanizadas. +18 años de experiencia. Menudeo, Medio Mayoreo y Mayoreo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased bg-zinc-50 text-slate-900">{children}</body>
    </html>
  );
}
