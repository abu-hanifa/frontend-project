import React from "react";
import styles from "./OneCloth.module.css";
import imageHoodi from "../../../assets/image/image1.jpg";
import sizeChart from "../../../assets/image/sizeChart.jpg";
import sizess from '../../../assets/image/tablesize.png'
import hanger from "../../../assets/SvgIcons/hanger.svg";
import { useState } from "react";
import Item from "antd/es/list/Item";

export default function OneCloth() {
  const [sizesImage, setSizesImage] = useState(false);


  function handleOpen() {
    setSizesImage(!sizesImage);
  }
  return (
    <div className={styles.oneClothBack}>
      <div>
        <div className={styles.d1}>
          <h1>basic hooded in pink</h1>
        </div>
      </div>
      <div className={styles.subBlock}>
        <div className={styles.images}>
          <div className={styles.firstImage}>
            <img src={imageHoodi} alt="1" />
          </div>
          <img src="" alt="2" />
          <img src="" alt="3" />
          <img src="" alt="4" />
          <img src="" alt="5" />
        </div>
        <div className={styles.clothInfo}>
          <div className={styles.infoBlock1}>
            <div className={styles.discountPrice}>$15.50</div>
            <div className={styles.price}>$31.00</div>
            <div className={styles.discount}>-***%</div>
          </div>
          <div className={styles.infoBlock2}>
            <div>Размер</div>
            <div className={styles.sizes}>
              <div className={styles.sizeButton}>XS</div>
              <div className={styles.sizeButton}>S</div>
              <div className={styles.sizeButton}>M</div>
              <div className={styles.sizeButton}>L</div>
              <div className={styles.sizeButton}>XL</div>
              <div onClick={handleOpen} className={styles.sizeChart}>
                <img src={hanger} alt="hanger" />
                <span>Таблица размеров</span>
              </div>
            </div>
          </div>
          <div className={styles.infoBlock3}>
            <div className={styles.counterBlock}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className={styles.addingCart}>
              Добавить в корзину
            </div>
            <div className={styles.addFavorite}>
              В избранное
            </div>
          </div>
          <div className={styles.infoBlock4}>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad et modi distinctio autem quae, quisquam placeat eligendi accusantium, cumque magni esse dicta suscipit id labore ipsam aut optio repellat.</div>
            <div>
              <h3>Возврат</h3>
              <div>У вас есть <b>60 дней</b>, чтобы вернуть товар</div>
            </div>
          </div>
          <div className={sizesImage ? styles.sizesImageYes : styles.sizesImageNo}>
            <img
              src={sizess}
              alt="sizeChart"
            />
            <button  onClick={handleOpen} className={styles.offButton}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}
