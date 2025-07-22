import React from "react";
import cn from "classnames";
import styles from "./message.module.css";
import icons from "@/constants/icons";
import Indicators from "@/components/indicators";

export default function Message({ messages, active, setActive }) {
  return (
    <div className={styles.container}>
      {icons.Quotes}

      <div className={styles.heading}>
        <div className={cn("heading-4", styles.message)}>
          {messages[active].message}
        </div>
        <div className={cn("paragraph-x-large", styles.author)}>
          - {messages[active].author}
        </div>
      </div>

      <Indicators
        indicators={messages}
        active={active}
        setActive={setActive}
        color={"var(--black)"}
      />
    </div>
  );
}
