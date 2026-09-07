import { Reveal, MaskReveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    q: "¿Usa mi número actual de WhatsApp?",
    a: "Sí. Conectamos tu línea actual; tus clientes no notan el cambio, solo que ahora les respondes al instante.",
  },
  {
    q: "¿Puedo contestar yo cuando quiera?",
    a: "Claro. Ves todo el chat y tomas el control en cualquier momento. Hay una palabra clave para que el bot te pase la conversación de inmediato.",
  },
  {
    q: "¿Con qué agenda funciona?",
    a: "Con Google Calendar. Si usas otra herramienta, lo revisamos en la llamada para ver si se puede integrar.",
  },
  {
    q: "¿Cuánto tarda la instalación?",
    a: "Entre 1 y 2 semanas desde que nos das los accesos y la información de tu negocio (servicios, precios, horarios y preguntas frecuentes).",
  },
  {
    q: "¿Hay permanencia?",
    a: "No. La mensualidad es mes a mes. Si en algún momento no te sirve, lo cancelas sin penalización.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "$6,500 MXN de setup único y $1,200 MXN al mes. Para los primeros negocios, el setup va a mitad de precio o diferido.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#006DFD" }}>
            Preguntas frecuentes
          </p>
          <MaskReveal as="h2" className="mt-3 text-3xl font-bold leading-tight md:text-4xl" style={{ color: "var(--ink)" }}>
            Lo que casi todos preguntan
          </MaskReveal>
        </Reveal>

        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="mt-7">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} style={{ borderColor: "var(--hairline)" }}>
                <AccordionTrigger className="text-base font-semibold" style={{ color: "var(--ink)" }}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
