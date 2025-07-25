import mock from "@/constants/mock";
import ProductPage from "@/screens/product";

export default async function Product({ products = mock.products, params }) {
  const product = products.find((product) => product.slug === params.slug);

  console.log("product:", product);

  return <ProductPage product={product} />;
}
