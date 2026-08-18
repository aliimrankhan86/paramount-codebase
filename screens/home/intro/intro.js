import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import Reveal from "@/components/motion/reveal";

export default function Intro() {
  return (
    <section className={cn("section", "section-tight", "section-tint")}>
      <div className={cn("container", "container-narrow")}>
        <Reveal>
          <p className={cn("paragraph-x-large", styles.paragraph)}>
            Paramount Consultants is a digital consultancy built around a simple idea: technology
            work should be judged by whether it actually solves the problem, not by how
            impressive it sounds in a proposal.
          </p>
          <p className={cn("paragraph-large", styles.paragraph)}>
            We work across Adobe Experience Manager, agile delivery, full-stack software
            development, digital marketing and agentic AI. Most engagements touch more than one
            of those at once, which is why we keep the team small enough that the person scoping
            your project is also one of the people delivering it.
          </p>
          <p className={cn("paragraph-large", styles.paragraph)}>
            We're not the right fit for every project. If a simpler off-the-shelf tool would
            solve your problem for a fraction of the cost, we'll say so in the first
            conversation, before you've paid for a lengthy discovery phase.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
