export interface iUser extends iUserRequest {
    id: string;
}

export interface iUserRequest {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    userEmailConfirm: string;
    userPassword: string;
    userPasswordConfirm: string;
    userCpf: string;
    userPhoneNumber: string;
}

export interface iAddressRequest {
    addressStreet: string;
    addressZipCode: string | number;
    addressComplement?: string | number;
    addressNumber: string | number;
}
