"use client";

import { MessageCircle, Check, TrendingDown } from "lucide-react";
import { whatsappTemplates } from "@/lib/whatsapp";
import { useInView } from "@/lib/useInView";

interface PricingTier {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  range: string;
  unitPrice: number;
  minQty: number;
  features: string[];
  ctaLabel: string;
  highlight: boolean;
  whatsappUrl: string;
}

const tiers: PricingTier[] = [
  {
    id: "menudeo",
    title: "Menudeo",
    subtitle: "Para reparaciones puntuales",
    range: "100 – 500 piezas",
    unitPrice: 3.50,
    minQty: 100,
    features: [
      "Argollas calibre 3/16 galvanizadas",
      "Pedido mínimo: 100 piezas",
      "Envío a domicilio disponible",
      "Atención personalizada",
    ],
    ctaLabel: "Solicitar este volumen",
    highlight: false,
    whatsappUrl: whatsappTemplates.menudeo,
  },
  {
    id: "medio-mayoreo",
    badge: "Más popular",
    title: "Medio Mayoreo",
    subtitle: "Para tapiceros y talleres",
    range: "1,000 – 4,999 piezas",
    unitPrice: 2.15,
    minQty: 1000,
    features: [
      "Precio preferencial por volumen",
      "Argollas calibre 3/16 galvanizadas",
      "Lote empaquetado y etiquetado",
      "Tiempo de entrega reducido",
      "Soporte técnico incluido",
    ],
    ctaLabel: "Solicitar este volumen",
    highlight: true,
    whatsappUrl: whatsappTemplates.medioMayoreo,
  },
  {
    id: "mayoreo",
    title: "Mayoreo",
    subtitle: "Para distribuidores",
    range: "5,000+ piezas",
    unitPrice: 1.60,
    minQty: 5000,
    features: [
      "Mejor precio por unidad",
      "Producción bajo pedido especial",
      "Envío en paquetería industrial",
      "Facturación disponible",
      "Cuenta de cliente preferente",
    ],
    ctaLabel: "Solicitar este volumen",
    highlight: false,
    whatsappUrl: whatsappTemplates.mayoreo,
  },
];

const staggerDelays = ["delay-0", "delay-150", "delay-300"];

function formatMXN(value: number) {
  return value.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Pricing() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="precios" className="bg-zinc-50 dark:bg-slate-950 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown size={16} className="text-amber-500" />
            <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
              Modelos y volúmenes
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white max-w-xl">
            Tenemos el precio justo para cada escala de compra.
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm">
            Precios por pieza · IVA no incluido · Sujetos a disponibilidad
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.id}
              className={`relative flex flex-col border-2 transition-all duration-700 ${staggerDelays[i]} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                tier.highlight
                  ? "border-amber-500 bg-slate-900 dark:bg-slate-800 text-white shadow-2xl shadow-amber-500/10 sm:scale-[1.02] sm:hover:scale-[1.04]"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 text-slate-900 dark:text-white sm:hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-amber-500/5"
              } hover:border-amber-500/60 transition-all duration-300 cursor-default`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-badge-pop">
                  <span className="bg-amber-500 text-slate-900 text-xs font-bold tracking-widest uppercase px-4 py-1 shadow-lg shadow-amber-500/30">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Title */}
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      tier.highlight ? "text-amber-400" : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={`text-sm mt-0.5 ${
                      tier.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                </div>

                {/* Volume range */}
                <div
                  className={`text-sm font-semibold tracking-wide uppercase ${
                    tier.highlight ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {tier.range}
                </div>

                {/* ── Precio unitario ── */}
                <div
                  className={`rounded-lg p-4 ${
                    tier.highlight
                      ? "bg-slate-800/60 dark:bg-slate-900/60 border border-amber-500/20"
                      : "bg-zinc-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold tracking-widest uppercase mb-1 ${
                      tier.highlight ? "text-slate-400" : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    Precio unitario
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-4xl font-extrabold tabular-nums leading-none ${
                        tier.highlight ? "text-amber-400" : "text-amber-500"
                      } ${tier.highlight ? "animate-pulse-soft" : ""}`}
                    >
                      ${formatMXN(tier.unitPrice)}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        tier.highlight ? "text-slate-400" : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      MXN / pieza
                    </span>
                  </div>

                  {/* Total mínimo estimado */}
                  <div
                    className={`mt-2 pt-2 border-t ${
                      tier.highlight ? "border-slate-700" : "border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <p
                      className={`text-xs ${
                        tier.highlight ? "text-slate-400" : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      Total desde{" "}
                      <span
                        className={`font-bold ${
                          tier.highlight ? "text-white" : "text-slate-700 dark:text-slate-200"
                        }`}
                      >
                        ${formatMXN(tier.unitPrice * tier.minQty)} MXN
                      </span>
                      <span className="ml-1 opacity-70">
                        ({tier.minQty.toLocaleString("es-MX")} pzas)
                      </span>
                    </p>
                  </div>
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
                          tier.highlight ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 flex items-center justify-center gap-2 font-bold text-sm px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${
                    tier.highlight
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-900 hover:shadow-amber-500/40"
                      : "bg-slate-900 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white"
                  }`}
                >
                  <MessageCircle size={18} />
                  {tier.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <p
          className={`mt-8 text-center text-xs text-slate-400 dark:text-slate-500 transition-all duration-700 delay-500 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          ¿Tienes un volumen diferente o necesitas factura? Escríbenos y te cotizamos sin compromiso.
        </p>
      </div>
    </section>
  );
}
