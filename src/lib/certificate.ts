/**
 * Code Empire — Certificate generator
 *
 * Renders a certificate to a canvas and returns a PNG blob.
 * Persian text uses the browser's font stack; make sure Vazirmatn is loaded.
 */

interface CertificateInput {
  studentName: string;
  courseName: string;
  date: string;
  level?: string;
}

// ============================================
// Canvas constants
// ============================================

const WIDTH = 1600;
const HEIGHT = 1130;
const PADDING = 60;
const INNER_PADDING = 90;

// ============================================
// Helpers
// ============================================

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawCornerAccents(ctx: CanvasRenderingContext2D): void {
  const size = 120;
  const thickness = 3;

  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = thickness;

  // Top-left
  ctx.beginPath();
  ctx.moveTo(PADDING, PADDING + size);
  ctx.lineTo(PADDING, PADDING);
  ctx.lineTo(PADDING + size, PADDING);
  ctx.stroke();

  // Top-right
  ctx.beginPath();
  ctx.moveTo(WIDTH - PADDING - size, PADDING);
  ctx.lineTo(WIDTH - PADDING, PADDING);
  ctx.lineTo(WIDTH - PADDING, PADDING + size);
  ctx.stroke();

  // Bottom-left
  ctx.beginPath();
  ctx.moveTo(PADDING, HEIGHT - PADDING - size);
  ctx.lineTo(PADDING, HEIGHT - PADDING);
  ctx.lineTo(PADDING + size, HEIGHT - PADDING);
  ctx.stroke();

  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(WIDTH - PADDING - size, HEIGHT - PADDING);
  ctx.lineTo(WIDTH - PADDING, HEIGHT - PADDING);
  ctx.lineTo(WIDTH - PADDING, HEIGHT - PADDING - size);
  ctx.stroke();
}

// ============================================
// Main renderer
// ============================================

export function renderCertificate(input: CertificateInput): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas 2D context unavailable");

  // Background
  const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  bg.addColorStop(0, "#06080f");
  bg.addColorStop(1, "#0d1220");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Subtle grid lines
  ctx.strokeStyle = "rgba(96, 165, 250, 0.05)";
  ctx.lineWidth = 1;
  for (let x = 0; x < WIDTH; x += 80) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT);
    ctx.stroke();
  }
  for (let y = 0; y < HEIGHT; y += 80) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WIDTH, y);
    ctx.stroke();
  }

  // Outer frame
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 4;
  drawRoundedRect(
    ctx,
    PADDING,
    PADDING,
    WIDTH - PADDING * 2,
    HEIGHT - PADDING * 2,
    24,
  );
  ctx.stroke();

  // Inner frame
  ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
  ctx.lineWidth = 1.5;
  drawRoundedRect(
    ctx,
    INNER_PADDING,
    INNER_PADDING,
    WIDTH - INNER_PADDING * 2,
    HEIGHT - INNER_PADDING * 2,
    16,
  );
  ctx.stroke();

  // Corner accents
  drawCornerAccents(ctx);

  // ============================================
  // Text
  // ============================================

  ctx.textAlign = "center";
  ctx.direction = "rtl";

  // Header — brand
  ctx.fillStyle = "#60a5fa";
  ctx.font = "bold 32px Vazirmatn, sans-serif";
  ctx.fillText("امپراتوری کد", WIDTH / 2, 200);

  ctx.fillStyle = "#7a8bab";
  ctx.font = "20px Inter, sans-serif";
  ctx.fillText("CODE EMPIRE", WIDTH / 2, 232);

  // Divider
  ctx.strokeStyle = "rgba(245, 158, 11, 0.6)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(WIDTH / 2 - 100, 260);
  ctx.lineTo(WIDTH / 2 + 100, 260);
  ctx.stroke();

  // Title
  ctx.fillStyle = "#f1f5f9";
  ctx.font = "bold 44px Vazirmatn, sans-serif";
  ctx.fillText("گواهی پایان دوره", WIDTH / 2, 340);

  // Body
  ctx.fillStyle = "#a8b6d1";
  ctx.font = "24px Vazirmatn, sans-serif";
  ctx.fillText("این گواهی به اینجانب", WIDTH / 2, 420);

  // Student name
  ctx.fillStyle = "#fbbf24";
  ctx.font = "bold 64px Vazirmatn, sans-serif";
  ctx.fillText(input.studentName, WIDTH / 2, 520);

  // Course line
  ctx.fillStyle = "#a8b6d1";
  ctx.font = "24px Vazirmatn, sans-serif";
  ctx.fillText("به دلیل تکمیل موفق دوره‌ی", WIDTH / 2, 600);

  // Course name
  ctx.fillStyle = "#a78bfa";
  ctx.font = "bold 40px Vazirmatn, sans-serif";
  ctx.fillText(input.courseName, WIDTH / 2, 675);

  // Level
  if (input.level) {
    ctx.fillStyle = "#7a8bab";
    ctx.font = "20px Vazirmatn, sans-serif";
    ctx.fillText(`سطح: ${input.level}`, WIDTH / 2, 730);
  }

  // Footer — date
  ctx.fillStyle = "#7a8bab";
  ctx.font = "20px Vazirmatn, sans-serif";
  ctx.fillText(`تاریخ صدور: ${input.date}`, WIDTH / 2, HEIGHT - 200);

  // Signature line (left)
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(180, HEIGHT - 140);
  ctx.lineTo(420, HEIGHT - 140);
  ctx.stroke();

  ctx.fillStyle = "#a8b6d1";
  ctx.font = "18px Vazirmatn, sans-serif";
  ctx.fillText("مدیر آکادمی", 300, HEIGHT - 105);

  // Signature line (right)
  ctx.beginPath();
  ctx.moveTo(WIDTH - 420, HEIGHT - 140);
  ctx.lineTo(WIDTH - 180, HEIGHT - 140);
  ctx.stroke();

  ctx.fillText("مهر امپراتوری", WIDTH - 300, HEIGHT - 105);

  return canvas;
}

// ============================================
// Blob + download helpers
// ============================================

export async function generateCertificateBlob(
  input: CertificateInput,
): Promise<Blob> {
  const canvas = renderCertificate(input);
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to generate certificate blob"));
    }, "image/png");
  });
}

export async function downloadCertificate(
  input: CertificateInput,
): Promise<void> {
  const blob = await generateCertificateBlob(input);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `code-empire-${input.courseName.replace(/\s+/g, "-")}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function openCertificateInNewTab(
  input: CertificateInput,
): Promise<void> {
  const blob = await generateCertificateBlob(input);
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank", "noopener,noreferrer");
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
