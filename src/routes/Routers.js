import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPro from "./../pages/AllPro";
import ProductDetails from "./../pages/ProductDetails";
import Profile from "../pages/profile";
import { AuthProvider } from "../context/AuthContext";

const Routers = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allpro" element={<AllPro />} />
        <Route path="/foods/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AuthProvider>
  );
};

export default Routers;
