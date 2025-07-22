import React from "react";
import cn from "classnames";
import styles from "./subscribe-form.module.css";
import icons from "@/constants/icons";
import { TextField } from "@/components/ui";

export default function SubscribeForm({ text }) {
  return (
    <form className={styles.form}>
      <div className={styles.content}>
        <TextField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className={styles.textfield}
        />
        <button className={styles.button}>{icons.ArrowRight}</button>
      </div>

      <div className={cn("paragraph-x-small", styles.text)}>{text}</div>
    </form>
  );
}
