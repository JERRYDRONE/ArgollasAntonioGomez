/**
 * ─── CONFIGURACIÓN DE WHATSAPP ───────────────────────────────────────────────
 * Reemplaza WHATSAPP_NUMBER con el número real en formato internacional
 * sin el símbolo '+'. Ejemplo para México (lada 33): "5233XXXXXXXX"
 */
export const WHATSAPP_NUMBER = "5233XXXXXXXX";

/**
 * Construye la URL de WhatsApp con texto prellenado.
 * @param text - Mensaje que verá el usuario al abrir la conversación.
 */
export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
