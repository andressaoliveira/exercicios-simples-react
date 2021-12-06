import axios from "axios";

export default axios.create({
    baseURL: "https://legis.senado.leg.br/dadosabertos/senador/33",
    headers: {
        "Content-type": "application/json"
    }
})