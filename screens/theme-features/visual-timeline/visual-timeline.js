import React from "react";
import cn from "classnames";
import styles from "./visual-timeline.module.css";
import icons from "@/constants/icons";

export default function VisualTimeline() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <img
            src="/theme-features/visual-timeline.webp"
            alt="Responsive design"
            className={styles.image}
          />

          <div className={styles.heading}>
            {icons.Time}
            <div className={cn("heading-3", styles.title)}>Visual timeline</div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              Capture your journey visually with our timeline feature, bringing
              milestones and events to life in a compelling way.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
