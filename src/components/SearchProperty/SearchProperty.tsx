import React from "react";
import ButtonComponent from "../Button";

function SearchProperty() {
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
            <ButtonComponent>Buscar</ButtonComponent>
        </div>
    );
}

export default SearchProperty;
