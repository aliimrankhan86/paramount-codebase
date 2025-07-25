import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("hero", styles.title)}>{"Faq's"}</div>
          <div className={cn("paragraph-x-large", styles.subtitle)}>
            Explore answers to your questions about our sustainable tech. Dive
            into our FAQs to learn more about our eco-friendly approach.
          </div>
        </div>
      </div>
    </div>
  );
}
