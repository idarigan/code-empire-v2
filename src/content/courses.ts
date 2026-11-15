// ============================================
// Course copy
// ============================================

export interface CourseText {
  title: string;
  summary: string;
  prerequisite: string;
}

export const courseText: Record<string, CourseText> = {
  "html-css": {
    title: "اچ‌تی‌ام‌ال و سی‌اس‌اس",
    summary: "اصلی‌ترین زبان‌های طراحی وب‌سایت",
    prerequisite: "بدون پیش‌نیاز",
  },
  tailwind: {
    title: "تیلویند",
    summary: "استایل‌دهی پویاتر و ریسپانسیو کردن اصولی‌تر",
    prerequisite: "HTML و CSS",
  },
  bootstrap: {
    title: "بوت‌استرپ",
    summary: "برای ریسپانسیو کردن سریع و استایل‌دهی آماده",
    prerequisite: "HTML و CSS",
  },
  "total-web": {
    title: "طراحی وب‌سایت جامع",
    summary: "مسیر کامل فرانت‌اند از HTML تا JavaScript و Bootstrap",
    prerequisite: "بدون پیش‌نیاز",
  },
  javascript: {
    title: "جاوااسکریپت",
    summary: "زبان برنامه‌نویسی مخصوص ساخت و طراحی وب‌سایت",
    prerequisite: "HTML و CSS",
  },
  "python-beginner": {
    title: "پایتون ابتدایی",
    summary: "شروع برنامه‌نویسی با پایتون مخصوص مبتدی‌ها",
    prerequisite: "بدون پیش‌نیاز",
  },
  "python-advanced": {
    title: "پایتون پیشرفته",
    summary: "مکمل کلاس ابتدایی برای حرفه‌ای شدن",
    prerequisite: "پایتون ابتدایی",
  },
  "c-sharp": {
    title: "سی شارپ",
    summary: "برنامه‌نویسی با زبان پرقدرت C#",
    prerequisite: "بدون پیش‌نیاز",
  },
  "c-plus-plus": {
    title: "سی پلاس پلاس",
    summary: "برنامه‌نویسی با زبان پرقدرت C++",
    prerequisite: "بدون پیش‌نیاز",
  },
  java: {
    title: "جاوا",
    summary: "برنامه‌نویسی با Java (ربطی به JavaScript ندارد!)",
    prerequisite: "بدون پیش‌نیاز",
  },
  unity: {
    title: "یونیتی 6",
    summary: "ساخت بازی با موتور بازی‌سازی Unity 6",
    prerequisite: "بدون پیش‌نیاز",
  },
  "unreal-engine": {
    title: "آنریل انجین",
    summary: "ساخت بازی با موتور بازی‌سازی Unreal Engine",
    prerequisite: "بدون پیش‌نیاز",
  },
  "scratch-junior": {
    title: "اسکرچ جونیور",
    summary: "ساخت بازی برای کودکان با Scratch Junior",
    prerequisite: "بدون پیش‌نیاز",
  },
};
