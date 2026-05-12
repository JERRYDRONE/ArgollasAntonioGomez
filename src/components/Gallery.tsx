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

export default function Gallery() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-2">
            Galería de calidad
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-xl">
            Cada argolla habla por sí sola.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              {/*
               * PLACEHOLDER — Reemplaza este div con:
               * <div className="relative w-full h-56 overflow-hidden">
               *   <Image src={`/gallery/${item.id}.jpg`} alt={item.label} fill className="object-cover" />
               * </div>
               */}
              <div
                className={`w-full ${item.size} bg-slate-200 flex flex-col items-center justify-center text-center text-slate-500 text-xs px-2 border border-slate-300`}
              >
                <span className="font-semibold text-sm text-slate-600">
                  {item.label}
                </span>
                <span className="mt-1">{item.hint}</span>
              </div>
              <p className="text-slate-700 text-xs font-medium text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
