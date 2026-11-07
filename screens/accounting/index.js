import React from "react";
import cn from "classnames";
import Link from "next/link";
import Layout from "@/components/Layout";
import Figure from "@/components/figure/figure";
import PageHero from "@/components/page-hero/page-hero";
import CtaBand from "@/components/cta-band/cta-band";
import Reveal from "@/components/motion/reveal";
import { areas, engagement, lead, promise } from "@/constants/accounting";
import styles from "./accounting.module.css";

// One spectrum hue per area, in order — decorative identity only; the action
// accent stays cobalt.
const SPECTRUM = [
  "var(--spectrum-amber)",
  "var(--spectrum-rose)",
  "var(--spectrum-teal)",
  "var(--spectrum-violet)",
  "var(--spectrum-green)",
];

export default function AccountingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Accounting"
        title="Accounting that keeps pace with the business."
        titleLines={[
          <>Accounting that</>,
          <>keeps pace with</>,
          <>the business.</>,
        ]}
        subtitle="Bookkeeping, tax, payroll and compliance for UK businesses, run by a named accountant who answers you directly."
        meta="15 services / 4 areas"
      />

      <section className="section">
        <div className={cn("container", styles.ledeGrid)}>
          <Reveal>
            <p className="eyebrow">Where we start</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className={cn("heading-3", styles.lede)}>
              The problem is rarely the tax return. It is that the numbers arrive too late to
              change what you <em>do next.</em>
            </p>
            <p className={cn("paragraph-large", styles.ledeBody)}>
              So the work is ordered that way. The books come first and stay current. Filings
              follow, on time. Then the conversation about what the figures mean, which is the
              part most practices never get to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={cn("section", "section-flush", styles.material)} aria-label="Material study">
        <div className={cn("container")}>
          <Figure
            src="/art/accounting-practice.webp"
            alt="Accountant reviewing financial reports, calculations and dashboard charts"
            ratio="21 / 9"
            index="01"
            caption="Fig. 01 — The practice"
            note="Working papers"
            objectPosition="50% 55%"
            sizes="(max-width: 900px) 100vw, 100vw"
          />
        </div>
      </section>

      <section className={cn("section", styles.areasSection)} aria-labelledby="accounting-areas">
        <div className={cn("container")}>
          <Reveal className={styles.areasHead}>
            <h2 id="accounting-areas" className="heading-2">
              Four areas, fifteen <em>services.</em>
            </h2>
            <p className={cn("paragraph-medium", styles.areasNote)}>
              Start wherever the gap is. Most clients start with the books.
            </p>
          </Reveal>

          <div className={styles.ledger}>
            {areas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.05}>
                <article
                  className={styles.areaRow}
                  style={{ "--area-accent": SPECTRUM[index % SPECTRUM.length] }}
                >
                  <div className={styles.areaIndex}>{String(index + 1).padStart(2, "0")}</div>

                  <div className={styles.areaMain}>
                    <h3 className={styles.areaTitle}>
                      <Link href={`/accounting/${area.slug}`}>{area.title}</Link>
                    </h3>
                    <p className={styles.areaCopy}>{area.shortDescription}</p>
                    <ul className={styles.serviceList}>
                      {area.services.map((service) => (
                        <li key={service.slug}>
                          <Link href={`/accounting/${area.slug}#${service.slug}`}>
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.areaMeta}>
                    <span className={cn("tnum", styles.areaCount)}>{area.services.length}</span>
                    <Link href={`/accounting/${area.slug}`} className={styles.areaLink}>
                      Open
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
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("section", "section-dark", styles.promiseSection)}>
        <div className={cn("container", styles.promiseGrid)}>
          <Reveal>
            <span className="eyebrow eyebrow-inverse">What you get</span>
            <h2 className={cn("heading-2", styles.promiseTitle)}>{promise.title}</h2>
          </Reveal>
          <Reveal delay={0.06} className={styles.promiseBody}>
            <p>{promise.body}</p>
            <p className={styles.promiseCommitment}>{promise.commitment}</p>
            <p className={styles.promiseExclusion}>{promise.exclusion}</p>
          </Reveal>
        </div>
      </section>

      <section className={cn("section", styles.personSection)} aria-labelledby="who-delivers">
        <div className={cn("container", styles.personGrid)}>
          <Reveal className={styles.personAside}>
            <span className="eyebrow">Who delivers this</span>
            <div className={styles.personCard}>
              <div className={styles.personInitials} aria-hidden="true">
                MM
              </div>
              <p className={styles.personName}>
                {lead.name}
                {lead.qualification ? (
                  <span className={styles.personCredential}>, {lead.qualification}</span>
                ) : null}
              </p>
              <p className={styles.personRole}>{lead.role}</p>
              <ul className={styles.personFocus}>
                {lead.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06} className={styles.personMain}>
            <h2 id="who-delivers" className={cn("heading-3", styles.personIntro)}>
              {lead.intro}
            </h2>
            {lead.bio.map((paragraph) => (
              <p key={paragraph} className={cn("paragraph-large", styles.personBio)}>
                {paragraph}
              </p>
            ))}
            <p className={styles.disclosure}>{lead.disclosure}</p>
          </Reveal>
        </div>
      </section>

      <section className={cn("section", "section-tight", "section-orange", styles.rhythmSection)}>
        <div className={cn("container")}>
          <Reveal>
            <h2 className="heading-2">
              How an engagement <em>runs.</em>
            </h2>
          </Reveal>
          <ol className={styles.rhythm}>
            {engagement.map((item, index) => (
              <Reveal
                as="li"
                key={item.step}
                delay={index * 0.05}
                className={styles.rhythmStep}
              >
                <span className={cn("tnum", styles.rhythmIndex)}>{item.step}</span>
                <h3 className={styles.rhythmTitle}>{item.title}</h3>
                <p className={styles.rhythmCopy}>{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Accounting"
        title="Start with a conversation about your books"
        subtitle="Tell us what you run, what is behind, and what you need filed. You will get a scope and a fee in writing before anything starts."
        actionLabel="Talk to the accountant"
        secondaryLabel="See technology services"
        secondaryHref="/services"
      />
    </Layout>
  );
}
