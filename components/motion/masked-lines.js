"use client";

import React from "react";
import cn from "classnames";
import { motion, useInView, useReducedMotion } from "framer-motion";
import styles from "./masked-lines.module.css";

/**
 * Line-by-line mask reveal for display headings only.
 *
 * Every other block on the page fades; headings rise out of their own line box,
 * which is how print-to-web editorial layouts usually do it. Each line must be
 * authored explicitly (no runtime measurement), so the line breaks stay under
 * design control and the heading never reflows mid-animation.
 *
 * The intersection observer sits on the heading element, not on the animated
 * line: the line starts translated outside an `overflow: hidden` mask, so
 * observing it directly would report zero intersection and never fire.
 *
 * `lines` accepts strings or React nodes, so an <em> can sit inside a line.
 * Reduced motion, and no-JS (via the <noscript> reset in app/layout.js), render
 * the final state with no transform.
 */
export default function MaskedLines({
  lines,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.09,
  once = true,
  priority = false,
  ...rest
}) {
  const ref = React.useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once, amount: "some", margin: "0px 0px -10% 0px" });
  const show = reduceMotion || inView;

  // Above the fold: render the finished lines immediately. The mask clips the
  // line until the observer fires, so an animated hero heading is invisible
  // until hydration and pushes Largest Contentful Paint out by seconds.
  if (priority) {
    return (
      <Tag ref={ref} className={cn(styles.heading, className)} {...rest}>
        {lines.map((line, index) => (
          <span className={styles.mask} key={index}>
            <span data-mask-line className={styles.line}>
              {line}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={cn(styles.heading, className)} {...rest}>
      {lines.map((line, index) => (
        <span className={styles.mask} key={index}>
          <motion.span
            data-mask-line
            className={styles.line}
            initial={false}
            animate={{ y: show ? "0%" : "112%" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.95,
                    delay: delay + index * stagger,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
