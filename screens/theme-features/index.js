import Layout from "@/components/Layout";
import Hero from "./hero";
import ResponsiveDesign from "./responsive-design";
import MainFeatures from "./main-features";
import DetailedFeatures from "./detailed-features";
import HeroSlider from "./hero-slider";
import ExtraFeatures from "./extra-features";
import VisualTimeline from "./visual-timeline";

export default function ThemeFeaturesPage() {
  return (
    <Layout>
      <Hero />
      <MainFeatures />
      <ResponsiveDesign />
      <DetailedFeatures />
      <HeroSlider />
      <ExtraFeatures />
      <VisualTimeline />
    </Layout>
  );
}
