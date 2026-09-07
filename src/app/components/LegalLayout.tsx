import { useEffect } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";

/** Marco común para las páginas legales (privacidad, términos, cookies). */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = `${title} — OÜKEI`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <main className="bg-white" style={{ color: "var(--ink)" }}>
      <div style={{ height: 4, background: "#006DFD" }} />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <Link
          to="/"
          className="mb-8 inline-block rounded-full border px-4 py-2 text-sm font-semibold"
          style={{ borderColor: "#006DFD", color: "#006DFD" }}
        >
          ← Volver al inicio
        </Link>
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
          Última actualización: {updated}
        </p>
        <div className="legal-body mt-8">{children}</div>
      </div>
    </main>
  );
}

/** Encabezado de sección para páginas legales. */
export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="mt-11 border-t pt-5 text-xl font-bold"
      style={{ borderColor: "var(--hairline)", color: "var(--ink)" }}
    >
      {children}
    </h2>
  );
}
