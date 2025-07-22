import React from "react";
import cn from "classnames";
import styles from "./feature.module.css";

export default function Feature({ image, title, subtitle, className }) {
  return (
    <div
      className={cn(styles.feature, className)}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={cn("paragraph-medium")}>{title}</div>
        <div className={cn("heading-5")}>{subtitle}</div>
      </div>
    </div>
  );
}
