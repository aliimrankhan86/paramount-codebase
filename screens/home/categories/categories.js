"use client";

import React from "react";
import cn from "classnames";
import styles from "./services.module.css";
import icons from "@/constants/icons";
import mock from "@/constants/mock";
import Category from "@/components/category";

export default function Services({ collections = mock.collections }) {
  return (
    <div id="services" className={cn("section", styles.section)}>
      <h2 className="heading-2 services-heading">Services</h2>
      <div className={cn("container", styles.container)}>
        <div className={styles.categories}>
          {collections.slice(0, 3).map((category, index) => (
            <Category
              {...category}
              key={category.id}
              className={styles.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
