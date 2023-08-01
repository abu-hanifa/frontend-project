import React from "react";
import { Link } from "react-router-dom";
import styles from "./faq.module.css";
import minus from "../../../assets/image/Minus.png";
import plus from '../../../assets/image/Plus.png'

const FAQ = () => {
  return (
    <div className={styles.glav}>
      <div className={styles.link}>
        <Link className={styles.contact} to="/contact"><h3>ContactUs</h3></Link>
        <Link className={styles.outlet} to="/contact/outlet"><h3>Outlet stores</h3></Link>
        <Link className={styles.faq} to="/contact/faq"><h3>FAQ</h3></Link>
      </div>
      <div className={styles.rod}>
        <div className={styles.content}>
          <div className={styles.block}>
            <div>Нужно ли мне регистрироваться, чтобы сделать заказ?</div>
            <img src={minus} alt="" />
          </div>
          <p className={styles.Adipiscing}>
            Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
            elementum faucibus dignissim purus. Fusce parturient diam magna
            ullamcorper morbi semper massa ac facilisis.
          </p>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Какое примерное время доставки?</div>
            <img src={plus} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Как я могу оплатить свой заказ?</div>
            <img src={plus} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Могу ли я получить возмещение, если цена изменилась с момента заказа?</div>
            <img src={plus} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Вы возмещаете стоимость доставки, если я что-то верну?</div>
            <img src={plus} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Какие документы будут предоставлены вместе с заказом?</div>
            <img src={plus} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Могу ли я вернуть заказ курьеру, если меня что-то не устраивает?</div>
            <img src={plus} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Что делать, если мой заказ еще не доставлен?</div>
            <img src={plus} alt="" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div>Какова ваша политика возврата?</div>
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
