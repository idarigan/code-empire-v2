/**
 * Code Empire — Application entry
 *
 * Renders React and registers the PWA service worker.
 * The SW module is injected by vite-plugin-pwa at build time.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { registerSW } from "virtual:pwa-register";

// Register the service worker for offline support.
// autoUpdate: true is set in vite.config.ts so updates apply on next reload.
registerSW({
  immediate: true,
  onRegisteredSW(_, registration) {
    // Poll for updates every 60 minutes in production
    if (registration && import.meta.env.PROD) {
      setInterval(() => registration.update(), 60 * 60 * 1000);
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
