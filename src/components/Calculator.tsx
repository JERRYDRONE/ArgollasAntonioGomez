"use client";

import { useState, useMemo } from "react";
import { MessageCircle, Calculator as CalcIcon, AlertCircle } from "lucide-react";
import { buildCalculatorUrl } from "@/lib/whatsapp";
import { useInView } from "@/lib/useInView";

// ─── Lógica de rangos ────────────────────────────────────────────────────────

type Tier = {
  label: string;
  unitPrice: number;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
};

function getTier(qty: number): Tier | null {
  if (qty >= 5000)
    return {
      label: "Mayoreo",
      unitPrice: 1.60,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-400",
      textColor: "text-emerald-700 dark:text-emerald-300",
    };
  if (qty >= 1000)
    return {
      label: "Medio Mayoreo",
      unitPrice: 2.15,
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "border-amber-400",
      textColor: "text-amber-700 dark:text-amber-300",
    };
  if (qty >= 100)
    return {
      label: "Menudeo",
      unitPrice: 3.50,
      color: "text-sky-500",
      bgColor: "bg-sky-50 dark:bg-sky-950/30",
      borderColor: "border-sky-400",
      textColor: "text-sky-700 dark:text-sky-300",
    };
  return null;
}

function formatMXN(n: number) {
  return n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Rangos rápidos ──────────────────────────────────────────────────────────

const quickRanges = [
  { label: "100 pzas", value: 100 },
  { label: "250 pzas", value: 250 },
  { label: "500 pzas", value: 500 },
  { label: "1,000 pzas", value: 1000 },
  { label: "2,500 pzas", value: 2500 },
  { label: "5,000 pzas", value: 5000 },
  { label: "10,000 pzas", value: 10000 },
];

// ─── Componente ──────────────────────────────────────────────────────────────

export default function Calculator() {
  const [input, setInput] = useState<string>("500");
  const { ref, inView } = useInView<HTMLDivElement>();

  const qty = useMemo(() => {
    const n = parseInt(input.replace(/\D/g, ""), 10);
    return isNaN(n) ? 0 : n;
  }, [input]);

  const tier = getTier(qty);
  const total = tier ? tier.unitPrice * qty : null;

  function handleInput(val: string) {
    // Solo dígitos, sin ceros a la izquierda
    const clean = val.replace(/\D/g, "").replace(/^0+/, "") || "";
    setInput(clean);
  }

  return (
    <section className="bg-zinc-50 dark:bg-slate-900 py-16 sm:py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <CalcIcon size={16} className="text-amber-500" />
            <p className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
              Calculadora de pedido
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            ¿Cuántas argollas necesitas?
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
            Ingresa la cantidad y calcula el costo estimado al instante.
          </p>
        </div>

        {/* Card */}
        <div
          className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-700 delay-150 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Input row */}
          <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-700">
            <label
              htmlFor="qty-input"
              className="block text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3 tracking-wide uppercase"
            >
              Cantidad de piezas
            </label>

            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <input
                  id="qty-input"
                  type="text"
                  inputMode="numeric"
                  value={input}
                  onChange={(e) => handleInput(e.target.value)}
                  placeholder="Ej. 500"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  className="w-full text-2xl sm:text-3xl font-bold tabular-nums bg-transparent border-b-2 border-slate-300 dark:border-slate-600 focus:border-amber-500 dark:focus:border-amber-400 outline-none pb-1 text-slate-900 dark:text-white transition-colors duration-200 pr-16"
                />
                <span className="absolute right-0 bottom-1 text-slate-400 dark:text-slate-500 text-sm font-medium">
                  piezas
                </span>
              </div>
            </div>

            {/* Quick range buttons */}
            <div className="flex flex-wrap gap-2 mt-5">
              {quickRanges.map((r) => (
                <button
                  type="button"
                  key={r.value}
                  onClick={() => setInput(String(r.value))}
                  className={`px-3 py-1.5 text-xs font-semibold border rounded-full transition-colors duration-150 ${
                    qty === r.value
                      ? "bg-amber-500 border-amber-500 text-slate-900 shadow-sm shadow-amber-400/30"
                      : "border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-amber-400 dark:hover:border-amber-500"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="p-6 sm:p-8">
            {qty === 0 ? (
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center py-4">
                Ingresa una cantidad para ver el precio estimado.
              </p>
            ) : qty < 100 ? (
              <div className="flex items-start gap-3 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-lg">
                <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-rose-700 dark:text-rose-300 font-semibold text-sm">
                    Pedido mínimo: 100 piezas
                  </p>
                  <p className="text-rose-500 dark:text-rose-400 text-xs mt-0.5">
                    Escríbenos si tienes dudas sobre pedidos especiales.
                  </p>
                </div>
              </div>
            ) : qty > 500 && qty < 1000 ? (
              <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg">
                <AlertCircle size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-orange-700 dark:text-orange-300 font-semibold text-sm">
                    Volumen intermedio (501 – 999 piezas)
                  </p>
                  <p className="text-orange-500 dark:text-orange-400 text-xs mt-0.5">
                    Este rango está fuera de los paquetes estándar. Contáctanos para una cotización personalizada.
                  </p>
                </div>
              </div>
            ) : (
              tier && (
                <div
                  className={`rounded-lg border-2 ${tier.borderColor} ${tier.bgColor} p-5 transition-all duration-300`}
                >
                  {/* Tier badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${tier.borderColor} ${tier.color} bg-white dark:bg-slate-800`}
                    >
                      {tier.label}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      Precio estimado
                    </span>
                  </div>

                  {/* Prices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">
                        Precio unitario
                      </p>
                      <p className={`text-xl sm:text-2xl font-extrabold tabular-nums ${tier.color}`}>
                        ${formatMXN(tier.unitPrice)}
                        <span className="text-sm font-medium text-slate-400 dark:text-slate-500 ml-1">
                          MXN
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium">
                        Total estimado
                      </p>
                      <p className={`text-xl sm:text-2xl font-extrabold tabular-nums ${tier.textColor}`}>
                        ${formatMXN(total!)}
                        <span className="text-sm font-medium text-slate-400 dark:text-slate-500 ml-1">
                          MXN
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">
                    * Precio estimado, sujeto a confirmación. IVA no incluido.
                  </p>
                </div>
              )
            )}

            {/* CTA */}
            {qty >= 100 && !(qty > 500 && qty < 1000) && (
              <a
                href={buildCalculatorUrl(qty)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-900 font-bold text-sm px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 active:translate-y-0"
              >
                <MessageCircle size={18} />
                Cotizar {qty.toLocaleString("es-MX")} piezas por WhatsApp
              </a>
            )}

            {(qty > 500 && qty < 1000) && (
              <a
                href={buildCalculatorUrl(qty)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 w-full bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold text-sm px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                <MessageCircle size={18} />
                Consultar disponibilidad para {qty.toLocaleString("es-MX")} piezas
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
