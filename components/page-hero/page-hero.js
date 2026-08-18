import React from "react";
import cn from "classnames";
import styles from "./page-hero.module.css";
import Reveal from "@/components/motion/reveal";

export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", "container-narrow")}>
        <Reveal className={styles.inner}>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className={cn("heading-1", styles.title)}>{title}</h1>
          {subtitle && <p className={cn("paragraph-x-large", styles.subtitle)}>{subtitle}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
