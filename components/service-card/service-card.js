import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./service-card.module.css";
import icons from "@/constants/icons";

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link href={`/services/${service.slug}`} className={styles.card}>
      <div className={styles.iconWrap}>{icons[service.icon]}</div>
      <h3 className={cn("heading-6", styles.title)}>{service.title}</h3>
      <p className={cn("paragraph-small", styles.description)}>{service.shortDescription}</p>
      <span className={styles.link}>
        Learn more {icons.ArrowRight}
      </span>
    </Link>
  );
}
