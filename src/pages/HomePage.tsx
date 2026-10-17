/**
 * Code Empire — Home page
 *
 * Full landing page. Every section is defined in features/home.
 */

import { Hero } from "@/features/home/Hero";
import { TrustBar } from "@/features/home/TrustBar";
import { LatestCourses } from "@/features/home/LatestCourses";
import { PopularPodium } from "@/features/home/PopularPodium";
import { WhyUs } from "@/features/home/WhyUs";
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
      <PopularPodium />
      <WhyUs />
      <HowItWorks />
      <StudentStats />
      <Testimonials />
      <MagazinePreview />
      <NewsletterSection />
      <FinalCTA />
    </>
  );
}
