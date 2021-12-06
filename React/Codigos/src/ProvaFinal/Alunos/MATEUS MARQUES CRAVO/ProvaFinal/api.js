import axios from "axios";

const api = axios.create({
    baseURL: "https://legis.senado.leg.br/dadosabertos/senador/29"
});

export default api;