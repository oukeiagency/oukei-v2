import { Reveal } from "./Reveal";
import { WhatsAppCTA } from "./WhatsAppButton";

const casos = [
  {
    metrica: "−85%",
    metricaLabel: "consultas manuales por WhatsApp",
    texto:
      "Asistente con IA para un condominio: responde al instante dudas de reglamento, mantenimiento y áreas comunes, 24/7.",
    stack: "n8n · Supabase · OpenAI",
  },
  {
    metrica: "−100%",
    metricaLabel: "captura manual de tickets",
    texto:
      "Contabilidad automática: el empleado manda foto del ticket por WhatsApp y la IA extrae monto, IVA y proveedor, y lo registra sola.",
    stack: "WhatsApp · OCR · Google Sheets",
  },
  {
    metrica: "+40%",
    metricaLabel: "cierre de propuestas",
    texto:
      "Propuestas comerciales en 5 minutos: al terminar la llamada, la IA arma el documento con la marca del cliente y lo envía por correo.",
    stack: "IA · Google Docs · Gmail",
  },
];

export function Prueba() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#f5f7fa" }}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#006DFD" }}>
            Confianza
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl" style={{ color: "var(--ink)" }}>
            Esto ya lo hemos construido
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            OÜKEI está arrancando con negocios de citas en Querétaro. Mientras cerramos
            nuestro primer caso local, esto es lo que nuestro fundador ya implementó
            como consultor de automatización:
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {casos.map((c, i) => (
            <Reveal key={c.metricaLabel} delay={i * 0.08}>
              <div
                className="h-full rounded-2xl bg-white p-6"
                style={{ boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.05)" }}
              >
                <div className="text-3xl font-bold" style={{ color: "#006DFD" }}>
                  {c.metrica}
                </div>
                <div className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                  {c.metricaLabel}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {c.texto}
                </p>
                <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
                  {c.stack}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
            También llevamos las redes sociales y el contenido de <b>Kiwi</b>, marca de
            terminales de pago.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="mt-10 flex flex-col items-start gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--hairline)", background: "white" }}
          >
            <p className="text-lg font-semibold" style={{ color: "var(--ink)" }}>
              ¿Quieres ver el bot en acción? Escríbele ahora mismo.
            </p>
            <WhatsAppCTA
              analyticsId="wa-demo"
              message="Hola OÜKEI 👋 Quiero probar el demo del bot de citas."
            >
              Probar el demo
            </WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
