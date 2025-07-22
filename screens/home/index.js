import Layout from "@/components/Layout";
import Hero from "./hero";
import About from "./about";
import Services from "./categories";
import Intro from "./intro";
import ProductView from "../../components/product-view";
import Compare from "./compare";
import Marquee from "@/components/marquee";
import Sales from "./sales";
import Promo from "./promo";
import Reviews from "./reviews";
import BestSellers from "./best-sellers";
import Marquees from "@/components/marquees";
import News from "./news";
import mock from "@/constants/mock";

export default function HomePage({ products = mock.products }) {
  const product = products.filter((product) => product.slug === "eco-tunes")[0];

  console.log(product);

  return (
    <Layout>
      {/*
      <section id="home">
        <Hero />
      </section>
      <section id="services" style={{ minHeight: '100vh', padding: '80px 0' }}>
        <h2 style={{ textAlign: 'center' }}>Our Services</h2>
        <p style={{ textAlign: 'center' }}>Paramount Consultants offers a range of consulting services to help your business grow. (Add your services here.)</p>
      </section>
      <section id="about" style={{ minHeight: '100vh', padding: '80px 0', background: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center' }}>About Us</h2>
        <p style={{ textAlign: 'center' }}>Learn more about Paramount Consultants, our mission, and our team. (Add your about content here.)</p>
      </section>
      <section id="contact" style={{ minHeight: '100vh', padding: '80px 0' }}>
        <h2 style={{ textAlign: 'center' }}>Contact</h2>
        <p style={{ textAlign: 'center' }}>Get in touch with us for a consultation or any questions. (Add your contact form or details here.)</p>
      </section>
      */}
      <Hero />
      <About />
      <Services />
      <Reviews />

    </Layout>
  );
}
