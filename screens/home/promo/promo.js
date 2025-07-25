import React from "react";
import cn from "classnames";
import styles from "./promo.module.css";
import ProductShowcase from "@/components/product-showcase";
import ProductCard from "@/components/product-card";
import mock from "@/constants/mock";

export default function Promo({ products = mock.products }) {
  const product = products.find((product) => product.id === 3);

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("paragraph-medium", styles.subtitle)}>
          Crisp sound, clean earth
        </div>
        <div className={cn("heading-3", styles.title)}>
          Unbox the sound of clarity
        </div>

        <div className={styles.wrapper}>
          <ProductShowcase />

          <ProductCard {...product} />
        </div>
      </div>
    </div>
  );
}
