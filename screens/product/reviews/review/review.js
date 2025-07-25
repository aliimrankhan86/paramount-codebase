import React from "react";
import cn from "classnames";
import styles from "./review.module.css";
import icons from "@/constants/icons";

export default function Review({ subject, name, date, rating, content }) {
  const stars = Array(rating).fill(icons.Star);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div>
          <div className={cn("heading-6", styles.subject)}>{subject}</div>

          <div className={cn("paragraph-small", styles.date)}>
            {name} on {date}
          </div>
        </div>

        <div className={styles.ratings}>
          {stars.map((Star, index) => (
            <span key={index}>{Star}</span>
          ))}
        </div>
      </div>

      <div className={cn("paragraph-medium", styles.content)}>{content}</div>
      <button className={cn("label-medium", styles.button)}>
        Report as Inappropriate
      </button>
    </div>
  );
}
