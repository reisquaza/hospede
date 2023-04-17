import React from "react";
import FooterComponent from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";
import { PropertyContext } from "../../context/PropertyContext";
import FilterSection from "../../components/FilterSection/FilterSection";
import SearchProperty from "../../components/SearchProperty/SearchProperty";

function Home() {
    const { propertyOptions, citiesOptions } =
        React.useContext(PropertyContext);

    return (
        <div className="bg-grey0 h-screen w-full">
            <NavBarComponent />

            <div className="w-full bg-brand1 h-96">
                <div className="container m-auto">
                    <div className="h-full">
                        <h3>Encontre sua próxima hospedagem</h3>
                    </div>
                </div>
            </div>

            <div className="container mx-auto my-20">
                <SearchProperty />

                <FilterSection
                    propertyFIlter={propertyOptions}
                    title="Explore pelo tipo de propriedade"
                />

                <FilterSection
                    propertyFIlter={citiesOptions}
                    title="Explore pelo Brasil"
                />
            </div>

            <FooterComponent />
        </div>
    );
}

export default Home;
