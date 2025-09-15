import React from "react";
import { motion } from "framer-motion";
import styles from "./slide.module.css";
import cn from "classnames";
import icons from "@/constants/icons";
import Indicators from "@/components/indicators";
import Link from "next/link";

export default function Slide({
  slides,
  active,
  custom,
  setActive,
  prevSlide,
  nextSlide,
  variants,
  transition,
  onDragEnd,
}) {
  return (
    <motion.div
      custom={custom}
      className={styles.slide}
      variants={variants}
      transition={transition}
      initial="enter"
      animate="active"
      exit="exit"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={onDragEnd}
    >
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${slides[active].image})`,
        }}
      >
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div
              className={styles.textWrapper}
              style={{ alignSelf: "flex-start" }}
            >
              <div className={cn("hero", styles.title)}>
                {slides[active].title}
              </div>
              <div className={cn("paragraph-x-large", styles.subtitle)}>
                {slides[active].subtitle}
              </div>
            </div>
            <div className={styles.breakline} />
            <div className={styles.bottomWrapper}>
              <button className={styles.arrow} onClick={prevSlide}>
                {icons.ArrowLeft}
              </button>
              <Indicators
                indicators={slides}
                active={active}
                setActive={setActive}
                color={"var(--white)"}
                isHero={true}
              />
              <button className={styles.arrow} onClick={nextSlide}>
                {icons.ArrowRight}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
