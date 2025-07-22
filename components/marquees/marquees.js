"use client";

import React from "react";
import cn from "classnames";
import styles from "./marquees.module.css";
import Animation from "react-fast-marquee";
import icons from "@/constants/icons";

export default function Marquees() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={styles.container}>
        <div className={styles.yellow}>
          <Animation
            gradient={false}
            speed={70}
            pauseOnHover={true}
            autoFill={false}
            direction="right"
          >
            <div className={styles.logos}>
              {icons.MoveSpring}
              {icons.Catch}
              {icons.Glossier}
              {icons.Mural}
            </div>
          </Animation>
        </div>

        <div className={styles.gray}>
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
