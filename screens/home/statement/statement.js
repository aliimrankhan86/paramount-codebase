import React from "react";
import cn from "classnames";
import Link from "next/link";
import MaskedLines from "@/components/motion/masked-lines";
import styles from "./statement.module.css";

/**
 * The page's one solid cobalt block. It sits between the hero and the stats so
 * the accent colour carries weight once, at full bleed, instead of appearing as
 * a thin rule or a single coloured word in every heading.
 */
export default function Statement() {
  return (
    <section className={styles.section} aria-labelledby="statement-title">
      <div className={cn("container")}>
        <div className={styles.topline}>
          <span className={styles.kicker}>Accounting</span>
          <span className={styles.meta}>Two practices, one firm</span>
        </div>

        <MaskedLines
          as="h2"
          id="statement-title"
          className={styles.title}
          lines={[<>The same firm</>, <><em>keeps the books.</em></>]}
        />

        <div className={styles.row}>
          <p className={styles.copy}>
            Bookkeeping, VAT, payroll and year-end accounts, run by an ACCA-qualified accountant
            who answers you directly.
          </p>

          <Link href="/accounting" className={styles.link}>
            Accounting services
            <Arrow />
          </Link>
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
