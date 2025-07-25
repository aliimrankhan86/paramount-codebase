"use client";

import React from "react";
import cn from "classnames";
import styles from "./modal.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  visible,
  onClose,
  className,
  outerClassName,
}) {
  React.useEffect(() => {
    if (visible) {
      document.body.classList.add(styles.no_scroll);
    } else {
      document.body.classList.remove(styles.no_scroll);
    }

    return () => {
      document.body.classList.remove(styles.no_scroll);
    };
  }, [visible]);

  return createPortal(
    visible && (
      <div className={cn(styles.modal, className)}>
        <div className={cn(styles.outer, outerClassName)}>
          <OutsideClickHandler onOutsideClick={onClose}>
            {children}
          </OutsideClickHandler>
        </div>
      </div>
    ),
    document.body
  );
}
