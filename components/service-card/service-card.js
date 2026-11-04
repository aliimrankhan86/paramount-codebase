import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./service-card.module.css";
import icons from "@/constants/icons";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link href={`/services/${service.slug}`} className={styles.card}>
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.top}>
        <span className={styles.iconWrap}>{icons[service.icon]}</span>
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className={cn("heading-6", styles.title)}>{service.title}</h3>
      <p className={cn("paragraph-small", styles.description)}>{service.shortDescription}</p>

      <span className={styles.link}>
        Learn more
        <span className={styles.arrow}>{icons.ArrowRight}</span>
      </span>
    </Link>
  );
}
