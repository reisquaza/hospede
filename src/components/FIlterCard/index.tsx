import React from "react";

interface iFilterCardProps {
    propertyImage: string;
    propretyName: string;
    propertyAccommodations: number;
}

function FilterCard({
    propertyImage,
    propretyName,
    propertyAccommodations,
}: iFilterCardProps) {
    return (
        <a href="*" className="w-1/6 md:w-1/5 lg:w-1/6  p-3 mx-5">
            <div className="w-44 h-40 border-2 border-brand1 rounded-md ">
                <div>
                    <img
                        src={`${propertyImage}`}
                        alt={propretyName}
                        className="w-44 h-24"
                    />
                </div>
                <div className="mx-2">
                    <h2 className="font-bold text-xl">{propretyName}</h2>
                    <p className="text-sm text-grey4">
                        {propertyAccommodations} Acomodações
                    </p>
                </div>
            </div>
        </a>
    );
}

export default FilterCard;
