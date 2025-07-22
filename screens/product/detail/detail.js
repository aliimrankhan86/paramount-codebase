import React from "react";
import cn from "classnames";
import styles from "./detail.module.css";
import icons from "@/constants/icons";

export default function Detail() {
  return (
    <div className={cn("section")}>
      <div className={cn("", styles.container)}>
        <div className={styles.heading}>
          {icons.HeadphonesLightning}
          <div className={cn("heading-3", styles.title)}>
            Designed for tomorrow
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Discover elegance in sustainability with our eco-friendly
            technology. Each device is engineered with precision, using
            materials that prioritize the planet’s well-being. Step into the
            future where technology harmonizes with nature.
          </div>
        </div>

        <div
          className={styles.image}
          style={{
            backgroundImage: `url(/images/headphones-background.webp)`,
          }}
        />
      </div>
    </div>
  );
}
