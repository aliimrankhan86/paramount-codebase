import React from "react";
import cn from "classnames";
import styles from "./theme-feature.module.css";

export default function ThemeFeature({ image, title, subtitle }) {
  return (
    <div className={styles.container}>
      <img src={image} alt="Feature 1" className={styles.image} />
      <div className={styles.content}>
        <div className={cn("heading-6", styles.title)}>{title}</div>
        <div className={cn("paragraph-medium", styles.subtitle)}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}
