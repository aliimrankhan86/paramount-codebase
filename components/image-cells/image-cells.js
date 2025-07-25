import React from "react";
import cn from "classnames";
import styles from "./image-cells.module.css";

export default function ImageCells({
  images,
  selectedImage,
  handleImageSelect,
}) {
  return (
    <div className={cn(styles.container)}>
      {images.map((image, index) => (
        <button
          key={index}
          className={cn(styles.button, {
            [styles.selected]: image.src === selectedImage.src,
          })}
          onClick={() => handleImageSelect(image)}
        >
          <img src={image.src} alt={image.alt} className={styles.image} />
        </button>
      ))}
    </div>
  );
}
