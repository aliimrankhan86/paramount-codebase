"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered fade/rise used across sections. Collapses to a plain
 * opacity fade when the visitor has reduced motion enabled.
 *
 * variant: "up" (default) | "fade" | "scale" | "left" | "right"
 */
export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  y = 24,
  once = true,
  variant = "up",
  amount = 0.2,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const hidden = {
    up: { opacity: 0, y: reduceMotion ? 0 : y },
    fade: { opacity: 0 },
    scale: { opacity: 0, scale: reduceMotion ? 1 : 0.96, y: reduceMotion ? 0 : y * 0.5 },
    left: { opacity: 0, x: reduceMotion ? 0 : -32 },
    right: { opacity: 0, x: reduceMotion ? 0 : 32 },
  }[variant] || { opacity: 0, y: reduceMotion ? 0 : y };

  return (
    <Component
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount, margin: "-60px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
