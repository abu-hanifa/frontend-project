import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <div>
      <label>
        Имя: <input />
      </label>
      <label>
        Логин: <input />
      </label>
      <label>
        Пароль: <input />
      </label>
    </div>
  );
};

export default SignUp;
