export default function sitemap() {
  const base = "https://www.scaleupaccounting.uk";
  const now = new Date();

  return [
    // ── Home ──
    { url: `${base}`, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // ── Top-level pages ──
    { url: `${base}/compliance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Service pages ──
    { url: `${base}/services/bookkeeping`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/payroll`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/vat-returns`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/self-assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/company-accounts`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/corporation-tax`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // ── Insights pages ──
    { url: `${base}/insights`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/insights/budget`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insights/gdpr`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insights/hmrc`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insights/analysis`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Legal pages ──
    { url: `${base}/legal/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/legal/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/legal/modern-slavery`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}