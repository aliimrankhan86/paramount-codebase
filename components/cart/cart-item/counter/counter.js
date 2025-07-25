import React from "react";
import cn from "classnames";
import styles from "./counter.module.css";
import icons from "@/constants/icons";

export default function Counter({
  product,
  count,
  onIncrement,
  onDecrement,
  loading,
}) {
  return (
    <div className={styles.container}>
      <div className={cn("label-medium", styles.quantity)}>
        {loading ? <div className={styles.loading}></div> : count}
      </div>

      <div className={styles.buttons}>
        <button
          className={cn(styles.button, {
            [styles.disabled]: product.gift,
          })}
          onClick={onIncrement}
        >
          {icons.ChevronUp}
        </button>
        <button
          className={cn(styles.button, {
            [styles.disabled]: product.gift,
          })}
          onClick={onDecrement}
        >
          {icons.ChevronDown}
        </button>
      </div>
    </div>
  );
}
