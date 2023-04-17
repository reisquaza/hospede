import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PropertySearch from "../pages/PropertySearch";

function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<PropertySearch />} />
        </Routes>
    );
}

export default RoutesMain;
