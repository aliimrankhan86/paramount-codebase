import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./breadcrumb.module.css";

/**
 * The one breadcrumb used across the site.
 *
 * `trail` is ordered from the root: every item except the last is a link, and the
 * last is the current page. Pass hrefs for the ancestors; the final item needs none.
 *
 *   <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: product.name }]} />
 */
export default function Breadcrumb({ trail = [], className }) {
  return (
    <nav className={cn(styles.breadcrumb, className)} aria-label="Breadcrumb">
      {trail.map((item, index) => {
        const isCurrent = index === trail.length - 1;

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {isCurrent || !item.href ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
