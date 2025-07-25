import React from "react";
import cn from "classnames";
import styles from "./ratings.module.css";

export default function Ratings({ stars }) {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>{stars}</div>
      <div className={cn("paragraph-small")}>5.0</div>
    </div>
  );
}
