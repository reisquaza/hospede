import React from "react";
import { useForm } from "react-hook-form";
import UserInput from "../UserInput/UserInput";
import { iUserRequest } from "../../interfaces/user.interfaces";
import ButtonComponent from "../Button";

interface iProps {
    setCurrentState: React.Dispatch<React.SetStateAction<number>>;
}

function UserForm({ setCurrentState }: iProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iUserRequest>();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center">
                <UserInput
                    register={register}
                    title="Primeiro Nome"
                    id="userFirstName"
                    placeholder="Insira seu primeiro nome"
                />
                <UserInput
                    register={register}
                    title="Ultimo Nome"
                    id="userLastName"
                    placeholder="Insira seu ultimo nome"
                />
            </div>

            <div className="flex justify-between items-center">
                <UserInput
                    register={register}
                    title="Email"
                    id="userEmail"
                    type="email"
                    placeholder="Insira seu email"
                />
                <UserInput
                    register={register}
                    title="Confimar Email"
                    id="userEmailConfirm"
                    type="email"
                    placeholder="Insira seu email novamente"
                />
            </div>

            <div className="flex justify-between items-center">
                <UserInput
                    register={register}
                    title="Senha"
                    id="userPassword"
                    type="password"
                    placeholder="Insira sua senha"
                />
                <UserInput
                    register={register}
                    title="Confirmar Senha"
                    id="userPasswordConfirm"
                    type="password"
                    placeholder="Insira sua senha novamente"
                />
            </div>

            <div className="flex justify-between items-center">
                <UserInput
                    register={register}
                    title="CPF"
                    id="userCpf"
                    placeholder="Insira seu CPF"
                    mask="999.999.999-99"
                />
                <UserInput
                    register={register}
                    title="Celular"
                    id="userPhoneNumber"
                    placeholder="Insira seu número de celular"
                    mask="(99) 99999-9999"
                />
            </div>
            <ButtonComponent onClick={() => setCurrentState(1)}>
                Avançar
            </ButtonComponent>
        </form>
    );
}

export default UserForm;
