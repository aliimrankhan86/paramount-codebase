import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import Hero from "./hero";
import Services from "./services/services";
import AiCapabilities from "./ai-capabilities/ai-capabilities";
import Intro from "./intro/intro";
import Values from "./values/values";
import Approach from "./approach/approach";
import CtaBand from "@/components/cta-band/cta-band";
import ClientMarquee from "@/components/client-marquee/client-marquee";
import Reveal from "@/components/motion/reveal";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <AiCapabilities />
      <Intro />
      <Values />

      <section className={cn("section", "section-tight")}>
        <div className={cn("container")}>
          <Reveal className={styles.clientsHeading}>
            <div className="eyebrow">Clients</div>
            <h2 className="heading-3">Work delivered across sectors that don't tolerate mistakes</h2>
          </Reveal>
        </div>
        <ClientMarquee className={styles.marquee} />
        <div className={cn("container", styles.clientsFooter)}>
          <Link href="/clients" className={cn("button", "button-stroke")}>
            See who we've worked with
          </Link>
        </div>
      </section>

      <Approach />
      <CtaBand />
    </Layout>
  );
}
