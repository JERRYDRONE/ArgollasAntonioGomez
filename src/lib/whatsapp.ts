/**
 * ─── CONFIGURACIÓN DE WHATSAPP ───────────────────────────────────────────────
 */
export const WHATSAPP_NUMBER = "523318568357";

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ─── Plantillas de mensajes por tipo de venta ────────────────────────────────

export const whatsappTemplates = {
  menudeo: buildWhatsAppUrl(
    `Hola, me interesa cotizar argollas soldadas calibre 3/16 galvanizadas en volumen de MENUDEO (100 a 500 piezas).`
  ),

  medioMayoreo: buildWhatsAppUrl(
    `Hola, me interesa cotizar argollas soldadas calibre 3/16 galvanizadas en volumen de MEDIO MAYOREO (1,000 a 4,999 piezas).`
  ),

  mayoreo: buildWhatsAppUrl(
    `Hola, me interesa cotizar argollas soldadas calibre 3/16 galvanizadas en volumen de MAYOREO (5,000 piezas o más).`
  ),

  general: buildWhatsAppUrl(
    `Hola, me interesa cotizar argollas soldadas calibre 3/16 galvanizadas. ¿Me pueden dar información?`
  ),
} as const;

/** Genera un mensaje con la cantidad exacta elegida por el cliente, sin precios. */
export function buildCalculatorUrl(qty: number): string {
  return buildWhatsAppUrl(
    `Hola, me interesa cotizar *${qty.toLocaleString("es-MX")} argollas soldadas calibre 3/16 galvanizadas*. ¿Me pueden confirmar disponibilidad?`
  );
}


