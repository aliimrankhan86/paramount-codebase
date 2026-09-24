import site from "@/constants/site";
import services from "@/constants/services";
import products from "@/constants/products";

export default function sitemap() {
  const staticRoutes = ["/", "/services", "/products", "/clients", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productRoutes = products.map((product) => ({
    url: `${site.url}/products/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes];
}
