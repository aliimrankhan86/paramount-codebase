import ClientsPage from "@/screens/clients";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Clients",
  description:
    "Organisations Paramount Consultants has delivered for, spanning healthcare AI, higher education, IoT, financial services, retail and logistics.",
  path: "/clients",
});

export default function Clients() {
  return <ClientsPage />;
}
