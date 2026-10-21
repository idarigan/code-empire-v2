/**
 * Code Empire — Rules & charter
 *
 * Six course-related policies from the previous site, plus the general
 * charter bill. Every Persian field has an English counterpart in the
 * `i18n` block so pages can switch languages without a second file.
 */

import type { Rule, CharterItem, CharterBill } from "@/types";

// ============================================
// Helpers
// ============================================

interface RawArticleBlock {
  title?: string;
  paragraph?: string[];
  hints?: string[];
}

/**
 * Convert legacy `article` blocks into our ArticleSection shape.
 * No covers on policy pages, so we just carry titles, paragraphs and hints.
 */
function toSections(blocks: RawArticleBlock[]): Rule["sections"] {
  return blocks.map((b) => ({
    title: b.title,
    paragraphs: b.paragraph,
    hints: b.hints,
  }));
}

// ============================================
// Rules
// ============================================

export const rules: Rule[] = [
  // ============================================
  // 1. برگزاری کلاس جبرانی
  // ============================================
  {
    slug: "makeup-class",
    title: "برگزاری کلاس جبرانی",
    subtitle: "شرایط، زمان‌بندی، هزینه و قوانین کلاس جبرانی",
    category: "course",
    validFrom: "2025-03-01",
    order: 1,
    i18n: {
      title: "Makeup Classes",
      subtitle: "Conditions, scheduling, cost and rules for makeup sessions",
      sections: [
        {
          title: "Conditions",
          paragraphs: ["A makeup class is held in only two cases:"],
          hints: [
            "When the original session was cancelled on time (by 23:59 the day before).",
            "When an emergency (power outage, sudden system failure or internet problems) is reported no later than 2 hours after the session started.",
          ],
        },
        {
          paragraphs: [
            "In any other case, the session is considered consumed and no makeup will be arranged.",
          ],
        },
        {
          title: "Scheduling",
          paragraphs: [
            "The length of a makeup class matches the original session. Scheduling is coordinated between the teacher and the student, and the exact time is confirmed by support.",
          ],
        },
        {
          title: "Attendance",
          paragraphs: [
            "Attendance at the makeup class is mandatory. If the student is absent without a valid reason, that session is consumed and no further makeup will be arranged.",
            "Cancellation of a makeup class follows the same rules (by 23:59 the day before, or up to 2 hours after in emergencies).",
          ],
        },
        {
          title: "Assignments",
          paragraphs: [
            "The student is responsible for completing and submitting the assignments of the original session even if the next session becomes a makeup.",
            "Questions and review are available in both original and makeup sessions.",
          ],
        },
        {
          title: "Cost",
          paragraphs: [
            "If a makeup class is held due to Code Empire's mistake or cancellation, the student pays nothing.",
            "If the makeup is requested by or caused by the student's absence, its cost is calculated at the current session rate (i.e. full session price).",
          ],
        },
      ],
    },
    sections: toSections([
      {
        title: "شرایط برگزاری",
        paragraph: ["کلاس جبرانی فقط در دو حالت برگزار می‌شود:"],
        hints: [
          "زمانی که جلسه اصلی به‌موقع کنسل شده باشد (حداکثر تا ساعت ۲۳:۵۹ روز قبل).",
          "زمانی که در شرایط اضطراری (مثل قطعی برق، خرابی ناگهانی سیستم یا مشکلات اینترنت) نهایتاً تا ۲ ساعت پس از آغاز جلسه کنسلی اعلام شده باشد.",
        ],
      },
      {
        paragraph: [
          "در غیر این دو حالت، جلسه سوخته محسوب می‌شود و کلاس جبرانی برای آن در نظر گرفته نخواهد شد.",
        ],
      },
      {
        title: "زمان‌بندی",
        paragraph: [
          "مدت زمان کلاس جبرانی برابر با مدت زمان کلاس اصلی است. برنامه‌ریزی جلسه جبرانی با هماهنگی استاد و دانشجو انجام می‌شود و زمان دقیق آن توسط پشتیبانی اعلام خواهد شد.",
        ],
      },
      {
        title: "حضور در کلاس جبرانی",
        paragraph: [
          "حضور در کلاس جبرانی الزامی است. اگر دانشجو بدون دلیل موجه در کلاس جبرانی حاضر نشود، جلسه سوخته محسوب خواهد شد و جبرانی دیگری برای آن برگزار نمی‌شود.",
          "در صورت نیاز به کنسلی کلاس جبرانی نیز، همان قوانین کنسلی (تا ۲۳:۵۹ روز قبل یا نهایتاً ۲ ساعت بعد در شرایط اضطراری) اعمال خواهد شد.",
        ],
      },
      {
        title: "تکالیف و تمرین‌ها",
        paragraph: [
          "دانشجو موظف است تکالیف جلسه اصلی را حتی اگر جلسه بعدی به‌صورت جبرانی برگزار شود، انجام داده و ارائه کند.",
          "امکان پرسش و مرور تمرین‌ها هم در جلسات اصلی و هم در جلسات جبرانی وجود دارد.",
        ],
      },
      {
        title: "هزینه",
        paragraph: [
          "اگر کلاس جبرانی به دلیل مشکل یا لغو از سمت امپراتوری کد برگزار شود، هیچ هزینه‌ای برای دانشجو نخواهد داشت.",
          "اما اگر جبرانی به درخواست یا به‌دلیل غیبت/کنسلی دانشجو برگزار شود، هزینه آن مطابق تعرفه جلسات فعلی محاسبه و دریافت می‌شود. (یعنی هزینه کلاس جبرانی در این حالت کامل و برابر با جلسه اصلی است)",
        ],
      },
    ]),
  },

  // ============================================
  // 2. جایگزین کردن استاد
  // ============================================
  {
    slug: "teacher-replacement",
    title: "جایگزین کردن استاد",
    subtitle: "شرایط، آگاهی‌رسانی و تداوم کیفیت در تعویض استاد",
    category: "course",
    validFrom: "2024-10-01",
    order: 2,
    i18n: {
      title: "Teacher Replacement",
      subtitle: "Conditions, notification and quality continuity",
      sections: [
        {
          title: "Conditions",
          paragraphs: [
            "Replacing a teacher happens only in case of unforeseen issues such as illness or inability to teach.",
            "The decision is made with management consultation and based on the new teacher's qualifications.",
          ],
        },
        {
          title: "Notification",
          paragraphs: [
            "Students are informed at least 24 hours in advance. The change is announced officially via email or SMS.",
          ],
        },
        {
          title: "Introducing the new teacher",
          paragraphs: [
            "For a permanent replacement, an introduction session is held to align on expectations and goals. Students can ask questions and learn more about the new teacher.",
            "For a temporary replacement, no separate intro is held — only 10 minutes of class time is allocated for introductions.",
          ],
        },
        {
          title: "Quality continuity",
          paragraphs: [
            "The new teacher is expected to keep the syllabus as close as possible to the previous teacher's so students' learning curve stays smooth.",
            "Where needed, the new teacher may use alternative teaching methods to catch up.",
          ],
        },
        {
          paragraphs: [
            "At Code Empire, every event and program is planned with care. We guarantee this to you.",
          ],
        },
      ],
    },
    sections: toSections([
      {
        title: "شرایط جایگزین استاد",
        paragraph: [
          "تعویض استاد تنها در صورت بروز مشکلات غیرقابل پیش‌بینی مانند بیماری یا عدم توانایی تدریس استاد فعلی انجام می‌شود.",
          "تصمیم به تعویض استاد باید با مشورت مدیریت و با توجه به صلاحیت استاد جدید انجام شود.",
        ],
      },
      {
        title: "آگاهی‌رسانی",
        paragraph: [
          "دانش‌آموزان حداقل ۲۴ ساعت پیش از تعویض استاد از این موضوع آگاه می‌شوند. تغییر استاد به صورت رسمی و از طریق ایمیل یا پیامک به دانش‌آموزان اطلاع‌رسانی می‌شود.",
        ],
      },
      {
        title: "آشنایی با استاد جدید",
        paragraph: [
          "در صورتی که استاد جدید به طور دائم انتخاب شود، جلسه‌ای برای آشنایی با ایشان و بیان انتظارات و اهداف کلاس برگزار خواهد شد. دانش‌آموزان می‌توانند پرسش‌های خود را در این جلسه بیان کنند و اطلاعات بیشتری درباره استاد جدید کسب نمایند.",
          "در صورت تعویض کوتاه‌مدت یا موقت، جلسه‌ای جداگانه برای آشنایی برگزار نمی‌شود و تنها ۱۰ دقیقه از زمان کلاس برای این منظور اختصاص داده می‌شود.",
        ],
      },
      {
        title: "تداوم کیفیت آموزش",
        paragraph: [
          "استاد جدید موظف است که سرفصل‌ها و محتوای کلاس را تا حد امکان با استاد پیشین هماهنگ کند تا روند یادگیری دانش‌آموزان دچار مشکل نشود.",
          "در صورت نیاز، استاد جدید می‌تواند از روش‌های آموزشی متنوع برای جبران زمان از دست رفته استفاده کند.",
        ],
      },
      {
        paragraph: [
          "در امپراتوری کد، تمام رخدادها و برنامه‌ها با برنامه‌ریزی دقیق و هماهنگی انجام می‌شود. ما از این بابت به شما تضمین می‌دهیم.",
        ],
      },
    ]),
  },

  // ============================================
  // 3. ترک کلاس
  // ============================================
  {
    slug: "leaving-class",
    title: "ترک کلاس",
    subtitle: "قوانین ترک موقت، ترک کامل و بازگشت",
    category: "course",
    validFrom: "2025-03-01",
    order: 3,
    i18n: {
      title: "Leaving a Course",
      subtitle: "Rules for temporary leave, full withdrawal and return",
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "Code Empire students may leave a course for any reason. Each situation has its own rules.",
          ],
        },
        {
          title: "Temporary leave",
          paragraphs: [
            "Any student can leave for a defined period at no cost. Note that slots for long periods may be reassigned and new dates must be scheduled.",
          ],
        },
        {
          title: "Returning after full withdrawal",
          paragraphs: [
            "Students who fully withdraw may return without starting over, and don't pay for completed sessions again.",
            "Rank is preserved — you resume at the tier you had and can continue climbing.",
            "Ranks stay active even after graduation; your position in Code Empire is permanent.",
          ],
        },
        {
          title: "Refunds",
          paragraphs: [
            "Amounts paid are returned per the fee table, minus the sessions already held.",
            "For periodic payments, outstanding balances are settled first; the remainder is refunded.",
          ],
        },
        {
          title: "Refund destination",
          paragraphs: [
            "Within 72 hours of confirming full withdrawal, the student must provide an IBAN in their name (or their guardian's) to support. Otherwise refunds may be delayed.",
          ],
        },
      ],
    },
    sections: toSections([
      {
        title: "اساس‌نامه ترک کلاس‌ها و مسائل آن",
        paragraph: [
          "دانشجویان امپراتوری کد می‌توانند به هر دلیلی کلاس را ترک کنند. این موضوع بسته به شرایط با قوانین مشخصی همراه خواهد بود.",
        ],
      },
      {
        title: "ترک موقت (بازه‌ای)",
        paragraph: [
          "هر دانشجو می‌تواند بدون محدودیت، کلاس را برای مدت معین ترک کند. این موضوع هزینه‌ای برای دانشجو نخواهد داشت. با این حال، باید توجه داشت که بازه‌های تعیین شده ممکن است در صورت فاصله زمانی بلندمدت به دانشجوی دیگری اختصاص یابد و نیاز به ثبت بازه‌های جدید باشد.",
        ],
      },
      {
        title: "بازگشت احتمالی پس از ترک کامل کلاس",
        paragraph: [
          "دانشجویی که کلاس را به طور کامل ترک کرده است، می‌تواند بدون نیاز به شروع از جلسه اول بازگردد و هزینه‌ای برای بخش‌های گذرانده شده نمی‌پردازد.",
          "دانشجو می‌تواند با بازگشت، رده قبلی خود را در میان دانشجویان امپراتوری کد بازیابی کند و برای پیشرفت به رده‌های بالاتر تلاش کند.",
          "رده‌بندی دانشجویان حتی پس از پایان کلاس نیز پابرجا می‌ماند و جایگاه آن‌ها در امپراتوری کد محفوظ است.",
        ],
      },
      {
        title: "بازگشت وجه و خسارت",
        paragraph: [
          "مبالغ پرداخت‌شده برای کلاس بر اساس جدول هزینه‌ها محاسبه و به دانشجو بازگردانده می‌شود. تنها هزینه جلسات برگزار شده کسر خواهد شد.",
          "در صورت پرداخت دوره‌ای، پس از بررسی بدهی و بستانکاری، مبلغ مورد نظر دریافت و باقی‌مانده به دانشجو بازگردانده خواهد شد.",
        ],
      },
      {
        title: "مقصد بازگشت وجه",
        paragraph: [
          "دانشجو موظف است تا ۷۲ ساعت پس از تایید ترک کامل کلاس، شماره شبای حساب بانکی به نام خود یا ولی ایشان را به واحد پشتیبانی ارائه دهد. در غیر این صورت ممکن است در فرآیند بازگشت وجه تاخیر ایجاد شود.",
        ],
      },
    ]),
  },

  // ============================================
  // 4. روش‌های پرداخت
  // ============================================
  {
    slug: "payment-methods",
    title: "روش‌های پرداخت بهای کلاس",
    subtitle: "پرداخت یکجا، جلسه‌ای، اقساطی و شرایط آن‌ها",
    category: "course",
    validFrom: "2025-03-01",
    order: 4,
    i18n: {
      title: "Payment Methods",
      subtitle: "Lump sum, per-session, and installment options",
      sections: [
        {
          title: "Options",
          paragraphs: [
            "By default, tuition is paid in full upfront. All payments are direct — each student settles with their support person, who also handles any refunds.",
            "For students who prefer to spread costs, Code Empire offers two alternatives:",
            "Per-session: pay a portion before each session (at least one day in advance).",
            "Installments: agree with management to split tuition into defined parts.",
            "Read the 'Final amount changes' section carefully.",
          ],
          hints: [
            "Note: upfront payers get preferred-customer status and exclusive discounts.",
          ],
        },
        {
          title: "How payments work",
          paragraphs: [
            "All payments are direct and fully coordinated. Your support person collects the fee and manages payments (and refunds) throughout the course.",
            "Payment reminders are handled by support. Students pay the scheduled amount on time — otherwise upcoming sessions are not reserved.",
          ],
        },
        {
          title: "Final amount changes",
          paragraphs: [
            "If the tuition is split into more than 2 installments, the total increases by 2% per installment. Example: a 4,000,000 Toman course split into 5 parts costs 3% more, i.e. 4,240,000 Toman.",
            "The extra amount is also payable periodically.",
          ],
        },
        {
          title: "Payment schedule",
          paragraphs: [
            "Students are free to choose the number and timing of installments. Code Empire doesn't restrict them.",
          ],
        },
      ],
    },
    sections: toSections([
      {
        title: "روش های پرداخت بهای کلاس",
        paragraph: [
          "پرداخت بهای همه‌ی کلاس‌های امپراتوری کد به طور پیش‌فرض به صورت یکجا از دانشجویان گرامی دریافت می‌شود. تمام پرداخت‌ها به صورت مستقیم انجام می‌شود، به این معنی که هر دانشجو با پشتیبان خود تمام امور مربوط به پرداخت و یا درصورت نیاز بازگشت وجه را انجام خواهد داد. به همراه روش پرداخت یکجا، دو روش پرداختی دیگر نیز برای دانشجویان وجود دارد.",
          "برای آن دسته از دانشجویانی که می‌خواهند هزینه‌ی کلاس‌های آموزشی را به هر دلیلی یکجا پرداخت نکنند، امپراتوری کد روش پرداخت دوره‌ای (جلسه‌ای یا اقساطی) را در نظر گرفته که در این روش دانشجو در بازه‌های زمانی مشخص اقدام به پرداخت هزینه‌های تعیین شده می‌کند.",
          "پرداخت دوره‌ای (جلسه‌ای): در این روش دانشجو موظف است در هر جلسه بخشی از بهای کلاس را پرداخت نماید (حداقل یک روز پیش از برگزاری جلسه).",
          "پرداخت اقساطی: هر دانشجوی امپراتوری کد می‌تواند با هماهنگی و توافق مدیریت، بهای کلاس را به صورت اقساطی پرداخت نماید.",
          "در ادامه، بند «تغییر در مبلغ پایانی» را با دقت بخوانید!",
        ],
        hints: [
          "توجه: در صورت پرداخت یکجا جزو مشتریان خوش‌حساب شناخته شده و امتیاز و تخفیفات ویژه دریافت خواهید کرد!",
        ],
      },
      {
        title: "شیوه پرداخت",
        paragraph: [
          "همه‌ی پرداخت‌ها (چه جلسه‌ای، چه یکجا) به صورت مستقیم و با هماهنگی کامل انجام خواهد شد. پشتیبان دانشجو شخصاً هزینه را دریافت خواهد کرد و در طول کلاس مدیریت پرداختی‌ها و در صورت نیاز بازگشت وجه به عهده‌ی ایشان خواهد بود.",
          "یادآوری پرداخت‌ها نیز توسط پشتیبان دانشجو انجام خواهد شد و نیازی به نگرانی در مورد تأخیر نیست. دانشجو در زمان‌های هماهنگ‌شده با پشتیبان خود موظف به پرداخت بخش مشخص‌شده‌ی هزینه می‌باشد. در صورت تأخیر، جلسات پیشرو برای دانشجو رزرو نخواهد شد!",
        ],
      },
      {
        title: "تغییر در مبلغ پایانی",
        paragraph: [
          "بهای کلاس در صورت تقسیم شدن به بیش از ۲ قسط افزایش خواهد داشت و به ازای هر قسط پرداختی ۲٪ از کل بهای کلاس به پرداخت نهایی دانشجو افزوده خواهد شد. (برای نمونه در صورتی که کل بهای کلاس ۴,۰۰۰,۰۰۰ تومان باشد و به ۵ قسط پرداخت تقسیم شود، دانشجو ۳٪ بیشتر از کل بهای کلاس یعنی ۲۴۰,۰۰۰ تومان یا به طور نهایی ۴,۲۴۰,۰۰۰ تومان پرداخت خواهد کرد.)",
          "مبلغ بیشتر در برنامه‌ی پرداخت دوره‌ای نیز به شکل دوره‌ای قابل پرداخت خواهد بود.",
        ],
      },
      {
        title: "بازه‌های زمانی پرداخت (اقساط)",
        paragraph: [
          "این بخش بسته به درخواست دانشجو متفاوت است و ایشان آزاد هستند تا تعداد و زمان کلاس‌های پرداخت خود را برگزینند. امپراتوری کد به دلیل ساختار خود در این زمینه محدودیتی برای دانشجویان خود ایجاد نمی‌کند.",
        ],
      },
    ]),
  },

  // ============================================
  // 5. رده‌بندی دانشجویان
  // ============================================
  {
    slug: "student-ranks",
    title: "رده‌بندی دانشجویان",
    subtitle: "پنج رده از آغازگر تا جاویدان و معیارهای هر کدام",
    category: "course",
    validFrom: "2025-03-01",
    order: 5,
    i18n: {
      title: "Student Ranks",
      subtitle: "Five tiers from Aghazgar to Javidan, and the criteria",
      sections: [
        {
          title: "Ranks",
          paragraphs: [
            "Students earn ranks based on their achievements. From top to bottom:",
          ],
          hints: [
            "Javidan",
            "Danshour-e Nokhbeh",
            "Kadzan-e Nokhbeh",
            "Danshour",
            "Aghazgar",
          ],
        },
        {
          title: "Rewards and events",
          paragraphs: [
            "Code Empire hosts events for all students, and each rank unlocks a different position and perks.",
            "Javidan holders receive an exclusive emblem and gifts. Other ranks have their own rewards, varying by rank and event.",
          ],
        },
        {
          title: "Criteria",
          paragraphs: [
            "The main criterion is how students complete their first course and the skills they gain.",
            "Aghazgar: every student starts here. Reflects the beginning of the journey.",
            "Danshour: earned after completing the first course and being approved by the mentor.",
            "Kadzan-e Nokhbeh: earned by finishing the learning path with strong results.",
            "Danshour-e Nokhbeh: a higher tier requiring skill beyond the classroom — a big project, multiple courses, or outstanding scores.",
            "Javidan: the highest and most valuable rank, matching the mentor's own skill level. Every student has their own path to it. Many Javidan holders stay with Code Empire after graduating and help build the future.",
          ],
        },
        {
          paragraphs: [
            "Every student, regardless of rank, receives the highest quality of education and service. What matters is how you use the opportunity.",
          ],
        },
      ],
    },
    sections: toSections([
      {
        title: "رده‌بندی",
        paragraph: [
          "در امپراتوری کد، دانشجویان بر اساس دستاوردهای خود در مسیر یادگیری به رده‌هایی دست می‌یابند که ارزش مهارت آنان را نسبت به یکدیگر و در مقایسه با توانایی‌های فردی خودشان مشخص می‌کند. رده‌های دانشجویی در امپراتوری کد از بالاترین تا رده‌ی آغازین به ترتیب زیر هستند:",
        ],
        hints: ["جاویدان", "دانشور نخبه", "کدزن نخبه", "دانشور", "آغازگر"],
      },
      {
        title: "جوایز و رویدادها",
        paragraph: [
          "امپراتوری کد برای تمام دانشجویان رویدادهای ویژه‌ای برگزار می‌کند و هر دانشجو بر اساس رده‌ای که در امپراتوری به دست آورده، جایگاه و مزایای متفاوتی خواهد داشت.",
          "`جاویدان`ها دارای بالاترین رده در امپراتوری هستند و به محض رسیدن به این سطح، نماد اختصاصی و هدایایی از سوی امپراتوری کد دریافت می‌کنند. سایر رده‌ها نیز در رویدادهای امپراتوری امتیازات و جوایز خاص خود را دارند که متناسب با رده و رویداد، متفاوت خواهد بود.",
        ],
      },
      {
        title: "معیارهای هر رده",
        paragraph: [
          "اصلی‌ترین معیار برای رده‌بندی دانشجویان، چگونگی گذراندن کلاس نخست آن‌ها و مهارت‌های آموخته شده در طی این کلاس است.",
          "آغازگر: نخستین رده‌ی هر دانشجو آغازگر است و تا پایان نخستین دوره‌ای که در آن شرکت می‌کند، همین رده را خواهد داشت. این رده بیانگر آغاز مسیر یادگیری و تلاش برای دستیابی به مهارت‌هاست.",
          "دانشور: دانشجو پس از پایان نخستین کلاس و تایید مربی مربوطه به رده‌ی `دانشور` ارتقا می‌یابد. این رده نشان‌دهنده تلاش موفقیت‌آمیز دانشجو و امکان دستیابی به پیشرفت‌های بزرگ‌تر در آینده است.",
          "کدزن نخبه: فردی که به دنبال کسب مهارت است و با تلاش خود و نتایج مطلوب، مسیر آموزش را به پایان می‌رساند، در امپراتوری کد به‌عنوان `کدزن نخبه` شناخته می‌شود. این رده نشان‌دهنده مهارت‌های آموخته‌شده دانشجو و آمادگی او برای دستاوردهای بیشتر است.",
          "دانشور نخبه: دومین رده‌ی برتر امپراتوری، `دانشور نخبه` است که بیانگر مهارتی فراتر از کلاس‌ها و تمرین‌های عمومی است. دانشجویی با این رده توانایی خود را نه‌تنها در مطالب کلاس، بلکه فراتر از آن، از جمله ساخت پروژه‌ای بزرگ، گذراندن چندین کلاس، و کسب امتیازات عالی ثابت کرده است. این رده با تلاش زیاد به دست می‌آید و در شرایط گوناگون قابل دستیابی است.",
          "جاویدان: بالاترین و ارزشمندترین رده که در آن دانشجو به سطحی از مهارت هم‌تراز مربی خویش دست می‌یابد. هر دانشجو راه مخصوص به خود برای رسیدن به این رده را دارد و علاقه و پایبندی به یادگیری، مشخصه‌ی بارز آن‌هاست. بسیاری از جاویدان‌ها پس از اتمام آموزش، همچنان به امپراتوری کد متعهد می‌مانند و در ساختن آینده‌ی خود در کنار آن تلاش می‌کنند.",
        ],
      },
      {
        paragraph: [
          "هر دانشجو با هر رده از بهترین کیفیت آموزش و خدمات بهره‌مند میباشد و همه چیز به نوع استفاده ی ایشان از این امکان بسته است. پس به بهترین راه از اون استفاده کنید...",
        ],
      },
    ]),
  },

  // ============================================
  // 6. غیبت و لغو برگزاری جلسه
  // ============================================
  {
    slug: "absence-and-cancellation",
    title: "غیبت و لغو برگزاری جلسه",
    subtitle: "قوانین کنسلی، غیبت و جلسات جبرانی",
    category: "course",
    validFrom: "2025-03-01",
    order: 6,
    i18n: {
      title: "Absence and Cancellation",
      subtitle: "Rules for cancellations, absence and makeup sessions",
      sections: [
        {
          title: "Cancellations",
          paragraphs: [
            "A session may be cancelled only by 23:59 the day before. Later cancellations are considered consumed, with no recovery.",
            "In emergencies (power outage, sudden system failure or internet problems) that prevented earlier notice, students may report a cancellation up to 2 hours after the session starts. This must be reported to support and, once approved, the session can be recovered.",
          ],
        },
        {
          title: "Absence",
          paragraphs: [
            "A student is marked absent if they don't show up within 15 minutes of the session start (e.g. session at 12:00 — join Google Meet by 12:15 at the latest).",
            "Absences count as held sessions and are consumed. Please join on time.",
          ],
        },
        {
          title: "Makeup sessions",
          paragraphs: [
            "Students can request makeup sessions through support. Makeup is only offered for sessions cancelled on time, or for emergencies reported within 2 hours of the start (later than that, no makeup is scheduled).",
            "Cost is calculated at the current session rate. Unexcused delays or absences get no makeup.",
          ],
        },
        {
          title: "Additional notes",
          hints: [
            "All cancellations and makeup requests must go through the official Code Empire Telegram support account to be recorded.",
            "Final decisions are based on the reports in the system.",
            "For any ambiguity or special case, contact support for guidance.",
          ],
        },
      ],
    },
    sections: toSections([
      {
        title: "کنسلی جلسات",
        paragraph: [
          "کنسل کردن هر جلسه تنها تا ساعت ۲۳:۵۹ روز قبل از برگزاری آن امکان‌پذیر است. اگر دانشجو بعد از این زمان کنسلی خود را اعلام کند، جلسه سوخته تلقی شده و امکان جبران آن وجود ندارد.",
          "با این حال، در شرایط اضطراری مانند قطعی برق، خرابی ناگهانی سیستم یا مشکلات اینترنت که امکان اطلاع‌رسانی زودتر فراهم نبوده است، دانشجو می‌تواند کنسلی را تا ۲ ساعت پس از آغاز جلسه اعلام کند. چنین مواردی باید به پشتیبانی اطلاع داده شوند و در صورت تأیید، جلسه قابل جبران خواهد بود.",
        ],
      },
      {
        title: "غیبت در جلسات",
        paragraph: [
          "غیبت زمانی ثبت می‌شود که دانشجو تا ۱۵ دقیقه پس از آغاز کلاس حضور نیابد. برای مثال، اگر کلاس ساعت ۱۲:۰۰ آغاز شود، دانشجو باید حداکثر تا ساعت ۱۲:۱۵ در Google Meet حاضر شود.",
          "جلسات غیبت خورده جزو جلسات برگزارشده محسوب شده و سوخته هستند، بنابراین توصیه می‌شود دانشجویان حتماً در زمان مقرر وارد کلاس شوند تا حقوق خود را حفظ کنند.",
        ],
      },
      {
        title: "جلسات جبرانی",
        paragraph: [
          "در صورت نیاز به جلسات جبرانی، دانشجو می‌تواند درخواست خود را از طریق پشتیبانی مطرح کند. جلسات جبرانی تنها برای جلساتی ارائه می‌شوند که به‌موقع کنسل شده باشند یا در شرایط اضطراری حداکثر تا ۲ ساعت پس از آغاز جلسه اعلام کنسلی شده باشند (اگر بعد از این زمان باشد، هیچ جلسه جبرانی در نظر گرفته نخواهد شد).",
          "هزینه جلسات جبرانی مطابق تعرفه‌های فعلی محاسبه خواهد شد. برای تأخیرهای غیرموجه یا عدم حضور بدون دلیل، هیچ جلسه جبرانی ارائه نمی‌شود.",
        ],
      },
      {
        title: "نکات تکمیلی",
        hints: [
          "تمامی کنسلی‌ها و درخواست‌های جبرانی باید از طریق حساب رسمی پشتیبانی تلگرام امپراتوری کد انجام شود تا ثبت رسمی شوند.",
          "تصمیم نهایی در مورد وضعیت جلسات بر اساس گزارش‌های ثبت شده در سیستم اتخاذ خواهد شد.",
          "در صورت هرگونه ابهام یا شرایط خاص، می‌توانید با پشتیبانی تماس گرفته و راهنمایی لازم را دریافت کنید.",
        ],
      },
    ]),
  },
];

