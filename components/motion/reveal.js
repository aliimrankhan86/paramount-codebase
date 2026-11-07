"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered fade/rise used across sections. Collapses to a plain
 * opacity fade when the visitor has reduced motion enabled.
 *
 * variant: "up" (default) | "fade" | "scale" | "left" | "right"
 *
 * priority: render the final state with no motion at all. Use it for anything
 * above the fold. A scroll reveal starts at opacity 0, so a hero wrapped in one
 * paints nothing until React hydrates — which is exactly what Largest
 * Contentful Paint measures, and it cost us seconds on first load.
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
  priority = false,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (priority) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

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
