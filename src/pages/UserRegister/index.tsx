import React from "react";
import NavBarComponent from "../../components/NavBar";
import FooterComponent from "../../components/Footer";
import UserForm from "../../components/UserForm/UserForm";
import ButtonComponent from "../../components/Button";

function UserRegister() {
    const [currentState, setCurrentState] = React.useState(0);

    return (
        <div>
            <NavBarComponent />
            <div className="container mx-auto my-20 ">
                <div className="border-2 border-brand1 rounded-md p-2">
                    <h1 className="mb-5">Cadastro de Usuário</h1>

                    <div className="border-2 border-brand1 rounded-md p-2">
                        <h3>Informações pessoais</h3>

                        {currentState === 0 ? (
                            <UserForm setCurrentState={setCurrentState} />
                        ) : (
                            <>
                                <ButtonComponent
                                    onClick={() => setCurrentState(0)}
                                >
                                    Voltar
                                </ButtonComponent>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default UserRegister;
