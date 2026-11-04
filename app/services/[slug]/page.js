import { notFound } from "next/navigation";
import ServiceDetailPage from "@/screens/services/detail";
import services from "@/constants/services";
import site from "@/constants/site";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    keywords: [service.title, `${service.title} consultancy`, `${service.title} services`],
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const url = `${site.url}/services/${service.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}/#service`,
        name: service.title,
        serviceType: service.title,
        description: service.shortDescription,
        url,
        provider: {
          "@type": "ProfessionalService",
          "@id": `${site.url}/#organization`,
          name: site.name,
          url: site.url,
        },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${site.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: url,
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
      <ServiceDetailPage service={service} />
    </>
  );
}
