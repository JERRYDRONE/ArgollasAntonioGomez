"use client";

import { Award, Factory, Link2 } from "lucide-react";
import { useInView } from "@/lib/useInView";

const facts = [
  {
    icon: Award,
    title: "+22 años en el mercado",
    description:
      "Proveedor de talleres, tapiceros y distribuidores en toda la república desde 2004.",
  },
  {
    icon: Factory,
    title: "Manufactura directa de taller",
    description:
      "Sin intermediarios. Producimos cada argolla en nuestras instalaciones para garantizar precio y calidad.",
  },
  {
    icon: Link2,
    title: "Calidad que no se abre bajo tensión",
    description:
      "Soldadura de penetración completa en calibre 3/16. Probadas bajo carga antes de cada lote.",
  },
];

const cardDelays = ["delay-0", "delay-150", "delay-300"];

export default function Authority() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="nosotros" className="bg-white dark:bg-slate-900 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-2">
            Sobre nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white max-w-xl">
            El taller detrás de cada lona que resiste.
          </h2>
        </div>

        {/* Facts grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {facts.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`border-l-4 border-amber-500 pl-5 py-2 transition-all duration-700 ${cardDelays[i]} hover:bg-amber-50 dark:hover:bg-slate-800/50 rounded-r-lg ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  size={20}
                  className="text-amber-500 shrink-0 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

