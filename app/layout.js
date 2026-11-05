import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import site from "@/constants/site";
import services from "@/constants/services";
import { allServices as accountingServices } from "@/constants/accounting";
import { buildMetadata } from "@/lib/seo";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  ...buildMetadata(),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#f4f1ea",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  founder: {
    "@type": "Person",
    name: site.director,
    jobTitle: "Director",
  },
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/icon.svg`,
  },
  image: `${site.url}/opengraph-image`,
  description: site.description,
  areaServed: "Worldwide",
  knowsAbout: [
    "Agentic AI",
    "AI automation",
    "AI solution integration",
    "AI-augmented CRM",
    "Adobe Experience Manager",
    "Agile project delivery",
    "IT project management",
    "Full-stack software development",
    "Digital marketing",
    "Bookkeeping",
    "VAT returns",
    "Payroll",
    "Management accounts",
    "Year-end accounts",
    "Corporation Tax",
    "Company formation",
    "HMRC compliance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consultancy services",
    itemListElement: [
      ...services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${site.url}/services/${service.slug}`,
        },
      })),
      ...accountingServices.map((service, index) => ({
        "@type": "Offer",
        position: services.length + index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: `${site.url}/accounting/${service.area}#${service.slug}`,
        },
      })),
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "en-GB",
  publisher: { "@id": `${site.url}/#organization` },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={cn(serif.variable, sans.variable)}>
        {/* Masked headings animate with JS; without it, show them in place. */}
        <noscript>
          <style>{`[data-mask-line]{transform:none!important}`}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
