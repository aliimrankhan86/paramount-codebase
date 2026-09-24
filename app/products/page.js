import ProductsIndexPage from "@/screens/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Software Paramount Consultants builds and runs itself, including Point Poker, a free online planning poker tool for agile and Scrum teams.",
  keywords: ["Paramount Consultants products", "Point Poker"],
  path: "/products",
});

export default function Products() {
  return <ProductsIndexPage />;
}
