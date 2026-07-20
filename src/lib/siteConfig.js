/**
 * Centralised business configuration for ScaleUp Accounting Ltd.
 * All pages should import from here to ensure consistency.
 * NOTE: Update phone and AAT licence number when confirmed by client.
 */
export const SITE = {
  name: "ScaleUp Accounting Ltd",
  shortName: "ScaleUp Accounting",
  url: "https://www.scaleupaccounting.uk",
  email: "advisory@scaleupaccounting.co.uk",
  /** @todo Confirm correct phone number with client */
  phone: "074449 55555",
  phoneTel: "07444955555",
  address: "120 Moorgate, London, EC2M 6UR",
  streetAddress: "120 Moorgate",
  city: "London",
  postcode: "EC2M 6UR",
  country: "GB",
  companyNumber: "17121237",
  linkedin: "https://LinkedIn.com/company/scaleupaccountingltd/",
  registeredIn: "England and Wales",
  /** @todo Confirm real AAT licence number with client; placeholder removed */
  aatLicence: null,
  ogImage: "https://www.scaleupaccounting.uk/og-image.jpg",
};

export const JSONLD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.scaleupaccounting.uk/#organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/Logo.png`,
  image: SITE.ogImage,
  email: SITE.email,
  telephone: `+44${SITE.phoneTel.replace(/^0/, "")}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.streetAddress,
    addressLocality: SITE.city,
    postalCode: SITE.postcode,
    addressCountry: SITE.country,
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  description:
    "London-based AAT Licensed Accounting Practice providing bookkeeping, tax, payroll, and VAT services for UK businesses.",
  knowsAbout: [
    "Bookkeeping",
    "VAT Returns",
    "Payroll",
    "Self Assessment",
    "Company Accounts",
    "Corporation Tax",
    "Management Accounts",
  ],
  sameAs: ["https://www.linkedin.com/company/scaleupaccountingltd/"],
};
