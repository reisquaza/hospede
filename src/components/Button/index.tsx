import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function ButtonComponent({ children, className, onClick }: iButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`font-bold py-3 px-7 rounded-md border-2 border-brand1 bg-brand1 text-grey10 hover:bg-brand4 hover:border-brand4 ${className}`}
    >
      {children},
    </button>
  );
}

export default ButtonComponent;
