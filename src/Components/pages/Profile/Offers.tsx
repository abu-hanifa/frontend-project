import React from "react";
import styles from "./Profile.module.css";
import LeftShevron from "../../../assets/SvgIcons/LeftShevron.svg";
import RightShevron from "../../../assets/SvgIcons/RightShevron.svg";

function Offers() {
  return (
    <div className={styles.offerWrap}>
        <div className={styles.fix}>
          <img src={LeftShevron} alt="Shevron" />
                <div className={styles.offer}>
          Up to 70% Off.Shop our latest sale styles
                </div>
                {/* <div className={styles.offerText}></div> */}
                <img src={RightShevron} alt="Shevron" />
        </div>
    </div>
  );
}

export default Offers;
