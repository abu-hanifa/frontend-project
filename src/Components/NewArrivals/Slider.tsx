import React from "react";
import styles from "./NewArrivals.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <span className={styles.headerText}>NewArrivals</span>
      <span className={styles.textGray}>
        Ознакомьтесь с нашими последними поступлениями в предстоящем сезоне
      </span>
    </div>
  );
};

export default Slider;
