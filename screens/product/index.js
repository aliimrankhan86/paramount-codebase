import Layout from "@/components/Layout";
import ProductView from "../../components/product-view";
import Showcase from "./showcase";
import Features from "./features";
import Marquee from "@/components/marquee";
import Intro from "./intro";
import Detail from "./detail";
import Specs from "./specs";
import Faqs from "./faqs";
import Reviews from "./reviews";
import SimilarProducts from "./similar-products";

export default function ProductPage({ product }) {
  return (
    <Layout>
      <ProductView {...product} productPage={true} />
      <Showcase />
      <Features />
      <Intro />
      <Marquee />
      <Detail />
      <Specs />
      <Faqs />
      <Reviews />
      <SimilarProducts />
    </Layout>
  );
}
