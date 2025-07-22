import React from "react";
import styles from "./collections-menu.module.css";
import cn from "classnames";
import Link from "next/link";
import mock from "@/constants/mock";

export default function CollectionsMenu({
  className,
  onMouseLeave,
  featured_collections = mock.featured_collections,
}) {
  return (
    <div
      className={cn(styles.collections_menu, className)}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.container}>
        {featured_collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/shop/${collection.slug}`}
            className={styles.collection}
            style={{ backgroundImage: `url(${collection.image})` }}
          >
            <div className={styles.overlay}>
              <div className={cn("subheading-medium", styles.title)}>
                {collection.title}
              </div>
              <div className={cn("paragraph-small", styles.subtitle)}>
                {collection.subtitle}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
