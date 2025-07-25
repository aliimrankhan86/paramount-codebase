"use client";

import React from "react";
import cn from "classnames";
import styles from "./product-view.module.css";
import icons from "@/constants/icons";
import ChooseColor from "@/components/choose-color";
import ItemsLeft from "@/components/items-left";
import InfoCard from "@/components/info-card";
import Share from "@/components/share";
import NeedHelp from "@/components/need-help";
import Ratings from "@/components/ratings";
import Link from "next/link";
import ImageCells from "@/components/image-cells";
import useCart from "@/store/useCart";

export default function ProductView({
  id,
  brand,
  title,
  description,
  price,
  images,
  colors,
  quantity,
  slug,
  productPage = false,
}) {
  const starsRating = 5;

  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [selectedImage, setSelectedImage] = React.useState(images[0]);
  const { addToCart, loading } = useCart();

  const stars = Array.from({ length: starsRating }, (_, index) => (
    <span key={index}>{icons.Star}</span>
  ));

  const handleColorChange = (color) => setSelectedColor(color);
  const handleImageSelect = (image) => setSelectedImage(image);

  const handleAddToCart = () => {
    addToCart({
      id,
      brand,
      title,
      price,
      color: selectedColor,
      thumbnail: selectedImage.src,
      quantity: 1,
    });
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.col}>
          <img
            src={selectedImage.src}
            alt="Product view"
            className={styles.image}
          />

          <ImageCells
            images={images}
            selectedImage={selectedImage}
            handleImageSelect={handleImageSelect}
          />
        </div>
        <div className={styles.col}>
          <div className={styles.heading}>
            <div className={cn("label-small")}>{brand}</div>
            <div className={cn("heading-2", styles.title)}>{title}</div>
            <div className={styles.wrapper}>
              <div className={cn("paragraph-x-large")}>${price}</div>

              <Ratings stars={stars} />
            </div>
            <div className={cn("paragraph-medium", styles.description)}>
              {description}
            </div>
          </div>

          <ChooseColor
            colors={colors}
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />

          <ItemsLeft quantity={quantity} />

          <button
            className={cn("button", styles.button, {
              [styles.adding]: loading,
            })}
            onClick={handleAddToCart}
          >
            {loading ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={styles.dots}></span>
                <span className={styles.dots}></span>
                <span className={styles.dots}></span>
              </div>
            ) : (
              <>{icons.Plus} Add to cart</>
            )}
          </button>

          <InfoCard />

          <div className={styles.wrapper}>
            <Share />

            <NeedHelp />
          </div>

          {!productPage && <div className={styles.divider} />}

          {!productPage && (
            <Link href={`/products/${slug}`} className={cn(styles.link)}>
              <div className={cn("label-medium")}>View full details</div>
              {icons.ArrowRight}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
