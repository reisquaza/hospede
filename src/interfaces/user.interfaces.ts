export interface iUser {
    name: string;
}

export interface iAddress {
    addressStreet: string;
    addressZipCode: string | number;
    addressComplement?: string | number;
    addressNumber: string | number;
}
