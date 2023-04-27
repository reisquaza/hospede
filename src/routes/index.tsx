import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PropertySearch from "../pages/PropertySearch";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import PropertyDetail from "../pages/PropertyDetail";

function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<PropertySearch />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/property" element={<PropertyDetail />} />
        </Routes>
    );
}

export default RoutesMain;
