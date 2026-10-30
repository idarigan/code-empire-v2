/**
 * Code Empire — Hero section
 *
 * Layered backdrop: NoiseOverlay + AuroraBlobs + Particles + GradientRing.
 * TypeAnimation cycles three value props. Dual CTA routes to /courses and /guide.
 */

import { useNavigate } from "react-router-dom";
import {
  Button,
  Particles,
  AuroraBlobs,
  GradientRing,
  NoiseOverlay,
  ScrollReveal,
  Badge,
} from "dara-ui";
import { TypeAnimation } from "react-type-animation";
import { Icons } from "@/lib/icons";
import { home } from "@/content/home";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-10">
      <NoiseOverlay />
      <AuroraBlobs />
      <Particles count={50} />
      <GradientRing size={520} opacity={0.35} />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <ScrollReveal animation="fade-down">
            <Badge variant="primary" glow size="md">
              {home.heroVersion}
            </Badge>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={100}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient-hero leading-[1.1]">
              {home.heroTitle}
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="h-10 md:h-12">
              <TypeAnimation
                sequence={[
                  home.heroType1,
                  2000,
                  home.heroType2,
                  2000,
                  home.heroType3,
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-sm md:text-base text-[var(--color-primary)]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl">
              {home.heroSubtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Button
                variant="primary"
                size="lg"
                glow="primary"
                leftIcon={<Icons.rocket className="h-4 w-4" />}
                onClick={() => navigate("/courses")}
              >
                {home.startLearning}
              </Button>
              <Button
                variant="outline"
                size="lg"
                rightIcon={
                  <Icons.arrowLeft className="h-4 w-4 rtl:-scale-x-100" />
                }
                onClick={() => navigate("/guide")}
              >
                {home.viewGuide}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
