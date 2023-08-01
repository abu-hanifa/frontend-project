import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.subWrapper}>
        <div className={styles.container}>
          <div>Помощь</div>
          <div>
            <Link to="/delivery-and-return">Доставка и Возврат</Link>
          </div>
          <div>
            <Link to="/FAQ">FAQ</Link>
          </div>
          <div>
            <Link to="/track-order">Трэк заказа</Link>
          </div>
          <div>
            <Link to="/contacts">Контакты</Link>
          </div>
        </div>
        <div className={styles.container}>
          <div>Магазин</div>
          <div>
            <Link to="/new-arrivals">Новые коллекции</Link>
          </div>
          <div>
            <Link to="/brands">Бренды</Link>
          </div>
        </div>
        <div className={styles.container}>
          <div>Связаться</div>
          <div className={styles.grayText}>Номер: 8 800 555 35 35</div>
          <div className={styles.grayText}>Почта: hello@gmail.com</div>
        </div>
      </div>
      <hr />
      <div className={styles.copyright}>
        <div>2023 © All rights reserved</div>
        <div onClick={scroll} className={styles.goToTop}>
          Go to top
        </div>
      </div>
    </div>
  );
};

export default Footer;
