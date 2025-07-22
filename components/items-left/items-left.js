import React from "react";
import styles from "./items-left.module.css";
import cn from "classnames";

export default function ItemsLeft({ quantity }) {
  return (
    <div>
      <div className={cn("paragraph-small", styles.title)}>
        Hurry, only <span>{quantity}</span> items left in stock!
      </div>

      <div className={styles.progress_bar}>
        <div className={styles.progress} />
      </div>
    </div>
  );
}
