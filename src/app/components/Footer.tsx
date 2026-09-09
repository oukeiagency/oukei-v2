import { Link } from "react-router";
import oukeiLogoWhite from "@/assets/oukei-logo-white.png";
import { waLink, CONTACT_EMAIL, CITY } from "@/config/site";

const nav = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Paquete Starter", href: "#paquete" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

export function Footer() {
  return (
    <footer style={{ background: "#002F7F" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <img src={oukeiLogoWhite} alt="OÜKEI" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Bot de citas por WhatsApp para negocios locales en {CITY}. Responde,
            agenda y recuerda — solo.
          </p>
          <div className="mt-5 flex flex-col gap-1 text-sm">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              WhatsApp
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/80 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-2 text-sm md:items-end">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-white/70 hover:text-white">
              {n.label}
            </a>
          ))}
          <Link to="/privacidad" className="text-white/70 hover:text-white">
            Aviso de privacidad
          </Link>
          <Link to="/terminos" className="text-white/70 hover:text-white">
            Términos de servicio
          </Link>
          <Link to="/cookies" className="text-white/70 hover:text-white">
            Política de cookies
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/50">
          © 2026 OÜKEI · {CITY}, México
        </p>
      </div>
    </footer>
  );
}
