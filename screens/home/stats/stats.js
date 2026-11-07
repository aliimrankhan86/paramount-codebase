import React from "react";
import cn from "classnames";
import styles from "./stats.module.css";
import StatCounter from "@/components/stat-counter/stat-counter";

const stats = [
  { value: 15, label: "Client organisations delivered for", color: "var(--spectrum-amber)" },
  { value: 6, label: "Service disciplines, one team", color: "var(--spectrum-rose)" },
  { value: 6, label: "Sectors, from healthcare to logistics", color: "var(--spectrum-teal)" },
  { value: 1, label: "Accountable team, first call to launch", color: "var(--spectrum-violet)" },
];

export default function Stats() {
  return (
    <section className={styles.section} aria-label="Paramount Consultants at a glance">
      <div className={cn("container")}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div className={styles.item} key={stat.label} style={{ borderTopColor: stat.color }}>
              <StatCounter value={stat.value} label={stat.label} delay={index * 0.08} color={stat.color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
