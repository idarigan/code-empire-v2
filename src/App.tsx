/**
 * Code Empire - Root App
 *
 * Providers + router.
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProviders } from "@/providers/AppProviders";
import { RootLayout } from "@/layouts/RootLayout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
