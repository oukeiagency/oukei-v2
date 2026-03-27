import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import oukei2 from "@/assets/OUKEI-2.png";
import oukei3 from "@/assets/OUKEI-3.png";

const floatingLogos = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  src: i % 2 === 0 ? oukei2 : oukei3,
  size: Math.random() * 28 + 18,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 2 + Math.random() * 2,
  delay: Math.random() * 4,
}));

const bodyLines = [
  "En Oükei no solo ejecutamos.",
  "Pensamos, construimos y optimizamos cada solución como parte de un sistema completo.",
  "Integramos creatividad, tecnología y estrategia en un mismo flujo.",
];

const cyclingPhrases = [
  "dar vida a tus ideas más ambiciosas.",
  "hacer que todo funcione en conjunto.",
  "transformar tu visión en una realidad digital.",
  "acelerar el éxito de tu negocio.",
];

function CyclingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cyclingPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ color: "#FF6D2C", display: "inline-block", minWidth: "100%" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ display: "inline-block" }}
        >
          {cyclingPhrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Diferencial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-white">
      {/* Floating mini logos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingLogos.map((logo) => (
          <motion.img
            key={`dif-logo-${logo.id}`}
            src={logo.src}
            alt=""
            className="absolute"
            style={{
              width: logo.size,
              height: logo.size,
              left: `${logo.left}%`,
              top: `${logo.top}%`,
              objectFit: "contain",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: logo.duration, repeat: Infinity, delay: logo.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Top orange bar */}
      <div style={{ height: "6px", background: "linear-gradient(90deg, #006DFD, #FF6D2C)" }} />

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row lg:gap-24 items-start">

          {/* Left — headline */}
          <div className="lg:w-1/2 mb-16 lg:mb-0 lg:sticky lg:top-32">
            <motion.p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
              style={{ color: "#FF6D2C" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Diferencial
            </motion.p>

            <div className="overflow-hidden">
              {"No somos una agencia más".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-3 font-black headline"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    lineHeight: 1.1,
                    color: word === "más" ? "#FF6D2C" : "#006DFD",
                    textShadow: word === "más"
                      ? "3px 3px 0px rgba(0,109,253,0.25)"
                      : "3px 3px 0px rgba(255,109,44,0.2)",
                  }}
                  initial={{ y: 80, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Accent line */}
            <motion.div
              className="mt-8 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #006DFD, #FF6D2C)" }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Right — body */}
          <div className="lg:w-1/2 space-y-6">
            {bodyLines.map((line, i) => (
              <motion.div
                key={i}
                className="relative pl-6 py-4 rounded-r-2xl overflow-hidden"
                style={{
                  borderLeft: `4px solid ${i % 2 === 0 ? "#006DFD" : "#FF6D2C"}`,
                  background: i % 2 === 0
                    ? "rgba(0,109,253,0.04)"
                    : "rgba(255,109,44,0.04)",
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
              >
                <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#1a1a1a", fontWeight: 500 }}>
                  {line}
                </p>
              </motion.div>
            ))}

            {/* Last card with cycling text */}
            <motion.div
              className="relative pl-6 py-4 rounded-r-2xl overflow-hidden"
              style={{
                borderLeft: "4px solid #FF6D2C",
                background: "rgba(255,109,44,0.04)",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + 3 * 0.15, ease: "easeOut" }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
            >
              <p className="text-lg md:text-xl leading-relaxed font-bold" style={{ color: "#006DFD" }}>
                Eso nos permite hacer lo que muchos no pueden:{" "}
                <CyclingText />
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
