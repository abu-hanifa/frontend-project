import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import SignUp from "./Components/pages/SignUp";
import SignIn from "./Components/pages/SignIn";
import Cart from "./Components/pages/Cart";
import Profile from "./Components/pages/Profile";
import Contacts from './Components/pages/Contacts'

import "./App.css";

import { RootState } from "./app/store";
import OneCloth from "./Components/pages/OneCloth";
import Footer from "./Components/Footer";
import AddCloth from "./Components/pages/AddCloth";
import CategoryCloth from "./Components/clothes/CategoryCloth";
import Favorite from "./Components/pages/Favorite";
import OutletStores from "./Components/pages/Contacts/OutletStores";
import FAQ from "./Components/pages/Contacts/FAQ";

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
            <Route path="/add-cloth" element={<AddCloth />} />
            <Route path="/oneCloth/:id" element={<OneCloth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cloths/:id" element={<CategoryCloth />} />
            <Route path="/onecloth/:id" element={<OneCloth />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/contact/outlet" element={<OutletStores/>}/>
            <Route path="/contact/faq" element={<FAQ/>}/>
            
          </>
        ) : (
          <>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/profile" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/oneCloth/:id" element={<OneCloth />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-cloth" element={<Navigate to="/" />} />
            <Route path="/cloths/:id" element={<CategoryCloth />} />
            <Route path="/onecloth/:id" element={<OneCloth />} />
            <Route path="/favorites" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
