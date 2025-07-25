import React from "react";
import cn from "classnames";
import styles from "./shipping.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import { Dropdown, TextField } from "@/components/ui";
import CloseButton from "@/components/close-button";
import mock from "@/constants/mock";

export default function Shipping({
  countries = mock.countries,
  states = mock.states,
  onClose,
  className,
}) {
  return (
    <div className={cn(styles.body, className)}>
      <OutsideClickHandler onOutsideClick={onClose}>
        <div className={styles.content}>
          <div className={styles.head}>
            <div className={cn("subheading-medium", styles.title)}>
              Estimate shipping rates
            </div>

            <CloseButton onClose={onClose} />
          </div>

          <div className={styles.fields}>
            <Dropdown placeholder="Select country" options={countries} />
            <Dropdown placeholder="Select a state" options={states} />

            <TextField placeholder="Postal/ZIP code" />
          </div>

          <button className={cn("button", styles.button)} onClick={onClose}>
            Calculate
          </button>
        </div>
      </OutsideClickHandler>
    </div>
  );
}
