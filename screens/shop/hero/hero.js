import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";

import Link from "next/link";
import mock from "@/constants/mock";

export default function Hero({ breadcrumbs = mock.breadcrumbs, collection }) {
  return (
    <div
      className={cn("section", styles.section)}
      style={{
        backgroundImage: `url("${collection.backgroundImage}")`,
      }}
    >
      <div className={cn("container", styles.container)}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <nav aria-label="Breadcrumb">
              <ol className={styles.breadcrumbs}>
                {breadcrumbs.map((item, index) => (
                  <li key={index} className={styles.breadcrumb}>
                    {index < breadcrumbs.length - 1 ? (
                      <Link
                        className={cn("label-medium", styles.link)}
                        href={item.path}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className={cn("label-medium", styles.current_link)}>
                        {collection.title}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <div className={cn("hero", styles.title)}>{collection.title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
