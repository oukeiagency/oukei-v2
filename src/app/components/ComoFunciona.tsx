import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { MaskReveal } from "./Reveal";

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

function Paso({
  i,
  titulo,
  texto,
  onActive,
  active,
}: {
  i: number;
  titulo: string;
  texto: string;
  onActive: (i: number) => void;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(i);
  }, [inView, i, onActive]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border bg-white p-6 transition-all duration-300 md:p-8"
      style={{
        borderColor: active ? "#006DFD" : "var(--hairline)",
        boxShadow: active
          ? "0 18px 44px -14px rgba(0,109,253,0.25)"
          : "0 1px 2px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.05)",
        transform: active ? "translateY(-2px)" : "none",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm font-bold transition-colors"
          style={{
            background: active ? "#006DFD" : "#eef3ff",
            color: active ? "#fff" : "#006DFD",
          }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
          {titulo}
        </h3>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
        {texto}
      </p>
    </div>
  );
}

export function ComoFunciona() {
  const [active, setActive] = useState(0);

  return (
    <section id="como-funciona" className="py-20 md:py-28" style={{ background: "#f5f7fa" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Columna sticky */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#006DFD" }}>
            Cómo funciona
          </p>
          <MaskReveal
            as="h2"
            className="mt-3 text-3xl font-bold leading-tight md:text-4xl"
          >
            Tu WhatsApp, trabajando solo en 4 pasos
          </MaskReveal>

          {/* Indicador de progreso (solo desktop) */}
          <div className="mt-10 hidden lg:flex lg:gap-4">
            <div className="relative w-1 flex-none rounded-full" style={{ background: "#dfe4ec" }}>
              <motion.div
                className="absolute left-0 top-0 w-full rounded-full"
                style={{ background: "#006DFD" }}
                animate={{ height: `${((active + 1) / pasos.length) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <ul className="space-y-4">
              {pasos.map((p, i) => (
                <li
                  key={p.titulo}
                  className="text-sm font-semibold transition-colors"
                  style={{ color: i === active ? "#006DFD" : "var(--muted)" }}
                >
                  {String(i + 1).padStart(2, "0")} · {p.titulo}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna de pasos */}
        <div className="space-y-5 lg:space-y-8">
          {pasos.map((p, i) => (
            <Paso
              key={p.titulo}
              i={i}
              titulo={p.titulo}
              texto={p.texto}
              active={i === active}
              onActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
