import React from "react";
import cn from "classnames";
import styles from "./name-marquee.module.css";
import clients from "@/constants/clients";

export default function NameMarquee({ className, display = false }) {
  return (
    <div
      className={cn(styles.wrap, { [styles.display]: display }, className)}
      role="group"
      aria-label="Organisations we've worked with"
    >
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <ul className={styles.strip} aria-hidden={copy === 1} key={copy}>
            {clients.map((client) => (
              <li key={`${copy}-${client.name}`} className={styles.item}>
                <span className={styles.name}>{client.name}</span>
                <span className={styles.mark} aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
