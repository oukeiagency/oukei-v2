import { useState } from "react";
import { useNavigate } from "react-router";
import { Reveal, MaskReveal } from "./Reveal";
import { CONTACT_EMAIL, waLink } from "@/config/site";
import { submitLead } from "@/lib/lead";

const TIPOS = [
  "Barbería / Salón",
  "Dentista / Clínica",
  "Veterinaria",
  "Spa / Estética",
  "Otro",
];

const field =
  "w-full rounded-xl border px-4 py-3 text-[15px] outline-none focus:border-[#006DFD]";

export function CtaFinal() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [tel, setTel] = useState("");
  const [tipo, setTipo] = useState(TIPOS[0]);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre.trim() || tel.replace(/\D/g, "").length < 10) {
      setError("Escribe tu nombre y un WhatsApp de 10 dígitos.");
      return;
    }
    setError("");
    await submitLead({ nombre: nombre.trim(), telefono: tel.trim(), tipoNegocio: tipo });
    navigate("/gracias");
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#006DFD" }}>
            Empieza hoy
          </p>
          <MaskReveal as="h2" className="mt-3 text-3xl font-bold leading-tight md:text-4xl" style={{ color: "var(--ink)" }}>
            ¿Listo para dejar de perder citas?
          </MaskReveal>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            Cuéntanos de tu negocio y te mostramos el bot funcionando. Sin compromiso.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <form
            onSubmit={onSubmit}
            className="mt-8 rounded-2xl border p-6 md:p-8"
            style={{
              borderColor: "var(--hairline)",
              boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.06)",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                  Nombre
                </span>
                <input
                  className={field}
                  style={{ borderColor: "var(--hairline)" }}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                  WhatsApp
                </span>
                <input
                  className={field}
                  style={{ borderColor: "var(--hairline)" }}
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="10 dígitos"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                Tipo de negocio
              </span>
              <select
                className={field}
                style={{ borderColor: "var(--hairline)" }}
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                {TIPOS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            {error && (
              <p className="mt-3 text-sm" style={{ color: "#EB3200" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              data-analytics="form-submit"
              className="mt-6 w-full rounded-full px-7 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "#FF6D2C" }}
            >
              Quiero ver el demo
            </button>

            <p className="mt-4 text-center text-xs" style={{ color: "var(--muted)" }}>
              Al enviar, se abre WhatsApp con tus datos ya escritos para que solo le des enviar.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm" style={{ color: "var(--muted)" }}>
            O escríbenos directo:{" "}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              style={{ color: "#006DFD" }}
            >
              WhatsApp
            </a>{" "}
            ·{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold" style={{ color: "#006DFD" }}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
