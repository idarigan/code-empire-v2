/**
 * Code Empire — Root App
 *
 * Phase 3: AppProviders wraps a temporary welcome screen.
 * Real router + layouts land in Phase 4.
 */

import { Button, Card } from "dara-ui";
import { AppProviders } from "@/components/providers/AppProviders";
import { useI18n } from "dara-ui";
import { useProgress } from "@/contexts";

// ============================================
// Temporary welcome screen (removed in Phase 4)
// ============================================

function WelcomeScreen() {
  const { t } = useI18n();
  const { xp, overallProgress, ready } = useProgress();

  return (
    <div className="route-container">
      <main className="section">
        <div className="section-container flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-gradient-primary">
            {t("home.heroTitle")}
          </h1>
          <Card glow="primary" className="max-w-lg text-center">
            <p className="text-[var(--color-text-secondary)]">
              {t("home.heroSubtitle")}
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)] mt-3 font-mono">
              XP: {xp} · Progress: {overallProgress}% ·{" "}
              {ready ? "ready" : "loading"}
            </p>
          </Card>
          <Button variant="primary" glow="primary">
            {t("home.startLearning")}
          </Button>
        </div>
      </main>
    </div>
  );
}

// ============================================
// App
// ============================================

function App() {
  return (
    <AppProviders>
      <WelcomeScreen />
    </AppProviders>
  );
}

export default App;
