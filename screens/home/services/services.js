import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./services.module.css";
import services from "@/constants/services";
import ServiceCard from "@/components/service-card/service-card";
import Reveal from "@/components/motion/reveal";
import icons from "@/constants/icons";

export default function Services() {
  return (
    <section id="services" className={cn("section")}>
      <div className={cn("container")}>
        <Reveal className={styles.heading}>
          <div className="eyebrow">What we do</div>
          <h2 className="heading-2">Six disciplines, one accountable team</h2>
          <p className={cn("paragraph-large", styles.subtitle)}>
            We keep the list short on purpose. Every service below is something we do ourselves,
            not something we broker out to a subcontractor.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.footer}>
          <Link href="/services" className={cn("button", "button-stroke")}>
            View all services {icons.ArrowRight}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
