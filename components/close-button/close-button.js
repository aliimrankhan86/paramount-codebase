import React from "react";
import cn from "classnames";
import styles from "./close-button.module.css";
import icons from "@/constants/icons";

export default function CloseButton({ onClose }) {
  return (
    <button className={styles.close} onClick={onClose}>
      {icons.Close}
    </button>
  );
}
