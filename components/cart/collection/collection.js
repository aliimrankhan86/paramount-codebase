import React from "react";
import cn from "classnames";
import styles from "./collection.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

export default function Collection({ collection }) {
  return (
    <Link href={`/shop/${collection.slug}`} className={styles.collection}>
      <div className={styles.collection__group}>
        {renderIcon(collection.slug)}
        <div className={cn("paragraph-medium", styles.collection__text)}>
          {collection.title}
        </div>
      </div>

      {icons.ArrowRight}
    </Link>
  );
}

function renderIcon(slug) {
  switch (slug) {
    case "headphones":
      return icons.Headphones;
    case "lanterns":
      return icons.Lamp;
    case "speakers":
      return icons.Speaker;
    case "charging-stations":
      return icons.SafeBattery;
    default:
      return null;
  }
}
