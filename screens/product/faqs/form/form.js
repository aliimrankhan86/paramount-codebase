import React from "react";
import cn from "classnames";
import styles from "./form.module.css";
import { TextArea, TextField } from "@/components/ui";

export default function Form({ className }) {
  return (
    <form className={cn(styles.container, className)}>
      <TextField label="Name" placeholder="Name" className={styles.textfield} />
      <TextField
        label="Name"
        placeholder="Email"
        className={styles.textfield}
      />
      <TextArea
        label="Name"
        placeholder="Message"
        className={styles.textarea}
      />
      <button className={cn("button-stroke", styles.button)}>
        Send message
      </button>
    </form>
  );
}
