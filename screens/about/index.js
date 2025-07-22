import Layout from "@/components/Layout";
import Hero from "./hero";
import Intro from "./intro";
import Values from "./values";
import Marquee from "@/components/marquee";
import Vision from "./vision";
import History from "./history";
import Companies from "./companies";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Values />
      <Marquee />
      <Vision />
      <History />
      <Companies />
    </Layout>
  );
}
