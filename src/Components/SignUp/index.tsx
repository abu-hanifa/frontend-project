import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { authSignUp } from "../../features/applicationSlice";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const fetchSignUp = () => {
    dispatch(authSignUp({ name, login, password }));
  };

  return (
    <div>
      <label>
        Имя: <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Логин:
        <input value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>
      <label>
        Пароль:
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={fetchSignUp}>Зарегистрироваться</button>
    </div>
  );
};

export default SignUp;
