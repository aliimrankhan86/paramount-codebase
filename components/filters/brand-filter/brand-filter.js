import React from "react";
import cn from "classnames";
import styles from "./brand-filter.module.css";
import { Checkbox } from "@/components/ui";
import icons from "@/constants/icons";

export default function BrandFilter({
  options,
  title,
  selectedOptions,
  handleOptionChange,
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
        <div className={cn(styles.options)}>
          {options.map((option) => (
            <div
              key={option.id}
              className={cn("paragraph-small", styles.option)}
            >
              <Checkbox
                isChecked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionChange(option.id)}
              />
              {option.label} ({option.quantity})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
