import React from "react";
import cn from "classnames";
import styles from "./price-filter.module.css";
import icons from "@/constants/icons";
import { Range } from "@/components/ui";

export default function PriceFilter({
  title,
  min,
  max,
  step,
  unit,
  value,
  handleRangeChange,
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
        <div className={styles.content}>
          <Range
            value={value}
            min={min}
            max={max}
            step={step}
            className={styles.range}
            onChange={handleRangeChange}
          />

          <div className={styles.values}>
            <div className={cn("body", styles.value)}>
              <div className={cn("label-medium", styles.unit)}>{unit}</div>

              <input
                placeholder={min}
                className={cn("label-medium", styles.input)}
              />
            </div>

            <div className={cn("paragraph-medium")}>to</div>
            <div className={cn("body", styles.value)}>
              <div className={cn("label-medium", styles.unit)}>{unit}</div>

              <input
                placeholder={max}
                value={value}
                onChange={handleRangeChange}
                className={cn("label-medium", styles.input)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
