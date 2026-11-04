import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./cta-band.module.css";
import Reveal from "@/components/motion/reveal";

export default function CtaBand({
  eyebrow = "Next step",
  title = "Tell us what you're trying to build",
  subtitle = "The first conversation costs nothing, and we reply to every enquiry ourselves.",
  actionLabel = "Start a conversation",
  actionHref = "/contact",
  secondaryLabel = "Explore services",
  secondaryHref = "/services",
}) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Reveal className={styles.inner}>
          <div className={styles.eyebrowRow}>
            <span className="eyebrow eyebrow-inverse">{eyebrow}</span>
            <span className={styles.meta}>Response within one working day</span>
          </div>

          <h2 className={cn("heading-1", styles.title)}>{title}</h2>

          <div className={styles.bottomRow}>
            <p className={cn("paragraph-large", styles.subtitle)}>{subtitle}</p>
            <div className={styles.actions}>
              <Link href={actionHref} className={cn("button", "button-inverse", "button-large")}>
                {actionLabel}
                <Arrow />
              </Link>
              {secondaryLabel && (
                <Link href={secondaryHref} className={cn("button", "button-outline-inverse", styles.secondary)}>
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </Reveal>
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
