import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./app/pages/Home";
import HomeBold from "./app/pages/HomeBold";
import PrivacyPage from "./app/pages/PrivacyPage";
import TerminosPage from "./app/pages/TerminosPage";
import CookiesPage from "./app/pages/CookiesPage";
import ThanksPage from "./app/pages/ThanksPage";
import { initAnalytics } from "./lib/analytics";
import "./styles/index.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/lab", element: <HomeBold /> },
  { path: "/privacidad", element: <PrivacyPage /> },
  { path: "/terminos", element: <TerminosPage /> },
  { path: "/cookies", element: <CookiesPage /> },
  { path: "/gracias", element: <ThanksPage /> },
  { path: "*", element: <Home /> },
]);

initAnalytics();

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
