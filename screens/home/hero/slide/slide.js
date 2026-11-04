import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import Link from "next/link";
import styles from "./slide.module.css";

const item = {
  enter: { opacity: 0, y: 18 },
  active: { opacity: 1, y: 0 },
};

export default function Slide({ slide, custom, variants, index, total }) {
  return (
    <motion.div
      custom={custom}
      className={cn(styles.slide, styles[`tone-${slide.tone}`])}
      variants={variants}
      initial="enter"
      animate="active"
      exit="exit"
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
    >
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <motion.div
        className={styles.content}
        variants={{ active: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }}
      >
        <motion.div
          variants={item}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={styles.eyebrow}
        >
          <span className={styles.pulse} aria-hidden="true" />
          {slide.eyebrow}
        </motion.div>

        <motion.h1
          variants={item}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={cn("hero", styles.title)}
        >
          {slide.title}
        </motion.h1>

        <motion.p
          variants={item}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={cn("paragraph-x-large", styles.subtitle)}
        >
          {slide.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={styles.actions}
        >
          <Link href="/contact" className={cn("button", "button-white")}>
            Start a conversation
          </Link>
          <Link href="/services" className={cn("button", "button-inverse-stroke")}>
            Explore services
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
