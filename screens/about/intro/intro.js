import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import icons from "@/constants/icons";

export default function Intro() {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.icon}>{icons.Leaf}</div>
          <img
            className={styles.image}
            src="/images/stations.webp"
            alt="Inspired by nature"
          />
        </div>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>
            Inspired by nature
          </div>
          <div className={cn("paragraph-medium", styles.description)}>
            Discover our story of passion and innovation as we embarked on a
            mission to integrate sustainable practices into every facet of our
            operations.
          </div>

          <button className={cn("button", styles.button)}>
            Our History {icons.ArrowRight}{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
