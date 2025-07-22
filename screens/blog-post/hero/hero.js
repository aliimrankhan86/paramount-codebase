import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import icons from "@/constants/icons";

export default function Hero({ post }) {
  return (
    <div
      className={cn("section", styles.section)}
      style={{
        backgroundImage: `url("${post.image}")`,
      }}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.wrapper}>
              <div
                className={cn("subheading-small", styles.tag)}
                style={{
                  backgroundColor: post.tagBackground,
                }}
              >
                {post.category}
              </div>

              <div className={cn("paragraph-small", styles.date)}>
                {icons.Calendar} {post.date}
              </div>
            </div>
            <div className={cn("hero", styles.title)}>{post.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
