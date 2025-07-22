"use client";

import React from "react";
import cn from "classnames";
import styles from "./product-card.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

export default function ProductCard({
  thumbnail,
  tag,
  tagBackground,
  ratings,
  brand,
  title,
  color,
  price,
  slug,
  className,
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className={cn(styles.container, className)}
      style={{
        backgroundImage: `url(${thumbnail})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <div
            className={cn("subheading-small", styles.tag)}
            style={{
              backgroundColor: `${tagBackground}`,
              color: "var(--white)",
            }}
          >
            {tag}
          </div>

          <div className={cn("paragraph-small", styles.ratings)}>
            {icons.Star}
            {ratings ? ratings.toFixed(1) : "N/A"}
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div className={cn("paragraph-small", styles.brand)}>{brand}</div>
            <div className={cn("subheading-medium", styles.title)}>{title}</div>
            <div
              className={styles.color}
              style={{
                backgroundColor: color,
              }}
            />
          </div>

          <div className={cn("paragraph-medium", styles.price)}>${price}</div>
        </div>
      </div>

      <button className={cn(styles.button)}>{icons.Eye}</button>
    </Link>
  );
}
