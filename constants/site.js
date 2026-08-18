const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.paramountconsultants.online").replace(/\/$/, "");

export default {
  name: "Paramount Consultants",
  shortName: "Paramount",
  url: siteUrl,
  tagline: "Digital transformation, delivered with precision.",
  description:
    "Paramount Consultants is a digital consultancy specialising in agentic AI, AI automation, Adobe Experience Manager, agile delivery, full-stack development, IT project management and digital marketing for organisations navigating change.",
  keywords: [
    "IT consultancy",
    "agentic AI services",
    "AI automation consultancy",
    "AI solution provider",
    "AI CRM integration",
    "AI-native app development",
    "Adobe Experience Manager development",
    "AEM migration",
    "agile project delivery",
    "IT project management",
    "PMO delivery governance",
    "full-stack software development",
    "digital marketing agency",
  ],
  contactWebhook:
    "https://avamedio.app.n8n.cloud/webhook-test/0db20153-8fa2-4301-b336-f88104cebd8d",
  locale: "en_GB",
};
