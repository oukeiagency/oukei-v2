import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WhatsAppCTA } from "./WhatsAppButton";
import { CITY } from "@/config/site";

/* -------------------------------------------------------------------------- */
/*  Conversación de WhatsApp que se "escribe sola" en bucle lento. Muestra el */
/*  producto en movimiento sin caos: un solo elemento, transiciones suaves.  */
/* -------------------------------------------------------------------------- */

// step -> qué se ve. Ver comentario de tiempos abajo.
const STEPS_MS = [400, 1500, 2500, 3500, 4700, 5600, 6700];
const LOOP_MS = 10500;

function Typing() {
  return (
    <div
      className="mr-auto flex items-center gap-1 rounded-2xl rounded-tl-sm px-3 py-3"
      style={{ background: "#eef0f3" }}
      aria-label="escribiendo"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: "#9aa3af" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

function Bubble({
  side,
  children,
}: {
  side: "in" | "out";
  children: React.ReactNode;
}) {
  const isOut = side === "out";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
        isOut ? "ml-auto rounded-tr-sm text-white" : "mr-auto rounded-tl-sm"
      }`}
      style={isOut ? { background: "#006DFD" } : { background: "#eef0f3", color: "var(--ink)" }}
    >
      {children}
    </motion.div>
  );
}

function ChatMock() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? 99 : 0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    setStep(0);
    const timers = STEPS_MS.map((ms, i) => setTimeout(() => setStep(i + 1), ms));
    // Se repite un par de veces y luego se queda en la conversación completa.
    const loop =
      cycle < 2 ? setTimeout(() => setCycle((c) => c + 1), LOOP_MS) : undefined;
    return () => {
      timers.forEach(clearTimeout);
      if (loop) clearTimeout(loop);
    };
  }, [cycle, reduce]);

  return (
    <motion.div
      className="mx-auto w-full max-w-sm rounded-[26px] border bg-white p-3"
      style={{
        borderColor: "var(--hairline)",
        boxShadow:
          "0 34px 80px -24px rgba(0,109,253,0.38), 0 14px 44px rgba(0,0,0,0.10)",
      }}
      animate={reduce ? undefined : { y: [0, -7, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
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

      {/* Mensajes (se revelan por pasos y el ciclo se reinicia solo) */}
      <div className="flex min-h-[268px] flex-col justify-end gap-2 px-1 py-4">
        {step >= 1 && (
          <Bubble side="in">Hola, ¿tienen espacio mañana para corte y barba?</Bubble>
        )}
        {step === 2 && <Typing />}
        {step >= 3 && (
          <Bubble side="out">
            ¡Claro! Mañana tengo <b>10:30</b>, <b>13:00</b> y <b>17:30</b>. ¿Cuál te acomoda?
          </Bubble>
        )}
        {step >= 4 && <Bubble side="in">La de las 5:30 pm</Bubble>}
        {step === 5 && <Typing />}
        {step >= 6 && <Bubble side="out">Perfecto, te la aparto.</Bubble>}
        {step >= 7 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm border p-3 text-sm"
            style={{ borderColor: "var(--hairline)", background: "#f5f7fa" }}
          >
            <p className="font-semibold" style={{ color: "#006DFD" }}>✓ Cita agendada</p>
            <p style={{ color: "var(--ink)" }}>Mañana · 17:30 · Corte + barba</p>
            <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
              Te enviaré un recordatorio 24 h y 2 h antes.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */

function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26'%3E%3Ccircle cx='1.5' cy='1.5' r='1.5' fill='%23006DFD' fill-opacity='0.13'/%3E%3C/svg%3E\")",
        maskImage: "radial-gradient(120% 90% at 15% 0%, #000 0%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(120% 90% at 15% 0%, #000 0%, transparent 70%)",
      }}
    />
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const rise = reduce
    ? {}
    : { initial: { y: 10 }, animate: { y: 0 } };

  return (
    <section className="relative overflow-hidden bg-white">
      <DotGrid />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36 lg:pb-16">
        {/* Texto */}
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
            <WhatsAppCTA
              analyticsId="wa-hero"
              className="[animation:oukei-breathe_3.4s_ease-in-out_infinite]"
              message="Hola OÜKEI 👋 Quiero ver el demo del bot de citas para mi negocio."
            >
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

        {/* Visual */}
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
