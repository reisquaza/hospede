import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PropertySearch from "../pages/PropertySearch";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";

function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<PropertySearch />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
        </Routes>
    );
}

export default RoutesMain;
