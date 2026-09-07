import { Reveal, MaskReveal } from "./Reveal";

const dolores = [
  {
    titulo: "Pierdes citas por no contestar a tiempo",
    texto:
      "Cuando por fin ves el mensaje, el cliente ya reservó en otro lado. Cada respuesta tardía es una cita menos.",
  },
  {
    titulo: "Se te va el día en el teléfono",
    texto:
      "Contestar “¿tienen espacio mañana?” cuarenta veces al día no es tu trabajo, pero alguien lo tiene que hacer.",
  },
  {
    titulo: "Los clientes no llegan y no avisan",
    texto:
      "Sin recordatorios automáticos, cada hueco en la agenda es tiempo y dinero que no vuelven.",
  },
];

export function Problema() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#006DFD" }}>
            El problema
          </p>
          <MaskReveal
            as="h2"
            className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-4xl"
            style={{ color: "var(--ink)" }}
          >
            Si tu negocio agenda por WhatsApp, esto te suena
          </MaskReveal>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dolores.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 0.08}>
              <div
                className="h-full rounded-2xl border p-6"
                style={{
                  borderColor: "var(--hairline)",
                  boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.05)",
                }}
              >
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: "#eef3ff", color: "#006DFD" }}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
                  {d.titulo}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {d.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
