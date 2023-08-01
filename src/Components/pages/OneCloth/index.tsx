import React, { useEffect } from "react";
import styles from "./OneCloth.module.css";
import sizess from "../../../assets/image/tablesize.png";
import hanger from "../../../assets/SvgIcons/hanger.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCloth } from "../../../features/clothSlice";
import { useParams } from "react-router-dom";
import { addClothInCart, getCart, minusClothInCart } from "../../../features/cartSlice";

export default function OneCloth() {
  const dispatch = useDispatch();
  const cloth = useSelector((state) => state.cloth.oneCloth);
  const [sizesImage, setSizesImage] = useState(false);
  const [img, setImg] = useState()
  const [mySize, setMySize] = useState()
  // console.log(mySize);
  const { id } = useParams()


  useEffect(() => {
    dispatch(getOneCloth(id));
    dispatch(getCart());
  }, []);

  function handleOpen() {
    setSizesImage(!sizesImage);
  }

  function handleChangeSize (size) {
    setMySize(size)
  }
  function handleAddCloth () {
    dispatch(addClothInCart({id, mySize}))
  }
  function handleImage (path) {
    setImg(path)
  }

  if (!cloth.name) {
    return <div>loading</div>;
  }
  return (
    <div className={styles.oneClothBack}>
      <div>
        <div className={styles.d1}>
          <h1>{cloth.name}</h1>
        </div>
      </div>
      <div className={styles.subBlock}>
        <div className={styles.imagesBlock}>
          <div className={styles.images}>
            {cloth.image.map((item) => {
              return (
                <img
                  key={item.filename}
                  onMouseEnter={() => handleImage(item.path)}
                  src={`http://localhost:4000/${item.path}`}
                  alt=""
                />
              );
            })}
          </div>
          <div className={styles.mainImage}>
            <img

              src={`http://localhost:4000/${!img ? cloth.image[0].path: img}`}
              alt="" />
          </div>        


        </div>
        <div className={styles.clothInfo}>
          <div className={styles.infoBlock1}>
            <div className={styles.discountPrice}>
              {cloth.price - (cloth.price / 100) * cloth.discount}₽
            </div>
            {cloth.discount > 0 && (
              <div className={styles.price}>{cloth.price}</div>
            )}
            {/* <div className={styles.price}>{cloth.price}</div> */}
            {cloth.discount > 0 && (
              <div className={styles.discount}>-{cloth.discount}%</div>
            )}
            {/* <div className={styles.discount}>-{cloth.discount}%</div> */}
          </div>
          <div className={styles.infoBlock2}>
            <div>Размер</div>
            <div className={styles.sizes}>
              {cloth.size.map((item) => {
                return (
                  <button
                    onClick={() => handleChangeSize(item.size)}
                    key={item._id}

                    className={`${item.inStock ? styles.sizeButton : styles.sizeButtonNo} ${item.size === mySize && styles.activeSize}`}
                    disabled={item.inStock === 0 ? true : false}
                  >
                    {item.size}
                  </button>
                )

              })}
              <div onClick={handleOpen} className={styles.sizeChart}>
                <img src={hanger} alt="hanger" />
                <span>Таблица размеров</span>
              </div>
            </div>
          </div>
          <div className={styles.infoBlock3}>
            <button onClick={handleAddCloth} className={styles.addingCart}>
              Добавить в корзину

            </button>
            <button className={styles.addFavorite}>
              В избранное
            </button>

          </div>
          <div className={styles.infoBlock4}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
              et modi distinctio autem quae, quisquam placeat eligendi
              accusantium, cumque magni esse dicta suscipit id labore ipsam aut
              optio repellat.
            </div>
            <div>
              <h3>Возврат</h3>
              <div>
                У вас есть <b>60 дней</b>, чтобы вернуть товар
              </div>
            </div>
          </div>
          <div
            className={sizesImage ? styles.sizesImageYes : styles.sizesImageNo}
          >
            <img src={sizess} alt="sizeChart" />
            <button onClick={handleOpen} className={styles.offButton}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
