import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import Link from "next/link";
import styles from "./slide.module.css";

const item = {
  enter: { opacity: 0, y: 14 },
  active: { opacity: 1, y: 0 },
};

export default function Slide({ slide, custom, variants, transition }) {
  return (
    <motion.div
      custom={custom}
      className={cn(styles.slide, styles[`tone-${slide.tone}`])}
      variants={variants}
      transition={transition}
      initial="enter"
      animate="active"
      exit="exit"
    >
      <div className={styles.mesh} aria-hidden="true" />
      <motion.div
        className={styles.content}
        variants={{ active: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
      >
        <motion.div
          variants={item}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn("eyebrow", styles.eyebrow)}
        >
          {slide.eyebrow}
        </motion.div>
        <motion.h1
          variants={item}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn("hero", styles.title)}
        >
          {slide.title}
        </motion.h1>
        <motion.p
          variants={item}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn("paragraph-x-large", styles.subtitle)}
        >
          {slide.subtitle}
        </motion.p>
        <motion.div
          variants={item}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={styles.actions}
        >
          <Link href="/contact" className={cn("button", "button-white")}>
            Start a conversation
          </Link>
          <Link href="/services" className={cn("button", "button-stroke", styles.secondaryAction)}>
            Explore services
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
