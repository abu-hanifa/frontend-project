import React from "react";
import styles from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { buyCloth } from "../../../features/cartSlice";

export default function Complete({ total }) {
  const dispatch = useDispatch();

  const handleBuyClothes = () => {
    dispatch(buyCloth());
  };

  return (
    <div className={styles.mainSumm}>
      <div className={styles.sumWrapper}>
        <div className={styles.summary}>
          <div className={styles.summaryTitle}>Сумма заказа</div>
          <hr />
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemText}>Подитог</div>
            <div className={styles.summaryItemPrice}>0</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemText}>Стоимость доставки</div>
            <div className={styles.summaryItemPrice}>0</div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryItemText}>Скидка</div>
            <div className={styles.summaryItemPrice}>0</div>
          </div>
          <hr />
          <div className={styles.summaryItem}>
            <div className={styles.totalSummaryItemText}>Итого сумма</div>
            <div className={styles.totalSummaryItemPrice}>{total} ₽</div>
          </div>
        </div>
        <button className={styles.checkoutButton} onClick={handleBuyClothes}>
          Сделать заказ
        </button>
      </div>
    </div>
  );
}
