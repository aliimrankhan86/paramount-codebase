import React from "react";
import cn from "classnames";
import styles from "./faq.module.css";
import icons from "@/constants/icons";

export default function Faq({
  question,
  answer,
  activeFaq,
  handleFaqClick,
  className,
}) {
  return (
    <div
      className={cn(styles.container, className, {
        [styles.active]: activeFaq,
      })}
      onClick={handleFaqClick}
    >
      <div className={styles.heading}>
        <div className={cn("subheading-medium", styles.question)}>
          {question}
        </div>

        {icons.Plus}
      </div>

      {activeFaq && (
        <div className={cn("paragraph-small", styles.answer)}>{answer}</div>
      )}
    </div>
  );
}
