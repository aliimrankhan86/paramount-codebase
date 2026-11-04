import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./service-row.module.css";

export default function ServiceRow({ service, index = 0 }) {
  return (
    <Link href={`/services/${service.slug}`} className={styles.row}>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.shortDescription}</p>
      <span className={styles.arrow} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M6.5 17.5 17.5 6.5" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M8.5 6.5h9v9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
