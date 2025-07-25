"use client";

import React from "react";
import cn from "classnames";
import styles from "./reviews.module.css";
import Review from "./review";
import mock from "@/constants/mock";

export default function Reviews({ reviews = mock.reviews }) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="reviews" className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.overlay}>
          <Review reviews={reviews} active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}
