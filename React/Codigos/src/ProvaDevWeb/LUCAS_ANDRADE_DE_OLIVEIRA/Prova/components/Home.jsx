import React from 'react';

import destinos from '../api/destinos';

function Home() {

    return (
        <>
            <h1>Página Inicial</h1>
            <section>
                <select>
                    <option>Selecione um destino</option>
                    {destinos.map((destino) => {
                        return (
                            <option key={destino.id.toString()}>
                                {destino.name}
                            </option>
                        );
                    })}
                </select>
            </section>
        </>
    );
}

export default Home;