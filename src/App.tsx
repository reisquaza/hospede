import React from "react";
import Home from "./pages/Home";
import PropertyProvider from "./context/PropertyContext";
import RoutesMain from "./routes";

function App() {
    return (
        <PropertyProvider>
            <RoutesMain />
        </PropertyProvider>
    );
}

export default App;
