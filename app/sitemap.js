import site from "@/constants/site";
import services from "@/constants/services";
import products from "@/constants/products";
import { areas } from "@/constants/accounting";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = ["/", "/services", "/accounting", "/products", "/clients", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const accountingRoutes = areas.map((area) => ({
    url: `${site.url}/accounting/${area.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productRoutes = products.map((product) => ({
    url: `${site.url}/products/${product.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...accountingRoutes, ...productRoutes];
}
