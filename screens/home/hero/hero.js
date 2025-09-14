"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Slide from "./slide";
import mock from "@/constants/mock";

export default function Hero({ slides = mock.slides }) {
  const [[active, direction], setActive] = React.useState([0, 0]);

  const variants = {
    enter: () => ({
      opacity: 0,
    }),
    active: {
      zIndex: 0,
      opacity: 1,
      transition: { opacity: { duration: 0.3 } },
    },
    exit: () => ({
      zIndex: 1,
      opacity: 0,
      transition: { opacity: { duration: 0.3 } },
    }),
  };

  const transition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  // Lower swipe threshold for better mobile/tablet/desktop consistency
  const swipeConfidenceThreshold = 5000;
  const swipePower = React.useCallback(
    (offset, velocity) => Math.abs(offset) * velocity,
    []
  );

  const changeSlide = React.useCallback((increment) => {
    setActive((current) => {
      const nextIndex = wrap(0, slides.length, current[0] + increment);
      return [nextIndex, increment];
    });
  }, []);

  const nextSlide = () => changeSlide(1);
  const prevSlide = () => changeSlide(-1);

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section id="home" className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <motion.div className={styles.slides}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <Slide
              key={`${active}-${direction}`}
              custom={direction}
              slides={slides}
              active={active}
              variants={variants}
              transition={transition}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide();
                }
              }}
              setActive={setActive}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
