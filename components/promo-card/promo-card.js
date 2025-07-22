import React from "react";
import cn from "classnames";
import styles from "./promo-card.module.css";
import icons from "@/constants/icons";

export default function PromoCard() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          {icons.Headphones}
          <div className={cn("heading-5", styles.title)}>
            Headphones Accessories
          </div>
          <div className={cn("paragraph-medium", styles.subtitle)}>
            Keep your headphones in optimal condition for years.
          </div>

          <button className={cn("button-stroke", styles.button)}>
            View accesories {icons.ArrowRight}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
