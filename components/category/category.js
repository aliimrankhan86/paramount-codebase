import React from "react";
import cn from "classnames";
import styles from "./category.module.css";
import Link from "next/link";
import icons from "@/constants/icons";

export default function Category({
  title,
  subtitle,
  quantiy,
  image,
  className,
  slug,
  index,
}) {
  // Only show the image for the first four categories
  if (index === 0 || index === 1 || index === 2 || index === 3) {
    return (
      <div
        className={cn(styles.container, className)}
        style={{ backgroundImage: `url(${image})` }}
      />
    );
  }
  return (
    <Link
      href={`/shop/${slug}`}
      className={cn(styles.container, className)}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={cn("heading-small", styles.heading)}>
          <div className={cn("subheading-medium", styles.title)}>{title}</div>
          <div className={cn("paragraph-x-small", styles.quantity)}>
            {quantiy}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={cn("paragraph-small", styles.subtitle)}>
            {subtitle}
          </div>

          {icons.ArrowRight}
        </div>
      </div>
    </Link>
  );
}
