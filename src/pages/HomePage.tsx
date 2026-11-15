/**
 * Code Empire - Home page
 */

import { Hero } from "@/features/home/hero";
import { TechMarquee } from "@/features/home/tech";
import { Pillars } from "@/features/home/pillars";
import { CourseShowcase } from "@/features/home/courses";
import { Journey } from "@/features/home/journey";
import { Numbers } from "@/features/home/numbers";
import { Testimonials } from "@/features/home/testimonials";
import { Magazine } from "@/features/home/magazine";
import { Faq } from "@/features/home/faq";
import { FinalCta } from "@/features/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Pillars />
      <CourseShowcase />
      <Journey />
      <Numbers />
      <Testimonials />
      <Magazine />
      <Faq />
      <FinalCta />
    </>
  );
}
