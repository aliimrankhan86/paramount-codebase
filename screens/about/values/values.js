import React from "react";
import cn from "classnames";
import styles from "./values.module.css";
import Value from "./value";
import mock from "@/constants/mock";

export default function Values({ values = mock.values }) {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.heading}>
          <div className={cn("label-medium", styles.text)}>Our values</div>
          <div className={cn("heading-3", styles.title)}>Rooted in respect</div>
          <div className={cn("paragraph-medium", styles.description)}>
            Our values are inspired by the enduring beauty of nature. We commit
            to sustainability, innovation, and the responsible use of natural
            resources, ensuring our products promote environmental stewardship
            and continuous positive impact.
          </div>
        </div>

        <div className={styles.values}>
          {values.map((value) => (
            <Value key={value.id} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
}
