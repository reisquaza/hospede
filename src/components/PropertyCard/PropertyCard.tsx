import React from "react";
import ButtonComponent from "../Button";
import { iPorperty } from "../../interfaces/property.interface";

interface iPropertyCardProps {
    property: iPorperty;
}

function PropertyCard({ property }: iPropertyCardProps) {
    const getReviewsAmount = () => {
        const propertyReviews = property.propertyReviews?.length;

        if (propertyReviews === 1) {
            return "1 Avaliação";
        }

        return propertyReviews + " Avaliações";
    };

    const getPropertyGrade = (propertyGrade: string) => {};

    const findLowestPrice = () => {
        const rooms = property.propertyRooms;

        let lowestPrice = Number.POSITIVE_INFINITY;

        for (let i = 0; i < rooms.length; i++) {
            const room = rooms[i];
            if (room.roomPrice < lowestPrice) {
                lowestPrice = room.roomPrice;
            }
        }

        return lowestPrice;
    };

    return (
        <div className="border-2 border-brand1 flex items-center justify-between p-5 rounded-md mb-5">
            <div className="border-2 border-brand1 w-40 h-31 flex items-center justify-center rounded-md">
                <img
                    src={property.propertyImage}
                    alt={property.propertyName}
                    className="w-40 h-31 rounded-md"
                />
            </div>
            <div className="w-2/4">
                <div>
                    <h3>{property.propertyName}</h3>
                    <p className="text-sm text-grey5">
                        {property.propertyAddress.addressStreet}
                    </p>
                </div>
                <div>tags</div>
                <div>{property.propertyDescription}</div>
            </div>

            <div className="flex flex-col justify-between items-end">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex flex-col items-end mr-2">
                        <h3>Muito bom</h3>
                        <p className="text-sm text-grey5">
                            {getReviewsAmount()}
                        </p>
                    </div>
                    <div className="flex items-center bg-brand1 px-3 py-2 rounded-md">
                        <strong className="text-lg">10</strong>
                    </div>
                </div>

                <strong>
                    {findLowestPrice().toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </strong>

                <ButtonComponent>Ver detalhes</ButtonComponent>
            </div>
        </div>
    );
}

export default PropertyCard;
