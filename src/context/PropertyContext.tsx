import React from "react";
import { iPorperty, iSearchFilter } from "../interfaces/property.interface";

export interface iPropertyContext {
    property: iPorperty;
}

export const PropertyContext = React.createContext<iPropertyContext>(
    {} as iPropertyContext
);

interface iPropertyProviderProps {
    children: React.ReactNode;
}

function PropertyProvider({ children }: iPropertyProviderProps) {
    const property: iPorperty = {
        id: "e6136676-e5e3-4bdc-a737-c6d4e9540859",
        propertyAddress: {
            addressNumber: 11,
            addressStreet: "aaa",
            addressZipCode: "2222-65",
            addressComplement: 24,
        },
        propertyDescription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat ligula nec purus mattis, vel tincidunt elit sodales. Nam justo purus, venenatis quis pretium sed,  hendrerit non neque. Praesent sed fermentum sem.",
        propertyGrade: 10,
        propertyName: "AAAAA",
        propertyReviews: [
            {
                reviewGrade: 10,
                reviewUser: "87bbffef-e4ba-4dec-a0af-f0f80ad57ef0",
            },
        ],
        propertyImage:
            "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
        propertyRooms: [
            {
                roomAvaiable: true,
                roomBedroom: "2",
                roomCapacity: "2",
                roomLivingroom: "1",
                roomName: "AAA",
                roomNumber: 21,
                roomPrice: 2555.75,
            },
        ],
        propertyTags: [{ tagIcon: "aaa", tagName: "bbb" }],
        userId: "87bbffef-e4ba-4dec-a0af-f0f80ad57ef0",
    };

    return (
        <PropertyContext.Provider value={{ property }}>
            {children}
        </PropertyContext.Provider>
    );
}

export default PropertyProvider;
