import { GA4_ID, META_PIXEL_ID } from "@/config/site";

/* -------------------------------------------------------------------------- */
/*  Analítica ligera. Sin IDs configurados = no-op silencioso (solo consola   */
/*  en desarrollo). Cuando se pongan GA4_ID / META_PIXEL_ID en site.ts, se     */
/*  cargan los scripts y track() envía eventos a ambos.                        */
/* -------------------------------------------------------------------------- */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

let started = false;

function loadGA4(id: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

function loadPixel(id: string) {
  /* eslint-disable */
  (function (f: any, b, e, v, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */
  window.fbq!("init", id);
  window.fbq!("track", "PageView");
}

/** Envía un evento a GA4 y Meta Pixel (los que estén configurados). */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (import.meta.env.DEV) console.debug("[track]", event, params);
  window.gtag?.("event", event, params);
  window.fbq?.("trackCustom", event, params);
}

/** Inicializa la analítica y engancha los clics en elementos [data-analytics]. */
export function initAnalytics() {
  if (started) return;
  started = true;

  if (GA4_ID) loadGA4(GA4_ID);
  if (META_PIXEL_ID) loadPixel(META_PIXEL_ID);

  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-analytics]");
      if (el) track(el.getAttribute("data-analytics") || "click");
    },
    { capture: true },
  );
}