// ============================================
// Charter Bill
// ============================================

export const charterBill: CharterItem[] = [
  {
    id: "1",
    title: "۱) قوانین همگانی",
    body: "کاربران و استفاده مناسب از سایت: کاربران وبسایت «امپراتوری کد» شامل تمامی افرادی هستند که از خدمات و محتوای این وبسایت استفاده می‌کنند. کاربران گرامی موظف‌اند به شکل قانونی و اخلاقی از وبسایت بهره‌برداری کنند و از هرگونه استفاده غیرمجاز یا آسیب به وبسایت خودداری نمایند.",
  },
  {
    id: "2",
    title: "۲) حقوق و مسئولیت",
    body: "مالکیت معنوی: تمامی محتواهای موجود در وبسایت، شامل مقالات، تصاویر و سایر منابع، تحت حقوق مالکیت معنوی «امپراتوری کد» قرار دارد و هرگونه کپی‌برداری بدون اجازه ممنوع است. مسئولیت محتوا: اگر چه ما در تلاشیم تا محتوای عالی و مفیدی ارائه دهیم، اما مسئولیت استفاده از این محتوا بر عهده کاربران است و «امپراتوری کد» هیچ‌گونه مسئولیتی در برابر خسارات احتمالی ناشی از استفاده اشتباه از این اطلاعات ندارد. تعهد به کیفیت: ما تمام تلاش خود را برای ارائه خدمات با کیفیت به کار می‌بندیم. با این حال، اگر شکایاتی داشتید خواهشمندیم ثبت بفرمایید تا رسیدگی شود. مشاوره رایگان: مشاوران ما به تمام کاربران وبسایت بر اساس جدیدترین داده‌ها و متود‌های روز، مشاوره رایگان ارائه میدهند.",
  },
  {
    id: "3",
    title: "۴) حریم خصوصی",
    body: "جمع‌آوری اطلاعات: ما ممکن است اطلاعاتی از کاربران جمع‌آوری کنیم، مانند نام، ایمیل و دیگر اطلاعات مرتبط. این اطلاعات تنها برای بهبود خدمات و ارتباط با کاربران استفاده می‌شود. تمام کارهای لازم برای امنیت اطلاعات انجام شده و همیشه کوشاییم.",
  },
  {
    id: "4",
    title: "۵) تغییرات در قوانین",
    body: "حق تغییر: «امپراتوری کد» حق تغییرات جزئی در این قوانین را برای خود محفوظ می‌دارد. کاربران موظف‌اند به صورت دوره‌ای این بخش را بررسی کنند تا از تغییرات آگاه شوند. البته اطلاع رسانی هم انجام میشود.",
  },
  {
    id: "5",
    title: "۶) حل اختلاف",
    body: "اختلاف و مشکلات جدی: در صورت بروز هرگونه اختلاف میان کاربران و کارکنان امپراتوری کد، با ما تماس گرفته تا مسئله به‌صورت دوستانه برطرف شود. در صورت عدم توافق، موضوع به مراجع قانونی ارجاع خواهد شد.",
  },
];

