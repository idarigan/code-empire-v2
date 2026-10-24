/**
 * Code Empire — Site-wide constants
 *
 * Nav, footer, socials, home/about/guide copy, CTAs, contact info.
 * pages can switch languages without a second data file.
 */

import type { NavLink, FooterColumn, SocialLink, ClassType } from "@/types";

// ============================================
// Logo
// ============================================

export const logo = {
  full: "/logo/logo-full.png",
  icon: "/logo/logo-icon.png",
  iconWhite: "/logo/logo-icon-white.png",
  coatOfArms: "/logo/coat-of-arms.png",
};

// ============================================
// Navigation
// ============================================

export const primaryNavLinks: NavLink[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.courses", href: "/courses" },
  { key: "nav.guide", href: "/guide" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.contact", href: "/contact" },
];

export const hamburgerNavLinks: NavLink[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.courses", href: "/courses" },
  { key: "nav.guide", href: "/guide" },
  { key: "nav.about", href: "/about" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.contact", href: "/contact" },
  { key: "nav.policy", href: "/policy" },
];

export const dashboardNavLinks: NavLink[] = [
  { key: "dashboard.home", href: "/dashboard" },
  { key: "dashboard.courses", href: "/dashboard/courses" },
  { key: "dashboard.bookmarks", href: "/dashboard/bookmarks" },
  { key: "dashboard.progress", href: "/dashboard/progress" },
  { key: "dashboard.certificates", href: "/dashboard/certificates" },
  { key: "dashboard.settings", href: "/dashboard/settings" },
];

// ============================================
// Footer
// ============================================

export const footerColumns: FooterColumn[] = [
  {
    titleKey: "footer.aboutUs",
    links: [
      { key: "footer.aboutEmpire", href: "/about" },
      { key: "footer.contact", href: "/contact" },
      { key: "footer.blog", href: "/blog" },
    ],
  },
  {
    titleKey: "footer.siteLinks",
    links: [
      { key: "nav.home", href: "/" },
      { key: "nav.courses", href: "/courses" },
      { key: "nav.guide", href: "/guide" },
      { key: "nav.policy", href: "/policy" },
    ],
  },
  {
    titleKey: "footer.empireLinks",
    links: [
      { key: "footer.careers", href: "/contact" },
      { key: "footer.partnership", href: "/contact" },
      { key: "footer.pressKit", href: "/contact" },
    ],
  },
];

// ============================================
// Social
// ============================================

export const socialLinks: SocialLink[] = [
  {
    platform: "youtube",
    url: "https://m.youtube.com/@EmpireOfCodes",
    color: "#FF0000",
  },
  {
    platform: "telegram",
    url: "https://t.me/codeOFempire",
    color: "#26A5E4",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/codeempire/",
    color: "#E4405F",
  },
];

// ============================================
// Contact info
// ============================================

export const contactInfo = {
  phone: "021-98450022",
  phoneAlt: "021-98450033",
  phoneDisplay: "۰۲۱-۹۸۴۵۰۰۲۲",
  email: "info@codeempire.ir",
  address:
    "تهران، پونک، خیابان اشرفی اصفهانی، خیابان فلاح زاده، همیلا سنتر، طبقه ۱۶",
  hours: "روزهای هفته: ۹ تا ۲۱ — پایان هفته: ۹ تا ۱۵",
  telegram: "https://t.me/codeempire_support",
  telegramHandle: "@codeempire_support",
};

// ============================================
// Home copy
// ============================================

export const home = {
  whatWeAre: {
    title: "امپراتوری کد؛ مسیر آینده‌ی شما",
    description:
      "آکادمی آنلاین امپراتوری کد با هدف ارتقای مهارت‌های برنامه‌نویسی، طراحی وب و بازی‌سازی تأسیس شده است. ما متعهدیم مسیری الهام‌بخش و ارزشمند برای تمام کسانی ایجاد کنیم که به دنبال آینده‌ای متفاوت هستند؛ آینده‌ای بر پایه مهارت‌های حرفه‌ای، درآمد پایدار و زندگی راحت در دنیای فناوری.",
    cover: "/images/home/what-we-are.png",
  },
  newWays: {
    title: "یادگیری نوین و بی‌همتا",
    description:
      "در امپراتوری کد، آموزش فقط تئوری نیست؛ ما با روش‌های به‌روز و تجربه‌محور، مسیر یادگیری را برای شما زنده می‌کنیم. از برنامه‌نویسی تا طراحی وب و بازی‌سازی، اینجا جایی است که مهارت می‌سازید، خلاقیت‌تان را پرورش می‌دهید و آینده‌ای واقعی در دنیای کد رقم می‌زنید.",
    cover: "/images/home/our-ways.png",
  },
  finalCta: {
    title: "همین حالا مسیرت رو آغاز کن!",
    subtitle: "با ما همراه شو و اولین قدمتو در دنیای برنامه‌نویسی محکم بردار.",
    links: [
      {
        label: "مشاهده کلاس‌ها",
        href: "/courses",
        icon: "graduation",
      },
      {
        label: "پشتیبانی تلگرام",
        href: "https://t.me/codeempire_support",
        icon: "send",
      },
    ],
  },
};

// ============================================
// About copy
// ============================================

export const about = {
  halfSections: [
    {
      title: "درباره‌ی امپراتوری کد",
      description:
        "امپراتوری کد فقط یک آکادمی نیست؛ یک حرکت برای ساختن آینده است. ما اینجاییم تا یادگیری برنامه‌نویسی، طراحی وب و بازی سازی رو برای هر کسی که می‌خواد مسیرش رو شروع کنه ساده، جذاب و کارآمد کنیم.",
      cover: "/images/about/about.png",
      glow: "primary" as const,
    },
    {
      title: "ماموریت این امپراتوری",
      description:
        "ما باور داریم آینده‌ی شغلی هرکسی می‌تونه با مهارت ساخته بشه. ماموریت ما ایجاد مسیری روشن برای یادگیری مهارت‌های دیجیتال از وب و برنامه‌نویسی تا هوش مصنوعی و بازی‌سازی، با روشی ساده و الهام‌بخش هست.",
      cover: "/images/about/mission.png",
      glow: "secondary" as const,
    },
    {
      title: "چرا امپراتوری کد؟",
      description:
        "امپراتوری کد جاییه که آموزش فقط درس دادن نیست؛ اینجا شما با پروژه‌های واقعی یاد می‌گیرید، در کنار مربی‌هایی که همیشه کنارتون هستن. ما یادگیری رو ساده، کاربردی و الهام‌بخش می‌کنیم تا سریع‌تر به مسیر شغلی مطمئن و آینده‌ای حرفه‌ای برسید.",
      cover: "/images/about/why-us.png",
      glow: "accent" as const,
    },
  ],
  numbers: [
    { number: 30, suffix: "", title: "مربی مجرب" },
    { number: 800, suffix: "+", title: "دانش آموخته" },
    {
      number: 100,
      suffix: "K",
      title: "هزار ساعت آموزش",
    },
    {
      number: 300,
      suffix: "",
      title: "ساعت مشاوره",
    },
  ],
};

// ============================================
// Guide copy
// ============================================

export const guide = {
  intro: {
    title: "امپراتوری کد: یادگیری برنامه‌نویسی با انعطاف کامل",
    description:
      "در امپراتوری کد، یادگیری برنامه‌نویسی محدود به یک قالب نیست. ما باور داریم هرکس باید بتونه مسیر آموزشی خودش رو با توجه به شرایط و سبک زندگی انتخاب کنه. به همین دلیل، سه نوع کلاس طراحی کرده‌ایم که هرکدام انعطاف، کیفیت و راحتی را در اولویت قرار می‌دهند تا شما بدون دغدغه، تنها روی یادگیری تمرکز کنید.",
    cover: "/images/guide/intro.png",
  },
  types: [
    {
      title: "کلاس خصوصی آنلاین",
      description:
        "کلاس‌های خصوصی آنلاین امپراتوری کد در Google Meet برگزار می‌شن؛ فضایی کاملاً اختصاصی که فقط شما و مدرس حضور دارین. این مدل باعث میشه بدون هیچ حواس‌پرتی روی مسیر خودت تمرکز کنی، تمرین‌ها و پروژه‌ها دقیقاً بر اساس سطح و هدف تو طراحی بشن و استاد هم در طول مسیر با بازخورد مداوم همراهت باشه.",
      cover: "/images/guide/type-1.png",
      features: [
        "Google Meet",
        "اختصاصی و بدون حواس‌پرتی",
        "بازخورد مداوم استاد",
        "سریع‌تر و عمیق‌تر",
      ],
      glow: "primary" as const,
    },
    {
      title: "کلاس خصوصی آفلاین",
      description:
        "کلاس خصوصی آفلاین برای کساییه که بیشترین ارزش رو توی انعطاف می‌بینن. تو می‌تونی ویدئوهای هر جلسه رو از مدرس در تلگرام یا واتساپ بگیری و هر زمان که تمرکز و حال بهتر داشتی، سراغ یادگیری بری. در عین حال، جلسات رفع اشکال و بررسی تمرین‌ها کیفیت آموزش رو تضمین می‌کنه.",
      cover: "/images/guide/type-2.png",
      features: [
        "ویدئوهای ضبط‌شده",
        "تلگرام یا واتساپ",
        "یادگیری در هر زمان",
        "جلسات رفع اشکال",
      ],
      glow: "secondary" as const,
    },
    {
      title: "کلاس گروهی آنلاین",
      description:
        "کلاس‌های گروهی هم مثل خصوصی در Google Meet برگزار می‌شن و برای یادگیری در کنار بقیه طراحی شدن؛ جایی که هم انگیزه جمعی داری و هم می‌تونی از پرسش‌ها و تجربه‌های بقیه استفاده کنی. این کلاس‌ها طبق برنامه آکادمی و بعد از تکمیل ظرفیت اعلام می‌شن.",
      cover: "/images/guide/type-3.png",
      features: [
        "Google Meet",
        "انگیزه جمعی",
        "کار تیمی و تبادل ایده",
        "طبق برنامه آکادمی",
      ],
      glow: "accent" as const,
    },
  ],
  method: {
    title: "متد آموزشی",
    description:
      "روش آموزش در امپراتوری کد فقط تدریس ساده نیست؛ بلکه ترکیبی از پروژه‌های واقعی، مسیر اختصاصی، پشتیبانی مداوم و انعطاف زمانی است تا هر دانشجو مطابق شرایط خودش به نتیجه برسد.",
    items: [
      {
        title: "پروژه‌محور",
        icon: "target",
        description:
          "تمام مفاهیم در قالب پروژه‌های واقعی آموزش داده می‌شوند تا دانشجو از همان ابتدا تجربه کار عملی داشته باشد.",
      },
      {
        title: "مسیر اختصاصی",
        icon: "compass",
        description:
          "برای هر دانشجو مسیر یادگیری متناسب با سطح و هدفش طراحی می‌شود؛ هیچ دو نفر دقیقا یک مسیر ندارند.",
      },
      {
        title: "پشتیبانی مداوم",
        icon: "messageCircle",
        description:
          "در طول دوره، استاد و تیم پشتیبانی همیشه آماده پاسخگویی به سوالات و رفع مشکلات هستند.",
      },
      {
        title: "انعطاف زمانی",
        icon: "clock",
        description:
          "کلاس‌ها و تمرین‌ها با انعطاف کامل زمانی پیش می‌روند تا دانشجو بتواند یادگیری را با زندگی روزمره هماهنگ کند.",
      },
    ],
  },
  structure: {
    title: "ساختار هر جلسه",
    description:
      "هر جلسه در امپراتوری کد بر اساس یک الگوی ساده ولی قدرتمند طراحی شده: آموزش، تمرین، بازخورد و جمع‌بندی.",
    items: [
      {
        title: "آموزش",
        icon: "bookOpen",
        description:
          "هر جلسه با آموزش شفاف و هدفمند شروع می‌شود تا دانشجو به درک دقیق مفاهیم برسد.",
      },
      {
        title: "تمرین",
        icon: "code",
        description:
          "بلافاصله بعد از یادگیری، تمرین‌های عملی طراحی می‌شود تا دانشجو دانشش را تبدیل به مهارت کند.",
      },
      {
        title: "بازخورد",
        icon: "messageCircle",
        description:
          "استاد تمرین‌ها را بررسی می‌کند و بازخورد مستقیم می‌دهد تا نقاط ضعف و قوت مشخص شوند.",
      },
      {
        title: "جمع‌بندی",
        icon: "book",
        description:
          "در پایان جلسه، مرور کلی انجام می‌شود تا مسیر جلسه‌ی بعد روشن باشد و هیچ نکته‌ای جا نماند.",
      },
    ],
  },
};

// Guide class types — pulled into the ClassType[] shape used by ClassTypeSection
export const classTypes: ClassType[] = guide.types.map((t, i) => ({
  slug: ["private-online", "private-offline", "group-online"][i],
  title: t.title,
  subtitle: "",
  description: t.description,
  image: t.cover,
  features: t.features,
  glow: t.glow,
}));

// ============================================
// Site stats (Home + About numbers)
// ============================================

export const siteStats = {
  mentors: 30,
  students: 800,
  hours: 100000,
  consultations: 300,
};

// ============================================
// Site metadata
// ============================================

export const siteMeta = {
  name: "Code Empire",
  namePersian: "امپراتوری کد",
  description: "آکادمی برنامه‌نویسی فارسی — یادگیری از صفر تا پیشرفته",
  url: import.meta.env.VITE_SITE_URL || "https://code-empire-v2.vercel.app",
};

// ============================================
// CTAs (Guide page banners)
// ============================================

export const cta = {
  start: {
    cover: "/images/cta/start.png",
    href: "/courses",
  },
  instagram: {
    cover: "/images/cta/instagram.png",
    href: "https://www.instagram.com/codeempire/",
  },
};

// ============================================
// Support / join CTAs (mid-page blocks)
// ============================================

export const middleSupport = {
  title: "سوالی داری؟",
  subtitle: "خیالت راحت، تیم امپراتوری کد همیشه کنارت هست.",
  links: [
    { label: "تـمــاس بـا مـا", href: "/contact", icon: "messageCircle" },
    {
      label: "پشتیبانی تلگرام",
      href: "https://t.me/codeempire_support",
      icon: "send",
    },
  ],
};

export const middleJoinUs = {
  title: "به امپراتوری بپیوندید!",
  subtitle:
    "اگر آماده‌اید تا مهارت‌های واقعی یاد بگیرید و مسیر حرفه‌ای خودتون رو بسازید، همین حالا شروع کنید.",
  links: [{ label: "شروع یـادگیـری", href: "/courses", icon: "rocket" }],
};

// ============================================
// Blog filter constants
// ============================================

export const blogCategories = [
  "همه",
  "امپراتوری",
  "بازی ویدئویی",
  "برنامه نویسی",
  "تکنولوژی",
  "عمومی",
];

export const blogSortOptions = ["تازه ترین", "قدیمی ترین", "پیشنهادات"];
