import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import MaskedLines from "@/components/motion/masked-lines";
import Reveal from "@/components/motion/reveal";

export default function Intro() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <MaskedLines
          as="h2"
          className={cn("heading-1", styles.heading)}
          lines={[
            <>Technology work,</>,
            <>judged by</>,
            <>whether it solves</>,
            <>the problem.</>,
          ]}
        />

        <div className={styles.body}>
          <Reveal y={10}>
            <p className={cn("paragraph-2x-large", styles.lead)}>
              Paramount Consultants is a digital consultancy built around a simple idea: results
              matter more than how impressive the proposal sounds.
            </p>
          </Reveal>

          <div className={styles.prose}>
            <Reveal delay={0.06} y={10}>
              <p className={cn("paragraph-large", styles.paragraph)}>
                We work across Adobe Experience Manager, agile delivery, full-stack software
                development, digital marketing and agentic AI. Most engagements touch more than one
                of those at once, which is why we keep the team small enough that the person scoping
                your project is also one of the people delivering it.
              </p>
            </Reveal>

            <Reveal delay={0.1} y={10}>
              <p className={cn("paragraph-large", styles.paragraph)}>
                We&rsquo;re not the right fit for every project. If a simpler off-the-shelf tool
                would solve your problem for a fraction of the cost, we&rsquo;ll say so in the first
                conversation, before you&rsquo;ve paid for a lengthy discovery phase.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className={styles.quote} y={14}>
          <p>
            Straight answers first. Scope second. <em>Invoice last.</em>
          </p>
          <cite>How we start every engagement</cite>
        </Reveal>
      </div>
    </section>
  );
}
