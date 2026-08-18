import React from "react";
import cn from "classnames";
import styles from "./approach.module.css";
import Reveal from "@/components/motion/reveal";

const pillars = [
  {
    title: "You work with the people doing the work",
    description:
      "No handoff to an anonymous delivery team after the sales call. The consultants you talk to are the ones building it.",
  },
  {
    title: "Delivery you can see, not just hear about",
    description:
      "Short sprints, honest status reporting, and a backlog you can look at any time, not only at the milestone review.",
  },
  {
    title: "Confidentiality by default",
    description:
      "Your code, data and roadmap are confidential from the first conversation. We don't wait for a signed NDA to start behaving that way.",
  },
  {
    title: "We'd rather be right than comfortable",
    description:
      "We recommend agentic AI, a full rebuild, or neither, based on what your problem actually needs.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className={cn("section", "section-tint")}>
      <div className={cn("container")}>
        <Reveal className={styles.heading}>
          <div className="eyebrow">How we work</div>
          <h2 className="heading-2">A small team, on purpose</h2>
        </Reveal>

        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} className={styles.item} delay={index * 0.06}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={cn("heading-6", styles.title)}>{pillar.title}</h3>
              <p className={cn("paragraph-small", styles.description)}>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
