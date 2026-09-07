import { Reveal } from "./Reveal";

const pasos = [
  {
    titulo: "Conectamos tu número",
    texto:
      "Usamos tu WhatsApp actual. Tus clientes no notan ningún cambio, solo que ahora respondes al instante.",
  },
  {
    titulo: "Cargamos tu negocio",
    texto:
      "Servicios, precios, horarios y las preguntas frecuentes reales que ya te hacen todos los días.",
  },
  {
    titulo: "El bot atiende y agenda",
    texto:
      "Responde en segundos y escribe la cita directo en tu Google Calendar. Manda recordatorio 24 h y 2 h antes.",
  },
  {
    titulo: "Tú tienes el control",
    texto:
      "Ves todas las citas y retomas la conversación cuando quieras. Una palabra clave te pasa el chat al instante.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 md:py-28" style={{ background: "#f5f7fa" }}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#006DFD" }}>
            Cómo funciona
          </p>
          <h2
            className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            Tu WhatsApp, trabajando solo en 4 pasos
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 0.08}>
              <div
                className="h-full rounded-2xl bg-white p-6"
                style={{ boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.05)" }}
              >
                <div className="text-3xl font-bold" style={{ color: "#006DFD" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-lg font-bold" style={{ color: "var(--ink)" }}>
                  {p.titulo}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
