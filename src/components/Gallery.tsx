"use client";

import { useInView } from "@/lib/useInView";

const galleryItems = [
  {
    id: "soldadura",
    label: "Detalle de soldadura",
    hint: "Macro de la soldadura / 800×600 px",
    size: "h-56",
  },
  {
    id: "galvanizado",
    label: "Acabado galvanizado",
    hint: "Textura superficial / 800×600 px",
    size: "h-56",
  },
  {
    id: "empaquetado",
    label: "Empaquetado",
    hint: "Lote sellado en bolsa / 800×600 px",
    size: "h-56",
  },
  {
    id: "taller",
    label: "Interior del taller",
    hint: "Vista de producción / 800×600 px",
    size: "h-56",
  },
];

const itemDelays = ["delay-0", "delay-100", "delay-200", "delay-300"];

export default function Gallery() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-white dark:bg-slate-900 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-2">
            Galería de calidad
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white max-w-xl">
            Cada argolla habla por sí sola.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col gap-2 transition-all duration-700 ${itemDelays[i]} ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/*
               * PLACEHOLDER — Reemplaza este div con:
               * <div className="relative w-full h-56 overflow-hidden">
               *   <Image src={`/gallery/${item.id}.jpg`} alt={item.label} fill className="object-cover hover:scale-105 transition-transform duration-500" />
               * </div>
               */}
              <div
                className={`w-full ${item.size} bg-slate-200 dark:bg-slate-700 flex flex-col items-center justify-center text-center text-slate-500 dark:text-slate-400 text-xs px-2 border border-slate-300 dark:border-slate-600 hover:border-amber-400 hover:shadow-md transition-all duration-300 cursor-default`}
              >
                <span className="font-semibold text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </span>
                <span className="mt-1">{item.hint}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-xs font-medium text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
