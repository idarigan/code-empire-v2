/**
 * Code Empire - Site-wide constants
 */

// ============================================
// Meta
// ============================================

export const siteMeta = {
  name: "Code Empire",
  brand: "CODE EMPIRE",
};

// ============================================
// Numbers
// ============================================

export const siteStats = {
  mentors: 30,
  students: 800,
  trainingKiloHours: 100,
  consultationHours: 300,
};

// ============================================
// Contact
// ============================================

const hoursRows = [
  { label: "روزهای هفته", time: "9 تا 21" },
  { label: "پایان هفته", time: "9 تا 15" },
];

export const contactInfo = {
  phone: "021-98450022",
  phoneRaw: "02198450022",
  phoneAlt: "021-98450033",
  email: "info@codeempire.ir",
  telegram: "https://t.me/codeempire_support",
  address:
    "تهران، پونک، خیابان اشرفی اصفهانی، خیابان فلاح زاده، همیلا سنتر، طبقه 16",
  hoursRows,
  hours: hoursRows.map((row) => `${row.label}: ${row.time}`).join(" - "),
};

// ============================================
// Social
// ============================================

export const socialLinks = [
  { platform: "youtube", url: "https://m.youtube.com/@EmpireOfCodes" },
  { platform: "instagram", url: "https://www.instagram.com/codeempire/" },
];
