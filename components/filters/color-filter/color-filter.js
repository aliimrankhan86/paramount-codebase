import React from "react";
import cn from "classnames";
import styles from "./color-filter.module.css";
import icons from "@/constants/icons";

export default function ColorFilter({
  options,
  title,
  selectedColors,
  handleSelectColor,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <button
        className={cn(styles.head, {
          [styles.open]: open,
        })}
        onClick={() => setOpen(!open)}
      >
        <div className={cn("label-medium", styles.title)}>{title}</div>

        {icons.ChevronDown}
      </button>

      {open && (
        <div className={styles.colors}>
          {options.map((option) => (
            <button
              key={option.id}
              className={cn(styles.button, {
                [styles.selected]: selectedColors.includes(option.value),
              })}
              onClick={() => handleSelectColor(option.value)}
            >
              <div
                key={option.id}
                className={styles.color}
                style={{ backgroundColor: option.color }}
              ></div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
