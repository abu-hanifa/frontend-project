import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { authSignUp } from "../../../features/applicationSlice";
import styles from "./sign.module.css";
import { Link } from "react-router-dom";
import log from "../../../assets/image/idle2.png";
import log1 from "../../../assets/image/hover.png";
import log2 from "../../../assets/image/idle.png";
import log3 from "../../../assets/image/idle1.png";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const fetchSignUp = () => {
    dispatch(authSignUp({ name, login, password }));
  };

  return (
    <div className={styles.rod}>
      <div className={styles.content}>
        <h1>Зарегистрироваться</h1>
        <p>
          Регистрация занимает меньше минуты, но дает вам полный контроль над
          вашими заказами.
        </p>
        <label>
          <div className={styles.text}>Имя</div>
          <input
            placeholder="Введите имя"
            className={styles.inp}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <div className={styles.text}>Логин</div>
          <input
            placeholder="Введите логин"
            className={styles.inp}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label>
          <div className={styles.text}>Пароль</div>
          <input
            placeholder="Введите пароль"
            className={styles.inp}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.remember}>
            <input type="checkbox" />
            Запомнить меня
          </div>
        </label>
        <Link to="/sign-in">
          <button className={styles.but} onClick={fetchSignUp}>
            Зарегистрироваться
          </button>
        </Link>
        <label>
          <div className={styles.vhod}>
            Уже есть аккаунт?{" "}
            <Link className={styles.link} to="/sign-in">
              <div>Войти</div>
            </Link>
          </div>
        </label>
        <div className={styles.line}></div>
        <div className={styles.orSign}>Или войдите с помощью</div>
        <div className={styles.logo}>
          <img src={log} alt="" />
          <img src={log1} alt="" />
          <img src={log2} alt="" />
          <img src={log3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
