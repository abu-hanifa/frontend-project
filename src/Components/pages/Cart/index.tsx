import React from 'react'
import Complete from './Complete'
import ItemsReview from './ItemsReview'
import styles from './Cart.module.css'
import Shipping from './Shipping'
import {useSelector } from "react-redux";
const Cart = () => {
  const {cart} = useSelector((state) => state.cart.cart);
  const total = cart
  ? cart.reduce((accumulator, item) => {
      return accumulator + item.cloth.price * item.amount;
    }, 0)
  : "";
  return (
    <div className={styles.general}>
    <div className={styles.mainContainer}>
      <ItemsReview total={total}/>
    </div>
    <Complete total={total}/>
    </div>
  )
}

export default Cart
