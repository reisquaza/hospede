export interface iPorperty {}

export interface iPropertyRequest {
    propertyName: string;
    propertyTags: iPorpertyTags[];
    userId: string;
}

export interface iPorpertyTags {
    tagIcon: string;
    tagName: string;
}

export interface iSearchFilter {
    propretyName: string;
    propertyImage: string;
    propertyAccommodations: number;
}

export interface iPropertyContext {
    propertyOptions: iSearchFilter[];
    citiesOptions: iSearchFilter[];
}
