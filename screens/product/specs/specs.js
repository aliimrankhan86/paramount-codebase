"use client";

import React from "react";
import cn from "classnames";
import styles from "./specs.module.css";
import Spec from "./spec";
import Accessory from "./accessory";
import mock from "@/constants/mock";

export default function Specs({
  accesories = mock.accesories,
  specs = mock.specs,
}) {
  const [active, setActive] = React.useState(null);

  const toggleSpec = (id) => {
    setActive((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>Tech specs</div>

          <div className={styles.specs}>
            {specs.map((spec, index) => (
              <Spec
                key={spec.id}
                {...spec}
                isOpen={active === spec.id}
                onToggle={() => toggleSpec(spec.id)}
                className={styles.spec}
              />
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={cn("heading-6", styles.text)}>What’s in the Box</div>

          <div className={styles.accesories}>
            {accesories.map((accesory) => (
              <Accessory key={accesory.id} {...accesory} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
