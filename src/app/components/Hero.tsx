import { motion, useReducedMotion } from "motion/react";
import { WhatsAppCTA } from "./WhatsAppButton";
import { CITY } from "@/config/site";

/* -------------------------------------------------------------------------- */
/*  Mock estático de conversación de WhatsApp — muestra el producto sin       */
/*  imágenes. Burbujas: cliente (gris, izq) / negocio (azul claro, der).     */
/* -------------------------------------------------------------------------- */
function ChatMock() {
  return (
    <div
      className="mx-auto w-full max-w-sm rounded-3xl border bg-white p-3"
      style={{ borderColor: "var(--hairline)", boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
    >
      {/* Encabezado */}
      <div className="flex items-center gap-3 rounded-2xl px-3 py-2" style={{ background: "#006DFD" }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold" style={{ color: "#006DFD" }}>
          B
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Barbería (tu negocio)</p>
          <p className="text-[11px] text-white/70">en línea · responde al instante</p>
        </div>
      </div>

      {/* Mensajes */}
      <div className="space-y-2 px-1 py-4">
        <Bubble side="in">Hola, ¿tienen espacio mañana para corte y barba?</Bubble>
        <Bubble side="out">
          ¡Claro! Mañana tengo <b>10:30</b>, <b>13:00</b> y <b>17:30</b>. ¿Cuál te acomoda?
        </Bubble>
        <Bubble side="in">La de las 5:30 pm</Bubble>
        <Bubble side="out">Perfecto, te la aparto.</Bubble>

        {/* Tarjeta de cita agendada */}
        <div
          className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm border p-3 text-sm"
          style={{ borderColor: "var(--hairline)", background: "#f5f7fa" }}
        >
          <p className="font-semibold" style={{ color: "#006DFD" }}>✓ Cita agendada</p>
          <p style={{ color: "var(--ink)" }}>Mañana · 17:30 · Corte + barba</p>
          <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
            Te enviaré un recordatorio 24 h y 2 h antes.
          </p>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const isOut = side === "out";
  return (
    <div
      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
        isOut ? "ml-auto rounded-tr-sm text-white" : "mr-auto rounded-tl-sm"
      }`}
      style={
        isOut
          ? { background: "#006DFD" }
          : { background: "#eef0f3", color: "var(--ink)" }
      }
    >
      {children}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  // El texto del hero es contenido crítico (LCP): visible desde el primer
  // frame. Solo un desplazamiento sutil, sin desvanecer opacidad.
  const rise = reduce
    ? {}
    : { initial: { y: 10 }, animate: { y: 0 } };

  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-40 lg:pb-28">
        {/* Columna de texto */}
        <div>
          <motion.p
            {...rise}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: "#006DFD" }}
          >
            Bot de citas por WhatsApp · {CITY}
          </motion.p>

          <motion.h1
            {...rise}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "var(--ink)" }}
          >
            Deja de perder citas por no contestar a tiempo.
          </motion.h1>

          <motion.p
            {...rise}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Instalamos un asistente en <b style={{ color: "var(--ink)" }}>tu</b> WhatsApp que
            responde al instante, agenda en tu calendario y le recuerda a tus clientes.
            Funcionando en 1–2 semanas.
          </motion.p>

          <motion.div
            {...rise}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <WhatsAppCTA analyticsId="wa-hero" message="Hola OÜKEI 👋 Quiero ver el demo del bot de citas para mi negocio.">
              Ver el demo en WhatsApp
            </WhatsAppCTA>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 font-bold transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "#006DFD", color: "#006DFD" }}
            >
              Ver cómo funciona
            </a>
          </motion.div>

          <motion.p
            {...rise}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-sm"
            style={{ color: "var(--muted)" }}
          >
            Para barberías, salones, dentistas, veterinarias y spa. Sin permanencia forzosa.
          </motion.p>
        </div>

        {/* Columna visual */}
        <motion.div
          {...(reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } })}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <ChatMock />
        </motion.div>
      </div>
    </section>
  );
}