// English translation of the charter bill, kept inline to avoid a second file
export const charterBillI18n: CharterBill[] = [
  {
    title: "1) General Rules",
    paragraphs: [
      "Users and proper use of the site: Users of the Code Empire website include everyone who uses its services and content. Users must use the site legally and ethically, and avoid unauthorized use or damage.",
    ],
  },
  {
    title: "2) Rights and Responsibilities",
    paragraphs: [
      "Intellectual property: All content on the site — articles, images and other resources — is under Code Empire's intellectual property. Copying without permission is prohibited.",
      "Content responsibility: We try to provide excellent, useful content, but using it is the user's responsibility. Code Empire is not liable for any damage caused by misuse.",
      "Commitment to quality: We do our best to deliver quality services. If you have complaints, please submit them for review.",
      "Free consultation: Our advisors provide free consultation to all users based on the latest data and methods.",
    ],
  },
  {
    title: "4) Privacy",
    paragraphs: [
      "Data collection: We may collect information such as name, email, and related details. This is used solely to improve services and communicate with users.",
      "All necessary steps for data security have been taken, and we remain vigilant.",
    ],
  },
  {
    title: "5) Changes to the Rules",
    paragraphs: [
      "Right to change: Code Empire reserves the right to make minor changes to these rules. Users should review this section periodically to stay informed. We will also notify you.",
    ],
  },
  {
    title: "6) Dispute Resolution",
    paragraphs: [
      "Serious disputes: If any dispute arises between users and Code Empire staff, contact us so we can resolve it amicably. If unresolved, the matter is referred to legal authorities.",
    ],
  },
];

// ============================================
// Helpers
// ============================================

export const getRuleBySlug = (slug: string): Rule | undefined =>
  rules.find((r) => r.slug === slug);

export const getSortedRules = (): Rule[] =>
  [...rules].sort((a, b) => a.order - b.order);

export const getRulesByCategory = (category: Rule["category"]): Rule[] =>
  getSortedRules().filter((r) => r.category === category);
