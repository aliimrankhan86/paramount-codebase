import cn from "classnames";
import Layout from "@/components/Layout";
import PageHero from "@/components/page-hero/page-hero";
import CtaBand from "@/components/cta-band/cta-band";
import ClientGrid from "@/components/client-grid/client-grid";
import Reveal from "@/components/motion/reveal";
import styles from "./clients.module.css";

const sectors = [
  "Healthcare AI",
  "Higher education",
  "IoT",
  "Financial services",
  "Retail",
  "Logistics",
];

const promises = [
  {
    title: "The people you meet are the people who build",
    description:
      "No handover to an anonymous delivery team after the pitch. The consultants in the room at the start are the ones accountable at launch.",
  },
  {
    title: "Progress you can inspect, not just hear about",
    description:
      "Short cycles, a working backlog and honest status reporting. Stakeholders can see where things stand without waiting for a milestone review.",
  },
  {
    title: "Confidentiality from the first conversation",
    description:
      "Your code, data and roadmap are treated as confidential before any paperwork is signed, and for as long as we work together.",
  },
];

export default function ClientsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Clients"
        title="Where the work has landed"
        titleLines={[<>Where the work</>, <>has landed</>]}
        subtitle="Delivery and AI product work across healthcare, higher education, IoT, financial services, retail and logistics."
        meta="15 organisations / 6 sectors"
      >
        <ul className={styles.chips} aria-label="Sectors served">
          {sectors.map((sector) => (
            <li key={sector} className={styles.chip}>
              {sector}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className={cn("section", "section-tight")}>
        <div className={cn("container")}>
          <Reveal>
            <ClientGrid />
          </Reveal>
        </div>
      </section>

      <section className={cn("section", "section-tight", "section-violet")}>
        <div className={cn("container")}>
          <div className={styles.headRow}>
            <Reveal>
              <div className="eyebrow">The constant</div>
              <h2 className={cn("heading-2", styles.heading)}>
                Different sectors, <em>same standard.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className={cn("paragraph-large", styles.sub)}>
                The technology changes from one engagement to the next. What stays fixed is how we
                work with the people who own it.
              </p>
            </Reveal>
          </div>

          <div className={styles.grid}>
            {promises.map((promise, index) => (
              <Reveal key={promise.title} delay={index * 0.07} className={styles.card}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={cn("heading-5", styles.cardTitle)}>{promise.title}</h3>
                <p className={cn("paragraph-small", styles.cardText)}>{promise.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to be next?"
        subtitle="Tell us what you're building. We'll tell you honestly if we're the right fit."
      />
    </Layout>
  );
}
