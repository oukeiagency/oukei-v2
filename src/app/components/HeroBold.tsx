import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WhatsAppCTA } from "./WhatsAppButton";
import { ChatMock } from "./ChatMock";
import { ParticleField } from "./ParticleField";
import { CITY } from "@/config/site";

/** Hero de la versión "bold": fondo azul profundo, partículas, titular con
 *  palabra en naranja y panel de chat con inclinación 3D según el mouse. */
export function HeroBold() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 10, ry: px * 12 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#04123c" }}
    >
      <ParticleField />
      {/* velo para contraste del texto (color plano, sin gradiente) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(4,18,60,0.45)" }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36 lg:pb-20">
        <div>
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "#FF6D2C" }}
          >
            Bot de citas por WhatsApp · {CITY}
          </motion.p>

          <h1
            className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4rem]"
          >
            Deja de perder{" "}
            <span style={{ color: "#FF6D2C" }}>citas</span> por no contestar a tiempo.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Instalamos un asistente en <b className="text-white">tu</b> WhatsApp que responde
            al instante, agenda en tu calendario y le recuerda a tus clientes. Funcionando
            en 1–2 semanas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA
              analyticsId="wa-hero"
              className="[animation:oukei-breathe_3.4s_ease-in-out_infinite]"
              message="Hola OÜKEI 👋 Quiero ver el demo del bot de citas para mi negocio."
            >
              Ver el demo en WhatsApp
            </WhatsAppCTA>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border-2 px-7 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              Ver cómo funciona
            </a>
          </div>

          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Para barberías, salones, dentistas, veterinarias y spa. Sin permanencia forzosa.
          </p>
        </div>

        {/* Panel con inclinación 3D */}
        <div
          ref={wrapRef}
          onPointerMove={onMove}
          onPointerLeave={reset}
          style={{ perspective: "1000px" }}
        >
          <div
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.25s ease-out",
            }}
          >
            <ChatMock float={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
