import React from "react";
import cn from "classnames";
import styles from "./intro.module.css";
import Link from "next/link";

export default function Intro() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={cn("hero", styles.title)}>Go Pocket</div>
            <div className={cn("paragraph-x-large", styles.subtitle)}>
              Compact power, pure and simple.
            </div>
            <Link
              href="/products/terra-tunes"
              className={cn("button", styles.button)}
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
