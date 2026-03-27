import { motion } from "motion/react";
import { Twitter, Linkedin, Instagram, Github, ArrowRight } from "lucide-react";
import oukeiLogo from "@/assets/Oukei_v2.svg";

const footerLinks = {
  Servicios: [
    "Marketing Digital",
    "Diseño & Experiencias",
    "Software a Medida",
    "Automatización con IA",
  ],
  Empresa: ["Sobre Nosotros", "Casos de Éxito", "Blog", "Contacto"],
  Legal: ["Privacidad", "Términos", "Cookies"],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter", color: '#006DFD' },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: '#FF6D2C' },
  { icon: Instagram, href: "#", label: "Instagram", color: '#006DFD' },
  { icon: Github, href: "#", label: "GitHub", color: '#FF6D2C' },
];

export function Footer() {
  return (
    <footer className="relative" style={{ background: '#001133' }}>
      {/* Top accent bar */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #006DFD, #FF6D2C, #006DFD)' }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,109,253,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,109,253,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* Main grid */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-4">
            <motion.img
              src={oukeiLogo}
              alt="Oükei"
              className="mb-6 object-contain" style={{ height: 52, width: 'auto', maxWidth: 280 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-white/60 font-medium text-sm leading-relaxed mb-8 max-w-xs">
              Conectamos ideas, creatividad y tecnología para que tu negocio deje huella.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: `1px solid rgba(255,255,255,0.1)`,
                    color: social.color,
                  }}
                  whileHover={{
                    y: -4,
                    background: social.color,
                    color: '#fff',
                    boxShadow: `0 8px 20px ${social.color}60`,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-8 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], ci) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                <h4
                  className="font-bold text-sm uppercase tracking-widest mb-5"
                  style={{ color: ci % 2 === 0 ? '#006DFD' : '#FF6D2C' }}
                >
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <motion.a
                        href="#"
                        className="text-white/50 hover:text-white text-sm font-medium inline-flex items-center gap-1 group"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ci % 2 === 0 ? '#006DFD' : '#FF6D2C' }}>›</span>
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center gap-6 justify-between"
          style={{
            background: 'rgba(0,109,253,0.08)',
            border: '1px solid rgba(0,109,253,0.2)',
          }}
        >
          <div>
            <p className="font-bold text-white text-lg headline">¿Quieres estar al día?</p>
            <p className="text-white/50 text-sm">Recibe novedades sobre IA, marketing y tecnología.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 md:w-64 px-4 py-3 rounded-xl text-sm font-medium focus:outline-none"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
              }}
            />
            <motion.button
              className="px-5 py-3 rounded-xl font-bold text-white text-sm flex items-center gap-2"
              style={{
                background: '#FF6D2C',
                boxShadow: '0 4px 0 #C5522A',
              }}
              whileHover={{ y: -2, boxShadow: '0 6px 0 #C5522A' }}
              whileTap={{ y: 2, boxShadow: '0 2px 0 #C5522A' }}
            >
              Suscribirse
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-white/30 text-sm font-medium">
            © 2026 <span style={{ color: '#006DFD' }}>Oükei</span>. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/30 font-medium">
            {['Términos de Servicio', 'Política de Privacidad', 'Cookies'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-white/70 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
