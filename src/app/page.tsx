// ─── Page principal ─────────────────────────────────────────────────────────
// Single Page Application - Argollas Antonio Gómez
// Orden de secciones: Navbar → Hero → Authority → Pricing → Calculator → Gallery → Footer
// ────────────────────────────────────────────────────────────────────────────

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Barra de navegación fija */}
      <Navbar />

      <main>
        {/* 2. Hero — Título principal + CTA WhatsApp */}
        <Hero />

        {/* 3. Autoridad — Sobre nosotros */}
        <Authority />

        {/* 4. Modelos y Precios — 3 tarjetas de volumen */}
        <Pricing />

        {/* 5. Calculadora de pedido — cantidad + precio estimado */}
        <Calculator />

        {/* 6. Galería de calidad — Grid de imágenes */}
        <Gallery />
      </main>

      {/* 7. Footer con contacto y botón WhatsApp final */}
      <Footer />
    </>
  );
}

