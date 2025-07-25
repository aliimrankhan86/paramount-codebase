import React from "react";
import cn from "classnames";
import styles from "./subscribe.module.css";
import Modal from "../modal";
import Socials from "../socials/socials";
import SubscribeForm from "../subscribe-form";
import { TextField } from "../ui";
import icons from "@/constants/icons";

export default function Subscribe({ visible, handleClose }) {
  return (
    <Modal visible={visible} onClose={handleClose} className={styles.modal}>
      <div className={cn(styles.container)}>
        <img
          src="/images/sliders/slider-1.webp"
          alt="Subscribe to our newsletter"
          className={styles.image}
        />

        <div className={styles.heading}>
          <div className={cn("paragraph-medium", styles.text)}>
            Welcome bonus
          </div>
          <div className={cn("heading-6", styles.title)}>
            Subscribe for an instant 20% welcome bonus!
          </div>

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

            <div className={cn("paragraph-x-small", styles.text)}>
              By subscribing, you agree to our responsible data use.
            </div>
          </form>

          <Socials className={styles.socials} />
        </div>
      </div>
    </Modal>
  );
}
