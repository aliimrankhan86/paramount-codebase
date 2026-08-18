import React from "react";
import cn from "classnames";
import styles from "./values.module.css";
import Reveal from "@/components/motion/reveal";

const values = [
  {
    title: "Craftsmanship",
    description:
      "Code that's readable by someone other than the person who wrote it. Content platforms editors don't need a manual for. We'd rather ship something smaller and solid than something large and fragile.",
  },
  {
    title: "Integrity",
    description:
      "If a project doesn't need what you're asking for, we say so, even when the easier answer is to agree and bill the hours. Confidentiality and a straight answer are the baseline, not a premium option.",
  },
  {
    title: "Judgement",
    description:
      "New tools earn a place when they solve a real problem better than what's already there. Being the newest thing doesn't win the argument on its own.",
  },
];

export default function Values() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <Reveal className={styles.heading}>
          <div className="eyebrow">What we hold to</div>
          <h2 className="heading-2">Working principles, not slogans</h2>
        </Reveal>

        <div className={styles.grid}>
          {values.map((value, index) => (
            <Reveal key={value.title} className={styles.card} delay={index * 0.08}>
              <h3 className={cn("heading-5", styles.title)}>{value.title}</h3>
              <p className={cn("paragraph-medium", styles.description)}>{value.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
