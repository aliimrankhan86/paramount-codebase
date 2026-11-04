import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./logo.module.css";

/**
 * Monogram: a bold "P" on an ink tile with one cobalt node at the shoulder,
 * standing in for the agent in agentic AI. The same badge is reused for the
 * favicon, apple touch icon and OG image.
 */
export function LogoMark({ className }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="4" fill="var(--ink-950)" />
      <rect x="13" y="10" width="4.6" height="21" rx="1.4" fill="var(--paper)" />
      <path d="M17.6 10C24.6 10 27.6 12.6 27.6 16.3C27.6 20 24.6 22.4 17.6 22.4Z" fill="var(--paper)" />
      <circle cx="28.8" cy="12" r="3" fill="var(--accent-600)" />
    </svg>
  );
}

export default function Logo({ withWordmark = true, className, href = "/" }) {
  return (
    <Link href={href} className={cn(styles.logo, className)} aria-label="Paramount Consultants, home">
      <LogoMark className={styles.mark} />
      {withWordmark && (
        <span className={styles.wordmark}>
          <span className={styles.name}>Paramount</span>
          <span className={styles.suffix}>Consultants</span>
        </span>
      )}
    </Link>
  );
}
