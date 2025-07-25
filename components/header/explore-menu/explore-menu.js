import React from "react";
import styles from "./explore-menu.module.css";
import cn from "classnames";
import Link from "next/link";
import mock from "@/constants/mock";

export default function ExploreMenu({
  links = mock.links,
  className,
  onMouseLeave,
}) {
  return (
    <div
      className={cn(styles.explore_menu, className)}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={cn("label-medium", styles.link)}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
