import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/* Conversación de WhatsApp que se "escribe sola" un par de veces y se queda
   completa. Un solo elemento animado, transiciones suaves. */

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

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
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

export function ChatMock({ float = true }: { float?: boolean }) {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? 99 : 0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (reduce) return;
    setStep(0);
    const timers = STEPS_MS.map((ms, i) => setTimeout(() => setStep(i + 1), ms));
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
      animate={reduce || !float ? undefined : { y: [0, -7, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-3 rounded-2xl px-3 py-2" style={{ background: "#006DFD" }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold" style={{ color: "#006DFD" }}>
          B
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">Barbería (tu negocio)</p>
          <p className="text-[11px] text-white/70">en línea · responde al instante</p>
        </div>
      </div>

      <div className="flex min-h-[268px] flex-col justify-end gap-2 px-1 py-4">
        {step >= 1 && <Bubble side="in">Hola, ¿tienen espacio mañana para corte y barba?</Bubble>}
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
