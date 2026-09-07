import { Reveal } from "./Reveal";
import { WhatsAppCTA } from "./WhatsAppButton";

const incluye = [
  "Mensaje de bienvenida con el tono de tu negocio",
  "Respuestas a preguntas frecuentes: servicios, precios, ubicación y horarios",
  "Agenda conectada a tu Google Calendar",
  "Recordatorio automático 24 h y 2 h antes de la cita",
  "Seguimiento a quien no llegó, para reagendar",
  "Palabra clave para hablar con una persona",
  "Reporte semanal de citas y ausencias",
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#eef3ff" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#006DFD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PaqueteStarter() {
  return (
    <section id="paquete" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#006DFD" }}>
            Paquete Starter
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl" style={{ color: "var(--ink)" }}>
            Nunca más pierdas una cita
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Qué incluye */}
          <Reveal>
            <ul className="space-y-3">
              {incluye.map((item) => (
                <li key={item} className="flex gap-3 text-[15px]" style={{ color: "var(--ink)" }}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Precio */}
          <Reveal delay={0.1}>
            <div
              className="rounded-2xl border p-7"
              style={{
                borderColor: "var(--hairline)",
                boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.06)",
              }}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: "var(--ink)" }}>
                  $6,500
                </span>
                <span style={{ color: "var(--muted)" }}>setup único MXN</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold" style={{ color: "var(--ink)" }}>
                  $1,200
                </span>
                <span style={{ color: "var(--muted)" }}>al mes MXN</span>
              </div>

              <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                <li>· Implementación en 1–2 semanas</li>
                <li>· Sin permanencia forzosa</li>
                <li>· Soporte y ajustes incluidos en la mensualidad</li>
              </ul>

              <div
                className="mt-5 rounded-xl p-3 text-sm"
                style={{ background: "#eef3ff", color: "#0b3ea8" }}
              >
                <b>Precio fundador:</b> para los primeros negocios, el setup va a mitad
                de precio o diferido.
              </div>

              <WhatsAppCTA
                analyticsId="wa-paquete"
                className="mt-6 w-full"
                message="Hola OÜKEI 👋 Me interesa el Paquete Starter del bot de citas. ¿Me cuentan más?"
              >
                Lo quiero para mi negocio
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
