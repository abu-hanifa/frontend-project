import React from "react";
import styles from "./NewArrivals.module.css";
import ThreeBlocks from "./ThreeBlocks";
import Slider from "./Slider";
import PopularCategories from "./PopularCategories";

const NewArrivals = () => {
  return (
    <div className={styles.Wrapper}>
      <ThreeBlocks />
      <Slider />
      <PopularCategories />
    </div>
  );
};

export default NewArrivals;
