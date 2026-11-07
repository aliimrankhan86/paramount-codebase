import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import Hero from "./hero";
import WorkingAcross from "@/components/working-across/working-across";
import Statement from "./statement/statement";
import Stats from "./stats/stats";
import Services from "./services/services";
import AiCapabilities from "./ai-capabilities/ai-capabilities";
import SplinePanel from "@/components/spline-panel/spline-panel";
import Intro from "./intro/intro";
import Values from "./values/values";
import Approach from "./approach/approach";
import CtaBand from "@/components/cta-band/cta-band";
import NameMarquee from "@/components/name-marquee/name-marquee";
import ClientGrid from "@/components/client-grid/client-grid";
import MaskedLines from "@/components/motion/masked-lines";
import Reveal from "@/components/motion/reveal";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <WorkingAcross />
      <SplinePanel />
      <Statement />
      <Stats />
      <Services />
      <AiCapabilities />

      <section
        className={cn("section", "section-tight", "section-paper-2", styles.clientsSection)}
        aria-labelledby="clients-title"
      >
        <div className={cn("container")}>
          <div className={styles.clientsHead}>
            <MaskedLines
              as="h2"
              id="clients-title"
              className={cn("heading-2", styles.clientsTitle)}
              lines={[
                <>Work delivered across</>,
                <>sectors that don&rsquo;t</>,
                <>tolerate <em>mistakes.</em></>,
              ]}
            />
            <Reveal delay={0.05} y={10}>
              <p className={cn("paragraph-large", styles.clientsSub)}>
                Healthcare AI, higher education, IoT, financial services, retail and logistics.
                Different industries, the same standard of delivery.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Full-bleed moment: the client names run edge to edge at display size. */}
        <NameMarquee className={styles.marquee} display />

        <div className={cn("container")}>
          <Reveal y={10}>
            <ClientGrid limit={10} className={styles.clientGrid} />
          </Reveal>
          <div className={styles.clientsFooter}>
            <Link href="/clients" className="link-arrow">
              All 15 client organisations
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <Intro />
      <Values />
      <Approach />
      <CtaBand />
    </Layout>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.75 12h14.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.75 6.75 19.25 12l-5.5 5.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
