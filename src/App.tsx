import React from "react";
import Home from "./pages/Home";
import PropertyProvider from "./context/PropertyContext";

function App() {
    return (
        <PropertyProvider>
            <Home />
        </PropertyProvider>
    );
}

export default App;
