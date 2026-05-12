import { MessageCircle, Check } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface PricingTier {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  range: string;
  features: string[];
  ctaLabel: string;
  highlight: boolean;
  whatsappText: string;
}

const tiers: PricingTier[] = [
  {
    id: "menudeo",
    title: "Menudeo",
    subtitle: "Para reparaciones puntuales",
    range: "100 – 500 piezas",
    features: [
      "Argollas calibre 3/16 galvanizadas",
      "Pedido mínimo: 100 piezas",
      "Envío a domicilio disponible",
      "Atención personalizada",
    ],
    ctaLabel: "Solicitar este volumen",
    highlight: false,
    whatsappText:
      "Hola Argollas Gómez, vi su sitio web y me interesa cotizar el volumen de MENUDEO (100 a 500 piezas).",
  },
  {
    id: "medio-mayoreo",
    badge: "Más popular",
    title: "Medio Mayoreo",
    subtitle: "Para tapiceros y talleres",
    range: "1,000 – 4,999 piezas",
    features: [
      "Precio preferencial por volumen",
      "Argollas calibre 3/16 galvanizadas",
      "Lote empaquetado y etiquetado",
      "Tiempo de entrega reducido",
      "Soporte técnico incluido",
    ],
    ctaLabel: "Solicitar este volumen",
    highlight: true,
    whatsappText:
      "Hola Argollas Gómez, vi su sitio web y me interesa cotizar el volumen de MEDIO MAYOREO (1,000 a 4,999 piezas).",
  },
  {
    id: "mayoreo",
    title: "Mayoreo",
    subtitle: "Para distribuidores",
    range: "5,000 piezas en adelante",
    features: [
      "Mejor precio por unidad",
      "Producción bajo pedido especial",
      "Envío en paquetería industrial",
      "Facturación disponible",
      "Cuenta de cliente preferente",
    ],
    ctaLabel: "Solicitar este volumen",
    highlight: false,
    whatsappText:
      "Hola Argollas Gómez, vi su sitio web y me interesa cotizar el volumen de MAYOREO (más de 5,000 piezas).",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="bg-zinc-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-2">
            Modelos y volúmenes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 max-w-xl">
            Tenemos el precio justo para cada escala de compra.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col border-2 ${
                tier.highlight
                  ? "border-amber-500 bg-slate-900 text-white shadow-2xl scale-[1.02]"
                  : "border-slate-200 bg-white text-slate-900"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-slate-900 text-xs font-bold tracking-widest uppercase px-4 py-1 shadow">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Title */}
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      tier.highlight ? "text-amber-400" : "text-slate-900"
                    }`}
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={`text-sm mt-0.5 ${
                      tier.highlight ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                </div>

                {/* Volume range */}
                <div
                  className={`text-2xl font-bold tracking-tight ${
                    tier.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {tier.range}
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 flex-1">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          tier.highlight ? "text-amber-400" : "text-amber-500"
                        }`}
                      />
                      <span
                        className={
                          tier.highlight ? "text-slate-300" : "text-slate-600"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={buildWhatsAppUrl(tier.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 flex items-center justify-center gap-2 font-bold text-sm px-4 py-3 transition-colors ${
                    tier.highlight
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-900"
                      : "bg-slate-900 hover:bg-slate-700 text-white"
                  }`}
                >
                  <MessageCircle size={18} />
                  {tier.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
