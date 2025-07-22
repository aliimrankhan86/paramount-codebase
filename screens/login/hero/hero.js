import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import { TextField } from "@/components/ui";
import Link from "next/link";
import icons from "@/constants/icons";

export default function Hero() {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={cn("hero", styles.title)}>Login</div>

          <form className={styles.form}>
            <div className={styles.wrapper}>
              <TextField label="Email" type="email" placeholder="Email" />
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
              />
            </div>

            <Link href="/" className={cn("label-medium", styles.text)}>
              Forgot password?
            </Link>

            <div className={styles.btns}>
              <button className={cn("button", styles.button)}>Sign in</button>
              <Link
                href="/signup"
                className={cn("button-stroke", styles.button)}
              >
                Sign up
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
