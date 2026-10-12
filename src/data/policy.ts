/**
 * Code Empire — Rules & charter
 *
 * Placeholder content. Replace with real rules.
 */

import type { Rule, CharterItem } from "@/types";

export const rules: Rule[] = [
  {
    slug: "enrollment-policy",
    title: "شرایط ثبت‌نام",
    subtitle: "قوانین مربوط به ثبت‌نام در دوره‌ها",
    validFrom: "2025-01-01",
    order: 1,
    sections: [
      {
        paragraphs: [
          "ثبت‌نام در هر دوره مستلزم تکمیل فرم ثبت‌نام و پرداخت شهریه است.",
          "پس از ثبت‌نام، اطلاعات دوره از طریق ایمیل یا پیامک برای شما ارسال می‌شود.",
        ],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "قوانین بازگشت وجه",
    subtitle: "شرایط انصراف از دوره و بازگشت شهریه",
    validFrom: "2025-01-01",
    order: 2,
    sections: [
      {
        paragraphs: [
          "تا ۲۴ ساعت قبل از شروع دوره، امکان انصراف و بازگشت کامل وجه وجود دارد.",
          "پس از شروع دوره، بازگشت وجه طبق شرایط خاص بررسی می‌شود.",
        ],
      },
    ],
  },
  {
    slug: "attendance-policy",
    title: "قوانین حضور و غیاب",
    subtitle: "الزامات حضور در کلاس‌ها",
    validFrom: "2025-01-01",
    order: 3,
    sections: [
      {
        paragraphs: [
          "حضور منظم در کلاس‌ها برای دریافت گواهی پایان دوره الزامی است.",
          "در صورت غیبت بیش از سه جلسه، گواهی صادر نمی‌شود.",
        ],
      },
    ],
  },
  {
    slug: "certificate-policy",
    title: "قوانین صدور گواهی",
    subtitle: "شرایط دریافت گواهی پایان دوره",
    validFrom: "2025-01-01",
    order: 4,
    sections: [
      {
        paragraphs: [
          "گواهی پایان دوره پس از تکمیل پروژه‌های عملی و قبولی در آزمون نهایی صادر می‌شود.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "سیاست حفظ حریم خصوصی",
    subtitle: "چگونه از اطلاعات شما محافظت می‌کنیم",
    validFrom: "2025-01-01",
    order: 5,
    sections: [
      {
        paragraphs: [
          "تمام اطلاعات شخصی شما محرمانه باقی می‌ماند و در اختیار هیچ شخص ثالثی قرار نمی‌گیرد.",
        ],
      },
    ],
  },
  {
    slug: "community-guidelines",
    title: "قوانین انجمن و گفتگو",
    subtitle: "رفتار درست در محیط آموزشی",
    validFrom: "2025-01-01",
    order: 6,
    sections: [
      {
        paragraphs: [
          "احترام متقابل میان دانشجویان و اساتید اصل اول Code Empire است.",
          "هرگونه توهین یا رفتار ناشایست منجر به اخراج از دوره می‌شود.",
        ],
      },
    ],
  },
];

export const charterBill: CharterItem[] = [
  {
    id: "1",
    title: "احترام",
    body: "احترام متقابل میان تمام اعضای Code Empire الزامی است.",
  },
  {
    id: "2",
    title: "تعهد",
    body: "تعهد به یادگیری و تکمیل تمرین‌ها وظیفه‌ی هر دانشجو است.",
  },
  {
    id: "3",
    title: "محرمانگی",
    body: "اطلاعات شخصی اعضا نزد Code Empire محفوظ است.",
  },
  {
    id: "4",
    title: "مسئولیت‌پذیری",
    body: "هر عضو در قبال رفتار و گفتار خود مسئول است.",
  },
  {
    id: "5",
    title: "صداقت علمی",
    body: "کپی کردن پروژه‌های دیگران تخلف جدی محسوب می‌شود.",
  },
  {
    id: "6",
    title: "یادگیری مستمر",
    body: "Code Empire محیطی برای یادگیری مداوم و به‌روز است.",
  },
];

// ============================================
// Helpers
// ============================================

export const getRuleBySlug = (slug: string): Rule | undefined =>
  rules.find((r) => r.slug === slug);

export const getSortedRules = (): Rule[] =>
  [...rules].sort((a, b) => a.order - b.order);
