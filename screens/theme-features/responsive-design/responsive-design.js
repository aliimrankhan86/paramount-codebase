import React from "react";
import cn from "classnames";
import styles from "./responsive-design.module.css";
import icons from "@/constants/icons";

export default function ResponsiveDesign() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <img
            src="/theme-features/mobile-experience.webp"
            alt="Responsive design"
            className={styles.image}
          />

          <div className={styles.heading}>
            {icons.MobileCard}
            <div className={cn("heading-3", styles.title)}>
              Mobile shopping made easy
            </div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              Explore our eco-conscious collection with ease on any device,
              thanks to our intuitive design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
