import React from "react";
import styles from "./NewCollection.module.css";
import { Link } from "react-router-dom";

const NewCollection = () => {
  return (
    <div className={styles.NewCollection}>
      <div className={styles.content}>
        <div className={styles.collecText}>Новые коллекция</div>
        <div className={styles.headerText}>Мужская одежда 2023</div>
        <Link to="/cloths/64bfbf396399ae3ace9dc58d">
          <button className={styles.shopBut}>Коллекция</button>
        </Link>
      </div>
      <div className={styles.backImage}></div>
    </div>
  );
};

export default NewCollection;
