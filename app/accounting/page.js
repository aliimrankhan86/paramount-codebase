import AccountingPage from "@/screens/accounting";
import { buildMetadata } from "@/lib/seo";
import site from "@/constants/site";
import { areas, allServices } from "@/constants/accounting";

export const metadata = buildMetadata({
  title: "Accounting",
  description:
    "Bookkeeping, VAT returns, payroll, management accounts, year-end accounts, Corporation Tax and company formation for UK businesses, run by a named ACCA-qualified accountant.",
  keywords: [
    "accountant UK",
    "bookkeeping services",
    "VAT returns",
    "payroll services",
    "Corporation Tax",
    "year-end accounts",
    "company formation",
  ],
  path: "/accounting",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Accounting",
      url: `${site.url}/accounting`,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
      hasPart: areas.map((area) => ({
        "@type": "WebPage",
        name: area.title,
        url: `${site.url}/accounting/${area.slug}`,
      })),
    },
    {
      "@type": "ItemList",
      name: "Accounting services",
      itemListElement: allServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${site.url}/accounting/${service.area}#${service.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Accounting", item: `${site.url}/accounting` },
      ],
    },
  ],
};

export default function Accounting() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AccountingPage />
    </>
  );
}
