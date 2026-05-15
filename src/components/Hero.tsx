"use client";

import { MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { whatsappTemplates } from "@/lib/whatsapp";

export default function Hero() {
  const ctaUrl = whatsappTemplates.general;

  return (
    <section className="bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <div>
          <span className="inline-block bg-amber-500 text-slate-900 text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6 animate-fade-in-up">
            Manufactura directa de taller
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4 animate-fade-in-left delay-100">
            Argollas Soldadas de Alta Resistencia
            <span className="text-amber-400"> para Lonas</span>
          </h1>

          <p className="text-slate-300 text-lg mb-8 leading-relaxed animate-fade-in-left delay-200">
            Calibre 3/16 · Galvanizadas · Diseñadas para uso rudo extremo.
            <br />
            Resistencia garantizada desde la primera soldadura.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <ShieldCheck size={18} className="text-amber-400 shrink-0" />
              Calidad certificada por 22+ años
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Zap size={18} className="text-amber-400 shrink-0" />
              Envíos nacionales
            </div>
          </div>

          {/* CTA */}
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-900 font-bold text-base sm:text-lg px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-amber-500/40 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 animate-fade-in-up delay-300"
          >
            <MessageCircle size={22} />
            Cotizar por WhatsApp
          </a>

          <p className="mt-3 text-slate-500 text-xs animate-fade-in-up delay-500">
            Respuesta rápida · Sin compromiso
          </p>
        </div>

        {/* Hero image placeholder */}
        {/* Reemplaza este div con <Image src="/hero.jpg" alt="Argollas soldadas" fill .../> */}
        <div className="relative w-full h-72 sm:h-96 bg-slate-700 dark:bg-slate-800 flex flex-col items-center justify-center text-slate-400 text-sm border border-slate-600 dark:border-slate-700 animate-fade-in-right delay-200 hover:border-amber-500/40 transition-colors duration-300">
          <span className="font-semibold text-base">Imagen Hero</span>
          <span>Recomendado: 800 × 600 px</span>
          <span className="text-xs mt-1 text-slate-500">
            Foto de argollas en primer plano / taller
          </span>
        </div>
      </div>
    </section>
  );
}

