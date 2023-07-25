import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

function App() {
  const token = useSelector((state: RootState) => state.application.token);
  return (
    <div>
      <Routes>
        {token ? (
          <>
            <Route path="/sign-up" element={<Navigate to="/" />} />
            <Route path="/sign-in" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
