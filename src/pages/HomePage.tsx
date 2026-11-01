/**
 * Code Empire - Home page
 *
 * Full landing page. Every section is defined in features/home.
 */

import { Hero } from "@/features/home/Hero";
import { TrustBar } from "@/features/home/TrustBar";
import { LatestCourses } from "@/features/home/LatestCourses";
import { WhyUs } from "@/features/home/WhyUs";
import { PopularPodium } from "@/features/home/PopularPodium";
import { HowItWorks } from "@/features/home/HowItWorks";
import { StudentStats } from "@/features/home/StudentStats";
import { Testimonials } from "@/features/home/Testimonials";
import { MagazinePreview } from "@/features/home/MagazinePreview";
import { NewsletterSection } from "@/features/home/NewsletterSection";
import { FinalCTA } from "@/features/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <LatestCourses />
      <WhyUs />
      <PopularPodium />
      <HowItWorks />
      <StudentStats />
      <Testimonials />
      <MagazinePreview />
      <NewsletterSection />
      <FinalCTA />
    </>
  );
}
