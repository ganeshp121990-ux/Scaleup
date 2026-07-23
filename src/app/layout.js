import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { JSONLD_ORGANIZATION } from "@/lib/siteConfig";
import WhatsAppWidget from "@/components/WhatsAppWidget";


const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins'
});

export const metadata = {
  metadataBase: new URL("https://www.scaleupaccounting.uk"),

  title: {
    default:
      "ScaleUp Accounting Limited | AAT Licensed Accountants London",
    template: "%s | ScaleUp Accounting",
  },

  description:
    "London-based AAT Licensed Accounting Practice. Professional bookkeeping, payroll, VAT returns, self assessment, company accounts, and corporation tax services for UK businesses.",

  keywords: [
    "AAT licensed accountants London",
    "bookkeeping services London",
    "payroll services UK",
    "VAT returns London",
    "self assessment tax return",
    "company accounts preparation",
    "corporation tax UK",
    "accountants for small business London",
    "scaleup accounting",
  ],

  authors: [{ name: "ScaleUp Accounting Limited" }],

  creator: "ScaleUp Accounting Limited",

  publisher: "ScaleUp Accounting Limited",

  applicationName: "ScaleUp Accounting",

  category: "Accounting Services",

  alternates: {
    canonical: "https://www.scaleupaccounting.uk",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "ScaleUp Accounting Limited | AAT Licensed Accountants London",

    description:
      "London-based AAT Licensed Accounting Practice. Professional bookkeeping, payroll, VAT returns, self assessment, company accounts, and corporation tax services for UK businesses.",

    url: "https://www.scaleupaccounting.uk",

    siteName: "ScaleUp Accounting",

    locale: "en_GB",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ScaleUp Accounting Ltd – London-based AAT Licensed Accounting Practice",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ScaleUp Accounting Limited | AAT Licensed Accountants London",

    description:
      "London-based AAT Licensed Accounting Practice. Professional bookkeeping, payroll, VAT, self assessment, and corporation tax for UK businesses.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0A1A2F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} overflow-x-hidden`}>
      <body className="bg-[#FDFCFB] text-[#0A1A2F] font-body overflow-x-hidden antialiased selection:bg-[#C8A96A]/30 selection:text-[#0A1A2F]">
        <SmoothScroll>{children}</SmoothScroll>
        <WhatsAppWidget />
        
        <Script
  id="organization-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(JSONLD_ORGANIZATION),
  }}
/>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-NJCD6029BE"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NJCD6029BE');
  `}
</Script>
      </body>
    </html>
  );
}
