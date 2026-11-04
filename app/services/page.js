import ServicesIndexPage from "@/screens/services";
import { buildMetadata } from "@/lib/seo";
import site from "@/constants/site";
import services from "@/constants/services";
import { allServices as accountingServices } from "@/constants/accounting";

export const metadata = buildMetadata({
  title: "Services — Technology & AI and Accounting",
  description:
    "Every service Paramount Consultants offers in one place: agentic AI, automation, Adobe Experience Manager, agile delivery, full-stack development, IT project management and digital marketing, alongside bookkeeping, management accounts, VAT, tax, payroll and compliance for UK businesses.",
  keywords: [
    "IT consultancy services",
    "AI consultancy services",
    "accounting services UK",
    "bookkeeping services",
    "VAT returns",
    "payroll services",
  ],
  path: "/services",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Services",
      url: `${site.url}/services`,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "ItemList",
      name: "Paramount Consultants services",
      itemListElement: [
        ...services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `${site.url}/services/${service.slug}`,
        })),
        ...accountingServices.map((service, index) => ({
          "@type": "ListItem",
          position: services.length + index + 1,
          name: service.title,
          url: `${site.url}/accounting/${service.area}#${service.slug}`,
        })),
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      ],
    },
  ],
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesIndexPage />
    </>
  );
}
