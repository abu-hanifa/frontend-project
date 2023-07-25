import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { authSignIn } from "../../features/applicationSlice";

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const fetchSignIn = () => {
    dispatch(authSignIn({ login, password }));
  };

  return (
    <div>
      <label>
        Логин:
        <input value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>
      <label>
        Пароль:
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={fetchSignIn}>Войти</button>
    </div>
  );
};

export default SignIn;
