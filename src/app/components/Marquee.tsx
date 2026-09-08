import { useReducedMotion } from "motion/react";

const NICHOS = [
  "Barberías",
  "Salones de uñas",
  "Consultorios dentales",
  "Veterinarias",
  "Spa",
  "Estética",
  "Studios de cejas y pestañas",
];

/** Tira horizontal con desplazamiento lento e infinito. Se pausa al pasar el mouse
 *  y se detiene por completo con prefers-reduced-motion. */
export function Marquee({ variant = "light" }: { variant?: "light" | "bold" }) {
  const reduce = useReducedMotion();
  const items = [...NICHOS, ...NICHOS];
  const bold = variant === "bold";

  return (
    <div
      className="border-y py-4"
      style={
        bold
          ? { borderColor: "rgba(255,255,255,0.1)", background: "#04123c" }
          : { borderColor: "#dbe6fb", background: "#eef3ff" }
      }
      aria-label="Negocios para los que trabaja el bot"
    >
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          className={
            reduce
              ? "flex flex-wrap justify-center gap-x-8 gap-y-2 px-6"
              : "flex w-max gap-10 whitespace-nowrap group-hover:[animation-play-state:paused]"
          }
          style={reduce ? undefined : { animation: "oukei-marquee 32s linear infinite" }}
        >
          {(reduce ? NICHOS : items).map((n, i) => (
            <span
              key={`${n}-${i}`}
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: bold ? "rgba(255,255,255,0.72)" : "var(--muted)" }}
            >
              <span style={{ color: bold ? "#FF6D2C" : "#006DFD" }}>·</span>&nbsp;&nbsp;{n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
