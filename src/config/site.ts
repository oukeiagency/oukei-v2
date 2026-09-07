// Configuración central del sitio OÜKEI.
// TODO(Carlos): sustituir WHATSAPP_NUMBER por el número real de WhatsApp Business
// (formato: 52 + 10 dígitos, sin "+", sin espacios). Ej: "524421234567".
export const WHATSAPP_NUMBER = "524420000000";

// Cambia a true cuando WHATSAPP_NUMBER sea el número real.
export const WHATSAPP_CONFIGURED = false;

export const CONTACT_EMAIL = "contacto@oukei.com.mx"; // destino: Cloudflare Email Routing → Gmail (pendiente de configurar)
export const PRIVACY_EMAIL = "privacidad@oukei.com.mx";
export const SITE_URL = "https://oukei.com.mx";
export const CITY = "Querétaro";

// Datos legales del responsable (persona física con actividad empresarial, sin sociedad constituida aún).
export const LEGAL_RESPONSIBLE = "Carlos Barragán, operando bajo la marca “Oükei” (Oükei Agency)";
export const LEGAL_ADDRESS =
  "Av. Paseo del Lirio Oriente 200, El Marqués, Querétaro, C.P. 76269";

const DEFAULT_WA_MESSAGE =
  "Hola OÜKEI 👋 Quiero ver el demo del bot de citas para mi negocio.";

/** Construye un enlace wa.me con mensaje pre-cargado. */
export function waLink(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
