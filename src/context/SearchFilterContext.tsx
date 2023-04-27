import React from "react";
import { iSearchFilter } from "../interfaces/property.interface";

export interface iSearchFilterContext {
    propertyOptions: iSearchFilter[];
    citiesOptions: iSearchFilter[];
}

export interface iSearchFilterProviderProps {
    children: React.ReactNode;
}

export const SearchFilterContext = React.createContext<iSearchFilterContext>(
    {} as iSearchFilterContext
);

const SearchFilterProvider = ({ children }: iSearchFilterProviderProps) => {
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
        <SearchFilterContext.Provider
            value={{ propertyOptions, citiesOptions }}
        >
            {children}
        </SearchFilterContext.Provider>
    );
};

export default SearchFilterProvider;
