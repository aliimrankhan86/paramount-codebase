"use client";

import React from "react";
import cn from "classnames";
import styles from "./float-button.module.css";
import icons from "@/constants/icons";
import Modal from "../modal";
import Filters from "../filters";

export default function PurchaseButton() {
  const [filters, setFilters] = React.useState(false);

  const onClose = () => {
    setFilters(false);
  };

  return (
    <>
      <div className={styles.container}>
        <button
          className={cn("button", styles.button)}
          onClick={() => setFilters(true)}
        >
          {icons.Filter} Filter and sort
        </button>
      </div>

      {filters && (
        <Modal
          visible={filters}
          onClose={() => setFilters(false)}
          className={styles.modal}
        >
          <Filters onClose={onClose} />
        </Modal>
      )}
    </>
  );
}
