"use client";

import React from "react";
import { useInView, useReducedMotion } from "framer-motion";
import styles from "./stat-counter.module.css";

/**
 * Renders the final value on the server, then counts up once when scrolled into
 * view. Reduced-motion visitors and no-JS readers always get the real number.
 */
export default function StatCounter({ value, suffix = "", label, delay = 0 }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(value);

  React.useEffect(() => {
    if (!inView || reduceMotion) {
      if (inView) setDisplay(value);
      return;
    }

    let frame;
    let first = true;
    const start = performance.now();
    const duration = 900;
    const delayMs = delay * 1000;

    const tick = (now) => {
      if (first) {
        first = false;
        setDisplay(0);
      }
      const elapsed = now - start - delayMs;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value, delay]);

  return (
    <div ref={ref} className={styles.stat}>
      <div className={styles.value}>
        {display}
        {suffix}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
