"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import MaskedLines from "@/components/motion/masked-lines";
import Figure from "@/components/figure/figure";
import styles from "./hero.module.css";

export default function Hero() {
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
          </div>

          <Figure
            className={styles.figure}
            src="/art/home-hero.webp"
            alt=""
            ratio="4 / 3"
            index="01"
            caption="Fig. 01 — Applied intelligence"
            note="Concept study"
            objectPosition="62% 50%"
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
