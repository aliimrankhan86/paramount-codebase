import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import Category from "@/components/category";
import mock from "@/constants/mock";

export default function Hero({ collections = mock.collections }) {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("hero", styles.title)}>Collections</div>

        <div className={styles.collections}>
          {collections.map((category) => (
            <Category
              {...category}
              key={category.id}
              className={styles.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
