import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { getUserFavorites } from "../../../features/favoriteSlice";
import { Link } from "react-router-dom";
import { HeartTwoTone } from "@ant-design/icons";
import styles from './Favorite.module.css'
const Favorite = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favoriteClothes = useSelector(
    (state: RootState) => state.favorite.clothes
  );
  useEffect(() => {
    dispatch(getUserFavorites());
  }, []);
  console.log(favoriteClothes);

  return (
    <div className={styles.cart}>
      {favoriteClothes.map((item) => {
        return (
          <div className={styles.logo}>
            <div className={styles.log}>
              <HeartTwoTone className={styles.love} twoToneColor="#fc0303" />
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
