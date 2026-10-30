/**
 * Code Empire — 404
 *
 * Full-screen glass card with a clear path home.
 */

import { useNavigate } from "react-router-dom";
import { Button, Card } from "dara-ui";
import { notFound } from "@/content/common";
import { Icons } from "@/lib/icons";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="section min-h-[70vh] flex items-center">
      <div className="section-container flex justify-center">
        <Card glow="accent" className="text-center max-w-md w-full">
          <div className="flex justify-center mb-4 text-[var(--color-accent)]">
            <Icons.compass className="h-14 w-14" />
          </div>
          <h1 className="text-6xl font-bold text-gradient-primary mb-3">
            {notFound.title}
          </h1>
          <p className="text-[var(--color-text-secondary)] mb-6">
            {notFound.subtitle}
          </p>
          <Button
            variant="primary"
            glow="primary"
            leftIcon={<Icons.home className="h-4 w-4" />}
            onClick={() => navigate("/")}
          >
            {notFound.backHome}
          </Button>
        </Card>
      </div>
    </section>
  );
}
