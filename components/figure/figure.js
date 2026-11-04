import React from "react";
import cn from "classnames";
import Image from "next/image";
import styles from "./figure.module.css";

/**
 * The one image frame used across the site.
 *
 * Every photograph sits in the same hairline frame with the same index tile and
 * the same two-part caption, so a new image can be dropped in without redesigning
 * the surrounding layout. Pass `src`/`alt` to render a picture, or omit them and
 * the frame renders as a ruled placeholder at the correct aspect ratio.
 *
 * ratio: any CSS aspect-ratio value, e.g. "4 / 5", "3 / 2", "16 / 9".
 * tone:  "paper" (default) | "ink" | "accent"
 */
export default function Figure({
  src,
  alt,
  caption,
  note,
  index,
  ratio = "4 / 5",
  tone = "paper",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 40vw",
  className,
  imageClassName,
}) {
  return (
    <figure className={cn(styles.figure, styles[tone], className)}>
      <div className={styles.frame} style={{ "--ratio": ratio }}>
        {src ? (
          <Image
            src={src}
            alt={alt || ""}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(styles.image, imageClassName)}
          />
        ) : (
          <span className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderMark} />
          </span>
        )}

        {index ? (
          <span className={styles.index} aria-hidden="true">
            {index}
          </span>
        ) : null}
      </div>

      {caption || note ? (
        <figcaption className={styles.caption}>
          {caption ? <span>{caption}</span> : <span />}
          {note ? <span>{note}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
