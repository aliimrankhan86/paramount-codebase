import site from "@/constants/site";
import services from "@/constants/services";

export default function sitemap() {
  const staticRoutes = ["/", "/services", "/clients", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
