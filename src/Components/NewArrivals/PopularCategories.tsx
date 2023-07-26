import React from "react";
import styles from "./NewArrivals.module.css";
import tops from "../../assets/image/tops.png";

const PopularCategories = () => {
  return (
    <div className={styles.popularCat}>
      <h2>Popular categories</h2>
      <div className={styles.category}>
        <div>
          <img src={tops} alt="tops" />
          <div>Tops</div>
        </div>
        <div>
          <img src={tops} alt="tops" />
          <div>Tops</div>
        </div>
        <div>
          <img src={tops} alt="tops" />
          <div>Tops</div>
        </div>
        <div>
          <img src={tops} alt="tops" />
          <div>Tops</div>
        </div>
        <div>
          <img src={tops} alt="tops" />
          <div>Tops</div>
        </div>
        <div>
          <img src={tops} alt="tops" />
          <div>Tops</div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
