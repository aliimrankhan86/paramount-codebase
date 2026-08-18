import { notFound } from "next/navigation";
import ServiceDetailPage from "@/screens/services/detail";
import services from "@/constants/services";
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
    keywords: [service.title],
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
