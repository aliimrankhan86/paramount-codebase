import React from "react";
import cn from "classnames";
import styles from "./empty-cart.module.css";
import Collection from "../collection";

export default function EmptyCart({ filteredCollections }) {
  return (
    <div className={styles.empty}>
      <div className={styles.content}>
        <div className={cn("heading-5", styles.text)}>Cart is empty</div>
        <div className={cn("paragraph-medium", styles.subtitle)}>
          Not sure where to start? <br /> Try these collections:
        </div>

        <div className={styles.collections}>
          {filteredCollections.map((collection) => (
            <Collection key={collection.slug} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
}
