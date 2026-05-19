import { Inter, Poppins } from "next/font/google";
import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

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
      "ScaleUp Accounting Limited | Strategic Accounting & UK Business Advisory",
    template: "%s | ScaleUp Accounting",
  },

  description:
    "Professional bookkeeping, tax compliance, payroll, VAT, and Recruitment Process Outsourcing (RPO) services for UK businesses.",

  keywords: [
    "accounting firm UK",
    "bookkeeping services UK",
    "tax services UK",
    "VAT returns UK",
    "payroll services UK",
    "RPO accounting",
    "AAT licensed accountants",
    "scaleup accounting",
  ],

  authors: [{ name: "ScaleUp Accounting Limited" }],

  creator: "ScaleUp Accounting Limited",

  publisher: "ScaleUp Accounting Limited",

  applicationName: "ScaleUp Accounting",

  category: "Accounting Services",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "ScaleUp Accounting Limited | Strategic Accounting & UK Business Advisory",

    description:
      "Professional bookkeeping, tax compliance, payroll, VAT, and Recruitment Process Outsourcing (RPO) services for UK businesses.",

    url: "https://www.scaleupaccounting.uk",

    siteName: "ScaleUp Accounting",

    locale: "en_GB",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ScaleUp Accounting Limited | Strategic Accounting & UK Business Advisory",

    description:
      "Professional bookkeeping, tax compliance, payroll, VAT, and RPO services for UK businesses.",
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
        <Cursor />
      </body>
    </html>
  );
}
