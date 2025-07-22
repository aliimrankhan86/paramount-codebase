"use client";

import React from "react";
import cn from "classnames";
import styles from "./similar-products.module.css";
import mock from "@/constants/mock";
import ProductCard from "@/components/product-card";
import icons from "@/constants/icons";

export default function SimilarProducts({ products = mock.products }) {
  const [productIndex, setProductIndex] = React.useState(0);
  const productsRef = React.useRef(null);

  const scrollToProduct = (index) => {
    setProductIndex(index);
    const children = productsRef.current?.children;
    children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>
            You might also like
          </div>
          <div className={styles.btns}>
            <button
              className={cn("button-circle-stroke", {
                [styles.disabled]: productIndex === 0,
              })}
              onClick={() => scrollToProduct(0)}
            >
              {icons.ChevronLeft}
            </button>
            <button
              className={cn("button-circle-stroke", {
                [styles.disabled]: productIndex === products.length - 1,
              })}
              onClick={() => scrollToProduct(products.length - 1)}
            >
              {icons.ChevronRight}
            </button>
          </div>
        </div>
        <div className={styles.products} ref={productsRef}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              className={styles.product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
