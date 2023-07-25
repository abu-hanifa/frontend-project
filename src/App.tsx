import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

import Category from "./Components/Category/Category";

import Home from "./Components/pages/Home";


function App() {
  const token = useSelector((state: RootState) => state.application.token);
  return (
    <div>
      <Routes>
        {token ? (
          <>

            
            <Route path="/sign-up" element={<Navigate to="/" />} />
            <Route path="/sign-in" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />

          

            <Route path="/" element={<Home />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
