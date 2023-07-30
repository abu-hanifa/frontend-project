import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { authSignIn } from "../../../features/applicationSlice";
import styles from '../SignUp/sign.module.css'
import { Link } from "react-router-dom";
import log from '../../../assets/image/idle2.png'
import log1 from '../../../assets/image/hover.png'
import log2 from '../../../assets/image/idle.png'
import log3 from '../../../assets/image/idle1.png'

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const fetchSignIn = () => {
    dispatch(authSignIn({ login, password }));
  };

  return (
    <div className={styles.rod}>
      <div className={styles.content}>
        <h1>Войти</h1>
        <p>Войдите в свою учетную запись, используя адрес электронной почты и пароль, указанные при регистрации.</p>
      <label>
        <div className={styles.text}>Логин</div>
        <input placeholder="Введите логин" className={styles.inp} type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>
      <label>
        <div className={styles.text}>Пароль</div>
        <input placeholder="Введите пароль" className={styles.inp} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className={styles.remem}>
        <div className={styles.rem}>
        <input type="checkbox" />
        <div>Запомнить меня</div>
        </div>
        <div className={styles.pas}>Забыли пароль?</div>
      </div>
      <button className={styles.but} onClick={fetchSignIn}>Войти</button>
      <div className={styles.vhod}>У вас нет аккаунта?  <Link className={styles.link} to="/sign-up">
                    <div>Зарегистрироваться</div>
                  </Link></div>
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

export default SignIn;
