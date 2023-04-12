import React from "react";
import ButtonComponent from "../../components/Button";
import FooterComponent from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";

function Home() {
  return (
    <div className="bg-grey0 h-screen w-full my-20">
      <NavBarComponent />
      <div className="container mx-auto">
        <ButtonComponent>Button</ButtonComponent>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Home;
