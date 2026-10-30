/**
 * Code Empire — Certificates
 */

import { useNavigate } from "react-router-dom";
import { Button, Card } from "dara-ui";
import { useProfile, useProgress } from "@/contexts";
import { getCourseBySlug } from "@/data/courses";
import { CertificatePreview } from "@/features/dashboard/CertificatePreview";
import { coursesContent } from "@/content/courses";
import { dashboard } from "@/content/dashboard";
import { Icons } from "@/lib/icons";

export default function Certificates() {
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { completed } = useProgress();

  const studentName = profile?.name ?? dashboard.profile;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
          {dashboard.certificates}
        </h1>
      </div>

      {completed.length === 0 ? (
        <Card variant="outline" className="text-center py-16">
          <Icons.award className="h-12 w-12 mx-auto text-[var(--color-text-tertiary)] mb-3" />
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            {dashboard.noCertificates}
          </p>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/courses")}
          >
            {dashboard.courses}
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {completed.map((slug) => {
            const course = getCourseBySlug(slug);
            const content = coursesContent[slug];
            if (!course || !content) return null;
            return (
              <CertificatePreview
                key={slug}
                studentName={studentName}
                courseName={content.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
