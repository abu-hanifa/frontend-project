import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import Person from "../../../assets/SvgIcons/Person1.svg";
import Heart from "../../../assets/SvgIcons/outline.svg";
import Paypal from "../../../assets/SvgIcons/paypal.svg";
import imgMin from "../../../assets/image/imageMin.png";
import Shipping from "./Shipping";
import { useDispatch, useSelector } from "react-redux";
import {
  PlusClothInCart,
  getCart,
  minusClothInCart,
  removeClothCart,
} from "../../../features/cartSlice";

const ItemsReview = ({total}) => {
  const {cart} = useSelector((state) => state.cart.cart);
  const status = useSelector((state) => state.cart.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handleRemoveCloth = (id, mySize) => {
    dispatch(removeClothCart({ id, mySize }));
  };
  function handleAddCloth(id, mySize) {
    dispatch(PlusClothInCart({ id, mySize }));
  }
  function handleMinusCloth(id, mySize) {
    dispatch(minusClothInCart({ id, mySize }));
  }

  if (status) {
    return <div>Loading</div>;
  }
  if (!cart) {
    return <div>Loading</div>;
  }

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
          {cart.map((item) => {
            return (
              <div key={item.cloth._id} className={styles.cloth}>
                <img src={`http://localhost:4000/${item.cloth.image[0].path}`} alt="clothMin" />
                <div className={styles.clothDescr}>
                  <div className={styles.clothName}>
                    {item.cloth.name}
                  </div>
                  <div className={styles.clothProp}>
                    <p>
                      Размер: <span>{item.size}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.counterBlock}>
                  <button onClick={() => handleMinusCloth(item.cloth._id, item.size)}>-</button>
                  <span>{item.amount}</span>
                  <button onClick={() => handleAddCloth(item.cloth._id, item.size)}>+</button>
                </div>
                <div className={styles.infoBlock1}>
                  <div className={styles.discountPrice}>{item.cloth.price}</div>
                </div>
                <div className={styles.buttons}>
                  <button onClick={() => handleRemoveCloth(item.cloth._id, item.size)} className={styles.delete}>Удалить</button>
                  <div>
                    <div>Добавить в</div>
                    <img src={Heart} alt="favorite" />
                  </div>
                </div>
              </div>
            );
          })}
          <div className={styles.subTotal}>Сумма покупки : {total} ₽</div>
        </div>
        <h3>2.Информация о доставке</h3>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label htmlFor="firstName" className={styles.inputLabel}>
              Имя:
            </label>
            <input
              type="text"
              id="firstName"
              className={styles.inputField}
              placeholder="Введите имя"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="lastName" className={styles.inputLabel}>
              Фамилия:
            </label>
            <input
              type="text"
              id="lastName"
              className={styles.inputField}
              placeholder="Введите фамилию"
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label htmlFor="Email" className={styles.inputLabel}>
              Email :
            </label>
            <input
              type="text"
              id="Email"
              className={styles.inputField}
              placeholder="Введите Email"
            />
          </div>

          <div className={styles.inputWrapper}>
            <label htmlFor="Phone" className={styles.inputLabel}>
              Телефон:
            </label>
            <input
              type="text"
              id="phone"
              className={styles.inputField}
              placeholder="Ваш номер телефона"
            />
          </div>
        </div>
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" id="confirmCheckbox" />
          <label htmlFor="confirmCheckbox">
            Адрес доставки и оплаты совпадает?
          </label>
        </div>
        <div className={styles.line}></div>
        <h3>3.Метод доставки</h3>

        <div className={styles.deliveryMethods}>
          <div className={styles.deliveryMethod}>
            <input type="radio" name="delivery" id="method2" value="method2" />
            <label htmlFor="method2">Курьерская доставка</label>
            <span className={styles.priceDelivery}>250 руб.</span>
          </div>

          <div className={styles.deliveryMethod}>
            <input type="radio" name="delivery" id="method1" value="method1" />
            <label htmlFor="method1">Самовывоз</label>
            <span className={styles.priceDelivery}>Бесплатно</span>
          </div>

          <div className={styles.deliveryMethod}>
            <input type="radio" name="delivery" id="method3" value="method3" />
            <label htmlFor="method3">Почта России</label>
            <span className={styles.priceDelivery}>200 руб.</span>
          </div>
        </div>
        <div className={styles.line}></div>
        <h3>4.Оплата</h3>

        <div className={styles.cardContainer}>
          <div className={styles.cardWrapper}></div>
          <div className={styles.payMethods}>
            <div className={styles.payMethod}>
              <input type="radio" name="pay" id="pay1" value="pay1" />
              <label htmlFor="pay1">Pay Pal</label>
              <img src={Paypal} alt="Paypal" />
            </div>
            <div className={styles.payMethod}>
              <input type="radio" name="pay" id="cash" value="cash" />
              <label htmlFor="cash">Заплатить при получении</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsReview;
