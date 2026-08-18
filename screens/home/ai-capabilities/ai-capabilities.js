import React from "react";
import cn from "classnames";
import styles from "./ai-capabilities.module.css";
import Reveal from "@/components/motion/reveal";
import icons from "@/constants/icons";

const capabilities = [
  {
    icon: "Orchestration",
    title: "Agentic AI orchestration",
    description:
      "We build the coordination layer that lets agents plan, reason, act and adapt across your tools, with explicit permissions and checkpoints so a person stays in control of anything that matters.",
  },
  {
    icon: "AutomationBolt",
    title: "Intelligent process automation",
    description:
      "Manual, repetitive steps replaced with adaptive automation that reads unstructured data and makes contextual decisions, escalating to a human only when judgement is genuinely needed.",
  },
  {
    icon: "Integration",
    title: "AI solution integration",
    description:
      "As an AI solution provider, we sit between strategy and delivery: assessing where AI earns its place, then wiring it into the systems you already run rather than bolting on another dashboard.",
  },
  {
    icon: "CrmPulse",
    title: "AI-augmented CRM",
    description:
      "AI agents connected to the CRM you already use, handling lead qualification, follow-ups and pipeline updates automatically, with full visibility into what changed and why.",
  },
  {
    icon: "NativeApp",
    title: "AI-native application development",
    description:
      "For new products, intelligence sits in the architecture from day one, how the app reasons, responds and learns. Bolting a chatbot onto the side afterward is a different job, and usually the wrong one.",
  },
];

export default function AiCapabilities() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <Reveal className={styles.heading}>
          <div className="eyebrow">Applied AI</div>
          <h2 className="heading-2">Five ways we put AI to work</h2>
          <p className={cn("paragraph-large", styles.subtitle)}>
            Agentic AI is the headline, but the value is in the plumbing: how it&rsquo;s scoped,
            integrated and kept accountable once it&rsquo;s live.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className={styles.card}>
              <div className={styles.iconWrap}>{icons[item.icon]}</div>
              <h3 className={cn("heading-6", styles.title)}>{item.title}</h3>
              <p className={cn("paragraph-small", styles.description)}>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
