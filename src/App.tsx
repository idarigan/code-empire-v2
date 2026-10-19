/**
 * Code Empire — Root App
 *
 * Providers + router. SEOManager handles all page titles and meta.
 */

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProviders } from "@/components/providers/AppProviders";
import { RootLayout } from "@/layouts/RootLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

// ============================================
// Lazy-loaded pages
// ============================================

const HomePage = lazy(() => import("@/pages/HomePage"));
const CoursesPage = lazy(() => import("@/pages/CoursesPage"));
const SingleCoursePage = lazy(() => import("@/pages/SingleCoursePage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const GuidePage = lazy(() => import("@/pages/GuidePage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const SingleBlogPage = lazy(() => import("@/pages/SingleBlogPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PolicyPage = lazy(() => import("@/pages/PolicyPage"));
const SingleRulePage = lazy(() => import("@/pages/SingleRulePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const DashboardHome = lazy(() => import("@/pages/dashboard/DashboardHome"));
const MyCourses = lazy(() => import("@/pages/dashboard/MyCourses"));
const Bookmarks = lazy(() => import("@/pages/dashboard/Bookmarks"));
const ProgressPage = lazy(() => import("@/pages/dashboard/ProgressPage"));
const Certificates = lazy(() => import("@/pages/dashboard/Certificates"));
const Settings = lazy(() => import("@/pages/dashboard/Settings"));

// ============================================
// Route table
// ============================================

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="courses/register" element={<RegisterPage />} />
              <Route path="courses/:slug" element={<SingleCoursePage />} />
              <Route path="guide" element={<GuidePage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<SingleBlogPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="policy" element={<PolicyPage />} />
              <Route path="policy/:slug" element={<SingleRulePage />} />
              <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="courses" element={<MyCourses />} />
                <Route path="bookmarks" element={<Bookmarks />} />
                <Route path="progress" element={<ProgressPage />} />
                <Route path="certificates" element={<Certificates />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
