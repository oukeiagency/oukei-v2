import { useEffect } from "react";
import { Link } from "react-router";
import { WhatsAppCTA } from "../components/WhatsAppButton";

export default function ThanksPage() {
  useEffect(() => {
    document.title = "¡Gracias! — OÜKEI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center"
      style={{ color: "#242424" }}
    >
      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
        style={{ background: "#006DFD", color: "#fff" }}
        aria-hidden="true"
      >
        ✓
      </div>
      <h1 className="text-3xl font-bold md:text-4xl">¡Listo! Recibimos tus datos.</h1>
      <p className="mt-4 max-w-md text-lg" style={{ color: "#5b5b5b" }}>
        Un experto de OÜKEI te contacta en menos de 24 horas. Si quieres adelantar,
        escríbenos ahora por WhatsApp.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <WhatsAppCTA analyticsId="wa-gracias" message="Hola OÜKEI, acabo de dejar mis datos en la web y quiero avanzar.">
          Escríbenos por WhatsApp
        </WhatsAppCTA>
        <Link
          to="/"
          className="rounded-full border-2 px-7 py-4 font-bold"
          style={{ borderColor: "#006DFD", color: "#006DFD" }}
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
