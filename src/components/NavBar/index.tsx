import React from "react";
import ButtonComponent from "../Button";

function NavBarComponent() {
  return (
    <div className="bg-grey0 border-b-2 border-brand1 pb-2 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center ">
        <img src={require("../../assets/images/logo.png")} alt="" />
        <div>
          <ButtonComponent className="bg-grey0 mr-1 hover:border-brand1 text-brand0">
            Cadastro
          </ButtonComponent>
          <ButtonComponent className="ml-1">Login</ButtonComponent>
        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;
