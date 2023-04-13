import React from "react";
import FilterCard from "../FIlterCard";
import { iSearchFilter } from "../../interfaces/property.interface";

interface iFilterSectionProps {
    propertyFIlter: iSearchFilter[];
    title: string;
}

function FilterSection({ propertyFIlter, title }: iFilterSectionProps) {
    return (
        <div className="border-2 border-brand1 rounded-md mt-12">
            <h2 className="font-bold text-xl text-grey10 mb-3 pl-6 pt-2">
                {title}
            </h2>
            <div className="px-5 py-2 overflow-x-auto">
                <div className="flex items-center justify-evenly gap-5 w-800 md:w-full">
                    {propertyFIlter.map(
                        ({
                            propertyAccommodations,
                            propertyImage,
                            propretyName,
                        }) => (
                            <FilterCard
                                propertyAccommodations={propertyAccommodations}
                                propertyImage={propertyImage}
                                propretyName={propretyName}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default FilterSection;
