import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  bgColor?: string;
}

function ButtonComponent({ children, bgColor = "brand1" }: iButtonProps) {
  //   const buttonClasses = ;

  return (
    <button className={`text-white font-bold py-2 px-4 bg-${bgColor}`}>
      {children}
    </button>
  );
}

export default ButtonComponent;
