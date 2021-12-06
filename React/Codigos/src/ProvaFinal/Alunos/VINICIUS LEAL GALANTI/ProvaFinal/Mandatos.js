import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

import api from "./api";


export default function Mandatos() {
    const [mandatoes, setMandatos] = useState();

    useEffect(() => {
        api.get("mandatoes")
            .then((response) => setMandatos( ))
            .catch((error) => console.error("Something went wrong :( \n Error:" + error));
    }, []);

    return (
        <Row>
            {/* TODO */}
        </Row>
    );
}