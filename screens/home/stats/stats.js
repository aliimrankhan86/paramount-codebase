import React from "react";
import cn from "classnames";
import styles from "./stats.module.css";
import StatCounter from "@/components/stat-counter/stat-counter";

const stats = [
  { value: 15, label: "Client organisations delivered for" },
  { value: 6, label: "Service disciplines, one team" },
  { value: 6, label: "Sectors, from healthcare to logistics" },
  { value: 1, label: "Accountable team, first call to launch" },
];

export default function Stats() {
  return (
    <section className={styles.section} aria-label="Paramount Consultants at a glance">
      <div className={cn("container")}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div className={styles.item} key={stat.label}>
              <StatCounter value={stat.value} label={stat.label} delay={index * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
