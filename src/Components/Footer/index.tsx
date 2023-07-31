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
          <div>Help</div>
          <div>
            <Link to="/delivery-and-return">Delivery & returns</Link>
          </div>
          <div>
            <Link to="/FAQ">FAQ</Link>
          </div>
          <div>
            <Link to="/track-order">Track order</Link>
          </div>
          <div>
            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
        <div className={styles.container}>
          <div>Shop</div>
          <div>
            <Link to="/new-arrivals">New arrivals</Link>
          </div>
          <div>
            <Link to="/brands">Brands</Link>
          </div>
        </div>
        <div className={styles.container}>
          <div>GET IN TOUCH</div>
          <div className={styles.grayText}>Call: 8 800 555 35 35</div>
          <div className={styles.grayText}>Email: hello@gmail.com</div>
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
