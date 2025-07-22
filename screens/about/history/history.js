"use client";

import React from "react";
import cn from "classnames";
import styles from "./history.module.css";
import icons from "@/constants/icons";
import mock from "@/constants/mock";

export default function History({ timeline = mock.timeline }) {
  const [historyIndex, setHistoryIndex] = React.useState(0);

  const skipToHistory = (index) => {
    setHistoryIndex(index);
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>Our history</div>

          <div className={styles.btns}>
            <button
              className={cn("button-circle-stroke", styles.button, {
                [styles.disabled]: historyIndex === 0,
              })}
              onClick={() => setHistoryIndex(historyIndex - 1)}
            >
              {icons.ChevronLeft}
            </button>
            <button
              className={cn("button-circle-stroke", styles.button, {
                [styles.disabled]: historyIndex === timeline.length - 1,
              })}
              onClick={() => setHistoryIndex(historyIndex + 1)}
            >
              {icons.ChevronRight}
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${timeline[historyIndex].image})`,
            }}
          />
          <div className={styles.wrapper}>
            <div className={cn("paragraph-medium", styles.text)}>
              {timeline[historyIndex].year}
            </div>
            <div className={cn("heading-5", styles.subject)}>
              {timeline[historyIndex].subject}
            </div>
            <div className={cn("paragraph-medium", styles.description)}>
              {timeline[historyIndex].description}
            </div>
          </div>
        </div>

        <div className={styles.years}>
          {timeline.map((entry, index) => (
            <>
              <button
                key={entry.year}
                className={cn("subheading-x-large", styles.year, {
                  [styles.active]: index === historyIndex,
                })}
                onClick={() => skipToHistory(index)}
              >
                {entry.year}
              </button>

              {index < timeline.length - 1 && (
                <div className={styles.divider} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
