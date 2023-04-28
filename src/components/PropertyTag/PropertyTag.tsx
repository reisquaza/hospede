import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface iPropertyTag {
    tagIcon:
        | "person-swimming"
        | "spa"
        | "car"
        | "wifi"
        | "utensils"
        | "mug-saucer"
        | "fan"
        | "dumbbell"
        | "water"
        | "martini-glass"
        | "leaf"
        | "jug-detergent"
        | "paw";
    tagName: string;
}

function PropertyTag({ tagIcon, tagName }: iPropertyTag) {
    return (
        <div className="flex items-center p-2 gap-2 border-2 border-brand1 rounded-md">
            <FontAwesomeIcon icon={tagIcon} />
            <p>{tagName}</p>
        </div>
    );
}

export default PropertyTag;
