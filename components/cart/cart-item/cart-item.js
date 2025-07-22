"use client";

import React from "react";
import cn from "classnames";
import styles from "./cart-item.module.css";
import Link from "next/link";
import Counter from "./counter";
import useCart from "@/store/useCart";

export default function CartItem({ product }) {
  const {
    addToCart,
    cartItems,
    removeFromCart,
    removeAllFromCart,
    itemsLoading,
    toggleGiftWrap,
  } = useCart();

  const cartItem = cartItems.find((item) => item.id === product.id);
  const count = cartItem ? cartItem.quantity : 0;
  const loading = itemsLoading[product.id] || false;

  const handleIncrement = () => {
    addToCart(product);
  };

  const handleDecrement = () => {
    removeFromCart(product.id);
  };

  const handleRemove = () => {
    removeAllFromCart(product.id);
  };

  const handleRemoveGiftWrap = () => {
    toggleGiftWrap();
  };

  return (
    <div key={product.id} className={styles.product}>
      <div className={styles.wrapper}>
        <Link href={`/products/${product.slug}`}>
          <img src={product.thumbnail} className={styles.image} />
        </Link>
        <div className={styles.heading}>
          <div className={cn("paragraph-small", styles.brand)}>
            {product.brand}
          </div>
          <Link
            href={`/products/${product.slug}`}
            className={cn("subheading-medium", styles.link)}
          >
            {product.title}
          </Link>
          <div className={cn("paragraph-small")}>${product.price}</div>
        </div>
      </div>

      <div className={styles.controls}>
        <Counter
          product={product}
          count={count}
          loading={loading}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <button
          className={cn("label-small", styles.button)}
          onClick={product.gift ? handleRemoveGiftWrap : handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
