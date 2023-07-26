import React from "react";
import styles from "./Profile.module.css";
import LeftShevron from "../../../assets/SvgIcons/LeftShevron.svg";
import RightShevron from "../../../assets/SvgIcons/RightShevron.svg";

function Offers() {
  return (
    <div className={styles.container}>
      <div className={styles.offer}>
        <img src={LeftShevron} alt="Shevron" />
        Up to 70% Off.
      </div>
      <div className={styles.offerText}>Shop our latest sale styles</div>
      <img src={RightShevron} alt="Shevron" />
    </div>
  );
}

export default Offers;
