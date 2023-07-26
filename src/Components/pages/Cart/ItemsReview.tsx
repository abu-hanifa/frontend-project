
import React from 'react'
import styles from './Cart.module.css'
import {Link} from 'react-router-dom'
import Person from '../../../assets/SvgIcons/Person1.svg'
import imgMin from '../../../assets/image/imageMin.png'
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
    <p>Все еще не зарегестрированы? <Link to="/">Зарегестрируйтесь</Link> для быстрого оформления заказа</p>
    </div>
    <div className={styles.line}></div>
    <h3>1. Товары в корзине</h3>
    <div className={styles.clothesContainer}>
      <div className={styles.cloth}>
        <img src={imgMin} alt=""/>
      </div>
    </div>
    </div>
    </>
  )
}

export default ItemsReview
