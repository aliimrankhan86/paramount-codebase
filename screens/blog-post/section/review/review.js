import React from "react";
import cn from "classnames";
import styles from "./review.module.css";
import icons from "@/constants/icons";
import Indicators from "@/components/indicators";

export default function Review() {
  return (
    <div className={styles.container}>
      {icons.Quotes}

      <div className={styles.heading}>
        <div className={cn("heading-4", styles.review)}>
          Love how these eco-friendly speakers blend top-notch sound with
          sustainability. They truly exceed expectations!
        </div>
        <div className={cn("paragraph-large", styles.reviewer)}>
          - James L, Eco Warrior
        </div>
      </div>
    </div>
  );
}
