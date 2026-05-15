"use client";

import { MessageCircle, MapPin, Phone, Truck } from "lucide-react";
import { WHATSAPP_NUMBER, whatsappTemplates } from "@/lib/whatsapp";
import { useInView } from "@/lib/useInView";

export default function Footer() {
  const ctaUrl = whatsappTemplates.general;
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <footer
      id="contacto"
      ref={ref}
      className="bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300"
    >
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            {/* Logo placeholder — reemplaza con <Image src="/logo.png" .../> */}
            <div className="w-9 h-9 bg-slate-700 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400 font-bold">
              LOGO
            </div>
            <span className="font-bold text-white tracking-tight">
              Argollas Antonio Gómez
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Taller de manufactura especializado en argollas de acero soldadas
            para lonas. Más de 22 años de experiencia respaldando a tapiceros y
            distribuidores en toda la república.
          </p>
        </div>

        {/* Contact info */}
        <div
          className={`transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h4 className="font-bold text-sm tracking-widest uppercase text-amber-400 mb-4">
            Contacto
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-300">
            <li className="flex items-start gap-2 hover:text-amber-400 transition-colors duration-200">
              <Phone size={16} className="text-amber-500 shrink-0 mt-0.5" />
              {/* Reemplaza XXXXXXXXXX con el número real */}
              <span>+52 33 {WHATSAPP_NUMBER.slice(4)}</span>
            </li>
            <li className="flex items-start gap-2 hover:text-amber-400 transition-colors duration-200">
              <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <span>Guadalajara, Jalisco · México</span>
            </li>
            <li className="flex items-start gap-2 hover:text-amber-400 transition-colors duration-200">
              <Truck size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <span>Envíos nacionales a toda la república</span>
            </li>
          </ul>
        </div>

        {/* CTA column */}
        <div
          className={`flex flex-col items-start gap-4 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h4 className="font-bold text-sm tracking-widest uppercase text-amber-400">
            ¿Listo para cotizar?
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Escríbenos en este momento y recibe una cotización a tu medida sin
            compromiso.
          </p>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-900 font-bold text-sm px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 active:translate-y-0"
          >
            <MessageCircle size={18} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 dark:border-slate-900 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-500 text-xs">
          <span>
            © {new Date().getFullYear()} Argollas Antonio Gómez. Todos los
            derechos reservados.
          </span>
          <span>Manufactura directa · Calidad garantizada</span>
        </div>
      </div>
    </footer>
  );
}
