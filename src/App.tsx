import React from "react";
import Home from "./pages/Home";
import PropertyProvider from "./context/PropertyContext";
import RoutesMain from "./routes";
import SearchFilterProvider from "./context/SearchFilterContext";

function App() {
    return (
        <PropertyProvider>
            <SearchFilterProvider>
                <RoutesMain />
            </SearchFilterProvider>
        </PropertyProvider>
    );
}

export default App;
