"use client";

import React from "react";
import cn from "classnames";
import styles from "./compare-slider.module.css";
import icons from "@/constants/icons";

export default function CompareSlider() {
  const [position, setPosition] = React.useState(50);
  const compareRef = React.useRef(null);
  const isDragging = React.useRef(false);

  const handleMouseMove = (event) => {
    const rect = compareRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    setPosition((x / rect.width) * 100);
  };

  const updatePosition = (event) => {
    if (isDragging.current && compareRef.current) {
      const rect = compareRef.current.getBoundingClientRect();
      const x =
        (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
      setPosition((x / rect.width) * 100);
    }
  };

  const startDrag = (e) => {
    isDragging.current = true;
    updatePosition(e);
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", updatePosition, { passive: false });
    document.addEventListener("touchend", stopDrag);
  };

  const stopDrag = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", updatePosition);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", updatePosition);
    document.removeEventListener("touchend", stopDrag);
  };

  return (
    <div
      ref={compareRef}
      className={styles.container}
      //   onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition(50)}
      style={{
        backgroundImage: `url(/images/white-portable.webp)`,
      }}
    >
      <div
        style={{
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
          backgroundImage: `url(/images/orange-portable.webp)`,
        }}
        className={styles.image}
      >
        <div className={cn("paragraph-medium", styles.subtitle)}>
          Power Bloom
        </div>
        <div className={cn("heading-3", styles.title)}>Orange</div>
      </div>

      <div className={cn("paragraph-medium", styles.subtitle)}>Power Bloom</div>
      <div className={cn("heading-3", styles.title)}>White</div>

      <div
        className={styles.slider}
        style={{ left: `${position}%` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <button className={styles.button}>{icons.HorizontalArrows}</button>
      </div>
    </div>
  );
}
