import { Award, Factory, Link2 } from "lucide-react";

const facts = [
  {
    icon: Award,
    title: "+18 años en el mercado",
    description:
      "Proveedor de talleres, tapiceros y distribuidores en toda la república desde 2006.",
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

export default function Authority() {
  return (
    <section id="nosotros" className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-2">
            Sobre nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-xl">
            El taller detrás de cada lona que resiste.
          </h2>
        </div>

        {/* Facts grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {facts.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-l-4 border-amber-500 pl-5 py-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon size={20} className="text-amber-500 shrink-0" />
                <h3 className="font-bold text-slate-900 text-base tracking-tight">
                  {title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
