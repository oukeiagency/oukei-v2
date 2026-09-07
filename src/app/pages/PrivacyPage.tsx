import { useEffect } from "react";
import { Link } from "react-router";
import {
  CONTACT_EMAIL,
  PRIVACY_EMAIL,
  LEGAL_RESPONSIBLE,
  LEGAL_ADDRESS,
} from "@/config/site";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-11 border-t pt-5 text-xl font-bold"
      style={{ borderColor: "#e6e6e6", color: "#242424" }}
    >
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Aviso de Privacidad — OÜKEI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white" style={{ color: "#242424" }}>
      <div style={{ height: 4, background: "#006DFD" }} />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <Link
          to="/"
          className="mb-8 inline-block rounded-full border px-4 py-2 text-sm font-semibold"
          style={{ borderColor: "#006DFD", color: "#006DFD" }}
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold md:text-4xl">Aviso de Privacidad</h1>
        <p className="mt-2 text-sm" style={{ color: "#5b5b5b" }}>
          Última actualización: 7 de septiembre de 2026
        </p>

        <p className="mt-8 text-lg" style={{ color: "#5b5b5b" }}>
          En OÜKEI protegemos tu información. Este Aviso de Privacidad explica qué
          datos personales recabamos, para qué los usamos, con quién los
          compartimos y cómo puedes ejercer tus derechos.
        </p>

        <div
          className="mt-4 rounded-xl p-4 text-sm"
          style={{ background: "#f5f7fa", color: "#5b5b5b" }}
        >
          <strong>Nota:</strong> OÜKEI aún no está constituida como sociedad
          mercantil, por lo que el responsable es una persona física con
          actividad empresarial. Si más adelante se constituye una sociedad
          (S.A. de C.V., S.A.S., etc.), actualizar el apartado 1. Recomendable una
          revisión legal antes de publicar.
        </div>

        <H2>1. Responsable del tratamiento de tus datos</H2>
        <p className="mt-3">
          {LEGAL_RESPONSIBLE} (en adelante, “OÜKEI”, “nosotros”), con domicilio en{" "}
          {LEGAL_ADDRESS} y sitio web oukei.com.mx, es responsable del tratamiento
          de tus datos personales conforme a la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (publicada en el Diario
          Oficial de la Federación el 20 de marzo de 2025), su Reglamento y
          disposiciones aplicables.
        </p>
        <p className="mt-3">
          Contacto para asuntos de datos personales:{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`} style={{ color: "#006DFD" }}>
            {PRIVACY_EMAIL}
          </a>
          .
        </p>

        <H2>2. Datos personales que recabamos</H2>
        <p className="mt-3">
          Recabamos datos de forma directa (cuando los proporcionas en los
          formularios del sitio, por correo, teléfono, WhatsApp o redes sociales)
          y de forma automática cuando navegas en oukei.com.mx:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong>Identificación y contacto:</strong> nombre, correo, teléfono o
            WhatsApp, nombre de tu empresa o negocio, puesto o rol.
          </li>
          <li>
            <strong>Información de tu proyecto:</strong> objetivos, servicios de
            interés, presupuesto estimado y datos que compartas sobre tu negocio.
          </li>
          <li>
            <strong>Datos de facturación (solo si contratas):</strong> razón
            social, RFC, domicilio fiscal y correo para facturación. Los datos de
            tarjetas o cuentas bancarias los procesan directamente nuestros
            proveedores de pago; OÜKEI no los almacena.
          </li>
          <li>
            <strong>Datos de navegación:</strong> dirección IP, dispositivo y
            navegador, páginas visitadas, tiempo de permanencia, origen del
            tráfico e identificadores de cookies y píxeles.
          </li>
        </ul>
        <p className="mt-3">No recabamos datos personales sensibles.</p>

        <H2>3. Finalidades del tratamiento</H2>
        <p className="mt-3 font-semibold">Finalidades primarias (necesarias):</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Atender tus solicitudes de información, cotización y contacto.</li>
          <li>Dar seguimiento comercial, agendar reuniones y enviarte propuestas.</li>
          <li>Prestar, administrar y dar soporte a los servicios que contrates.</li>
          <li>Emitir comprobantes fiscales y llevar registros administrativos.</li>
          <li>Cumplir obligaciones legales y requerimientos de autoridad.</li>
        </ul>
        <p className="mt-4 font-semibold">
          Finalidades secundarias (no necesarias; puedes oponerte):
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Enviarte comunicaciones de marketing, novedades y promociones.</li>
          <li>Elaborar estadísticas, encuestas y estudios de mercado.</li>
          <li>Mostrarte publicidad personalizada en plataformas de terceros.</li>
        </ul>
        <p className="mt-3">
          Si no deseas que tus datos se usen para las finalidades secundarias,
          escríbenos a{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`} style={{ color: "#006DFD" }}>
            {PRIVACY_EMAIL}
          </a>
          . Tu negativa no será motivo para negarte los servicios que solicites.
        </p>

        <H2>4. Uso de cookies y tecnologías de rastreo</H2>
        <p className="mt-3">
          El sitio utiliza cookies propias y de terceros, píxeles y etiquetas para
          mantener preferencias, medir audiencia y rendimiento, y habilitar
          campañas de publicidad y remarketing (entre otras, Google Analytics,
          Meta Pixel y Google Ads). Puedes administrarlas o deshabilitarlas desde
          tu navegador; deshabilitar algunas puede afectar la funcionalidad.
        </p>

        <H2>5. Transferencias y encargados</H2>
        <p className="mt-3">
          Compartimos datos con proveedores que actúan como encargados siguiendo
          nuestras instrucciones: hosting, correo, CRM y automatización, analítica,
          plataformas de publicidad (Meta, Google), pasarelas de pago y
          facturación. Algunos se encuentran fuera de México (por ejemplo, en
          Estados Unidos). No transferimos tus datos a terceros distintos de los
          encargados sin tu consentimiento, salvo en los supuestos previstos por
          la Ley.
        </p>

        <H2>6. Cómo ejercer tus derechos ARCO</H2>
        <p className="mt-3">
          Tienes derecho a Acceder, Rectificar y Cancelar tus datos personales, y
          a Oponerte a su tratamiento, así como a revocar tu consentimiento. Envía
          tu solicitud a{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`} style={{ color: "#006DFD" }}>
            {PRIVACY_EMAIL}
          </a>{" "}
          con: tu nombre y medio para recibir respuesta; copia de una
          identificación oficial; descripción clara de los datos y del derecho que
          deseas ejercer; y los documentos que sustenten tu petición. Responderemos
          dentro de los plazos que marca la Ley. El ejercicio es gratuito.
        </p>

        <H2>7. Revocación del consentimiento</H2>
        <p className="mt-3">
          Puedes revocar tu consentimiento en cualquier momento por el mismo medio
          y dirección del apartado anterior. En los correos de marketing también
          puedes darte de baja con el enlace de cada mensaje.
        </p>

        <H2>8. Limitación del uso o divulgación</H2>
        <p className="mt-3">
          Puedes solicitar la limitación del uso o divulgación de tus datos
          escribiendo a{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`} style={{ color: "#006DFD" }}>
            {PRIVACY_EMAIL}
          </a>
          . También puedes inscribir tu número en el Registro Público para Evitar
          Publicidad (REPEP) de la PROFECO.
        </p>

        <H2>9. Medidas de seguridad</H2>
        <p className="mt-3">
          Mantenemos medidas de seguridad administrativas, técnicas y físicas
          razonables para proteger tus datos contra daño, pérdida, alteración,
          destrucción o uso, acceso o tratamiento no autorizados.
        </p>

        <H2>10. Cambios a este Aviso de Privacidad</H2>
        <p className="mt-3">
          Podemos modificar este aviso. Publicaremos la versión vigente en
          oukei.com.mx/privacidad con su fecha de actualización. Si los cambios son
          sustanciales, procuraremos informarte por los medios de contacto que
          tengamos registrados.
        </p>

        <H2>11. Consentimiento</H2>
        <p className="mt-3">
          Al proporcionarnos tus datos personales por cualquier medio y al usar
          este sitio, reconoces haber leído este Aviso de Privacidad y otorgas tu
          consentimiento para el tratamiento de tus datos conforme a las
          finalidades aquí descritas.
        </p>

        <H2>12. Autoridad</H2>
        <p className="mt-3">
          Si consideras que tu derecho a la protección de datos personales fue
          vulnerado, puedes acudir ante la autoridad competente en la materia (la
          Secretaría Anticorrupción y Buen Gobierno del Gobierno Federal, o la
          autoridad que la sustituya).
        </p>

        <H2>13. Datos de menores</H2>
        <p className="mt-3">
          Nuestros servicios están dirigidos a personas mayores de edad. No
          recabamos de forma intencional datos de menores de 18 años sin el
          consentimiento de quien ejerza la patria potestad o tutela.
        </p>

        <div
          className="mt-8 rounded-lg p-5"
          style={{ background: "#f5f7fa", borderLeft: "4px solid #006DFD" }}
        >
          <strong>Contacto para asuntos de privacidad</strong>
          <br />
          Correo:{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`} style={{ color: "#006DFD" }}>
            {PRIVACY_EMAIL}
          </a>
          <br />
          Contacto general:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#006DFD" }}>
            {CONTACT_EMAIL}
          </a>
          <br />
          {LEGAL_ADDRESS}
        </div>

        <p className="mt-10 text-xs" style={{ color: "#5b5b5b" }}>
          Documento generado como plantilla base; requiere revisión legal antes de
          su publicación.
        </p>
      </div>
    </main>
  );
}
