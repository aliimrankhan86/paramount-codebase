import Layout from "@/components/Layout";
import PageHero from "@/components/page-hero/page-hero";
import CtaBand from "@/components/cta-band/cta-band";
import ServiceCard from "@/components/service-card/service-card";
import Reveal from "@/components/motion/reveal";
import services from "@/constants/services";
import styles from "./services.module.css";
import cn from "classnames";

export default function ServicesIndexPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title="Six disciplines, delivered by one team"
        subtitle="Each service below is scoped and staffed independently, but most real projects draw on more than one at once."
      />
      <section className={cn("section", "section-tight")}>
        <div className={cn("container")}>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Not sure which service you need?"
        subtitle="Describe the problem, not the solution. We'll tell you honestly what it needs."
      />
    </Layout>
  );
}
