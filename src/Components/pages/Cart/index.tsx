import React from 'react'
import Complete from './Complete'
import ItemsReview from './ItemsReview'
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <div className={styles.mainContainer}>
      <ItemsReview/>
      <Complete/>
    </div>
  )
}

export default Cart
