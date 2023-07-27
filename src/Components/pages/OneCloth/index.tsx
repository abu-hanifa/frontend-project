import React, { useEffect } from "react";
import styles from "./OneCloth.module.css";
import imageHoodi from "../../../assets/image/image1.jpg";
import sizeChart from "../../../assets/image/sizeChart.jpg";
import sizess from '../../../assets/image/tablesize.png'
import hanger from "../../../assets/SvgIcons/hanger.svg";
import { useState } from "react";
import Item from "antd/es/list/Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchCloth, getOneCloth } from "../../../features/clothSlice";
import { useParams } from "react-router-dom";

export default function OneCloth() {
  const dispatch = useDispatch()
  const [sizesImage, setSizesImage] = useState(false);
  const cloth = useSelector(state => state.cloth.oneCloth)
  // console.log(cloth);
  const { id } = useParams()

  useEffect(() => {
    dispatch(getOneCloth(id))
  }, [])


  function handleOpen() {
    setSizesImage(!sizesImage);
  }
  function handleAddCloth () {
    
  }


  if (!cloth.name) {
    return <div>loading</div>
  }
  return (
    <div className={styles.oneClothBack}>
      <div>
        <div className={styles.d1}>
          <h1>{cloth.name}</h1>
        </div>
      </div>
      <div className={styles.subBlock}>
        <div className={styles.images}>
          <div className={styles.firstImage}>
            <img src={`http://localhost:4000/${cloth.image[0].path}`} alt="1" />
          </div>
          <img src="" alt="2" />
          <img src="" alt="3" />
          <img src="" alt="4" />
          <img src="" alt="5" />
        </div>
        <div className={styles.clothInfo}>
          <div className={styles.infoBlock1}>
            <div className={styles.discountPrice}>{cloth.price - (cloth.price / 100) * cloth.discount}₽</div>
            {cloth.discount > 0 && <div className={styles.price}>{cloth.price}</div>}
            {/* <div className={styles.price}>{cloth.price}</div> */}
            {cloth.discount > 0 && <div className={styles.discount}>-{cloth.discount}%</div>}
            {/* <div className={styles.discount}>-{cloth.discount}%</div> */}
          </div>
          <div className={styles.infoBlock2}>
            <div>Размер</div>
            <div className={styles.sizes}>
              {cloth.size.map(item => {
                console.log(item);
                return (
                  <div
                    key={item._id}
                    className={item.inStock ? styles.sizeButton : styles.sizeButtonNo}
                    disabled={item.inStock ? true : false}
                  >
                    {item.size}
                  </div>
                )
              })}
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
            <div onClick={handleAddCloth} className={styles.addingCart}>
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
