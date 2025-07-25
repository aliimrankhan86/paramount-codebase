import React from "react";
import cn from "classnames";
import styles from "./products.module.css";
import mock from "@/constants/mock";
import ProductCard from "@/components/product-card";
import PromoCard from "@/components/promo-card";

export default function Products({ collection, products = mock.products }) {
  const promoIndex = 3;

  const filteredProducts = products.filter(
    (product) =>
      collection.slug === "all-products" ||
      product.collection === collection.slug
  );

  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.products}>
          {filteredProducts.map((product, index) => (
            <>
              <ProductCard
                key={product.id}
                {...product}
                className={styles.product}
              />
              {index === promoIndex && <PromoCard className={styles.promo} />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
