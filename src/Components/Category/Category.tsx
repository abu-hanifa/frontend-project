import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../features/categorySlice";
import styles from "./category.module.css";
import boys from "../../assets/image/image.png";
import { fetchCategoryCloth } from "../../features/clothSlice";
import { AppDispatch, RootState } from "../../app/store";
import { Link } from "react-router-dom";

function Category({ popUp }) {
  const category = useSelector((state: RootState) => state.category.category);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  function handleClick(id) {
    popUp(false);

    dispatch(fetchCategoryCloth(id));
  }

  return (
    <div className={styles.rod}>
      <div className={styles.content}>
        <div className={styles.category}>
          <h2>Одежда</h2>
          {category.map((item) => {
            if (item.subcategories === "Одежда") {
              return (
                <Link
                  key={item._id}
                  to={`/cloths/${item._id}`}
                  onClick={() => handleClick(item._id)}
                  className={styles.text}
                >
                  {item.name}
                </Link>
              );
            }
          })}
        </div>
        <div className={styles.category}>
          <h2>Обувь</h2>
          {category.map((item) => {
            if (item.subcategories === "Обувь") {
              return (
                <Link
                  key={item._id}
                  to={`/cloths/${item._id}`}
                  onClick={() => handleClick(item._id)}
                  className={styles.text}
                >
                  {item.name}
                </Link>
              );
            }
          })}
        </div>
        <div className={styles.category}>
          <h2>аксессуары</h2>
          {category.map((item) => {
            if (item.subcategories === "аксессуары") {
              return (
                <Link
                  key={item._id}
                  to={`/cloths/${item._id}`}
                  onClick={() => handleClick(item._id)}
                  className={styles.text}
                >
                  {item.name}
                </Link>
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
