"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import { Checkbox, TextField } from "@/components/ui";
import Link from "next/link";
import icons from "@/constants/icons";

export default function Hero() {
  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("hero", styles.title)}>Sign up</div>

          <form className={styles.form}>
            <div className={styles.wrapper}>
              <TextField label="Name" type="text" placeholder="Name" />
              <TextField label="Email" type="email" placeholder="Email" />
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
              />
            </div>

            <button
              type="button"
              onClick={toggleCheckbox}
              className={cn("paragraph-small", styles.text)}
            >
              <Checkbox isChecked={isChecked} /> Register to our newsletter
            </button>

            <div className={styles.btns}>
              <button className={cn("button", styles.button)}>Sign up</button>
              <Link
                href="/login"
                className={cn("button-stroke", styles.button)}
              >
                Sign in
              </Link>
            </div>
          </form>

          <Link href="/" className={cn("label-medium", styles.link)}>
            {icons.LeftRotation}
            <span>Return to Store</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
