import React from 'react'
import Complete from './Complete'
import ItemsReview from './ItemsReview'
import styles from './Cart.module.css'
import Shipping from './Shipping'

const Cart = () => {
  return (
    <div className={styles.general}>
    <div className={styles.mainContainer}>
      <ItemsReview/>
    </div>
    <Complete/>
    </div>
  )
}

export default Cart
