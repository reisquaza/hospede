import React from "react";
import ButtonComponent from "../Button";
import { iPorperty } from "../../interfaces/property.interface";
import { useNavigate } from "react-router-dom";
import PropertyGrade from "../PropertyGrade/PropertyGrade";

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

    const getAveragePropertyGrade = () => {
        const reviews = property.propertyReviews;

        if (reviews.length === 0) {
            return 0;
        }

        const sum = reviews.reduce((total, review) => {
            return total + review.reviewGrade;
        }, 0);

        const average = sum / reviews.length;
        return average;
    };

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

    const navigate = useNavigate();

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
                <PropertyGrade propertyReviews={property.propertyReviews} />

                <strong>
                    {findLowestPrice().toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </strong>

                <ButtonComponent
                    onClick={() => navigate("/property", { replace: true })}
                >
                    Ver detalhes
                </ButtonComponent>
            </div>
        </div>
    );
}

export default PropertyCard;
