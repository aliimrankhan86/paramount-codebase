import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import icons from "@/constants/icons";

export default function Intro() {
  return (
    <div className={cn("section")}>
      <div className={cn("", styles.container)}>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(/images/sliders/slider-1.webp)`,
          }}
        />

        <div className={styles.heading}>
          {icons.Headphones}
          <div className={cn("heading-3", styles.title)}>
            Innovate with Purpose
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Experience technology designed with the earth in mind. Our products
            are crafted to elevate your day-to-day while protecting the planet.
            Join us as we pave the path toward a sustainable future—one
            innovation at a time.
          </div>
        </div>
      </div>
    </div>
  );
}
