"use client";

import React from "react";
import cn from "classnames";
import styles from "./product-showcase.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

export default function ProductShowcase() {
  const [show, setShow] = React.useState(null);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: "url(/images/speaker-interior.webp)" }}
    >
      <div className={styles.wrapper}>
        <div
          className={cn(styles.content, {
            [styles.show]: show,
          })}
        >
          <div className={styles.product}>
            <img src="/images/white-speaker.webp" className={styles.image} />
            <div className={styles.heading}>
              <div className={cn("subheading-medium", styles.title)}>
                Tone Cube
              </div>
              <div className={cn("paragraph-small")}>$245.00</div>
            </div>
          </div>

          <div className={styles.icon}>{icons.PlayDown}</div>
        </div>

        <div className={styles.animated}>
          <Link
            className={styles.button}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href="/products/tone-cube"
          ></Link>
        </div>
      </div>
    </div>
  );
}
