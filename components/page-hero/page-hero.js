import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./page-hero.module.css";
import Reveal from "@/components/motion/reveal";
import MaskedLines from "@/components/motion/masked-lines";

export default function PageHero({ eyebrow, title, titleLines, subtitle, meta, children }) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <Reveal className={styles.inner}>
          <div className={styles.topRow}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{eyebrow}</span>
            </nav>
            {meta && <span className={styles.meta}>{meta}</span>}
          </div>

          {titleLines ? (
            <MaskedLines as="h1" className={cn("heading-1", styles.title)} lines={titleLines} />
          ) : (
            <h1 className={cn("heading-1", styles.title)}>{title}</h1>
          )}

          <div className={styles.bottomRow}>
            {subtitle && <p className={cn("paragraph-x-large", styles.subtitle)}>{subtitle}</p>}
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
