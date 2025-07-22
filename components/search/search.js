"use client";

import React from "react";
import cn from "classnames";
import styles from "./search.module.css";
import icons from "@/constants/icons";
import { TextField } from "../ui";
import mock from "@/constants/mock";
import Link from "next/link";
import SearchItem from "./search-item";
import CloseButton from "../close-button";

export default function Search({
  className,
  onClose,
  collections = mock.collections,
  links = mock.links,
  products = mock.products,
}) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.head}>
        <div className={cn("heading-4", styles.title)}>Search</div>

        <CloseButton onClose={onClose} />
      </div>

      <div className={styles.search_bar}>
        <TextField
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {searchQuery && filteredProducts.length > 0 && (
        <div className={styles.filtered_products}>
          <div className={cn("subheading-medium", styles.text)}>Products</div>
          <div className={styles.divider} />

          <div className={styles.products}>
            {filteredProducts.map((product) => (
              <SearchItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {!searchQuery && (
        <div className={styles.initial}>
          <div className={styles.wrapper}>
            <div>
              <div className={cn("subheading-medium", styles.text)}>
                Popular categories
              </div>

              <div className={styles.divider} />
            </div>

            <div className={styles.links}>
              {collections.map((collection) => (
                <Link
                  key={collection.slug}
                  href={`/shop/${collection.slug}`}
                  className={cn("label-medium", styles.link)}
                >
                  {collection.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.wrapper}>
            <div>
              <div className={cn("subheading-medium", styles.text)}>Info</div>
              <div className={styles.divider} />
            </div>

            <div className={styles.links}>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={cn("label-medium", styles.link)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {searchQuery && filteredProducts.length === 0 && (
        <div className={styles.no_results}>
          {icons.SadFace}
          <div className={cn("heading-5", styles.no_results_title)}>
            No results
          </div>
          <div className={cn("paragraph-medium", styles.no_results_text)}>
            {`No results were found for "${searchQuery}"`}
          </div>
        </div>
      )}

      {searchQuery && filteredProducts.length > 0 && (
        <Link href="/shop/all-products" className={cn("button", styles.button)}>
          See all results
          {icons.ArrowRight}
        </Link>
      )}
    </div>
  );
}
