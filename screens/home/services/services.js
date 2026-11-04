import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./services.module.css";
import services from "@/constants/services";
import ServiceRow from "@/components/service-row/service-row";
import MaskedLines from "@/components/motion/masked-lines";

export default function Services() {
  return (
    <section id="services" className={cn("section", "section-tight", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.headRow}>
          <MaskedLines
            className={cn("heading-2", styles.heading)}
            lines={[<>Six disciplines.</>, <><em>One</em> accountable team.</>]}
          />

          <div className={styles.headAside}>
            <p className={cn("paragraph-medium", styles.headNote)}>
              Each service is scoped and staffed independently, but most real projects draw on
              more than one at once.
            </p>
            <Link href="/services" className="link-arrow">
              See every service
              <Arrow />
            </Link>
          </div>
        </div>

        <div className={styles.list}>
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
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
