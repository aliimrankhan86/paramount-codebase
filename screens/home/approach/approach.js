import React from "react";
import cn from "classnames";
import styles from "./approach.module.css";
import MaskedLines from "@/components/motion/masked-lines";
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
    <section id="approach" className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.headRow}>
          <MaskedLines
            className={cn("heading-2", styles.heading)}
            lines={[<>A small team,</>, <>on purpose.</>]}
          />
          <Reveal delay={0.05} y={10}>
            <p className={cn("paragraph-large", styles.sub)}>
              Four commitments that shape every engagement, from the first call to the post-launch
              review.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} className={styles.item} delay={index * 0.05} y={10}>
              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={cn("paragraph-small", styles.description)}>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
