import React from "react";
import { iProperty } from "../interfaces/property.interface";

export interface iPropertyContext {
    property: iProperty;
}

export const PropertyContext = React.createContext<iPropertyContext>(
    {} as iPropertyContext
);

interface iPropertyProviderProps {
    children: React.ReactNode;
}

function PropertyProvider({ children }: iPropertyProviderProps) {
    const property: iProperty = {
        id: "e6136676-e5e3-4bdc-a737-c6d4e9540859",
        propertyAddress: {
            addressNumber: 11,
            addressStreet: "aaa",
            addressZipCode: "2222-65",
            addressComplement: 24,
        },
        propertyDescription:
            "com vista para o mar e um serviço impecável, o Hotel Bela Vista é o local perfeito para quem busca relaxar em um ambiente sofisticado e acolhedor. Localizado a apenas 10 minutos do centro da cidade, o hotel oferece piscina, spa, restaurante e bar. Com quartos espaçosos e decorados com bom gosto, você pode desfrutar de uma vista panorâmica do mar ou da cidade a partir do conforto da sua cama. Venha desfrutar de um verdadeiro refúgio de luxo no Hotel Bela Vista.",
        propertyName: "Hotel Bela Vista",
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
                roomName: "Rua Hotel Bela Vista",
                roomNumber: 21,
                roomPrice: 2555.75,
            },
        ],
        propertyTags: [
            { tagIcon: "car", tagName: "Estacionamento" },
            { tagIcon: "spa", tagName: "Spa" },
            { tagIcon: "fan", tagName: "Ar-Condicionado" },
            { tagIcon: "paw", tagName: "Pets" },
            { tagIcon: "car", tagName: "Estacionamento" },
            { tagIcon: "spa", tagName: "Spa" },
            { tagIcon: "fan", tagName: "Ar-Condicionado" },
            { tagIcon: "paw", tagName: "Pets" },
            { tagIcon: "car", tagName: "Estacionamento" },
            { tagIcon: "spa", tagName: "Spa" },
            { tagIcon: "paw", tagName: "Pets" },
            { tagIcon: "fan", tagName: "Ar-Condicionado" },
        ],
        propertyGallery: [
            {
                galleryImage:
                    "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            },
            {
                galleryImage:
                    "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            },
            {
                galleryImage:
                    "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            },
            {
                galleryImage:
                    "https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768",
            },
        ],
        userId: "87bbffef-e4ba-4dec-a0af-f0f80ad57ef0",
    };

    return (
        <PropertyContext.Provider value={{ property }}>
            {children}
        </PropertyContext.Provider>
    );
}

export default PropertyProvider;
