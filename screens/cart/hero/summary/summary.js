import React from "react";
import cn from "classnames";
import styles from "./summary.module.css";
import { TextArea } from "@/components/ui";
import ProgressBar from "@/components/progress-bar";
import icons from "@/constants/icons";
import { useRouter } from "next/navigation";
import useCart from "@/store/useCart";

export default function Summary({
  totalValue,
  freeShipping,
  freeShippingThreshold,
}) {
  const { clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const progress = Math.min(100, (totalValue / freeShippingThreshold) * 100);

  const handleCheckout = () => {
    setLoading(true);

    setTimeout(() => {
      router.push("/");
      setLoading(false);
      clearCart();
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.free_shipping}>
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
      </div>

      <div className={styles.wrapper}>
        <div className={cn("subheading-small")}>Order discount</div>
        <div className={cn("subheading-small", styles.discount)}>-$100.90</div>
      </div>

      <div className={cn("subheading-small", styles.subtotal)}>Subtotal</div>
      <div className={cn("heading-5", styles.price)}>
        ${totalValue.toFixed(2)} USD
      </div>
      <div className={styles.divider} />
      <div className={cn("paragraph-small", styles.taxes)}>
        Taxes included and shipping calculated at checkout.
      </div>

      <TextArea
        placeholder="Add a note to your order"
        className={styles.textarea}
      />

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
    </div>
  );
}
