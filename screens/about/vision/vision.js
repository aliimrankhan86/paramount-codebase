"use client";

import React from "react";
import cn from "classnames";
import styles from "./vision.module.css";
import mock from "@/constants/mock";
import Message from "./message";

export default function Vision({ messages = mock.messages }) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((current) => (current + 1) % messages.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Message messages={messages} active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
}
