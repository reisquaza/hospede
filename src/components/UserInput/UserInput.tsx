import React from "react";
import { UseFormRegister } from "react-hook-form";
import { iUserRequest } from "../../interfaces/user.interfaces";
import InputMask from "react-input-mask";

interface IProps {
    type?: "text" | "number" | "email" | "password";
    register: UseFormRegister<iUserRequest>;
    title: string;
    placeholder: string;
    mask?: "999.999.999-99" | "(99) 99999-9999";
    id:
        | "userFirstName"
        | "userLastName"
        | "userEmail"
        | "userEmailConfirm"
        | "userPassword"
        | "userPasswordConfirm"
        | "userCpf"
        | "userPhoneNumber";
}

function UserInput({
    id,
    type = "text",
    register,
    title,
    placeholder,
    mask,
}: IProps) {
    return (
        <div className="flex flex-col w-1/3 my-5">
            <label htmlFor={id}>{title}</label>
            {mask ? (
                <InputMask
                    mask={mask}
                    id={id}
                    {...register(id)}
                    placeholder={placeholder}
                    className="bg-grey0 border border-grey2 rounded-md focus:ring-2 focus:outline-none focus-visible:ring-brand1 focus-visible:border-brand1 px-4 py-2 mt-2"
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    {...register(id)}
                    placeholder={placeholder}
                    className="bg-grey0 border border-grey2 rounded-md focus:ring-2 focus:outline-none focus-visible:ring-brand1 focus-visible:border-brand1 px-4 py-2 mt-2"
                />
            )}
        </div>
    );
}

export default UserInput;
