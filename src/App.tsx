/**
 * Code Empire — Root App
 *
 * Phase 0: minimal shell to verify the build pipeline.
 * Real providers + router land in Phase 4.
 */

import { Button, Card } from "dara-ui";

function App() {
  return (
    <div className="route-container">
      <main className="section">
        <div className="section-container flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold text-gradient-primary">
            Code Empire
          </h1>
          <Card glow="primary" className="max-w-lg text-center">
            <p className="text-[var(--color-text-secondary)]">
              Phase 0 is alive. Empire-Night theme is loaded.
            </p>
          </Card>
          <Button variant="primary" glow="primary">
            Bootstrap complete
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
