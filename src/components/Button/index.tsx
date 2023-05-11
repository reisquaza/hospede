import React from "react";

interface iButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

function ButtonComponent({ children, className, onClick, type }: iButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`font-bold py-3 px-7 rounded-md border-2 border-brand1 bg-brand1 hover:bg-brand4 hover:border-brand4 ${className}`}
        >
            {children}
        </button>
    );
}

export default ButtonComponent;
