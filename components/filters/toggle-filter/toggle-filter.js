import React from "react";
import cn from "classnames";
import styles from "./toggle-filter.module.css";
import { Toggle } from "@/components/ui";

export default function ToggleFilter({ title, toggle, handleToggle }) {
  return (
    <div className={styles.container}>
      <div className={cn("label-medium", styles.title)}>{title}</div>

      <Toggle isChecked={toggle} onChange={handleToggle} />
    </div>
  );
}
