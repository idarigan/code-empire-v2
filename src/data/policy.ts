/**
 * Code Empire — Rules & charter
 */

import type { Rule, CharterItem } from "@/types";

export const rules: Rule[] = [
  {
    slug: "makeup-class",
    category: "course",
    validFrom: "2025-03-01",
    order: 1,
    sectionCount: 6,
  },
  {
    slug: "teacher-replacement",
    category: "course",
    validFrom: "2024-10-01",
    order: 2,
    sectionCount: 5,
  },
  {
    slug: "leaving-class",
    category: "course",
    validFrom: "2025-03-01",
    order: 3,
    sectionCount: 5,
  },
  {
    slug: "payment-methods",
    category: "course",
    validFrom: "2025-03-01",
    order: 4,
    sectionCount: 4,
  },
  {
    slug: "student-ranks",
    category: "course",
    validFrom: "2025-03-01",
    order: 5,
    sectionCount: 4,
  },
  {
    slug: "absence-and-cancellation",
    category: "course",
    validFrom: "2025-03-01",
    order: 6,
    sectionCount: 4,
  },
];

export const charterBill: CharterItem[] = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
];

export const getRuleBySlug = (slug: string): Rule | undefined =>
  rules.find((r) => r.slug === slug);

export const getSortedRules = (): Rule[] =>
  [...rules].sort((a, b) => a.order - b.order);

export const getRulesByCategory = (category: Rule["category"]): Rule[] =>
  getSortedRules().filter((r) => r.category === category);
