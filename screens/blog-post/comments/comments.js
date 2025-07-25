import React from "react";
import cn from "classnames";
import styles from "./comments.module.css";
import Share from "@/components/share";
import icons from "@/constants/icons";
import { TextArea, TextField } from "@/components/ui";

export default function Comments({ post }) {
  return (
    <div className={cn("section", styles.section)}>
      <div className={"container"}>
        <div className={styles.head}>
          <Share />

          <div className={cn("paragraph-small", styles.comments)}>
            {icons.Message} {post.comments} comments
          </div>
        </div>

        <div className={styles.form}>
          <div>
            <div className={cn("heading-5", styles.title)}>Leave a comment</div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              Please note, comments need to be approved before they are
              published.
            </div>
          </div>

          <div className={styles.fields}>
            <div className={styles.wrapper}>
              <TextField placeholder="Your name" />
              <TextField placeholder="Your email" />
            </div>

            <TextArea placeholder="Your comment" />
          </div>

          <button className={cn("button", styles.button)}>Post comment</button>
          <div className={cn("label-small", styles.text)}>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and <span>Terms of Service</span> apply.
          </div>
        </div>
      </div>
    </div>
  );
}
