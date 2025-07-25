"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import icons from "@/constants/icons";
import Link from "next/link";
import useCart from "@/store/useCart";
import Summary from "./summary";
import CartItem from "@/components/cart/cart-item";
import { Checkbox, TextArea } from "@/components/ui";
import Shipping from "@/components/cart/shipping";
import mock from "@/constants/mock";

export default function Hero({ cards = mock.cards }) {
  const {
    cartItems,
    giftWrapped,
    toggleGiftWrap,
    totalValue,
    freeShippingThreshold,
    freeShipping,
  } = useCart();

  const onClose = () => {
    console.log("Close");
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h1 className={cn("hero", styles.title)}>Your cart</h1>

          <Link
            href="/shop/all-products"
            className={cn("button-stroke", styles.button)}
          >
            {icons.LeftRotation}
            Continue shopping
          </Link>
        </div>

        <div className={styles.content}>
          <div>
            <div className={styles.cart_items}>
              {cartItems.map((product, index) => (
                <>
                  <CartItem key={product.id} product={product} />
                  {index !== cartItems.length - 1 && (
                    <div className={styles.divider} />
                  )}
                </>
              ))}
            </div>

            <div className={styles.gift_wrapper}>
              <div className={styles.gift_heading}>
                <Checkbox isChecked={giftWrapped} onChange={toggleGiftWrap} />

                <div className={cn("paragraph-small", styles.text)}>
                  For $10.00, gift wrap your entire order!
                </div>
              </div>
              {giftWrapped && (
                <TextArea placeholder="Enter your message here" />
              )}
            </div>

            <Shipping className={styles.shipping} onClose={onClose} />
          </div>

          <div>
            <Summary
              totalValue={totalValue}
              freeShipping={freeShipping}
              freeShippingThreshold={freeShippingThreshold}
            />

            <div className={styles.footer}>
              <div className={cn("label-small", styles.text)}>We accept</div>
              <div className={styles.cards}>
                {cards.map((card, index) => (
                  <div key={index} className={styles.card}>
                    {card.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
