import { LegalLayout, LegalH2 } from "../components/LegalLayout";
import { CONTACT_EMAIL, LEGAL_RESPONSIBLE, LEGAL_ADDRESS } from "@/config/site";

export default function TerminosPage() {
  return (
    <LegalLayout title="Términos de Servicio" updated="7 de septiembre de 2026">
      <p>
        Estos Términos regulan el uso del sitio oukei.com.mx y la contratación de
        los servicios de {LEGAL_RESPONSIBLE}, con domicilio en {LEGAL_ADDRESS} (en
        adelante, “OÜKEI”). Al usar el sitio o contratar un servicio, aceptas estos
        Términos.
      </p>

      <LegalH2>1. Servicios</LegalH2>
      <p>
        OÜKEI ofrece la implementación y el mantenimiento de asistentes
        automatizados de atención y agendamiento por WhatsApp, así como servicios
        relacionados de automatización y marketing. El alcance concreto de cada
        contratación (el “Paquete”) se define por escrito antes de iniciar.
      </p>

      <LegalH2>2. Precios y pagos</LegalH2>
      <ul>
        <li>
          El <strong>Paquete Starter</strong> tiene un costo de instalación única
          de $6,500 MXN y una mensualidad de $1,200 MXN. Los precios pueden
          actualizarse; el precio vigente es el que se acuerda por escrito al
          contratar.
        </li>
        <li>
          La instalación se paga para iniciar el trabajo. La mensualidad se cobra
          de forma anticipada cada periodo.
        </li>
        <li>Los precios no incluyen impuestos, salvo que se indique lo contrario.</li>
        <li>
          El costo de servicios de terceros necesarios para operar (por ejemplo,
          plataformas de mensajería, hospedaje o agenda) puede correr por cuenta
          del cliente y se informa antes de contratar.
        </li>
      </ul>

      <LegalH2>3. Obligaciones del cliente</LegalH2>
      <ul>
        <li>
          Proporcionar la información y los accesos necesarios (número de WhatsApp,
          servicios, precios, horarios, preguntas frecuentes) en tiempo.
        </li>
        <li>
          Usar el asistente conforme a las políticas de WhatsApp y de las
          plataformas involucradas, y no emplearlo para spam ni para fines
          ilícitos.
        </li>
        <li>Ser responsable del contenido y de las respuestas que se configuren.</li>
      </ul>

      <LegalH2>4. Plazos</LegalH2>
      <p>
        El tiempo estimado de implementación del Paquete Starter es de 1 a 2
        semanas a partir de la entrega completa de accesos e información. Los
        retrasos atribuibles al cliente o a terceros pueden extender ese plazo.
      </p>

      <LegalH2>5. Cancelación</LegalH2>
      <p>
        No hay permanencia forzosa. Puedes cancelar la mensualidad avisando por
        escrito antes del siguiente periodo de cobro; el servicio se mantiene
        hasta el final del periodo ya pagado. La cuota de instalación no es
        reembolsable una vez iniciado el trabajo.
      </p>

      <LegalH2>6. Propiedad y datos</LegalH2>
      <p>
        Las configuraciones y contenidos específicos de tu negocio son tuyos. Las
        metodologías, plantillas y flujos base desarrollados por OÜKEI son
        propiedad de OÜKEI. El tratamiento de datos personales se rige por el{" "}
        <a href="/privacidad">Aviso de Privacidad</a>.
      </p>

      <LegalH2>7. Limitación de responsabilidad</LegalH2>
      <p>
        OÜKEI presta sus servicios con diligencia profesional, pero no garantiza
        resultados comerciales concretos ni la disponibilidad ininterrumpida de
        plataformas de terceros. En la medida que lo permita la ley, la
        responsabilidad de OÜKEI se limita al monto pagado por el cliente en los
        tres meses previos al hecho que origine la reclamación.
      </p>

      <LegalH2>8. Cambios a estos Términos</LegalH2>
      <p>
        OÜKEI puede modificar estos Términos. La versión vigente se publica en esta
        página con su fecha de actualización.
      </p>

      <LegalH2>9. Ley aplicable</LegalH2>
      <p>
        Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos.
        Cualquier controversia se resolverá ante los tribunales competentes de
        Querétaro, renunciando a cualquier otro fuero.
      </p>

      <LegalH2>10. Contacto</LegalH2>
      <p>
        Dudas sobre estos Términos:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <p style={{ fontSize: "0.75rem", marginTop: "2.5rem" }}>
        Documento base; requiere revisión legal antes de considerarse definitivo.
      </p>
    </LegalLayout>
  );
}
