import React from "react";
import cn from "classnames";
import styles from "./value.module.css";
import icons from "@/constants/icons";

export default function Value({ image, title }) {
  return (
    <div
      className={cn(styles.container)}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.heading}>
        <div className={cn("heading-6", styles.title)}> {title}</div>
        <button className={styles.button}> {icons.Plus}</button>
      </div>
    </div>
  );
}
