import ContactPage from "@/screens/contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Paramount Consultants about agentic AI, AI automation, AEM, agile delivery, IT project management, full-stack development or digital marketing.",
  path: "/contact",
});

export default function Contact() {
  return <ContactPage />;
}
