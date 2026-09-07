import { LEAD_ENDPOINT, waLink } from "@/config/site";
import { track } from "./analytics";

export type Lead = {
  nombre: string;
  telefono: string;
  tipoNegocio: string;
};

/**
 * Procesa un lead del formulario:
 *  1. Si hay LEAD_ENDPOINT configurado, lo envía ahí (Cloudflare Worker →
 *     Notion CRM + Telegram). Los errores no bloquean al usuario.
 *  2. Siempre abre WhatsApp con los datos ya escritos.
 *  3. Registra el evento en analítica.
 */
export async function submitLead(lead: Lead): Promise<void> {
  track("lead_submit", { tipo: lead.tipoNegocio });

  if (LEAD_ENDPOINT) {
    try {
      await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, origen: "landing", ts: Date.now() }),
        keepalive: true,
      });
    } catch (err) {
      if (import.meta.env.DEV) console.warn("submitLead endpoint falló:", err);
    }
  }

  const msg = `Hola OÜKEI 👋 Soy ${lead.nombre} (${lead.tipoNegocio}). Mi WhatsApp: ${lead.telefono}. Quiero ver el demo del bot de citas.`;
  window.open(waLink(msg), "_blank", "noopener,noreferrer");
}
