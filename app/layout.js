import { DM_Sans, Inter } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import site from "@/constants/site";
import { buildMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata = {
  ...buildMetadata(),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  description: site.description,
  areaServed: "Worldwide",
  knowsAbout: [
    "Agentic AI",
    "AI automation",
    "AI solution integration",
    "AI-augmented CRM",
    "Adobe Experience Manager",
    "Agile project delivery",
    "IT project management",
    "Full-stack software development",
    "Digital marketing",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={cn(inter.variable, dmSans.variable)}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
