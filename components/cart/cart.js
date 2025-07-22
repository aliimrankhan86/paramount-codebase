"use client";

import React from "react";
import cn from "classnames";
import styles from "./cart.module.css";
import mock from "@/constants/mock";
import ProgressBar from "../progress-bar";
import CartItem from "./cart-item";
import useCart from "@/store/useCart";
import { Checkbox, TextArea } from "../ui";
import CloseButton from "../close-button";
import EmptyCart from "./empty-cart";
import icons from "@/constants/icons";
import Checkout from "./checkout";
import { useRouter } from "next/navigation";
import OrderNote from "./order-note";
import Shipping from "./shipping";

export default function Cart({
  className,
  onClose,
  collections = mock.collections,
}) {
  const {
    cartItems,
    giftWrapped,
    toggleGiftWrap,
    totalValue,
    freeShippingThreshold,
    freeShipping,
    clearCart,
  } = useCart();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [orderNote, setOrderNote] = React.useState(false);
  const [shipping, setShipping] = React.useState(false);
  const progress = Math.min(100, (totalValue / freeShippingThreshold) * 100);

  const filteredCollections = collections.filter((collection) => {
    return (
      collection.slug === "headphones" ||
      collection.slug === "lanterns" ||
      collection.slug === "speakers" ||
      collection.slug === "charging-stations"
    );
  });

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      router.push("/");
      setLoading(false);
      clearCart();
    }, 2000);
  };

  console.log("Shipping:", shipping);

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.head}>
        <div className={cn("heading-4", styles.title)}>Cart</div>

        <CloseButton onClose={onClose} />
      </div>

      {cartItems.length > 0 && (
        <div className={styles.items}>
          {freeShipping ? (
            <div className={cn("paragraph-small", styles.progress__title)}>
              {"You've unlocked free shipping, "}
              <span>congratulations 🎉</span>
            </div>
          ) : (
            <div className={cn("paragraph-small", styles.progress__title)}>
              Spend <span>${freeShippingThreshold - totalValue}</span> more to
              reach free shipping!
            </div>
          )}

          <ProgressBar progress={progress} />

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
            {giftWrapped && <TextArea placeholder="Enter your message here" />}
          </div>
        </div>
      )}

      {cartItems.length === 0 && (
        <EmptyCart filteredCollections={filteredCollections} />
      )}

      {orderNote && (
        <div className={styles.overlay}>
          <OrderNote visible={orderNote} onClose={() => setOrderNote(false)} />
        </div>
      )}

      {shipping && (
        <div className={styles.overlay}>
          <Shipping visible={shipping} onClose={() => setShipping(false)} />
        </div>
      )}

      {cartItems.length > 0 && (
        <div className={styles.checkout}>
          <div className={styles.buttons}>
            <button
              className={cn("label-small")}
              onClick={() => setOrderNote(true)}
            >
              {icons.Notes} Order note
            </button>
            <div className={styles.button_divider} />
            <button
              className={cn("label-small")}
              onClick={() => setShipping(true)}
            >
              {icons.DeliveryBox}
              Shipping
            </button>
          </div>

          <Checkout
            totalValue={totalValue}
            freeShipping={freeShipping}
            loading={loading}
            handleCheckout={handleCheckout}
          />
        </div>
      )}
    </div>
  );
}
