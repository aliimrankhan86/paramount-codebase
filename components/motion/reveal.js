"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered fade/rise used across sections. Collapses to a plain
 * opacity fade when the visitor has reduced motion enabled.
 */
export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 24,
  once = true,
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
