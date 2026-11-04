import ContactPage from "@/screens/contact";
import { buildMetadata } from "@/lib/seo";
import site from "@/constants/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Paramount Consultants about agentic AI, AI automation, AEM, agile delivery, IT project management, full-stack development or digital marketing.",
  path: "/contact",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact Paramount Consultants",
      url: `${site.url}/contact`,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
      ],
    },
  ],
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPage />
    </>
  );
}
