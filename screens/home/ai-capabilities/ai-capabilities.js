import React from "react";
import cn from "classnames";
import styles from "./ai-capabilities.module.css";
import MaskedLines from "@/components/motion/masked-lines";
import Figure from "@/components/figure/figure";
import Reveal from "@/components/motion/reveal";

const capabilities = [
  {
    title: "Agentic AI orchestration",
    description:
      "We build the coordination layer that lets agents plan, reason, act and adapt across your tools, with explicit permissions and checkpoints so a person stays in control of anything that matters.",
  },
  {
    title: "Intelligent process automation",
    description:
      "Manual, repetitive steps replaced with adaptive automation that reads unstructured data and makes contextual decisions, escalating to a human only when judgement is genuinely needed.",
  },
  {
    title: "AI solution integration",
    description:
      "As an AI solution provider, we sit between strategy and delivery: assessing where AI earns its place, then wiring it into the systems you already run rather than bolting on another dashboard.",
  },
  {
    title: "AI-augmented CRM",
    description:
      "AI agents connected to the CRM you already use, handling lead qualification, follow-ups and pipeline updates automatically, with full visibility into what changed and why.",
  },
  {
    title: "AI-native application development",
    description:
      "For new products, intelligence sits in the architecture from day one, how the app reasons, responds and learns. Bolting a chatbot onto the side afterward is a different job, and usually the wrong one.",
  },
];

export default function AiCapabilities() {
  return (
    <section className={cn("section", "section-dark", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.headRow}>
          <MaskedLines
            className={cn("heading-2", styles.title)}
            lines={[<>Five ways we put</>, <>AI to work.</>]}
          />
          <Reveal delay={0.05} y={12}>
            <p className={cn("paragraph-large", styles.lead)}>
              Agentic AI is the headline, but the value is in the plumbing: how it&rsquo;s scoped,
              integrated and kept accountable once it&rsquo;s live.
            </p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          <Figure
            className={styles.figureWrap}
            tone="ink"
            src="/art/ai-orb.jpg"
            alt="A row of server blades in a darkened rack, each with small indicator lights"
            ratio="4 / 5"
            index="02"
            caption="Fig. 02 — Agentic systems"
            note="Rack hardware"
            sizes="(max-width: 900px) 100vw, 38vw"
          />

          <ol className={styles.list}>
            {capabilities.map((item) => (
              <Reveal as="li" key={item.title} y={10} className={styles.item}>
                <h3 className={cn("heading-4", styles.itemTitle)}>{item.title}</h3>
                <p className={cn("paragraph-small", styles.itemText)}>{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
