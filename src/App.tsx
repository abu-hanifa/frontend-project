import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import SignUp from "./Components/pages/SignUp";
import SignIn from "./Components/pages/SignIn";
import Cart from "./Components/pages/Cart";

import "./App.css";

import { RootState } from "./app/store";
import OneCloth from "./Components/pages/OneCloth";

function App() {
  const token = useSelector((state: RootState) => state.application.token);
  return (
    <div>
      <Header />
      <Routes>
        {token ? (
          <>
            <Route path="/sign-up" element={<Navigate to="/" />} />
            <Route path="/sign-in" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/oneCloth' element={<OneCloth />} />
          </>
        ) : (
          <>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />

            <Route path="/" element={<Home />} />
            <Route path='/oneCloth' element={<OneCloth />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
