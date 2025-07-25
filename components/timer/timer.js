"use client";

import React from "react";
import cn from "classnames";
import styles from "./timer.module.css";

export default function Timer() {
  const initialTime = 10 * 60 * 60;
  const [secondsLeft, setSecondsLeft] = React.useState(initialTime);

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return { hours, minutes, seconds: secondsRemaining };
  }

  React.useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [secondsLeft]);

  const { hours, minutes, seconds } = formatTime(secondsLeft);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={cn("hero", styles.title)}>{hours.toString()}</div>
        <div className={cn("subheading-x-small", styles.text)}>Hours</div>
      </div>

      <span className={cn("heading-5", styles.columns)}>:</span>
      <div className={styles.block}>
        <div className={cn("hero", styles.title)}>{minutes.toString()}</div>
        <div className={cn("subheading-x-small", styles.text)}>Mins</div>
      </div>
      <span className={cn("heading-5", styles.columns)}>:</span>
      <div className={styles.block}>
        <div className={cn("hero", styles.title)}>{seconds.toString()}</div>
        <div className={cn("subheading-x-small", styles.text)}>Secs</div>
      </div>
    </div>
  );
}
