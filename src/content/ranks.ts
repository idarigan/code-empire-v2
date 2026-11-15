// ============================================
// Student rank ladder
// ============================================

export interface RankStage {
  id: string;
  label: string;
  caption: string;
  level: number;
  minXP: number;
  variant: "primary" | "secondary" | "success" | "danger" | "warning";
}

export const rankStages: RankStage[] = [
  {
    id: "aghazgar",
    label: "آغازگر",
    caption: "آغاز مسیر یادگیری و اولین پروژه‌ها",
    level: 1,
    minXP: 0,
    variant: "success",
  },
  {
    id: "danshour",
    label: "دانشور",
    caption: "پایان نخستین کلاس با تایید مربی",
    level: 6,
    minXP: 1000,
    variant: "primary",
  },
  {
    id: "kadzan-nokhbeh",
    label: "کدزن نخبه",
    caption: "تسلط بر مهارت و پایان موفق مسیر آموزش",
    level: 14,
    minXP: 3000,
    variant: "secondary",
  },
  {
    id: "danshour-nokhbeh",
    label: "دانشور نخبه",
    caption: "ساخت پروژه‌ی بزرگ و گذراندن چند کلاس",
    level: 24,
    minXP: 6000,
    variant: "danger",
  },
  {
    id: "javidan",
    label: "جاویدان",
    caption: "هم‌تراز مربی خود؛ بالاترین رده‌ی امپراتوری",
    level: 40,
    minXP: 10000,
    variant: "warning",
  },
];

export const rankMaxXP = 12000;
