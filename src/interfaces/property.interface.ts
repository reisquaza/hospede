import { iAddressRequest } from "./user.interfaces";

export interface iProperty extends iPropertyRequest {
    id: string;
    propertyReviews: iPropertyReview[];
    propertyGallery: iPropertyGallery[];
}

export interface iPropertyRequest {
    propertyName: string;
    propertyDescription: string;
    propertyImage: string;
    propertyTags: iPropertyTags[];
    propertyAddress: iAddressRequest;
    propertyRooms: iPropertyRoom[];
    userId: string;
}

export interface iPropertyTags {
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

export interface iPropertyRoom {
    roomName: string;
    roomNumber: number;
    roomCapacity: string;
    roomBedroom: string;
    roomLivingroom: string;
    roomPrice: number;
    roomAvaiable: boolean;
}

export interface iPropertyReview {
    reviewComment?: string;
    reviewUser: string;
    reviewGrade: number;
}

export interface iPropertyGallery {
    galleryImage: string;
}

export interface iSearchFilter {
    propretyName: string;
    propertyImage: string;
    propertyAccommodations: number;
}
