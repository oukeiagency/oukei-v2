import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./app/pages/Home";
import PrivacyPage from "./app/pages/PrivacyPage";
import ThanksPage from "./app/pages/ThanksPage";
import "./styles/index.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/privacidad", element: <PrivacyPage /> },
  { path: "/gracias", element: <ThanksPage /> },
  { path: "*", element: <Home /> },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
