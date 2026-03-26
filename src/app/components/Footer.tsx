import { motion } from "motion/react";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { OukeiLogo } from "./OukeiLogo";

const footerLinks = {
  Servicios: [
    "Inteligencia Artificial",
    "Automatización",
    "Growth Marketing",
    "Experiencias Digitales",
  ],
  Empresa: ["Sobre Nosotros", "Equipo", "Casos de Éxito", "Blog"],
  Recursos: ["Documentación", "API", "Guías", "Estado del Sistema"],
  Legal: ["Privacidad", "Términos", "Cookies", "GDPR"],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative border-t-8 border-white" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    }}>
      {/* Cartoon pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <OukeiLogo size={64} />
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6">
              <p className="text-white font-semibold text-sm">
                ✨ Transformando negocios con IA y automatización avanzada
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#006DFD]"
                  style={{
                    boxShadow: `0 4px 0 ${i % 2 === 0 ? '#006DFD' : '#FF6D2C'}, 0 8px 20px rgba(0, 0, 0, 0.3)`,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.1,
                    boxShadow: `0 8px 0 ${i % 2 === 0 ? '#006DFD' : '#FF6D2C'}, 0 12px 30px rgba(0, 0, 0, 0.4)`,
                  }}
                  whileTap={{
                    y: 2,
                    boxShadow: `0 2px 0 ${i % 2 === 0 ? '#006DFD' : '#FF6D2C'}, 0 4px 15px rgba(0, 0, 0, 0.3)`,
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold mb-4 text-lg headline" style={{
                textShadow: '1px 1px 0px rgba(0, 0, 0, 0.3)',
              }}>{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/90 hover:text-white text-sm font-medium inline-block"
                      whileHover={{ x: 4, scale: 1.05 }}
                    >
                      • {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section - Cartoon style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t-4 border-white/30 pt-12 mb-12"
        >
          <div className="max-w-md bg-white rounded-3xl p-6" style={{
            boxShadow: '0 10px 0 rgba(0, 109, 253, 0.3), 0 20px 40px rgba(0, 0, 0, 0.3)',
          }}>
            <h4 className="text-2xl font-bold mb-2 headline bg-gradient-to-r from-[#006DFD] to-[#FF6D2C] bg-clip-text text-transparent">
              ¡Mantente actualizado!
            </h4>
            <p className="text-gray-700 font-medium text-sm mb-4">
              📧 Recibe insights sobre IA, automatización y marketing digital
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-2xl bg-gray-100 border-2 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-[#006DFD] transition-colors font-medium"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#FF6D2C] to-[#FF8A50] text-white rounded-2xl font-bold"
                style={{
                  boxShadow: '0 4px 0 #C5522A, 0 8px 20px rgba(255, 109, 44, 0.4)',
                }}
                whileHover={{
                  y: -2,
                  boxShadow: '0 6px 0 #C5522A, 0 12px 25px rgba(255, 109, 44, 0.5)',
                }}
                whileTap={{
                  y: 2,
                  boxShadow: '0 2px 0 #C5522A, 0 4px 15px rgba(255, 109, 44, 0.3)',
                }}
              >
                ¡Ir!
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - Cartoon style */}
        <div className="border-t-4 border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white font-bold text-sm" style={{
            textShadow: '1px 1px 0px rgba(0, 0, 0, 0.3)',
          }}>
            © 2026 oukei. ¡Todos los derechos reservados!
          </p>
          <div className="flex gap-6 text-sm text-white font-semibold">
            <motion.a
              href="#"
              className="hover:text-[#FFD700] transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
            >
              Términos de Servicio
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[#FFD700] transition-colors"
              whileHover={{ y: -4, scale: 1.1 }}
            >
              Política de Privacidad
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
