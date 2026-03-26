import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const cases = [
  {
    client: "TechCorp",
    industry: "E-commerce",
    title: "300% de incremento en conversión",
    description: "Implementación de IA para personalización de productos y chatbot inteligente",
    metrics: [
      { label: "Conversión", value: "+300%" },
      { label: "Revenue", value: "+2.4M" },
    ],
    gradient: "from-[#006DFD] to-[#0088FF]",
  },
  {
    client: "FinanceHub",
    industry: "Fintech",
    title: "Automatización de 85% de procesos",
    description: "Sistema de automatización con ML para análisis de riesgo crediticio",
    metrics: [
      { label: "Tiempo ahorrado", value: "400hrs/mes" },
      { label: "Precisión", value: "98.5%" },
    ],
    gradient: "from-[#FF6D2C] to-[#FF8844]",
  },
  {
    client: "HealthPlus",
    industry: "Healthtech",
    title: "50K usuarios en 6 meses",
    description: "Plataforma de telemedicina con IA para diagnóstico preliminar",
    metrics: [
      { label: "Usuarios", value: "50K+" },
      { label: "Satisfacción", value: "4.9/5" },
    ],
    gradient: "from-[#006DFD] to-[#FF6D2C]",
  },
];

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div id="casos" ref={containerRef} className="relative py-32 px-6 overflow-hidden" style={{ background: '#006DFD' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 109, 253, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
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
            Casos de Éxito
          </motion.span>
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 headline"
            style={{ color: 'white', textShadow: '3px 3px 0px #FF6D2C, 6px 6px 0px rgba(0,0,0,0.2)' }}
          >
            Resultados{" "}
            <span style={{ color: '#FFD700', textShadow: '3px 3px 0px #FF6D2C, 6px 6px 0px rgba(0,0,0,0.2)' }}>
              que hablan
            </span>
          </h2>
          <p className="text-xl font-semibold max-w-3xl mx-auto" style={{ color: 'white' }}>
            Transformaciones reales de empresas que confiaron en nuestra experiencia
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl overflow-hidden" style={{ background: 'white', boxShadow: '0 8px 0 rgba(0,0,0,0.2), 0 15px 30px rgba(0,0,0,0.1)' }}>
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${caseStudy.gradient}`} />

                {/* Hover gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Client info */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-1" style={{ color: '#006DFD' }}>{caseStudy.client}</h3>
                      <p className="text-sm font-medium" style={{ color: '#FF6D2C' }}>{caseStudy.industry}</p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: '#006DFD' }} />
                  </div>

                  {/* Title */}
                  <h4 className={`text-xl font-bold mb-4 bg-gradient-to-r ${caseStudy.gradient} bg-clip-text text-transparent`}>
                    {caseStudy.title}
                  </h4>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed font-medium" style={{ color: '#444' }}>{caseStudy.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6" style={{ borderTop: '2px solid #006DFD20' }}>
                    {caseStudy.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="flex items-center gap-1 text-xs mb-1 font-medium" style={{ color: '#FF6D2C' }}>
                          <TrendingUp className="w-3 h-3" />
                          {metric.label}
                        </div>
                        <div className="text-2xl font-bold" style={{ color: '#006DFD' }}>{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="group px-8 py-4 text-white rounded-full inline-flex items-center gap-2 font-bold"
            style={{ background: '#FF6D2C', boxShadow: '0 6px 0 #C5522A, 0 10px 25px rgba(255,109,44,0.4)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver más casos de éxito
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
