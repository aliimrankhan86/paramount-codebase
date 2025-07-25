import React from "react";
import cn from "classnames";
import styles from "./form.module.css";
import { TextArea, TextField } from "@/components/ui";

export default function Form({ className }) {
  return (
    <form className={cn(styles.container, className)}>
      <TextField label="Name" placeholder="Name" />
      <TextField label="Name" placeholder="Email" />
      <TextArea label="Name" placeholder="Message" />
      <button className={cn("button", styles.button)}>Send message</button>
    </form>
  );
}
