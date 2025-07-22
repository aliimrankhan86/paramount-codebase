import React from "react";
import cn from "classnames";
import styles from "./checkbox.module.css";
import icons from "@/constants/icons";

export default function Checkbox({ isChecked, onChange, className }) {
  return (
    <button
      type="button"
      className={cn(styles.checkbox, className, {
        [styles.checked]: isChecked,
      })}
      onClick={onChange}
    >
      {icons.Checkmark}
    </button>
  );
}
