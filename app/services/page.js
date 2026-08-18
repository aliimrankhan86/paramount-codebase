import ServicesIndexPage from "@/screens/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Agentic AI, AI automation, Adobe Experience Manager, agile delivery, full-stack development, IT project management and digital marketing, delivered by one accountable consultancy.",
  keywords: ["IT consultancy services"],
  path: "/services",
});

export default function Services() {
  return <ServicesIndexPage />;
}
