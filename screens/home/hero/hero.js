"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import MaskedLines from "@/components/motion/masked-lines";
import Figure from "@/components/figure/figure";
import styles from "./hero.module.css";

const disciplines = [
  "Agentic AI",
  "Adobe Experience Manager",
  "Agile delivery",
  "Full-stack engineering",
  "Digital marketing",
  "IT project management",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % disciplines.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className={styles.hero}>
      <div className={cn("container")}>
        <div className={styles.topline}>
          <span className={styles.kicker}>Applied AI &amp; digital delivery</span>
          <span className={styles.meta}>Paramount Consultants — working worldwide</span>
        </div>

        <MaskedLines
          as="h1"
          className={cn("hero", styles.title)}
          lines={[
            <>Intelligence,</>,
            <>
              <em>engineered.</em>
            </>,
          ]}
          stagger={0.1}
        />

        <div className={styles.bottom}>
          <div className={styles.copy}>
            <p className={cn("paragraph-x-large", styles.subtitle)}>
              We unite strategy, design and engineering to turn ambitious ideas into working
              digital products, with agentic AI applied where it genuinely earns its place.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={cn("button", "button-accent")}>
                Start a conversation
                <Arrow />
              </Link>
              <Link href="/services" className="link-arrow">
                Explore services
                <Arrow />
              </Link>
            </div>

            <div className={styles.ticker} aria-label="Services we work across">
              <span className={styles.tickerLabel}>Working across</span>
              <span className={styles.tickerWord} aria-live="off">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={disciplines[active]}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {disciplines[active]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>

          <Figure
            className={styles.figure}
            src="/art/hero-glass.jpg"
            alt="Macro photograph of a dark circuit board, densely packed with surface-mounted components"
            ratio="4 / 3"
            index="01"
            caption="Fig. 01 — Applied intelligence"
            note="Circuit board"
            priority
            sizes="(max-width: 900px) 100vw, 34vw"
          />
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
