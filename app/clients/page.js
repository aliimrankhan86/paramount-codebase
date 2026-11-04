import ClientsPage from "@/screens/clients";
import { buildMetadata } from "@/lib/seo";
import site from "@/constants/site";

export const metadata = buildMetadata({
  title: "Clients",
  description:
    "Organisations Paramount Consultants has delivered for, spanning healthcare AI, higher education, IoT, financial services, retail and logistics.",
  path: "/clients",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Clients",
      url: `${site.url}/clients`,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Clients", item: `${site.url}/clients` },
      ],
    },
  ],
};

export default function Clients() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientsPage />
    </>
  );
}
