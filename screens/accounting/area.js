import React from "react";
import cn from "classnames";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/page-hero/page-hero";
import CtaBand from "@/components/cta-band/cta-band";
import Reveal from "@/components/motion/reveal";
import { areas } from "@/constants/accounting";
import styles from "./area.module.css";

// Matches the index page: one spectrum hue per area, decorative only.
const AREA_ACCENT = {
  bookkeeping: "var(--spectrum-amber)",
  tax: "var(--spectrum-rose)",
  compliance: "var(--spectrum-teal)",
  advisory: "var(--spectrum-violet)",
};

export default function AccountingAreaPage({ area }) {
  const others = areas.filter((item) => item.slug !== area.slug);

  return (
    <Layout>
      <PageHero
        eyebrow="Accounting"
        title={area.title}
        subtitle={area.shortDescription}
        meta={`${area.services.length} services`}
      />

      <section className="section">
        <div
          className={cn("container", styles.layout)}
          style={{ "--area-accent": AREA_ACCENT[area.slug] }}
        >
          <nav className={styles.index} aria-label={`${area.title} services`}>
            <p className={styles.indexTitle}>On this page</p>
            <ol className={styles.indexList}>
              {area.services.map((service, index) => (
                <li key={service.slug}>
                  <a href={`#${service.slug}`}>
                    <span className={cn("tnum", styles.indexNum)}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className={styles.body}>
            <p className={cn("heading-3", styles.intro)}>{area.intro}</p>

            {area.services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <article id={service.slug} className={styles.service}>
                  <div className={styles.serviceHead}>
                    <span className={cn("tnum", styles.serviceNum)}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                  </div>
                  <p className={styles.serviceSummary}>{service.summary}</p>

                  <div className={styles.includes}>
                    <p className={styles.includesLabel}>What it covers</p>
                    <ul>
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className={styles.serviceCta}>
                    Ask about {service.title}
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4.75 12h14.5" strokeWidth="1.6" strokeLinecap="round" />
                      <path
                        d="M13.75 6.75 19.25 12l-5.5 5.25"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("section", "section-tight", styles.otherSection)}>
        <div className="container">
          <h2 className={cn("heading-3", styles.otherTitle)}>Other accounting areas</h2>
          <ul className={styles.otherList}>
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/accounting/${item.slug}`}>
                  <span className={styles.otherName}>{item.title}</span>
                  <span className={styles.otherCount}>{item.services.length} services</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Accounting"
        title={`Talk to us about ${area.title.toLowerCase()}`}
        subtitle="Tell us what you run and what is behind. You will get a scope and a fee in writing before anything starts."
        actionLabel="Start a conversation"
        secondaryLabel="All accounting services"
        secondaryHref="/accounting"
      />
    </Layout>
  );
}
