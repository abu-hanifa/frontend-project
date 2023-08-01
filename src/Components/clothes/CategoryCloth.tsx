import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCloth,
  fetchCategoryCloth,
  fetchCloth,
} from "../../features/clothSlice";
import { AppDispatch, RootState } from "../../app/store";
import { useParams, Link } from "react-router-dom";
import styles from "./categoryCloth.module.css";
import { HeartTwoTone } from "@ant-design/icons";
import { addFavorite, getUserFavorites } from "../../features/favoriteSlice";

function CategoryCloth() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const cloth = useSelector((state: RootState) => state.cloth.cloths);
  const user = useSelector((state: RootState) => state.user.user);
  useEffect(() => {
    dispatch(fetchCategoryCloth(id));
  }, []);

  const handleAddFavorite = (clothId) => {
    dispatch(addFavorite(clothId));
  };
  const handleDeleteCloth = (clothId) => {
    dispatch(deleteCloth(clothId));
  };
  return (
    <div className={styles.WrapperCart}>
      <div className={styles.cart}>
        {cloth.map((item) => {
          return (
            <div className={styles.logo}>
              <div className={styles.log}>
                <HeartTwoTone
                  onClick={() => handleAddFavorite(item._id)}
                  className={styles.love}
                  twoToneColor="#fc0303"
                />
              </div>
              <Link to={`/onecloth/${item._id}`}>
                <img
                  className={styles.img}
                  src={`http://localhost:4000/${item.image[0].path}`}
                  alt=""
                />
              </Link>
              <p>{item.name}</p>
              <div className={styles.flexBlock}>
                <div className={styles.priceText}>{item.price} ₽</div>{" "}
                {user.role && user.role === "admin" ? (
                  <div
                    className={styles.deleteText}
                    onClick={() => handleDeleteCloth(item._id)}
                  >
                    Удалить товар
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryCloth;
