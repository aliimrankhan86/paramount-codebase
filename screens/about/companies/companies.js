"use client";

import React from "react";
import cn from "classnames";
import styles from "./companies.module.css";
import Animation from "react-fast-marquee";
import icons from "@/constants/icons";

export default function Companies() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={cn("paragraph-medium", styles.text)}>
            Our partners
          </div>
          <div className={cn("heading-3", styles.title)}>
            Empowering connections
          </div>
        </div>

        <div className={styles.marquee}>
          <Animation
            gradient={false}
            speed={70}
            pauseOnHover={true}
            autoFill={false}
            direction="left"
          >
            <div className={styles.logos}>
              {icons.MoveSpring}
              {icons.Catch}
              {icons.Glossier}
              {icons.Mural}
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
}
