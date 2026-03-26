import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análisis & Estrategia",
    description: "Estudiamos tu negocio, mercado y competencia para diseñar una estrategia personalizada basada en datos.",
  },
  {
    icon: Lightbulb,
    title: "Diseño & Desarrollo",
    description: "Creamos soluciones tecnológicas a medida que combinan diseño excepcional con funcionalidad avanzada.",
  },
  {
    icon: Rocket,
    title: "Implementación & Lanzamiento",
    description: "Desplegamos sistemas robustos y escalables que empiezan a generar resultados desde el día uno.",
  },
  {
    icon: BarChart,
    title: "Optimización Continua",
    description: "Monitoreamos, analizamos y optimizamos constantemente para maximizar el ROI de tu inversión.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div id="proceso" ref={containerRef} className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Floating elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-[#006DFD]/20 to-[#FF6D2C]/20 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full text-sm mb-4 font-bold"
            style={{ background: '#FF6D2C', color: 'white', boxShadow: '0 4px 0 #C5522A' }}
          >
            Nuestro Proceso
          </motion.span>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 headline"
            style={{
              color: '#006DFD',
              textShadow: '3px 3px 0px #FF6D2C, 6px 6px 0px rgba(0,0,0,0.15)',
            }}
          >
            De la{" "}
            <span style={{
              color: '#FF6D2C',
              textShadow: '3px 3px 0px #006DFD, 6px 6px 0px rgba(0,0,0,0.15)',
            }}>
              idea al impacto
            </span>
          </h2>
          <p className="text-xl font-semibold max-w-3xl mx-auto" style={{ color: '#006DFD' }}>
            Un método probado que transforma visiones en resultados medibles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#006DFD]/0 via-[#006DFD]/50 via-[#FF6D2C]/50 to-[#FF6D2C]/0" />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-16 gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-left pl-20 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-block"
                    >
                      <div className="relative p-8 rounded-2xl overflow-hidden"
                        style={{ border: `2px solid ${index % 2 === 0 ? '#006DFD' : '#FF6D2C'}20`, background: 'white', boxShadow: `0 8px 0 ${index % 2 === 0 ? '#006DFD' : '#FF6D2C'}30, 0 15px 30px rgba(0,0,0,0.08)` }}>
                        <h3 className="text-3xl font-bold mb-4" style={{ color: index % 2 === 0 ? '#006DFD' : '#FF6D2C' }}>{step.title}</h3>
                        <p className="leading-relaxed text-lg" style={{ color: '#444' }}>{step.description}</p>


                      </div>
                    </motion.div>
                  </div>

                  {/* Icon circle */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#006DFD] to-[#FF6D2C] p-0.5">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <step.icon className="w-7 h-7" style={{ color: index % 2 === 0 ? '#006DFD' : '#FF6D2C' }} />
                        </div>
                      </div>

                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#006DFD] to-[#FF6D2C] blur-xl opacity-50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for even layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
