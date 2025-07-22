import React from "react";
import cn from "classnames";
import styles from "./checkout.module.css";
import icons from "@/constants/icons";
import Link from "next/link";

export default function Checkout({ totalValue, loading, handleCheckout }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={cn("paragraph-medium")}>Order discount</div>
        <div className={cn("subheading-small", styles.discount)}>-$100.90</div>
      </div>

      <div className={styles.divider} />

      <div className={styles.wrappers}>
        <div className={styles.wrapper}>
          <div className={cn("paragraph-medium")}>
            Taxes included and shipping
          </div>

          <div className={cn("paragraph-medium")}>Subtotal</div>
        </div>

        <div className={styles.wrapper}>
          <div className={cn("paragraph-medium", styles.title)}>
            Calculated at checkout
          </div>
          <div className={cn("subheading-large", styles.total)}>
            ${totalValue}.00 USD
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={cn("button", styles.button, {
            [styles.checkout]: loading,
          })}
          onClick={handleCheckout}
        >
          {loading ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className={styles.dots}></span>
              <span className={styles.dots}></span>
              <span className={styles.dots}></span>
            </div>
          ) : (
            <>{icons.Lock} Checkout</>
          )}
        </button>

        <Link href="/cart" className={cn("button-stroke", styles.button)}>
          View cart
        </Link>
      </div>
    </div>
  );
}
