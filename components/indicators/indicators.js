import React from "react";
import cn from "classnames";
import styles from "./indicators.module.css";

export default function Indicators({ indicators, active, setActive, color }) {
  return (
    <div className={styles.container}>
      {indicators.map((review, index) => (
        <div
          key={index}
          className={cn(styles.indicator, {
            [styles.active]: active === index,
          })}
          style={{
            background: active === index ? color : "transparent",
            borderColor: active === index ? color : "var(--slate-300)",
          }}
          onClick={() => setActive(index)}
        />
      ))}
    </div>
  );
}
