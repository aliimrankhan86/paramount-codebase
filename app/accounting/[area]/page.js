import { notFound } from "next/navigation";
import AccountingAreaPage from "@/screens/accounting/area";
import { buildMetadata } from "@/lib/seo";
import site from "@/constants/site";
import { areas } from "@/constants/accounting";

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export function generateMetadata({ params }) {
  const area = areas.find((item) => item.slug === params.area);
  if (!area) return {};

  return buildMetadata({
    title: area.title,
    description: `${area.shortDescription} ${area.services.map((service) => service.title).join(", ")} — delivered by our UK accounting practice.`,
    keywords: area.services.map((service) => service.title.toLowerCase()),
    path: `/accounting/${area.slug}`,
  });
}

export default function AccountingArea({ params }) {
  const area = areas.find((item) => item.slug === params.area);
  if (!area) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: area.title,
        url: `${site.url}/accounting/${area.slug}`,
        description: area.shortDescription,
        isPartOf: { "@id": `${site.url}/#website` },
      },
      {
        "@type": "ItemList",
        name: `${area.title} services`,
        itemListElement: area.services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: `${site.url}/accounting/${area.slug}#${service.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Accounting",
            item: `${site.url}/accounting`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.title,
            item: `${site.url}/accounting/${area.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AccountingAreaPage area={area} />
    </>
  );
}
