import React, { useEffect } from "react";
import styles from "./Header.module.css";
import Person from "../../assets/SvgIcons/Person.svg";
import heart from "../../assets/SvgIcons/outline.svg";
import cart from "../../assets/SvgIcons/Cart.svg";
import sun from "../../assets/image/sun4.png";
import moon from "../../assets/image/moon4.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Category from "../Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getUserFavorites } from "../../features/FavoriteSlice";

export default function Header() {
  const [theme, setTheme] = useState(true);
  const [popUp, setPopUp] = useState(false);
  const [popUp1, setPopUp1] = useState(false);
  const loading = useSelector((state: RootState) => state.category.loading);
  const token = useSelector((state: RootState) => state.application.token);
  const dispatch = useDispatch();
  const favoriteClothes = useSelector(
    (state: RootState) => state.favorite.clothes
  );
  useEffect(() => {
    dispatch(getUserFavorites());
  }, []);

  function handleMan() {
    setPopUp(!popUp);
    setPopUp1(false);
  }
  function handleWomen() {
    setPopUp1(!popUp1);
    setPopUp(false);
  }
  function handleTheme() {
    setTheme(!theme);
  }
  const favoriteCount = favoriteClothes.cloth
    ? favoriteClothes.cloth.length
    : "";

  return (
    <>
      <div className={styles.header}>
        <div className={styles.blackLine}>
          <div className={styles.navBar}>
            <button
              className={theme ? styles.themeButton : styles.themeButtonDark}
              onClick={handleTheme}
            >
              <div id={styles.slider}>
                <img src={theme ? sun : moon} alt="sun || moon" />
              </div>
            </button>
            <Link className={styles.link} to="#">
              Отслеживание заказа
            </Link>
            <Link className={styles.link} to="#">
              Контакты
            </Link>
          </div>
          <div className={styles.profileBar}>
            <div className={styles.bar1}>
              Eng / $<div className={styles.subBar1}>&or;</div>
            </div>
            <div className={styles.bar2}>
              <img src={Person} alt="person" />
              {token ? (
                <Link to="/profile">Профиль</Link>
              ) : (
                <div className={styles.subBar2}>
                  <Link to="/sign-in">
                    <div>Войти</div>
                  </Link>
                  /
                  <Link to="/sign-up">
                    <div>Регистрация</div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={styles.whiteLine}
          style={
            token
              ? { justifyContent: "space-between" }
              : { justifyContent: "space-evenly" }
          }
        >
          <Link to="/">
            <span className={styles.logo}>B O O M Z I</span>
          </Link>
          <ul className={styles.categoriesBar}>
            <button disabled={loading} onClick={handleMan}>
              Категории
            </button>
            <input
              className={styles.inp}
              type="text"
              placeholder="Search for products..."
            />
            {/* <button disabled={loading} onClick={handleWomen}>Для женщин</button> */}
          </ul>
          {token ? (
            <div className={styles.iconsBar}>
              <Link to="/favorites" className={styles.favoritesBar}>
                <img src={heart} alt="heart" />
                <div className={styles.favoritesIndic}>
                  {favoriteCount === 0 ? "" : favoriteCount}
                </div>
              </Link>
              <Link to="/cart" className={styles.cartBar}>
                <img src={cart} alt="heart" />
                <div className={styles.cartIndic}>222</div>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {popUp ? <Category popUp={setPopUp} /> : ""}
    </>
  );
}
