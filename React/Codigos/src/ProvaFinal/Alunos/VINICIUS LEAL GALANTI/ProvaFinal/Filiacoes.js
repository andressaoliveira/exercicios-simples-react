import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import api from "./api";


export default function Filiacoes() {
    const [filiacoes, setFiliacoes] = useState();

    useEffect(() => {
        api.get("filiacoes")
            .then((response) => setFiliacoes())
            .catch((error) => console.error("Something went wrong :( \n Error:" + error));
    }, []);

    return (
        <Row>
            {/* TODO */}
        </Row>
    );
}