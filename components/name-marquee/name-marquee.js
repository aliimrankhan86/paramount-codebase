import React from "react";
import cn from "classnames";
import styles from "./name-marquee.module.css";
import clients from "@/constants/clients";

const SPECTRUM = [
  "var(--accent-600)",
  "var(--spectrum-amber)",
  "var(--spectrum-rose)",
  "var(--spectrum-teal)",
  "var(--spectrum-violet)",
  "var(--spectrum-green)",
];

export default function NameMarquee({ className, display = false }) {
  return (
    <div
      className={cn(styles.wrap, { [styles.display]: display }, className)}
      role="group"
      aria-label="Organisations we've worked with"
      tabIndex={0}
    >
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <ul className={styles.strip} aria-hidden={copy === 1} key={copy}>
            {clients.map((client, i) => (
              <li key={`${copy}-${client.name}`} className={styles.item}>
                <span className={styles.name}>{client.name}</span>
                <span
                  className={styles.mark}
                  aria-hidden="true"
                  style={{ background: SPECTRUM[i % SPECTRUM.length] }}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
