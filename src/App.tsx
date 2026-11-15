/**
 * Code Empire - Root App
 *
 * Providers + router.
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProviders } from "@/providers/AppProviders";
import { RootLayout } from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
