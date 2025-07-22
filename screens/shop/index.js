import Layout from "@/components/Layout";
import Hero from "./hero";
import Products from "./products";
import FloatButton from "@/components/float-button";

export default function ShopPage({ collection }) {
  return (
    <Layout>
      <Hero collection={collection} />
      <Products collection={collection} />
      <FloatButton />
    </Layout>
  );
}
