import { LegalLayout, LegalH2 } from "../components/LegalLayout";
import { CONTACT_EMAIL, PRIVACY_EMAIL } from "@/config/site";

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updated="7 de septiembre de 2026">
      <p>
        Esta política explica qué son las cookies, cuáles usa oukei.com.mx y cómo
        puedes controlarlas. Forma parte de nuestro{" "}
        <a href="/privacidad">Aviso de Privacidad</a>.
      </p>

      <LegalH2>1. Qué son las cookies</LegalH2>
      <p>
        Son pequeños archivos que un sitio guarda en tu navegador para recordar
        información entre visitas: preferencias, sesión, o datos de uso que ayudan
        a medir y mejorar el sitio. Junto con las cookies usamos tecnologías
        similares como píxeles y etiquetas.
      </p>

      <LegalH2>2. Cookies que usamos</LegalH2>
      <ul>
        <li>
          <strong>Necesarias:</strong> permiten el funcionamiento básico del sitio.
          No se pueden desactivar desde aquí.
        </li>
        <li>
          <strong>De analítica:</strong> Google Analytics, para entender qué
          secciones se visitan y cómo se usa el sitio, de forma agregada.
        </li>
        <li>
          <strong>De publicidad:</strong> Meta Pixel y Google Ads, para medir el
          resultado de campañas y mostrar anuncios relevantes. Se activan solo si
          hay campañas en marcha.
        </li>
      </ul>
      <p>
        Mientras no se configuren identificadores de analítica o publicidad, esas
        cookies no se cargan.
      </p>

      <LegalH2>3. Cómo controlarlas</LegalH2>
      <ul>
        <li>
          Desde tu navegador puedes bloquear o borrar cookies (revisa la sección
          de privacidad o configuración de Chrome, Safari, Firefox o Edge).
        </li>
        <li>
          Puedes optar por no ser rastreado por publicidad de Meta y Google desde
          la configuración de anuncios de cada plataforma.
        </li>
        <li>
          Bloquear algunas cookies puede afectar el funcionamiento o la
          experiencia del sitio.
        </li>
      </ul>

      <LegalH2>4. Cambios</LegalH2>
      <p>
        Podemos actualizar esta política. La versión vigente se publica en esta
        página con su fecha de actualización.
      </p>

      <LegalH2>5. Contacto</LegalH2>
      <p>
        Dudas sobre cookies o privacidad:{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> o{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <p style={{ fontSize: "0.75rem", marginTop: "2.5rem" }}>
        Documento base; requiere revisión legal antes de considerarse definitivo.
      </p>
    </LegalLayout>
  );
}
