import React from "react";

function FooterComponent() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-grey0 border-t-2 border-brand1 mt-20">
      <div className="container mx-auto my-10 flex items-center justify-between text-grey10">
        <img src={require("../../assets/images/logo2.png")} alt="Hospede" />
        <div>© 2023 - Todos os direitos reservados.</div>
        <button
          className="py-2 px-4 rounded-md bg-grey1 hover:bg-grey2"
          onClick={handleScrollToTop}
        >
          ^
        </button>
      </div>
    </div>
  );
}

export default FooterComponent;
