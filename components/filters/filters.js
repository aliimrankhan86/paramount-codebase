import React from "react";
import cn from "classnames";
import styles from "./filters.module.css";
import CloseButton from "../close-button";
import { Dropdown } from "../ui";
import BrandFilter from "./brand-filter";
import ToggleFilter from "./toggle-filter";
import ColorFilter from "./color-filter";
import PriceFilter from "./price-filter";
import mock from "@/constants/mock";

export default function Filters({ filterConfig = mock.filterConfig, onClose }) {
  const [toggle, setToggle] = React.useState(false);
  const [value, setValue] = React.useState(500);
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleOptionChange = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((optionId) => optionId !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleSelectColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRangeChange = (e) => {
    setValue(Number(e.target.value));
  };

  const renderFilter = (filter) => {
    switch (filter.type) {
      case "dropdown":
        return (
          <Dropdown
            key={filter.id}
            placeholder={filter.placeholder}
            options={filter.options}
            className={styles.dropdown}
          />
        );
      case "brand":
        return (
          <BrandFilter
            key={filter.id}
            title={filter.title}
            options={filter.options}
            selectedOptions={selectedOptions}
            handleOptionChange={handleOptionChange}
          />
        );
      case "in-stock":
        return (
          <ToggleFilter
            key={filter.id}
            title={filter.title}
            toggle={toggle}
            handleToggle={handleToggle}
          />
        );
      case "color":
        return (
          <ColorFilter
            key={filter.id}
            title={filter.title}
            options={filter.options}
            selectedColors={selectedColors}
            handleSelectColor={handleSelectColor}
          />
        );
      case "price":
        return (
          <PriceFilter
            key={filter.id}
            title={filter.title}
            min={filter.min}
            max={filter.max}
            step={filter.step}
            unit={filter.unit}
            value={value}
            handleRangeChange={handleRangeChange}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={cn("heading-4", styles.title)}>Filter and sort</div>

        <CloseButton onClose={onClose} />
      </div>

      <div className={styles.content}>
        <div className={styles.filters}>
          {filterConfig.map((filter) => renderFilter(filter))}
        </div>
      </div>

      <button
        href="/shop/all-products"
        className={cn("button", styles.button)}
        onClick={onClose}
      >
        Apply
      </button>
    </div>
  );
}
