import React from 'react'
import styles from './Cart.module.css'

export default function Complete() {
  return (
    <div className={styles.mainSumm}>
    <div className={styles.sumWrapper}>
    <div className={styles.summary}>
      <div className={styles.summaryTitle}>Сумма заказа</div>
      <hr/>
      <div className={styles.summaryItem}>
        <div className={styles.summaryItemText}>Подитог</div>
        <div className={styles.summaryItemPrice}>$ 0</div>
      </div>
      <div className={styles.summaryItem}>
        <div className={styles.summaryItemText}>Стоимость доставки</div>
        <div className={styles.summaryItemPrice}>$ 5.90</div>
      </div>
      <div className={styles.summaryItem}>
        <div className={styles.summaryItemText}>Скидка</div>
        <div className={styles.summaryItemPrice}>$ -5.90</div>
      </div>
      <hr/>
      <div className={styles.summaryItem }>
        <div className={styles.totalSummaryItemText}>Итого сумма</div>
        <div className={styles.totalSummaryItemPrice}>$ 0</div>
      </div>
      
    </div>
    <button className={styles.checkoutButton}>Сделать заказ</button>
    </div>
    
    </div>
  );
}
