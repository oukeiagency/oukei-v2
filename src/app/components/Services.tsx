import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Sparkles, Brain, Zap } from "lucide-react";

const services = [
  {
    emoji: "📈",
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Estrategias enfocadas en resultados: más clientes, más conversiones, más crecimiento.",
    color: "from-[#FF6D2C] to-[#FF8844]",
  },
  {
    emoji: "🎨",
    icon: Sparkles,
    title: "Experiencias Digitales",
    description: "Diseñamos productos y experiencias que no solo se ven bien, sino que funcionan.",
    color: "from-[#006DFD] to-[#FF6D2C]",
  },
  {
    emoji: "🤖",
    icon: Brain,
    title: "Inteligencia Artificial",
    description: "Implementamos soluciones que optimizan procesos, mejoran la experiencia del cliente y predicen oportunidades de crecimiento.",
    color: "from-[#006DFD] to-[#0088FF]",
  },
  {
    emoji: "⚙️",
    icon: Zap,
    title: "Automatización",
    description: "Eliminamos tareas repetitivas y conectamos tus herramientas para que tu negocio funcione de forma más eficiente.",
    color: "from-[#0088FF] to-[#FF6D2C]",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div
      id="servicios"
      ref={containerRef}
      className="relative pt-16 pb-32 px-6 overflow-hidden"
      style={{ background: "#006DFD" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6 headline"
            style={{
              color: 'white',
              textShadow: '3px 3px 0px #FF6D2C, 6px 6px 0px rgba(0,0,0,0.3)',
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Soluciones diseñadas para crecer contigo
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
          >
            <p className="text-xl font-semibold" style={{ color: 'white', textShadow: '2px 2px 0px #FF6D2C, 4px 4px 0px rgba(0,0,0,0.2)' }}>
              No creemos en servicios aislados.<br />
              Creamos ecosistemas donde cada pieza trabaja en conjunto para generar resultados reales.
            </p>
          </motion.div>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className="relative h-full p-8 rounded-3xl bg-white overflow-hidden"
                style={{ boxShadow: "0 8px 0 rgba(0,0,0,0.2)" }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center relative"
                    style={{
                      background: index % 2 === 0 ? "#006DFD" : "#FF6D2C",
                      boxShadow: `0 6px 0 ${index % 2 === 0 ? "#CC5522" : "#0052CC"}, 0 12px 24px ${index % 2 === 0 ? "rgba(255,109,44,0.5)" : "rgba(0,109,253,0.5)"}`,
                    }}
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <service.icon className="w-10 h-10 text-white relative z-10" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: index % 2 === 0 ? "#006DFD" : "#FF6D2C" }}
                >
                  {service.emoji} {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
