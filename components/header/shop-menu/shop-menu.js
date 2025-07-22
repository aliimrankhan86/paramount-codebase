import React from "react";
import styles from "./shop-menu.module.css";
import cn from "classnames";
import Link from "next/link";
import icons from "@/constants/icons";

export default function ShopMenu({ className, onMouseLeave }) {
  const menuItems = [
    {
      title: "Headphones",
      items: [
        { title: "Wireless", href: "" },
        { title: "Studio", href: "" },
        { title: "Sports", href: "" },
      ],
    },
    {
      title: "Speakers",
      items: [
        { title: "Portable", href: "" },
        { title: "Home Audio", href: "" },
        { title: "Speaker Sets", href: "" },
      ],
    },
    {
      title: "Explore",
      items: [
        { title: "About", href: "/about" },
        { title: "Journal", href: "/journal" },
        { title: "FAQs", href: "/faqs" },
        { title: "Contact Us", href: "/contact-us" },
      ],
    },
  ];

  return (
    <div
      className={cn(styles.shop_menu, className)}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.categories}>
            {menuItems.map((category) => (
              <div key={category.title} className={styles.category}>
                <div className={cn("subheading-medium", styles.title)}>
                  {category.title}
                </div>
                <div className={styles.links}>
                  {category.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={cn("label-medium", styles.link)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link href="/shop/all-products" className={styles.footer}>
            <div className={cn("label-medium")}>View all products</div>
            <div>{icons.ArrowRight}</div>
          </Link>
        </div>

        <div className={styles.cards}>
          <div
            className={styles.item}
            style={{ backgroundImage: `url(/images/white-portable.webp)` }}
          >
            <div className={styles.overlay}>
              <div className={cn("subheading-medium", styles.item_title)}>
                Portable charger
              </div>
              <div className={cn("paragraph-small", styles.item_subtitle)}>
                Power up, green style
              </div>
            </div>
          </div>

          <div
            className={styles.item}
            style={{ backgroundImage: `url(/images/eco-tunes-x2.webp)` }}
          >
            <div className={styles.wrapper}>
              <div className={cn("subheading-small", styles.tag)}>
                New arrival
              </div>
              <div
                className={cn("subheading-medium", styles.item_title)}
                style={{ color: "var(--black)" }}
              >
                Eco tunes
              </div>
              <div
                className={cn("paragraph-small", styles.item_subtitle)}
                style={{ color: "var(--black)" }}
              >
                Eco tunes for every mood
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
