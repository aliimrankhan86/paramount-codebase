import React from "react";
import cn from "classnames";
import styles from "./main-features.module.css";
import ThemeFeature from "@/components/theme-feature";

const theme_features = [
  {
    id: 1,
    image: "/theme-features/mega-menu.webp",
    title: "Mega menu",
    subtitle:
      "Navigate swiftly through our eco-friendly collection with our streamlined Mega Menu.",
  },
  {
    id: 2,
    image: "/theme-features/popup.webp",
    title: "Popup newsletter",
    subtitle:
      "Sign up to receive exclusive deals and updates on our eco-friendly products. Stay informed!",
  },
  {
    id: 3,
    image: "/theme-features/sticky-cart.webp",
    title: "Sticky cart",
    subtitle:
      "Your selections stay visible and accessible with our floating cart as you browse.",
  },
];

export default function MainFeatures() {
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
