import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              About us
            </div>
            <div className={cn("hero", styles.title)}>
              Innovating for a greener tomorrow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
