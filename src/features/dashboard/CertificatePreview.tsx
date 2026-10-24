/**
 * Code Empire — Certificate preview
 *
 * Renders a preview of the generated certificate using our canvas helper.
 * Download and open-in-new-tab buttons appear below.
 */

import { useEffect, useRef, useState } from "react";
import { Card, Button, Badge, useI18n } from "dara-ui";
import {
  renderCertificate,
  downloadCertificate,
  openCertificateInNewTab,
} from "@/lib/certificate";
import { formatDate } from "@/lib/format";
import { Icons } from "@/lib/icons";

interface CertificatePreviewProps {
  studentName: string;
  courseName: string;
  level?: string;
  date?: string;
}

export function CertificatePreview({
  studentName,
  courseName,
  level,
  date,
}: CertificatePreviewProps) {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRendering, setIsRendering] = useState(true);

  const isoDate = date ?? new Date().toISOString();
  const formattedDate = formatDate(isoDate);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    setIsRendering(true);

    try {
      const canvas = renderCertificate({
        studentName,
        courseName,
        date: formattedDate,
        level,
      });
      canvas.style.width = "100%";
      canvas.style.height = "auto";
      canvas.style.borderRadius = "var(--radius-md)";
      canvas.style.display = "block";
      container.appendChild(canvas);
    } catch (e) {
      console.warn("Certificate render failed", e);
    } finally {
      setIsRendering(false);
    }
  }, [studentName, courseName, formattedDate, level]);

  const handleDownload = async () => {
    await downloadCertificate({
      studentName,
      courseName,
      date: formattedDate,
      level,
    });
  };

  const handleOpen = async () => {
    await openCertificateInNewTab({
      studentName,
      courseName,
      date: formattedDate,
      level,
    });
  };

  return (
    <Card glow="accent">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icons.award className="h-5 w-5 text-[var(--color-accent)]" />
          <h3 className="font-heading font-bold text-sm">
            {t("dashboard.certificates")}
          </h3>
        </div>
        {level && (
          <Badge variant="warning" size="sm" glow>
            {level}
          </Badge>
        )}
      </div>

      <div
        ref={containerRef}
        className="rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg-tertiary)] min-h-[160px] flex items-center justify-center"
      >
        {isRendering && (
          <p className="text-xs text-[var(--color-text-tertiary)] font-mono">
            {t("common.loading")}
          </p>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          variant="primary"
          size="sm"
          fullWidth
          leftIcon={<Icons.download className="h-3.5 w-3.5" />}
          onClick={handleDownload}
        >
          {t("dashboard.downloadCertificate")}
        </Button>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Icons.eye className="h-3.5 w-3.5" />}
          onClick={handleOpen}
        >
          {t("common.viewAll")}
        </Button>
      </div>
    </Card>
  );
}
