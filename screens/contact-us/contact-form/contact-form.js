import React from "react";
import cn from "classnames";
import styles from "./contact-form.module.css";
import { Dropdown, TextArea, TextField } from "@/components/ui";
import Socials from "@/components/socials/socials";
import mock from "@/constants/mock";

export default function ContactForm({ options = mock.options }) {
  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <form className={styles.form}>
            <div className={styles.wrapper}>
              <TextField placeholder="Name" className={styles.textfield} />
              <TextField placeholder="Email" className={styles.textfield} />
            </div>

            <div className={styles.wrapper}>
              <TextField
                placeholder="Phone number"
                className={styles.textfield}
              />
              <Dropdown
                placeholder="Select an option"
                className={styles.dropdown}
                options={options}
              />
            </div>

            <TextArea placeholder="Your message" className={styles.textarea} />

            <button className={cn("button", styles.button)}>Submit</button>
          </form>

          <div className={cn("paragraph-medium", styles.protected)}>
            This site is protected by reCAPTCHA and the Google 
            <a className={styles.link}>Privacy Policy</a>
             and 
            <a className={styles.link}>Terms of Service</a>
             apply.
          </div>
        </div>
        <div className={styles.side_content}>
          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Address</div>
            <a className={cn("label-medium", styles.link)}>
              shop@yourstore.com
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Email</div>
            <a className={cn("label-medium", styles.link)}>
              contact@yourstore.com
            </a>
            <a className={cn("label-medium", styles.link)}>
              sales@yourstore.com
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Phone</div>
            <a className={cn("label-medium", styles.link)}>
              +33 (0) 31-305-210
            </a>
            <a className={cn("label-medium", styles.link)}>
              mon - fri: 09:00 - 17:00
            </a>
          </div>

          <div className={styles.block}>
            <div className={cn("paragraph-medium", styles.text)}>Follow us</div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
