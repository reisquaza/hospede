import React from "react";
import ButtonComponent from "../Button";
import { useNavigate } from "react-router-dom";

function SearchProperty() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center">
            <div className="bg-grey0 border-2 rounded-md border-brand1 flex flex-col p-4">
                <label htmlFor="City">Indo para</label>
                <select name="" id="City" className="bg-grey0">
                    <option>São Paulo</option>
                    <option value="">São Paulo</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <ButtonComponent
                onClick={() => navigate("/search", { replace: true })}
            >
                Buscar
            </ButtonComponent>
        </div>
    );
}

export default SearchProperty;
