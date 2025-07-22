import React from "react";
import cn from "classnames";
import styles from "./accessory.module.css";

export default function Accessory({ icon, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={cn("paragraph-medium", styles.title)}>{title}</div>
    </div>
  );
}
