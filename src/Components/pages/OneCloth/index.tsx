import React, { useEffect } from "react";
import styles from "./OneCloth.module.css";
import sizess from "../../../assets/image/tablesize.png";
import hanger from "../../../assets/SvgIcons/hanger.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCloth } from "../../../features/clothSlice";
import { useParams } from "react-router-dom";

export default function OneCloth() {
  const dispatch = useDispatch();
  const cloth = useSelector((state) => state.cloth.oneCloth);
  const [sizesImage, setSizesImage] = useState(false);
  const [img, setImg] = useState();
  // console.log(cloth.image);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneCloth(id));
  }, []);

  function handleOpen() {
    setSizesImage(!sizesImage);
  }

  function handleAddCloth() {}

  function handleImage(path) {
    setImg(path);
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
              src={`http://localhost:4000/${!img ? cloth.image[0].path : img}`}
              alt=""
            />
          </div>

          {/* <img className={styles.img1} src={`http://localhost:4000/${cloth.image[1].path}`} alt="2" />
          <img className={styles.img1} src={`http://localhost:4000/${cloth.image[2].path}`} alt="3" />
          <img className={styles.img1} src={`http://localhost:4000/${cloth.image[3].path}`} alt="4" /> */}
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
                  <div
                    key={item._id}
                    className={
                      item.inStock ? styles.sizeButton : styles.sizeButtonNo
                    }
                    disabled={item.inStock ? true : false}
                  >
                    {item.size}
                  </div>
                );
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
            <div className={styles.addFavorite}>В избранное</div>
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
