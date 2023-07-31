import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { deleteFavorite, getUserFavorites } from "../../../features/favoriteSlice";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import styles from "./Favorite.module.css";
const Favorite = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    clothes: { cloth },
    status,
  } = useSelector((state: RootState) => state.favorite);
  useEffect(() => {
    dispatch(getUserFavorites());
  }, []);

  const handleDeleteFavorite = (clothId) => {
    dispatch(deleteFavorite(clothId));
  };

  if (status) {
    return <div className={styles.noCloth}>Loading</div>;
  }
  if (!cloth || cloth.length === 0) {
    return <div className={styles.noCloth}>Нет понравившегося товара</div>;
  }
  return (
    <div className={styles.cart}>
      {cloth.map((item) => {
        return (
          <div key={item._id} className={styles.logo}>
            <div className={styles.log}>
              <HeartTwoTone onClick={() => handleDeleteFavorite(item._id)} className={styles.love} twoToneColor="#fc0303" />
            </div>
            <Link to={`/onecloth/${item._id}`}>
              <img
                className={styles.img}
                src={`http://localhost:4000/${item.image[0].path}`}
                alt=""
              />
              <p>{item.name}</p>
              <h3> ${item.price}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
