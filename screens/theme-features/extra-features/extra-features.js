import React from "react";
import cn from "classnames";
import styles from "./extra-features.module.css";
import ThemeFeature from "@/components/theme-feature";

const theme_features = [
  {
    id: 1,
    image: "/theme-features/faq.webp",
    title: "Faq section",
    subtitle:
      "Easily solve common queries with our concise FAQ Section, improving user support.",
  },
  {
    id: 2,
    image: "/theme-features/in-banner.webp",
    title: "In-category banner",
    subtitle:
      "Guide and inform your shopping with strategically placed in-category banners.",
  },
  {
    id: 3,
    image: "/theme-features/rich-banner.webp",
    title: "Rich detail banner",
    subtitle:
      "Enhance your order with personalized instructions using our Cart Notes feature.",
  },
];

export default function ExtraFeatures() {
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
