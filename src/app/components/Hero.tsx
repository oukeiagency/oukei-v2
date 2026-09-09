import { motion, useReducedMotion } from "motion/react";
import { WhatsAppCTA } from "./WhatsAppButton";
import { ChatMock } from "./ChatMock";
import { CITY } from "@/config/site";

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
            responde al instante, agenda en tu calendario y les recuerda su cita a tus
            clientes. Funcionando en 1–2 semanas.
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
