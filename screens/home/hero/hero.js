"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Slide from "./slide";
import slides from "@/constants/hero";

export default function Hero() {
  const [[active, direction], setActive] = React.useState([0, 0]);
  const reduceMotion = useReducedMotion();

  const variants = {
    enter: { opacity: 0 },
    active: { zIndex: 0, opacity: 1, transition: { opacity: { duration: 0.5 } } },
    exit: { zIndex: 1, opacity: 0, transition: { opacity: { duration: 0.3 } } },
  };

  const changeSlide = React.useCallback((increment) => {
    setActive((current) => {
      const nextIndex = wrap(0, slides.length, current[0] + increment);
      return [nextIndex, increment];
    });
  }, []);

  const nextSlide = () => changeSlide(1);
  const prevSlide = () => changeSlide(-1);

  React.useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [active, reduceMotion]);

  return (
    <section className={cn("section", styles.section)} aria-roledescription="carousel" aria-label="Highlights">
      <div className={cn("container", styles.container)}>
        <div className={styles.slides}>
          <AnimatePresence initial={false} custom={direction}>
            <Slide
              key={active}
              slide={slides[active]}
              custom={direction}
              variants={variants}
              transition={{ opacity: { duration: 0.4 } }}
            />
          </AnimatePresence>
        </div>

        <div className={styles.controls}>
          <button className={styles.arrow} onClick={prevSlide} aria-label="Previous highlight">
            <ArrowIcon flipped />
          </button>
          <div className={styles.dots} role="tablist" aria-label="Choose highlight">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                role="tab"
                aria-selected={active === index}
                aria-label={`Highlight ${index + 1}: ${slide.title}`}
                className={cn(styles.dot, { [styles.activeDot]: active === index })}
                onClick={() => setActive([index, index > active ? 1 : -1])}
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={nextSlide} aria-label="Next highlight">
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ flipped }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={flipped ? { transform: "rotate(180deg)" } : undefined}>
      <path d="M4.75 12H19.25" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.75 6.75L19.25 12L13.75 17.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
