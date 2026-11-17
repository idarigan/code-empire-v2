/**
 * Code Empire - Root App
 *
 * Providers + router.
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProviders } from "@/providers/AppProviders";
import { RootLayout } from "@/layouts/RootLayout";
import AboutPage from "@/pages/AboutPage";
import ArticlePage from "@/pages/ArticlePage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import GuidePage from "@/pages/GuidePage";
import HomePage from "@/pages/HomePage";
import PolicyPage from "@/pages/PolicyPage";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="guide" element={<GuidePage />} />
            <Route path="policy" element={<PolicyPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<ArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
