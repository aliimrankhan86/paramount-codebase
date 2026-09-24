import { notFound } from "next/navigation";
import ProductDetailPage from "@/screens/products/detail";
import products from "@/constants/products";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};

  return buildMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: [product.name, product.category],
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return <ProductDetailPage product={product} />;
}
