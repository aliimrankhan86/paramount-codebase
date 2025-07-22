import React from "react";
import cn from "classnames";
import styles from "./sales.module.css";
import icons from "@/constants/icons";
import Timer from "@/components/timer";

export default function Sales() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={cn("paragraph-2x-large", styles.title)}>
              Save up to 50% Off on charging stations
            </div>

            <Timer />

            <button className={cn("button-stroke", styles.button)}>
              Discover sales {icons.ArrowRight}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
