import Link from "next/link";
import cn from "classnames";
import Layout from "@/components/Layout";
import PageHero from "@/components/page-hero/page-hero";
import CtaBand from "@/components/cta-band/cta-band";
import ServiceRow from "@/components/service-row/service-row";
import Reveal from "@/components/motion/reveal";
import MaskedLines from "@/components/motion/masked-lines";
import services, { engagementProcess } from "@/constants/services";
import { areas, allServices } from "@/constants/accounting";
import styles from "./services.module.css";

export default function ServicesIndexPage() {
  const accountingCount = allServices.length;

  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title="Everything we do, in one place"
        titleLines={[<>Everything we do,</>, <>in one place</>]}
        subtitle="Two practices, one firm: technology and AI delivery, plus accounting and tax led by an ACCA-qualified accountant."
        meta={`${services.length + accountingCount} services / 02 practices`}
      >
        <nav className={styles.jump} aria-label="On this page">
          <a href="#technology">
            Technology &amp; AI
            <span>{services.length}</span>
          </a>
          <a href="#accounting">
            Accounting
            <span>{accountingCount}</span>
          </a>
        </nav>
      </PageHero>

      <section id="technology" className={cn("section", "section-tight", styles.practice)}>
        <div className={cn("container")}>
          <div className={styles.practiceHead}>
            <div>
              <p className="eyebrow">Practice 01</p>
              <h2 className="heading-2">Technology &amp; AI</h2>
            </div>
            <p className={cn("paragraph-large", styles.practiceNote)}>
              Six disciplines, one accountable team. Each is scoped and staffed independently,
              but most real projects draw on more than one at once.
            </p>
          </div>

          <div className={styles.list}>
            {services.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="accounting"
        className={cn("section", "section-tight", "section-paper-2", styles.accounting)}
      >
        <div className={cn("container")}>
          <div className={styles.practiceHead}>
            <div>
              <p className="eyebrow">Practice 02</p>
              <h2 className="heading-2">Accounting</h2>
            </div>
            <p className={cn("paragraph-large", styles.practiceNote)}>
              Fifteen services across four areas, run by a named accountant who answers you
              directly. Start wherever the gap is.
            </p>
          </div>

          <div className={styles.areas}>
            {areas.map((area) => (
              <article className={styles.area} key={area.slug}>
                <div className={styles.areaHead}>
                  <h3 className={styles.areaTitle}>
                    <Link href={`/accounting/${area.slug}`}>{area.title}</Link>
                  </h3>
                  <span className={cn("tnum", styles.areaCount)}>{area.services.length}</span>
                </div>

                <ul className={styles.areaList}>
                  {area.services.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/accounting/${area.slug}#${service.slug}`}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.practiceFoot}>
            <Link href="/accounting" className="link-arrow">
              The accounting practice
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className={cn("section", "section-tight")}>
        <div className={cn("container")}>
          <div className={styles.processHead}>
            <MaskedLines
              className={cn("heading-2", styles.processTitle)}
              lines={[<>The same four steps,</>, <>every time.</>]}
            />
            <p className={cn("paragraph-large", styles.processSub)}>
              Whether the work is a two-week audit or a multi-year programme, the shape of delivery
              stays predictable.
            </p>
          </div>

          <ol className={styles.processGrid}>
            {engagementProcess.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 0.05} y={10} className={styles.processStep}>
                <span className={styles.processIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={cn("heading-5", styles.stepTitle)}>{step.title}</h3>
                <p className={cn("paragraph-small", styles.stepText)}>{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        subtitle="Describe the problem, not the solution. We'll tell you honestly what it needs."
        secondaryLabel="See the accounting practice"
        secondaryHref="/accounting"
      />
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
