import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../features/categorySlice";
import styles from './category.module.css'
import boys from '../../assets/image/image.png'


function Category() {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <div className={styles.rod}>
        <div className={styles.content}>
      <div className={styles.category}>
        <h2>Одежда</h2>
        {category.map((item) => {
          if (item.subcategories === "Одежда") {
            return (
              <>
                <div className={styles.text}>{item.name}</div>
              </>
            );
          }
        })}
      </div>
      <div className={styles.category}>
        <h2>Обувь</h2>
        {category.map((item) => {
          if (item.subcategories === "Обувь") {
            return (
              <>
                <div className={styles.text}>{item.name}</div>
              </>
            );
          }
        })}
      </div>
      <div className={styles.category}>
        <h2>аксессуары</h2>
        {category.map((item) => {
          if (item.subcategories === "аксессуары") {
            return (
              <>
                <div className={styles.text}>{item.name}</div>
              </>
            );
          }
        })}
      </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.content1}>
        <div className={styles.img}>
            <img src={boys} alt="" />
        </div>
        <h3 className={styles.school}>Back to school. Sale up to 50%</h3>
        <h5 className={styles.offers}>See offers </h5>
      </div>
    </div>
  );
}

export default Category;
