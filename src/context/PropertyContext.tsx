import React from "react";
import {
    iPropertyContext,
    iSearchFilter,
} from "../interfaces/property.interface";

export const PropertyContext = React.createContext<iPropertyContext>(
    {} as iPropertyContext
);

interface iPropertyProviderProps {
    children: React.ReactNode;
}

function PropertyProvider({ children }: iPropertyProviderProps) {
    const propertyOptions: iSearchFilter[] = [
        {
            propretyName: "Hotel",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Apartamento",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Pousadas",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Guesthouses",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Albergues",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Apart-hoteis",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
    ];

    const citiesOptions: iSearchFilter[] = [
        {
            propretyName: "São Paulo",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Rio de Janeiro",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Florianópolis",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Salvador",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Gramado",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
        {
            propretyName: "Fortaleza",
            propertyImage:
                "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            propertyAccommodations: 5,
        },
    ];

    return (
        <PropertyContext.Provider value={{ propertyOptions, citiesOptions }}>
            {children}
        </PropertyContext.Provider>
    );
}

export default PropertyProvider;
