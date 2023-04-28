import { iAddress } from "./user.interfaces";

export interface iPorperty extends iPropertyRequest {
    id: string;
    propertyGrade: number;
    propertyReviews: iPropertyReview[];
    propertyGallery: iPropertyGallery[];
}

export interface iPropertyRequest {
    propertyName: string;
    propertyDescription: string;
    propertyImage: string;
    propertyTags: iPorpertyTags[];
    propertyAddress: iAddress;
    propertyRooms: iPropertyRoom[];
    userId: string;
}

export interface iPorpertyTags {
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
