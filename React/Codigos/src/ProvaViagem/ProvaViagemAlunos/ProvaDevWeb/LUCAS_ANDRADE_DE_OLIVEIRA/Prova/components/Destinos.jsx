import React from 'react';

import destinos from '../api/destinos';

function Destinos() {
    
    return (
        <>
            <h1>Destinos</h1>
            <section>
                {destinos.map((destino) => {
                    return (
                        <article key={destino.id}>
                            <h2>{destino.name}</h2>
                            <div className="images">
                                {destino.pictures.map((image) => {
                                    return (
                                        <img src={image} width={150} height={150} />
                                    );
                                })}
                            </div>
                            <p>{destino.description}</p>
                        </article>
                    );
                })}
            </section>
        </>
    );
}

export default Destinos;
