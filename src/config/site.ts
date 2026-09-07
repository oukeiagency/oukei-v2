// Configuración central del sitio OÜKEI.
// TODO(Carlos): sustituir WHATSAPP_NUMBER por el número real de WhatsApp Business
// (formato: 52 + 10 dígitos, sin "+", sin espacios). Ej: "524421234567".
export const WHATSAPP_NUMBER = "524420000000";

// Cambia a true cuando WHATSAPP_NUMBER sea el número real.
export const WHATSAPP_CONFIGURED = false;

export const CONTACT_EMAIL = "hola@oukei.com.mx"; // TODO: confirmar buzón (o oukei.agency@gmail.com)
export const SITE_URL = "https://oukei.com.mx";
export const CITY = "Querétaro";

const DEFAULT_WA_MESSAGE =
  "Hola OÜKEI 👋 Quiero ver el demo del bot de citas para mi negocio.";

/** Construye un enlace wa.me con mensaje pre-cargado. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
