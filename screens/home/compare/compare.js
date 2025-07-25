import React from "react";
import cn from "classnames";
import styles from "./compare.module.css";
import CompareSlider from "@/components/compare-slider";

export default function Compare() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("paragraph-medium", styles.subtitle)}>
          Power up, green style
        </div>
        <div className={cn("heading-3", styles.title)}>
          Spot the difference: Eco edition
        </div>

        <CompareSlider />
      </div>
    </div>
  );
}
