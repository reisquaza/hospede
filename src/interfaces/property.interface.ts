import { iAddress } from "./user.interfaces";

export interface iPorperty extends iPropertyRequest {
    id: string;
    propertyGrade: number;
}

export interface iPropertyRequest {
    propertyName: string;
    propertyDescription: string;
    propertyImage: string;
    propertyTags: iPorpertyTags[];
    propertyAddress: iAddress;
    propertyRooms: iPropertyRoom[];
    propertyReviews?: iPropertyReview[];
    userId: string;
}

export interface iPorpertyTags {
    tagIcon: string;
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

export interface iSearchFilter {
    propretyName: string;
    propertyImage: string;
    propertyAccommodations: number;
}


