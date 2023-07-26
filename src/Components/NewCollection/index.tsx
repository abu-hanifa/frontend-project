import React from "react";
import styles from "./NewCollection.module.css";
const NewCollection = () => {
  return (
    <div className={styles.NewCollection}>
      <div className={styles.content}>
        <div className={styles.collecText}>New Collection</div>
        <div className={styles.headerText}>Menswear 2023</div>
        <button className={styles.shopBut}>Shop the menswear</button>
      </div>
      <div className={styles.backImage}></div>
    </div>
  );
};

export default NewCollection;
