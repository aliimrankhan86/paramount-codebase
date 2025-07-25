"use client";

import React from "react";
import cn from "classnames";
import styles from "./best-sellers.module.css";
import ProductCard from "@/components/product-card";
import mock from "@/constants/mock";
import icons from "@/constants/icons";

export default function BestSellers({
  tabs = mock.tabs,
  products = mock.products,
}) {
  const [activeTab, setActiveTab] = React.useState("all-products");
  const [productIndex, setProductIndex] = React.useState(0);
  const productsRef = React.useRef(null);

  const handleTab = (slug) => {
    setActiveTab(slug);
  };

  const scrollToProduct = (index) => {
    setProductIndex(index);
    const children = productsRef.current?.children;
    children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const filteredProducts = products.filter(
    (product) =>
      activeTab === "all-products" || product.collection === activeTab
  );

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <div className={cn("heading-3", styles.title)}>Best sellers</div>
          <div className={styles.wrapper}>
            <div className={styles.tabs}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={cn("label-medium", styles.tab, {
                    [styles.active]: activeTab === tab.slug,
                  })}
                  onClick={() => handleTab(tab.slug)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {filteredProducts.length >= 3 && (
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
            )}
          </div>
        </div>

        <div ref={productsRef} className={styles.products}>
          {filteredProducts.map((product) => (
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
