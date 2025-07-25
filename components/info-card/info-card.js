import React from "react";
import styles from "./info-card.module.css";
import cn from "classnames";
import icons from "@/constants/icons";

export default function InfoCard() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {icons.CheckCircle}
        <div>
          <div className={cn("paragraph-small", styles.title)}>
            Pick up from Store
          </div>

          <div className={cn("paragraph-small", styles.subtitle)}>
            Usually ready in 24 hours
          </div>
        </div>
      </div>

      <button className={cn("label-x-small", styles.button)}>
        Check availability at other stores
      </button>
    </div>
  );
}
