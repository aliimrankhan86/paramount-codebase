import React from "react";
import cn from "classnames";
import styles from "./hero-slider.module.css";
import icons from "@/constants/icons";

export default function HeroSlider() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.heading}>
            {icons.VideoSlide}
            <div className={cn("heading-3", styles.title)}>Hero slider</div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              Showcase your top products with our Hero Slider, perfect for
              making a striking first impression.
            </div>
          </div>

          <img
            src="/theme-features/hero-slide.webp"
            alt="Responsive design"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
