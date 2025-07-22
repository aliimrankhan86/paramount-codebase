import React from "react";
import cn from "classnames";
import styles from "./showcase.module.css";

export default function Showcase() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.overlay}>
          <div className={cn("hero-2", styles.title)}>High-fidelity audio.</div>
        </div>
      </div>
    </div>
  );
}
