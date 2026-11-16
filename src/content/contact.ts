// ============================================
// Hero
// ============================================

export const contactHero = {
  metaTitle: "تماس با ما",
  eyebrow: "تماس با ما",
  title: "پل ارتباطی شما با ما",
  subtitle:
    "سؤال، مشاوره یا همکاری؛ از هر مسیری که برایت راحت‌تر است با امپراتوری کد در ارتباط باش.",
};

// ============================================
// Channels
// ============================================

export const channels = {
  phone: { label: "تلفن", action: "تماس" },
  email: { label: "ایمیل", action: "ارسال ایمیل" },
  telegram: { label: "پشتیبانی تلگرام", action: "گفتگو" },
  hours: { label: "ساعات کاری" },
  copy: "کپی",
  copied: "کپی شد",
  copyFailed: "کپی انجام نشد",
};

// ============================================
// Form
// ============================================

export const form = {
  title: "فرم تماس",
  subtitle: "پیامت را بنویس تا تیم پشتیبانی آن را بررسی کند.",
  fields: {
    name: { label: "نام", placeholder: "نام" },
    lastName: { label: "نام خانوادگی", placeholder: "نام خانوادگی" },
    email: { label: "ایمیل", placeholder: "you@example.com" },
    phone: { label: "شماره موبایل", placeholder: "09123456789" },
    subject: { label: "موضوع", placeholder: "موضوع پیام را انتخاب کن" },
    message: { label: "پیام", placeholder: "پیامت را بنویس..." },
  },
  subjects: [
    { value: "consultation", label: "مشاوره رایگان" },
    { value: "registration", label: "ثبت‌نام در دوره" },
    { value: "support", label: "پشتیبانی" },
    { value: "cooperation", label: "همکاری" },
    { value: "other", label: "سایر" },
  ],
  reply: {
    label: "ترجیح می‌دهی چطور پاسخ بدهیم؟",
    options: [
      { value: "phone", label: "تماس تلفنی" },
      { value: "telegram", label: "تلگرام" },
      { value: "email", label: "ایمیل" },
    ],
  },
  submit: "ارسال پیام",
  success: "پیام آماده‌ی ارسال شد؛ برنامه‌ی ایمیل شما باز می‌شود.",
  mailHeading: "پیام جدید از فرم تماس",
  errors: {
    name: "نام باید حداقل 2 حرف باشد",
    email: "ایمیل نامعتبر است",
    phone: "شماره موبایل باید با 09 شروع شود و 11 رقم باشد",
    subject: "موضوع را انتخاب کن",
    message: "پیام باید حداقل 10 حرف باشد",
  },
};

// ============================================
// Side column
// ============================================

export const side = {
  location: {
    title: "آدرس دفتر",
    directions: "مسیریابی",
  },
  social: {
    title: "ما را دنبال کن",
    labels: {
      youtube: "یوتیوب",
      instagram: "اینستاگرام",
      telegram: "تلگرام",
    } as Record<string, string>,
  },
  promise: {
    title: "پاسخ‌گویی",
    text: "پیامت در ساعات کاری بررسی می‌شود و تیم پشتیبانی برای هماهنگی با تو تماس می‌گیرد.",
  },
};
