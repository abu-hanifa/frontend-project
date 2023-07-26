import React from "react";
import styles from "./NewArrivals.module.css";
import women from "../../assets/image/women.png";
import men from "../../assets/image/men.png";

const ThreeBlocks = () => {
  return (
    <div>
      <div className={styles.ThreeBlock}>
        <img src={women} alt="women" />
        <img src={men} alt="men" />
        <img src={men} alt="men" />
      </div>
    </div>
  );
};

export default ThreeBlocks;
