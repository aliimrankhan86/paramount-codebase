import React from "react";
import styles from "./progress-bar.module.css";
import cn from "classnames";

export default function ProgressBar({ progress }) {
  return (
    <div className={styles.progress_bar}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  );
}
