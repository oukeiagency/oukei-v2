import type { ReactNode } from "react";
import { waLink } from "@/config/site";

/** Glifo de WhatsApp (SVG inline, sin dependencias). */
function WhatsAppGlyph({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.06-3.63zm0 23.02h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 0 1-1.62-5.65c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.64 10.63zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.6-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.66.76.24 1.44.21 1.98.13.6-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"/>
    </svg>
  );
}

/** Botón flotante de WhatsApp, fijo abajo a la derecha en todo el sitio. */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      data-analytics="wa-float"
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 rounded-full px-4 py-3 font-bold text-white transition-transform hover:-translate-y-0.5"
      style={{ background: "#FF6D2C", boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
    >
      <WhatsAppGlyph className="w-6 h-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

type CTAProps = {
  children: ReactNode;
  message?: string;
  variant?: "primary" | "secondary";
  className?: string;
  analyticsId?: string;
};

/** CTA inline hacia WhatsApp. primary = naranja sólido; secondary = contorno azul. */
export function WhatsAppCTA({
  children,
  message,
  variant = "primary",
  className = "",
  analyticsId = "wa-cta",
}: CTAProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 font-bold text-base transition-transform hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "text-white"
      : "bg-white text-[#006DFD] border-2 border-[#006DFD]";
  const inlineStyle =
    variant === "primary" ? { background: "#FF6D2C" } : undefined;

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics={analyticsId}
      className={`${base} ${styles} ${className}`}
      style={inlineStyle}
    >
      <WhatsAppGlyph />
      <span className="relative z-10">{children}</span>
      {/* Brillo diagonal que barre al pasar el mouse (solo transform). */}
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-full w-1/3 -skew-x-12 bg-white/25 transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
        />
      )}
    </a>
  );
}
