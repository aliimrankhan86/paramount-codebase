"use client";

import React from "react";
import cn from "classnames";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SonarGrid } from "@/components/sonar-grid/sonar-grid";
import styles from "./working-across.module.css";

const disciplines = [
  { label: "Agentic AI", color: "var(--accent-600)" },
  { label: "Adobe Experience Manager", color: "var(--spectrum-amber)" },
  { label: "Agile delivery", color: "var(--spectrum-rose)" },
  { label: "Full-stack engineering", color: "var(--spectrum-teal)" },
  { label: "Digital marketing", color: "var(--spectrum-violet)" },
  { label: "IT project management", color: "var(--spectrum-green)" },
];

export default function WorkingAcross() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % disciplines.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className={styles.section} aria-label="Working across">
      <SonarGrid
        className={styles.field}
        spacing={24}
        dotRadius={1.4}
        baseOpacity={0.32}
        pingEvery={2.1}
        speed={320}
        ringWidth={96}
        amplitude={2.2}
        interactive
        seedPing
      >
        <div className={styles.inner}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Working across
          </span>

          <div className={cn("heading-2", styles.word)} aria-live="off">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={disciplines[active].label}
                style={{ color: disciplines[active].color }}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -16, filter: "blur(8px)" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {disciplines[active].label}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </SonarGrid>
    </section>
  );
}
