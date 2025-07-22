"use client";

import React from "react";
import cn from "classnames";
import styles from "./spec.module.css";
import icons from "@/constants/icons";

export default function Spec({
  title,
  items,
  isOpen,
  onToggle,
  className,
  ...props
}) {
  return (
    <div
      className={cn(styles.container, className, { [styles.open]: isOpen })}
      {...props}
      onClick={onToggle}
    >
      <div className={styles.heading}>
        <div className={cn("subheading-medium", styles.title)}>{title}</div>

        {icons.Plus}
      </div>

      {isOpen && (
        <div className={cn(styles.items)}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={cn("subheading-large", styles.item_title)}>
                {item.title}
              </div>

              <ul className={styles.list}>
                {item.subItems.map((subItem, index) => (
                  <li
                    key={index}
                    className={cn("paragraph-medium", styles.sub_item)}
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
