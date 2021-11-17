import React from "react";
import { Select } from "@chakra-ui/react"; //Ao invés de utilizar o framework bootstra opei por utilizar o chakra [novas descobertas com React]
import "./style.scss";
function Main() {
    return (
        <div className="container2">
            <div className="select-bg">
                <Select className="select" placeholder="Selecione o seu Destino" size="md">
                    <option value="option1">Belo Horizonte</option>
                    <option value="option2">São Paulo</option>
                    <option value="option3">Rio de Janeiro</option>
                </Select>
            </div>
        </div>
    );
}

export default Main;
