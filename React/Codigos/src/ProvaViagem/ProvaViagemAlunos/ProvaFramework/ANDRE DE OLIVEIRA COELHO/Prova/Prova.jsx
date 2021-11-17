import React, { useState, useEffect } from "react";
import './style/style.css';


export default function Prova() {
const [count, setCount] = useState(0);

useEffect(() => {
    document.title = 'Voce clicou ${count} vezes';
}, [count]);

return (
    <div className="PROVÌSSIMA">
        <p>Quantidade de NeymaresMessis: {count}</p>
        <buttton onClick={() => setCount(count + 10)}>
            CLIQUE PARA O ENTROSAMENTO SUBIR
        </buttton>
    </div>    
);
}

// npm install react-router-dom@5.3.0
// npm i -g create-react-app
// npx create-react-app my-app
// npm run start
// tentei colocar o css na página toda mas ele rodou em somente uma parte das páginas!!!
