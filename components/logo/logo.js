import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./logo.module.css";

/**
 * Fixed-tile monogram: a bold "P" on a dark badge, with a single accent node
 * at the shoulder standing in for the "agent" in agentic AI. Same badge is
 * reused for the favicon, apple touch icon and OG image so the mark is
 * identical everywhere it appears, not redrawn per surface.
 */
export function LogoMark({ className }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="9" fill="var(--ink-950)" />
      <rect x="13" y="10" width="5" height="21" rx="2" fill="#ffffff" />
      <path d="M18 10C25 10 28 12.6 28 16.3C28 20 25 22.4 18 22.4Z" fill="#ffffff" />
      <circle cx="29" cy="12" r="3.2" fill="var(--accent-600)" />
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
