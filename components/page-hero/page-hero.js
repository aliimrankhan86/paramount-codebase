import React from "react";
import cn from "classnames";
import styles from "./page-hero.module.css";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Reveal from "@/components/motion/reveal";
import MaskedLines from "@/components/motion/masked-lines";

export default function PageHero({ eyebrow, title, titleLines, subtitle, meta, children }) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        {/* priority: the hero is the LCP element, so it must paint from the
            server-rendered HTML rather than wait for hydration. */}
        <Reveal className={styles.inner} priority>
          <div className={styles.topRow}>
            <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: eyebrow }]} />
            {meta && <span className={styles.meta}>{meta}</span>}
          </div>

          {titleLines ? (
            <MaskedLines
              as="h1"
              className={cn("heading-1", styles.title)}
              lines={titleLines}
              priority
            />
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
