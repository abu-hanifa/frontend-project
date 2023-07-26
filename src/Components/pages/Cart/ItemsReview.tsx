import React from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import Person from "../../../assets/SvgIcons/Person1.svg";
import Heart from "../../../assets/SvgIcons/outline.svg";
import imgMin from "../../../assets/image/imageMin.png";
const ItemsReview = () => {
  return (
    <>
      <div className={styles.itContainer}>
        <div className={styles.checkout}>
          <h2>Оформление заказа</h2>
          <Link to="/">Вернуться к покупкам</Link>
        </div>
        <div className={styles.singIn}>
          <img src={Person} alt="person" />
          <p>
            Все еще не зарегестрированы? <Link to="/">Зарегестрируйтесь</Link>{" "}
            для быстрого оформления заказа
          </p>
        </div>
        <div className={styles.line}></div>
        <h3>1. Товары в корзине</h3>
        <div className={styles.clothesContainer}>
          <div className={styles.cloth}>
            <img src={imgMin} alt="clothMin" />
            <div className={styles.clothDescr}>
              <div className={styles.clothName}>
                Basic hooded sweatshirt in pink
              </div>
              <div className={styles.clothProp}>
                <p>
                  Цвет: <span>розовый</span>{" "}
                </p>{" "}
                <p>
                  Размер: <span>S</span>
                </p>
              </div>
            </div>
            <div className={styles.counterBlock}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className={styles.infoBlock1}>
              <div className={styles.discountPrice}>$15.50</div>
              <div className={styles.price}>$31.00</div>
            </div>
            <div className={styles.buttons}>
              <button className={styles.delete}>Удалить</button>
              <div>
                <div>Добавить в</div>
                <img src={Heart} alt="favorite"/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsReview;
