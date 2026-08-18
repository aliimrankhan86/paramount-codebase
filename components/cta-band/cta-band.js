import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./cta-band.module.css";
import Reveal from "@/components/motion/reveal";

export default function CtaBand({
  eyebrow = "Let's talk",
  title = "Tell us what you're trying to build",
  subtitle = "The first conversation costs nothing, and we reply to every enquiry ourselves.",
  actionLabel = "Contact us",
  actionHref = "/contact",
}) {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Reveal className={styles.inner}>
          <div className={cn("eyebrow", styles.eyebrow)}>{eyebrow}</div>
          <h2 className={cn("heading-2", styles.title)}>{title}</h2>
          <p className={cn("paragraph-large", styles.subtitle)}>{subtitle}</p>
          <Link href={actionHref} className={cn("button", "button-white", styles.action)}>
            {actionLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
