import React from "react";
import cn from "classnames";
import styles from "./search-item.module.css";
import Link from "next/link";

export default function SearchItem({ product }) {
  return (
    <div key={product.id} className={styles.product}>
      <Link href={`/products/${product.slug}`}>
        <img src={product.thumbnail} className={styles.image} />
      </Link>
      <div className={styles.heading}>
        <div className={cn("paragraph-small", styles.brand)}>
          {product.brand}
        </div>
        <Link
          href={`/products/${product.slug}`}
          className={cn("subheading-medium", styles.link)}
        >
          {product.title}
        </Link>
        <div className={cn("paragraph-small")}>{product.price} USD</div>
      </div>
    </div>
  );
}
