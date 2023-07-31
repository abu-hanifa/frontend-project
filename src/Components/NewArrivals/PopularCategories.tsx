import React from "react";
import styles from "./NewArrivals.module.css";
import tops from "../../assets/image/fut.jpg";
import sho from "../../assets/image/sho.jpg";
import sand from "../../assets/image/sand.jpg";
import kross from "../../assets/image/kross.jpg";
import dji from "../../assets/image/dji.jpg";
import sport from "../../assets/image/sport.jpg";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  return (
    <div className={styles.popularCat}>
      <h2>Популярные категории</h2>
      <div className={styles.category}>
        <Link to={`/cloths/64bfbf156399ae3ace9dc589`}>
          <div className={styles.imgDiv}>
            <img src={tops} alt="футболки" />
            <div>Футболки и топы</div>
          </div>
        </Link>
        <Link to={`/cloths/64bfbf476399ae3ace9dc58f`}>
          <div className={styles.imgDiv}>
            <img src={sho} alt="шорты" />
            <div>Шорты</div>
          </div>
        </Link>
        <Link to={`/cloths/64bfc0276399ae3ace9dc59b`}>
          <div className={styles.imgDiv}>
            <img src={sand} alt="сандали" />
            <div>Сандали</div>
          </div>
        </Link>
        <Link to={`/cloths/64bfc0626399ae3ace9dc5a3`}>
          <div className={styles.imgDiv}>
            <img src={kross} alt="кроссовки" />
            <div>Кроссовки</div>
          </div>
        </Link>
        <Link to={`/cloths/64bfbf396399ae3ace9dc58d`}>
          <div className={styles.imgDiv}>
            <img src={dji} alt="джинсы" />
            <div>Джинсы</div>
          </div>
        </Link>
        <Link to={`/cloths/64bfbf956399ae3ace9dc593`}>
          <div className={styles.imgDiv}>
            <img src={sport} alt="спортивная одежда" />
            <div>Спортивная одежда</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PopularCategories;
