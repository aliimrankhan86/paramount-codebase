import React from "react";
import cn from "classnames";
import styles from "./featured-post.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

export default function FeaturedPost({
  image,
  title,
  description,
  tag,
  tagBackground,
  date,
  comments,
  slug,
}) {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.overlay}>
        <div
          className={cn("subheading-small", styles.tag)}
          style={{
            backgroundColor: tagBackground,
          }}
        >
          {tag}
        </div>

        <div className={styles.content}>
          <div className={styles.row}>
            <div className={cn("paragraph-small", styles.date)}>
              {icons.Calendar} {date}
            </div>

            <div className={styles.divider} />
            <div className={cn("paragraph-small", styles.comments)}>
              {icons.Message}
              {comments} comments
            </div>
          </div>

          <div className={styles.heading}>
            <div className={cn("heading-3", styles.title)}>{title}</div>
            <div className={cn("paragraph-medium", styles.description)}>
              {description}
            </div>
          </div>

          <Link
            href={`/posts/${slug}`}
            className={cn("label-medium", styles.button)}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
