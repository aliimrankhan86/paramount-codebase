import React from "react";
import cn from "classnames";
import styles from "./order-note.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import { TextArea } from "@/components/ui";
import icons from "@/constants/icons";
import CloseButton from "@/components/close-button";

export default function OrderNote({ visible, onClose }) {
  return (
    <div className={cn(styles.body)}>
      <OutsideClickHandler onOutsideClick={onClose}>
        <div className={styles.content}>
          <div className={styles.head}>
            <div className={cn("subheading-medium", styles.title)}>
              Order special instructions
            </div>

            <CloseButton onClose={onClose} />
          </div>

          <TextArea placeholder="Order note" />

          <button className={cn("button", styles.button)} onClick={onClose}>
            Apply
          </button>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
