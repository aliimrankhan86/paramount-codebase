import React from "react";
import cn from "classnames";
import styles from "./features.module.css";
import icons from "@/constants/icons";
import Feature from "@/components/feature";

const features = [
  {
    id: 1,
    image: "/images/materials.webp",
    title: "Sustainable materials",
    subtitle: "Crafted from nature",
  },
  {
    id: 2,
    image: "/images/sliders/slider-1.webp",
    title: "Crystal-clear audio",
    subtitle: "Pristine sound",
  },
  {
    id: 3,
    image: "/images/eco-tunes-case.webp",
    title: "Eco-comfort design",
    subtitle: "Lightweight, breathable",
  },
  {
    id: 4,
    image: "/images/battery.webp",
    title: "Long-lasting battery",
    subtitle: "Play all day",
  },
];

export default function Features() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>
            Hear the future, save the planet.
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Designed for enduring comfort and minimal ecological impact, immerse
            yourself in the purest audio experience that aligns with your
            values.
          </div>
          <button className={cn("button-stroke", styles.button)}>
            View specs {icons.ArrowRight}
          </button>
        </div>

        <div className={styles.features}>
          {features.map((feature) => (
            <Feature key={feature.id} {...feature} className={styles.feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
