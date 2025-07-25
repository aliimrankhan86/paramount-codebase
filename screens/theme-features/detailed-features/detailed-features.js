import React from "react";
import cn from "classnames";
import styles from "./detailed-features.module.css";
import ThemeFeature from "@/components/theme-feature";

const theme_features = [
  {
    id: 1,
    image: "/theme-features/product.webp",
    title: "Detailed product",
    subtitle:
      "Enhance shopping with clear insights on eco-friendly benefits and product features.",
  },
  {
    id: 2,
    image: "/theme-features/slider.webp",
    title: "Before/after slider",
    subtitle:
      "See the eco-impact with our Before/After slider, highlighting product transformations.",
  },
  {
    id: 3,
    image: "/theme-features/cart-notes.webp",
    title: "Cart notes",
    subtitle:
      "Enhance your order with personalized instructions using our Cart Notes feature.",
  },
  {
    id: 4,
    image: "/theme-features/tabs.webp",
    title: "Product tabs",
    subtitle:
      "Streamline product information with customizable tabs for specs, reviews, and more.",
  },
  {
    id: 5,
    image: "/theme-features/lookbook.webp",
    title: "Lookbook",
    subtitle:
      "Experience our Lookbook for an immersive visual shopping journey.",
  },
  {
    id: 6,
    image: "/theme-features/timer.webp",
    title: "Scrolling text and timer",
    subtitle:
      "Catch limited-time deals with our dynamic scrolling text and countdown timer.",
  },
];

export default function DetailedFeatures() {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.features}>
          {theme_features.map((feature) => (
            <ThemeFeature key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
