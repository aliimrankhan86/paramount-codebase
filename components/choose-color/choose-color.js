import React from "react";
import styles from "./choose-color.module.css";
import cn from "classnames";

export default function ChooseColor({
  colors,
  selectedColor,
  handleColorChange,
}) {
  return (
    <div>
      <div className={cn("paragraph-medium", styles.title)}>
        Color: <span>{selectedColor.name}</span>
      </div>

      <div className={styles.colors}>
        {colors.map((color) => (
          <button
            key={color}
            className={cn(styles.button, {
              [styles.selected]: selectedColor.value === color.value,
            })}
            onClick={() => handleColorChange(color)}
          >
            <div
              className={styles.color}
              style={{
                backgroundColor: color.value,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
