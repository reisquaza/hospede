import React from "react";
import NavBarComponent from "../../components/NavBar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { PropertyContext } from "../../context/PropertyContext";

function PropertySearch() {
    const { property } = React.useContext(PropertyContext);
    return (
        <div>
            <NavBarComponent />
            <div className="container mx-auto my-20">
                <div className="flex justify-items-center">
                    <div className="w-3/5">
                        <PropertyCard property={property} />
                        <PropertyCard property={property} />
                        <PropertyCard property={property} />
                        <PropertyCard property={property} />
                        <PropertyCard property={property} />
                        <PropertyCard property={property} />
                        <PropertyCard property={property} />
                        <PropertyCard property={property} />
                    </div>
                    <div className="w-1/3 border-2 border-brand1 ml-5 rounded-md p-2">
                        <div className="flex flex-col items-center">
                            <h3>Filtro de pesquisa</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertySearch;
